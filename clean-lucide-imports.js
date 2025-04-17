const fs = require('fs');
const path = require('path');
const glob = require('glob');
const recast = require('recast');
const b = recast.types.builders;

function findUsedIdentifiers(ast) {
    const used = new Set();
    recast.types.visit(ast, {
        visitJSXIdentifier(path) {
            used.add(path.node.name);
            this.traverse(path);
        },
        visitIdentifier(path) {
            used.add(path.node.name);
            this.traverse(path);
        },
    });
    return used;
}

function cleanFile(filePath) {
    const code = fs.readFileSync(filePath, 'utf-8');
    const ast = recast.parse(code, { parser: require("recast/parsers/babel") });

    const used = findUsedIdentifiers(ast);
    let modified = false;

    recast.types.visit(ast, {
        visitImportDeclaration(path) {
            const node = path.node;
            if (node.source.value === 'lucide-react') {
                const newSpecifiers = node.specifiers.filter(spec => {
                    const importedName = spec.imported.name;
                    return used.has(importedName);
                });

                if (newSpecifiers.length === 0) {
                    path.prune(); // Remove the import
                } else if (newSpecifiers.length < node.specifiers.length) {
                    node.specifiers = newSpecifiers;
                    modified = true;
                }
            }
            this.traverse(path);
        },
    });

    if (modified) {
        const output = recast.print(ast).code;
        fs.writeFileSync(filePath, output, 'utf-8');
        console.log(`✅ Cleaned: ${filePath}`);
    }
}

function runCleaner(targetDir = './src') {
    const files = glob.sync(`${targetDir}/**/*.{js,jsx}`, {
        ignore: '**/node_modules/**'
    });

    console.log(`🔍 Scanning ${files.length} files...`);
    files.forEach(cleanFile);
}

runCleaner();

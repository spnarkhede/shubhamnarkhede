const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ICON_SOURCE = 'lucide-react';

function getUsedIdentifiers(content) {
    const jsxMatches = content.match(/<([A-Z][A-Za-z0-9]*)/g) || [];
    return new Set(jsxMatches.map(m => m.slice(1)));
}

function cleanLucideImports(file) {
    const content = fs.readFileSync(file, 'utf8');

    const importRegex = new RegExp(
        `import\\s+\\{([^}]+)\\}\\s+from\\s+['"]${ICON_SOURCE}['"];?`,
        'gm'
    );

    let match;
    let newContent = content;
    let modified = false;

    while ((match = importRegex.exec(content)) !== null) {
        const importStatement = match[0];
        const icons = match[1].split(',').map(i => i.trim());
        const used = getUsedIdentifiers(content);

        const stillUsed = icons.filter(icon => used.has(icon));
        if (stillUsed.length === 0) {
            newContent = newContent.replace(importStatement, '');
        } else {
            const newImport = `import { ${stillUsed.join(', ')} } from '${ICON_SOURCE}';`;
            newContent = newContent.replace(importStatement, newImport);
        }

        modified = true;
    }

    if (modified && newContent !== content) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`✅ Cleaned: ${file}`);
    }
}

function runCleanup(dir = './src') {
    const files = glob.sync(`${dir}/**/*.{js,jsx}`, { ignore: '**/node_modules/**' });

    console.log(`🔍 Scanning ${files.length} JS files...`);

    files.forEach(cleanLucideImports);
}

runCleanup();

import type { Config, ThemeConfig } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import type * as Preset from '@docusaurus/preset-classic';
import * as ciInfo from 'ci-info';


const config: Config = {
  title: 'Shubham Narkhede | Portfolio',
  tagline: 'DevOps Engineer & Full Stack Developer',
  favicon: 'img/favicon.ico',
  url: 'https://shubhamnarkhede.vercel.app',
  baseUrl: ciInfo.GITHUB_ACTIONS ? '/portfolio/' : '/',
  organizationName: 'spnarkhede',
  projectName: 'shubhamnarkhede',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/spnarkhede/shubhamnarkhede',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          onUntruncatedBlogPosts: 'ignore',
          editUrl: 'https://github.com/spnarkhede/shubhamnarkhede/tree/main/blog',
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 10,
          postsPerPage: 5,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        language: ['en', 'de'],
        hashed: true,
      },
    ],
  ],

  themeConfig: {
    respectPrefersColorScheme: true,
    image: 'img/social-card.png',
    metadata: [
      {name: 'keywords', content: 'devops, software development, portfolio, full stack, ui/ux, professional'},
      {name: 'description', content: 'Professional portfolio of Shubham Narkhede, DevOps Engineer and Full Stack Developer with expertise in UI/UX design and cloud technologies.'},
    ],
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Shubham Narkhede',
      logo: { alt: 'Shubham Narkhede', src: 'img/profile.png' },
      items: [
        { to: '/navigation-guide', label: 'Home', position: 'left' },
        { to: '/intro', label: 'About Me', position: 'left' },
        { to: '/Portfolio/Resume', label: 'Resume', position: 'left' },
        { to: '/books', label: 'Books', position: 'left' },
        { to: '/Portfolio/Projects', label: 'Projects', position: 'left' },
        { to: '/Portfolio/Experience', label: 'Experience', position: 'left' },
        { to: '/articles', label: 'Tech Articles', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/contact', label: 'Contact', position: 'right' },
        { href: 'https://github.com/spnarkhede', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Portfolio',
          items: [
            { label: 'About Me', to: '/intro' },
            { label: 'Resume', to: '/Portfolio/Resume' },
            { label: 'Books', to: '/Portfolio/Books' },
            { label: 'Projects', to: '/Portfolio/Projects' },
            { label: 'Experience', to: '/Portfolio/Experience' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'LinkedIn', href: 'https://linkedin.com/in/spnarkhede' },
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/users/spnarkhede' },
            { label: 'Twitter', href: 'https://twitter.com/snarkhede1996' },
            { label: 'Email', href: 'mailto:shubhamnarkhede@gmail.com' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/spnarkhede' },
            { label: 'Tech Articles', to: '/ComputerScience' },
            { label: 'Contact', to: '/contact' },
          ],
        },
      ],
      copyright: `Copyright © 2018-${new Date().getFullYear()} Shubham Narkhede. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'kotlin', 'bash', 'typescript', 'scss'],
    },
  } as ThemeConfig,

};

export default config;

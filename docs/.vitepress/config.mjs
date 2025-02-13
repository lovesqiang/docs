import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "lovesqiang",
  // description是SEO要用的
  description: "A VitePress Site",
  base: "/docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { 
        text: 'Home',
        items: [
          { text:'首页', link: '/' },
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'Runtime API 示例', link: '/api-examples' }
        ]

      },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '其他', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer:
      {copyright : "Copyright@ 2025 lovesqiang"}
    
  }
})

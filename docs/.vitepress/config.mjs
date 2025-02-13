import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "lovesqiang",
  // description是SEO要用的
  description: "A VitePress Site",
  base: '/docs/',
  lastUpdated: true, //首次配置不会立即生效，需git提交后爬取时间戳
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Home',
        items: [
          { text: '首页', link: '/' },
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'Runtime API 示例', link: '/api-examples' }
        ]

      },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'guide', link: '/guide/' },
      // { text: '后端', link: '/backend/java' }
    ],

    // sidebar: [
    //   {
    //     text: 'guide',
    //     items: [
    //       { text: 'git', link: '/guide/Git.md' },
    //       { text: 'index1', link: '/guide/index1.md' },
    //     ]
    //   }
    // ],
    sidebar: {
      "/guide/": set_sidebar("/docs/guide/"),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 大纲
    outline: {
      level: [1, 4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },

    //上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },

    footer:
    {
      message: 'Released under the MIT License.',
      // copyright: 'Copyright © 2019-2023 lovesqiang',
      // 自动更新时间
      copyright: `Copyright © 2022-${new Date().getFullYear()} lovesqiang`,
    },

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

  },

  //markdown配置
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    //行号显示
    lineNumbers: true, //false关闭
  },


  head: [
    ['meta', {
      name: 'referrer',
      content: 'no-referrer'
    }]
  ]
})

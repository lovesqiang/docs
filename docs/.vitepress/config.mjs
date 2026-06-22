import { defineConfig } from "vitepress";
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: "lovesqiang",
    description: "A Docs Site",
    head: [
        ["link", { rel: "icon", href: "../public/favicon.ico" }],
        [
            "meta",
            {
                name: "referrer",
                content: "no-referrer",
            },
        ],
    ],
    base: "/docs/",
    lastUpdated: true,
    themeConfig: {
        logo: "",
        nav: [

            { text: "前端导航", link: "/frontIndex.md" },
            { text: "guide", link: "/guide/" },
            {
                text: "Dropdown Menu",
                items: [
                    { text: "Item A", link: "/item-1" },
                    { text: "Item B", link: "/item-2" },
                    { text: "Item C", items: [{ text: "aaa", link: "/cc" }] },
                ],
            },
            {
                text: "Merchandise",
                link: "https://www.thegithubshop.com/",
                target: "_self",
                rel: "sponsored",
            },
        ],
        sidebar: {
            "/guide/": set_sidebar("/docs/guide/"),
        },

        socialLinks: [{ icon: "github", link: "https://github.com/lovesqiang" }],


        // 大纲
        outline: {
            level: [1, 4], // 显示2-4级标题
            // level: 'deep', // 显示2-6级标题
            label: "当前页大纲", // 文字显示
        },

        // 编辑链接
        editLink: {
            pattern: "https://github.com/lovesqiang/docs/blob/main/docs/:path",
            text: "Edit this page on GitHub",
        },

        //最后更新时间
        lastUpdated: {
            text: "最后更新于",
            formatOptions: {
                dateStyle: "short", // 可选值full、long、medium、short
                timeStyle: "medium", // 可选值full、long、medium、short
            },
        },

        // footer: {
        //     message: "Released under the MIT License.",
        //     // 自动更新时间
        //     copyright: `Copyright © 2022-${new Date().getFullYear()} lovesqiang`,
        // },


        //本地搜索
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                },
                            },
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
            lazyLoading: true,
        },
        //行号显示
        lineNumbers: true, //false关闭
    },

    // 自动注册组件
    vite: {
        vue: {
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag === 'HomeHero'
                }
            }
        }
    }
});

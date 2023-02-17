export default {
  // 标题
  title: "Vitepress",
  description: "Just playing around.",
  //   srcDir: "./docs",
  //   生成干净的Url不带.html
  cleanUrls: true,
  //   自定义映射，修改url
  rewrites: {
    "packages/pkg-a/src/pkg-a-code.md": "pkg-a-code.md",
  },
  themeConfig: {
    lastUpdated: true,
    // 网站标题
    siteTitle: "My Custom Title",
    // 网站徽标
    logo: "/my-logo.svg",
    // 隐藏标题
    siteTitle: false,
    // 导航链接
    nav: [
      { text: "index", link: "/" },
      { text: "Guide", link: "/guide/" },
      {
        text: "guide",
        link: "/guide/getting-started",
        activeMatch: "/guide/getting-started",
      },
      {
        text: "Dropdown Menu",
        items: [
          {
            text: "Guide",

            items: [{ text: "Guide A Item A", link: "..." }],
          },
          { text: "Configs", link: "/configs" },
          { text: "Changelog", link: "https://github.com/..." },
        ],
      },
    ],

    // 侧边栏
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      "/guide/": [
        {
          text: "Guide",
          //   可折叠侧边栏
          collapsed: false,
          items: [
            { text: "Index", link: "/guide/" },
            { text: "One", link: "/guide/one" },
            { text: "Two", link: "/guide/two" },
          ],
        },
      ],

      // This sidebar gets displayed when a user
      // is on `config` directory.
      "/config/": [
        {
          text: "Config",
          items: [
            { text: "Index", link: "/config/" },
            { text: "Three", link: "/config/three" },
            { text: "Four", link: "/config/four" },
          ],
        },
      ],
    },

    editLink: {
      // 编辑按钮
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      // 编辑按钮文本
      text: "",
    },
  },
};
// console.log(srcDir);

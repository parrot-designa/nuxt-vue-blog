module.exports = {
  title: "宝哥博客",
  description: "Just playing around",
  themeConfig: {
    // sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: [
      {
        title: "JS基础",
        collapsable: true,
        children: [
          {
            title: "ES6",
            collapsable: true,
            children: ["jsbase/es6/Map"],
          },
        ],
      },
      {
        title: "Leetcode",
        collapsable: true,
        children: [
          {
            title: "栈",
            collapsable: true,
            children: ["leetcode/stack/20"],
          },
        ],
      },
    ],
  },
};

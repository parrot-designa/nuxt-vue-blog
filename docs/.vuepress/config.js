module.exports = {
  title: "宝哥博客",
  description: "Just playing around",
  themeConfig: {
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Guide", link: "/guide/" },
    //   { text: "External", link: "https://google.com" },
    //   {
    //     text: "Languages",
    //     items: [
    //       { text: "Chinese", link: "/language/chinese" },
    //       { text: "Japanese", link: "/language/japanese" },
    //     ],
    //   },
    // ],
    sidebar: [
      {
        title: "面试题",
        collapsable: true,
        children: [
          {
            title: "面试题",
            collapsable: true,
            children: ["/"],
          },
        ],
      },
    ],
  },
};

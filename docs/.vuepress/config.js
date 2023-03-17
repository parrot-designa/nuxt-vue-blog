module.exports = {
  title: "宝哥博客",
  description: "Just playing around",
  themeConfig: {
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: [
      {
        title: "面试题",
        collapsable: true,
        children: [
          {
            title: "JS",
            collapsable: true,
            children: [
              "interview/js/datatype",
              "interview/js/valuetype",
              "interview/js/scope",
              "interview/js/closure",
              "interview/js/prototype",
              "interview/js/bdom",
              "interview/js/ajax",
              "interview/js/event",
              "interview/js/this",
              "interview/js/code",
            ],
          },
          {
            title: "ql面试题",
            collapsable: true,
            children: [
              "interview/ql/1",
              "interview/ql/2",
              "interview/ql/3",
              "interview/ql/4",
              "interview/ql/5",
            ],
          },
        ],
      },
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
          {
            title: "哈希表",
            collapsable: true,
            children: ["leetcode/hashmap/389"],
          },
          {
            title: "树",
            collapsable: true,
            children: ["leetcode/tree/100"],
          },
        ],
      },
    ],
  },
};

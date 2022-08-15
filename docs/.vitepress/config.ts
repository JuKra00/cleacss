module.exports = {
  title: "cleacss",
  description: "A minimal framework for css enthusiasts",
  lang: "en",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Playground", link: "/playground" },
      {
        text: "Release Notes",
        link: "https://github.com/jukra00/cleacss/releases",
      },
    ],
    sidebar: {
      "/guide": [
        {
          text: "Overview",
          collapsable: true,
          link: "/guide/",
        },
        {
          text: "Layout",
          collapsable: true,
          children: [
            { text: "Section", link: "/guide/layout/section" },
            { text: "Grid", link: "/guide/layout/grid" },
            { text: "Columns", link: "/guide/layout/columns" },
          ],
        },
        {
          text: "Elements",
          collapsable: true,
          children: [
            { text: "Button", link: "/guide/elements/button" },
            { text: "Input", link: "/guide/elements/input" },
            { text: "Title", link: "/guide/elements/title" },
            { text: "Text", link: "/guide/elements/text" },
          ],
        },
        {
          text: "Utilities",
          collapsable: true,
          children: [
            { text: "Aspect Ratio", link: "/guide/utilities/aspect-ratio" },
            { text: "Background", link: "/guide/utilities/background" },
            { text: "Spacing", link: "/guide/utilities/spacing" },
            { text: "Visibility", link: "/guide/utilities/visibility" },
          ],
        },
        {
          text: "Variables",
          collapsable: true,
          children: [
            { text: "Sizes", link: "/guide/variables/sizes" },
            { text: "Colors", link: "/guide/variables/colors" },
            { text: "Content", link: "/guide/variables/content" },
          ],
        },
      ],
    },
  },
};

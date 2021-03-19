export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605488a11a49b900b0ea8180",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-drxmkzgx",
                  apiId: "20d1759b-f32c-454c-b84e-08449d40531e",
                },
                {
                  buildHookId: "605488a1675df900c1b5aa79",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-p1593u85",
                  apiId: "338d9021-c8f3-4ace-a2e4-12fa20477e68",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Ghost543/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-p1593u85.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

// theme.config.js
export default {
  repository: "https://github.com/Deepdesk/deepdesk.github.io", // project repo TODO
  docsRepository: "https://github.com/Deepdesk/deepdesk.github.io", // docs repo
  branch: "main", // branch of docs
  path: "/", // path of docs
  titleSuffix: " – Deepdesk",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: "2021 © Deepdesk.",
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Deepdesk</span>
      <span>Docs</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Deepdesk - Contact Center AI" />
      <meta name="og:title" content="Deepdesk - Contact Center AI" />
    </>
  ),
};

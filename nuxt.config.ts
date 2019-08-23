export default {
  env: {},
  head: {
    htmlAttrs: {
      lang: "ja",
      prefix:
        "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/websaite#"
    },
    title: "武器瓶のセリフから第何回か検索するやつ",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "武器瓶のセリフが第何回のセリフかを検索するやつです。"
      },
      {
        name: "apple-mobile-web-app-title",
        content: "武器瓶のセリフから第何回か検索するやつ"
      },
      {
        name: "application-name",
        content: "武器瓶のセリフから第何回か検索するやつ"
      },
      {
        name: "msapplication-TileColor",
        content: "#da532c"
      },
      {
        name: "theme-color",
        content: "#ffffff"
      },
      { property: "og:url", content: "https://bukibin-search.com/" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "武器瓶のセリフから第何回か検索するやつ"
      },
      {
        property: "og:description",
        content: "武器瓶のセリフが第何回のセリフかを検索するやつです。"
      },
      {
        property: "og:site_name",
        content: "武器瓶のセリフから第何回か検索するやつ"
      },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@stray7" }
    ],
    link: [
      {
        rel: "apple-touch-icon",
        size: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        size: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        size: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      {
        rel: "stylesheet",
        href:
          "https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,700"
      }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {},
  modules: ["@nuxtjs/axios", "nuxt-buefy", "@nuxtjs/pwa"],
  axios: {}
};

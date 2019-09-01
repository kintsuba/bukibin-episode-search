export default {
  env: {},
  head: {
    htmlAttrs: {
      lang: "ja",
      prefix: "og: http://ogp.me/ns# website: http://ogp.me/ns/website#"
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
        hid: "apple-mobile-web-app-title",
        name: "apple-mobile-web-app-title",
        content: "武器瓶のセリフから第何回か検索するやつ"
      },
      {
        hid: "application-name",
        name: "application-name",
        content: "武器瓶のセリフから第何回か検索するやつ"
      },
      {
        hid: "msapplication-TileColor",
        name: "msapplication-TileColor",
        content: "#da532c"
      },
      {
        hid: "theme-color",
        name: "theme-color",
        content: "#ffffff"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://bukibin-search.com/"
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:title",
        property: "og:title",
        content: "武器瓶のセリフから第何回か検索するやつ"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "武器瓶のセリフが第何回のセリフかを検索するやつです。"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "武器瓶のセリフから第何回か検索するやつ"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/android-chrome-512x512.png"
      },
      { hid: "twitter:card", name: "twitter:card", content: "summary" },
      { hid: "twitter:site", name: "twitter:site", content: "@stray7" }
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
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/earlyaccess/nicomoji.css"
      }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {},
  modules: ["@nuxtjs/axios", "nuxt-buefy", "@nuxtjs/pwa", "@nuxtjs/sitemap"],
  axios: {},
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://example.com"
  }
};

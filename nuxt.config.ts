export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "format-detection", content: "telephone=no" },
        { name: "twitter:site", content: "@xanzhu1" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: light)",
          content: "#fff",
        },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: dark)",
          content: "#000",
        },
      ],
      noscript: [{ children: "Javascript is required" }],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
          sizes: "any",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
          sizes: "32x32",
          media: "(prefers-color-scheme:light)",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-dark.png",
          sizes: "32x32",
          media: "(prefers-color-scheme:dark)",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-180-dark.png",
        },
        { rel: "mask-icon", href: "/favicon.svg", color: "#FDFDFD" },
      ],
    },
  },
  css: ["virtual:windi.css"],
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "nuxt-windicss",
    "@nuxt/image-edge",
    "@nuxtjs/color-mode",
    "nuxt-security",
  ],
  security: {
    hidePoweredBy: true,
    headers: {
      contentSecurityPolicy: {
        value: {
          "base-uri": ["'self'"],
          "font-src": ["'self'", "https:", "data:"],
          "form-action": ["'self'"],
          "frame-ancestors": ["'self'"],
          "img-src": [
            "'self'",
            "data:",
            "https://images.unsplash.com/",
            "https://source.unsplash.com",
            "https://res.cloudinary.com",
          ],
          "object-src": ["'none'"],
          "script-src-attr": ["'none'"],
          "style-src": ["'self'", "https:", "'unsafe-inline'"],
          "upgrade-insecure-requests": true,
        },
        route: "/**",
      },
    },
  },
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "mi",
        iso: "mi",
        name: "Māori",
        file: "mi.json",
      },
      {
        code: "ko",
        iso: "ko",
        name: "한국어",
        file: "ko.json",
      },
      {
        code: "zh",
        iso: "zh",
        name: "中文",
        file: "zh.json",
      },
    ],
    baseUrl: process.env.BASE_URL,
    defaultLocale: "en",
    strategy: "prefix",
    langDir: "i18n",
    // lazy: true,
    detectBrowserLanguage: {
      // Detect language based on root
      useCookie: true,
      cookieKey: "i18n_redirected", // Custom cookie name
      redirectOn: "root",
    },
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/xanzhu/image/upload/",
    },
  },
  colorMode: {
    classSuffix: "",
  },
  nitro: {
    preset: "vercel",
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({ 
    modules: ["@nuxtjs/tailwindcss"],
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: "123",
        // Keys within public, will be also exposed to the client-side
        public: {
          apiBase: process.env.API_BASE || "default_api_url",
          otherUrl: process.env.OTHER_URL || "default_other_url"
        }
    },
    app: {
      head: {
        title: 'Dojo Bazar',
        meta: [
          { name: 'description', content: 'Buy various thing...'}
        ],
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
        ]
      }
    }
});

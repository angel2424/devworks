import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
    ssr: false,
    nitro: {
        preset: "static",
    },
    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    },
    site: {
        url: "https://devworksstudio.site",
    },
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    css: ["~/assets/css/global.css"],
    vite: {
        plugins: [tailwindcss()],
        css: {
            devSourcemap: true,
        },
    },
    icon: {
        mode: "css",
        cssLayer: "base",
    },
    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxt/image",
        "shadcn-nuxt",
        "nuxt-gtag",
        "@nuxtjs/sitemap",
    ],
    image: {
        domains: ['localhost'],
        dir: 'public',
        ipx: {
            dir: 'public',
        },
        providers: {
            static: {
                provider: 'ipx',
                options: {
                    dir: 'public',
                },
            },
        },
    },
    gtag: {
        id: "G-TZPJKZ4ZJH",
        config: {
            anonymize_ip: true,
        },
    },
})

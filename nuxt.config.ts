import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    css: [
        'primevue/resources/primevue.min.css',
        'primevue/resources/themes/lara-light-blue/theme.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "~/assets/scss/global.scss";`,
                },
            },
            //   postcss: {
            //     plugins: [
            //       {
            //         postcssPlugin: 'internal:charset-removal',
            //         AtRule: {
            //           charset: (atRule) => {
            //             if (atRule.name === 'charset') {
            //               atRule.remove();
            //             }
            //           }
            //         }
            //       }
            //     ]
            //   }
        },
    },
    components: true,
    build: {
        transpile: [
            'primevue',
        ]
    },
    runtimeConfig: {
        public: {
            ENV_KEY: process.env['ENV_KEY'],
        }
    }

})

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ['@/assets/style/main.scss', '@/assets/style/reset.css'],
	typescript: {
		strict: true,
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
            @import "~/assets/style/_variables.scss";
            @import "~/assets/style/_mixins.scss";
          `,
				},
			},
		},
	},
})

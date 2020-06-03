import stylus from 'stylus-loader'

export default {
	mode: 'universal',
	/*
  ** Headers of the page
  */
	head: {
		htmlAttrs: {
			lang: 'pt-br'
		},
		title: 'GitFetch',
		meta: [
			{
				charset: 'utf-8' 
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1' 
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Nuxt.js app consuming GitHub&#39;s API using the new fetch hook.' 
			}
		],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico' 
		}]
	},
	/*
  ** Customize the progress-bar color
  */
	loading: {
		color: 'transparent' 
	},
	/*
  ** Global CSS
  */
	css: ['~/assets/stylus/core.styl'],
	/*
  ** Plugins to load before mounting the App
  */
	plugins: [
		{
			src: '~/plugins/axios'
		},
		{
			src: '~/plugins/visibility',
			mode: 'client'
		}
	],
	/*
  ** Nuxt.js modules
  */
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/dotenv',
		'@nuxtjs/svg'
	],
	/*
  ** FontAwesome configuration
  */
	fontawesome: {
		component: 'Icon',
		icons: {
			solid: [
				'faSearch',
				'faStar',
				'faCodeBranch',
				'faEye',
				'faHashtag',
				'faHome',
				'faArrowLeft',
				'faMapMarkerAlt',
				'faEnvelope',
				'faCalendar',
				'faUser'
			],
			brands: ['faGithub']
		}
	},
	/*
  ** Nuxt.js build modules
  */
	buildModules: ['@nuxtjs/fontawesome'],
	/*
  ** Build configuration
  */
	build: {
		plugins: [new stylus.OptionsPlugin({
			default: {
				use: [require('rupture')()]
			}
		})],
		extend (config, ctx) {
		}
	}
}

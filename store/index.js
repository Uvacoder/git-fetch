export const state = () => ({
	user: []
})

export const mutations = {
	SET_USER(state, data) {
		state.user = data
	}
}

export const actions = {
	async nuxtServerInit({ dispatch }, { $axios }) {
		try {
			const user = await $axios.$get('/user')

			dispatch('SET_USER', user)
		} catch (error) {
			console.log(error)
		}
	},
	SET_USER({ commit }, data) {
		commit('SET_USER', data)
	}
}

export const getters = {
	id: state => state.user.id,
	name: state => state.user.name,
	email: state => state.user.email,
	bio: state => state.user.bio,
	avatar: state => state.user.avatar_url,
	link: state => state.user.html_url
}
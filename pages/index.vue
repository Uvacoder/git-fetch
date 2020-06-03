<template>
  <div class="container">
    <Header />

    <Placeholders
      v-if="$fetchState.pending"
      :items="30"
    />
    <h2 v-else-if="$fetchState.error">
      {{ $fetchState.error }}
    </h2>
    <Repositories
      v-else
      :repositories="repositories"
      @load="load"
    />
  </div>
</template>

<script>
import Header from '~/components/organisms/header'
import Repositories from '~/components/organisms/repositories'
import Placeholders from '~/components/organisms/placeholders'

export default {
	components: {
		Header,
		Repositories,
		Placeholders
	},
	data() {
		return {
			repositories: [],
			page: 1
		}
	},
	async fetch() {
		try {
			const { items: repositories } = await this.$axios.$get(`/search/repositories?q=topic:nuxt&sort=stars&order=desc&page=${this.page}`)
      
			this.repositories = this.repositories.concat(repositories)
			this.page++
		} catch (error) {
			console.log(error)
			throw new Error('Failed to fetch repositories.')
		}
	},
	activated() {
		if (this.$fetchState.timestamp <= Date.now() - (60000 * 5)) {
			this.$fetch()
		}
	},
	methods: {
		load() {		
			if (this.page < 5) {	
				this.$fetch()
			}
		}
	}
}
</script>
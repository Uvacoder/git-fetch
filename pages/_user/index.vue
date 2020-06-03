<template>
  <div class="container">
    <Button
      back
      large
      round
    >
      <Icon icon="arrow-left" />
    </Button>

    <nuxt-link to="/">
      <Button
        large
        round
      >
        <Icon icon="home" />
      </Button>
    </nuxt-link>
    
    <User />

    <Placeholders
      v-if="$fetchState.pending"
      :items="15"
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
import Button from '~/components/atoms/button'
import User from '~/components/organisms/user'
import Repositories from '~/components/organisms/repositories'
import Placeholders from '~/components/organisms/placeholders'

export default {
	components: {
		Button,
		User,
		Repositories,
		Placeholders
	},
	data() {
		return {
			username: this.$route.params.user,
			repositories: []
		}
	},
	async fetch() {
		try {
			const repositories = await this.$axios.$get(`/users/${this.username}/repos?sort=updated&direction=desc&page=${this.page}`)
      
			this.repositories = this.repositories.concat(repositories)
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
				this.page++
				this.$fetch()
			}
		}
	}
}
</script>
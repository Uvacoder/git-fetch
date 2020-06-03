<template>
  <Placeholders
    v-if="$fetchState.pending"
    type="project"
  />
  <h2 v-else-if="$fetchState.error">
    {{ $fetchState.error }}
  </h2>
  <div
    v-else
    class="project"
  >
    <a
      :href="repository.html_url"
      target="_blank"
      class="project__link"
    >
      <Button
        large
        round
        no-margin
      >
        <Icon :icon="['fab', 'github']" />
      </Button>
    </a>
    
    <div class="project__info">
      <h1>{{ repository.name }}</h1>
      <h4>{{ repository.description }}</h4>

      <Languages />

      <Button
        @click.native="star"
        :filled="starred"
        large
        round
      >
        <Icon icon="star" />
      </Button>

      <Button
        @click.native="watch"
        :filled="watched"
        large
        round
      >
        <Icon icon="eye" />
      </Button>
    </div>
  </div>
</template>

<script>
import Placeholders from '~/components/organisms/placeholders'
import Languages from '~/components/molecules/languages'
import Button from '~/components/atoms/button'

export default {
	components: {
		Placeholders,
		Languages,
		Button
	},
	data() {
		return {
			owner: this.$route.params.user,
			repo: this.$route.params.repository,
			repository: [],
			starred: false,
			watched: false
		}
	},
	filters: {
		date: (value) => {
			const date = new Date(value.split('T')[0])
			return date.toLocaleDateString()
		}
	},
	async fetch() {
		try {
			const repository = await this.$axios.$get(`/repos/${this.owner}/${this.repo}`)
			
			try {
				await this.$axios.get(`/user/starred/${this.owner}/${this.repo}`, {
					'Content-length': '0'
				})
        
				this.starred = true
			} catch (error) {
				this.starred = false
			}
      
			try {
				await this.$axios.get(`/user/subscriptions/${this.owner}/${this.repo}`, {
					'Content-length': '0'
				})
        
				this.watched = true
			} catch (error) {
				this.watched = false
			}

			this.repository = repository
		} catch (error) {
			console.log(error)
			throw new Error('Failed to fetch repository')
		}
	},
	methods: {
		async star() {
			try {
				this.starred
					? await this.$axios.delete(`/user/starred/${this.owner}/${this.repo}`)
					: await this.$axios.put(`/user/starred/${this.owner}/${this.repo}`)
        
				this.starred = !this.starred
			} catch (error) {
				console.log(error)
			}
		},
		async watch() {
			try {
				this.watched
					? await this.$axios.delete(`/user/subscriptions/${this.owner}/${this.repo}`)
					: await this.$axios.put(`/user/subscriptions/${this.owner}/${this.repo}`)
        
				this.watched = !this.watched
			} catch (error) {
				console.log(error)
			}
		}
	}
}
</script>
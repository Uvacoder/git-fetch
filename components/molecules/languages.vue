<template>
  <div class="languages">
    <ul
      v-if="languages"
      class="languages__list"
    >
      <li
        v-for="language in languages"
        :key="language.name"
        :style="style(language)"
        class="languages__list__item"
      />
    </ul>

    <ul
      v-if="languages"
      class="languages__names"
    >
      <li
        v-for="language in languages"
        :key="language.name"
        class="languages__names__item"
      >
        <span
          :style="icon(language.color)"
          class="languages__names__icon"
        />

        {{ language.name }}

        <strong>{{ language.percentage }}%</strong>
      </li>
    </ul>
  </div>
</template>

<script>
import hex from '~/mixins/hex'

export default {
	data() {
		return {
			owner: this.$route.params.user,
			repo: this.$route.params.repository,
			topics: [],
			bytes: null,
			languages: []
		}
	},
	watch: {
		topics() {
			const bytes = Object.keys(this.topics)
				.map((topic) => {
					return this.topics[topic]
				})
				.reduce((a, b) => {
					return a + b
				}, 0)

			this.bytes = bytes
		},
		bytes() {
			const languages = []

			Object.keys(this.topics).map((topic) => {
				const bytes = this.topics[topic]
				const percentage = ((bytes * 100) / this.bytes).toFixed(2)

				const language = {
					name: topic,
					bytes: bytes,
					percentage: percentage,
					color: hex()
				}

				languages.push(language)
			})
      
			this.languages = languages
		}
	},
	methods: {
		style({ percentage, color }) {
			return `
        width: ${percentage}%;
        background-color: ${color};
      `
		},
		icon(color) {
			return `
        background-color: ${color};
      `
		}
	},
	async fetch() {
		try {
			const topics = await this.$axios.$get(`/repos/${this.owner}/${this.repo}/languages`)

			this.topics = topics
		} catch (error) {
			console.log(error)
			throw new Error('Failed to fetch repository languages.')
		}
	}
}
</script>
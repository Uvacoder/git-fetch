<template>
  <Placeholders
    v-if="$fetchState.pending"
    type="user"
  />
  <h2 v-else-if="$fetchState.error">
    {{ $fetchState.error }}
  </h2>
  <div
    v-else
    class="user"
    :class="classes"
  > 
    <nuxt-link
      v-if="vertical"
      :to="`/${username}`"
      class="user__link user__link--internal"
    >
      <Button
        large
        round
        no-margin
      >
        <Icon icon="user" />
      </Button>
    </nuxt-link>

    <a
      :href="user.html_url"
      target="_blank"
      class="user__link user__link--external"
    >
      <Button
        large
        round
        no-margin
      >
        <Icon :icon="['fab', 'github']" />
      </Button>
    </a>
    
    <div class="user__image">
      <img
        :src="user.avatar_url"
        :alt="user.name"
      >

      <Button
        @click.native="follow"
        @mouseenter.native="unfollow = true"
        @mouseleave.native="unfollow = false"
        :filled="following"
      >
        {{ buttonText }}
      </Button>
    </div>

    <div class="user__info">
      <div class="user__info__personal">
        <h1>{{ user.name }}</h1>
        <h4>{{ user.bio }}</h4>
      </div>

      <div class="user__info__contact">
        <p
          v-if="user.location"
          class="user__info__contact__item"
        >
          <span class="icon">
            <Icon icon="map-marker-alt" />
          </span>

          <span>
            {{ user.location }}
          </span>
        </p>

        <p
          v-if="user.email"
          class="user__info__contact__item"
        >
          <span class="icon">
            <Icon icon="envelope" />
          </span>

          <span>
            {{ user.email }}
          </span>
        </p>
        
        <p
          v-if="user.created_at"
          class="user__info__contact__item"
        >
          <span class="icon">
            <Icon icon="calendar" />
          </span>

          <span>
            {{ user.created_at | date }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Placeholders from '~/components/organisms/placeholders'
import Button from '~/components/atoms/button'

export default {
	components: {
		Placeholders,
		Button
	},
	props: {
		vertical: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			username: this.$route.params.user,
			user: [],
			following: false,
			unfollow: false
		}
	},
	computed: {
		classes() {
			return this.vertical && 'user--vertical'
		},
		buttonText() {
			return this.unfollow && this.following
				? 'Unfollow'
				: this.following
					? 'Following'
					: 'Follow' 
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
			const user = await this.$axios.$get(`/users/${this.username}`)
			
			try {
				await this.$axios.get(`/user/following/${this.username}`, {
					'Content-length': '0'
				})
        
				this.following = true
			} catch (error) {
				this.following = false
			}

			this.user = user
		} catch (error) {
			console.log(error)
			throw new Error('Failed to fetch user')
		}
	},
	methods: {
		async follow() {
			try {
				this.following
					? await this.$axios.delete(`/user/following/${this.username}`)
					: await this.$axios.put(`/user/following/${this.username}`)
        
				this.following = !this.following
			} catch (error) {
				console.log(error)
			}
		}
	}
}
</script>
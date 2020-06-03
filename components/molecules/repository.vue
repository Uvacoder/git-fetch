<template>
  <div class="repository">
    <nuxt-link
      v-if="repository.name"
      :to="`/${repository.owner.login}/${repository.name}`"
      class="repository__title"
    >
      <h5>{{ repository.name }}</h5>
    </nuxt-link>

    <div
      v-if="repository.stargazers_count || repository.forks"
      class="repository__numbers"
    >
      <div
        v-if="repository.stargazers_count"
        class="repository__numbers__item"
      >
        <span class="icon">
          <Icon icon="star" />
        </span>

        {{ repository.stargazers_count }}
      </div>

      <div
        v-if="repository.forks"
        class="repository__numbers__item"
      >
        <span class="icon">
          <Icon icon="code-branch" />
        </span>

        {{ repository.forks }}
      </div>
    </div>

    <div
      v-if="repository.language"
      class="repository__language"
    >
      <Button disabled>
        <Icon icon="hashtag" />

        {{ repository.language }}
      </Button>
    </div>

    <nuxt-link
      v-if="showUser && repository.owner"
      :to="`/${repository.owner.login}`"
      class="repository__author"
    >
      <div class="repository__author__image">
        <img
          :src="repository.owner.avatar_url"
          :alt="repository.owner.login"
        >
      </div>

      <small class="resmallository__author__name">
        {{ repository.owner.login }}
      </small>
    </nuxt-link>
  </div>
</template>

<script>
import Button from '~/components/atoms/button'

export default {
	components: {
		Button
	},
	props: ['repository'],
	computed: {
		showUser() {
			return !this.$route.params.user 
		}
	}
}
</script>
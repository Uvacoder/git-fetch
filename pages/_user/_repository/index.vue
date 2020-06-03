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

    <div class="project__wrapper">
      <Project />
    
      <User vertical />
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/button'
import User from '~/components/organisms/user'
import Project from '~/components/organisms/project'

export default {
	components: {
		Button,
		User,
		Project
	}
}
</script>
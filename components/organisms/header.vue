<template>
  <header class="header">
    <Logo />

    <h1 class="title">
      Git<strong>Fetch</strong>
    </h1>

    <!-- <Search v-model="search" /> -->
    <Profile />
  </header>
</template>

<script>
import Logo from '~/components/atoms/logo'
import Search from '~/components/molecules/search'
import Profile from '~/components/atoms/profile'

export default {
	components: {
		Logo,
		Profile
	},
	data() {
		return {
			search: null
		}
	}
}
</script>
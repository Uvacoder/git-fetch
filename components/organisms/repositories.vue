<template>
  <ul class="repositories">
    <li
      v-for="(repository, index) in repositories"
      :key="repository.id"
      class="repositories__item"
    >
      <Repository
        :repository="repository"
        v-observe-visibility="index == repositories.length - 1 ? load : false"
      />
    </li>
  </ul>
</template>

<script>
import Repository from '~/components/molecules/repository'

export default {
	components: {
		Repository
	},
	props: ['repositories'],
	methods: {
		load(visible) {
			if (visible) {
				this.$emit('load')
			}
		}
	}
}
</script>
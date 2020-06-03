<template>
  <div class="search">
    <input
      @input="update($event.target.value)"
      :value="value"
      placeholder="search..."
      type="text"
      class="search__input"
    >

    <Button round>
      <Icon icon="search" />
    </Button>
  </div>
</template>

<script>
import Button from '~/components/atoms/button'

export default {
	components: {
		Button
	},
	props: ['value'],
	methods: {
		update(value) {
			this.$emit('input', value)
		},
		search() {
			this.$emit('search')
		}
	}
}
</script>
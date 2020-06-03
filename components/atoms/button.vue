<template>
  <button
    @click="back && $router.go(-1)"
    class="button"
    :class="status"
  >
    <slot />
  </button>
</template>

<script>
export default {
	props: {
		back: {
			type: Boolean,
			default: false
		},
		large: {
			type: Boolean,
			default: false
		},
		round: {
			type: Boolean,
			default: false
		},
		filled: {
			type: Boolean,
			default: false
		},
		noMargin: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		status() {
			return {
				'button--large': this.large,
				'button--round': this.round,
				'button--filled': this.filled,
				'button--no-margin': this.noMargin,
				'button--disabled': this.disabled
			} 
		}
	}
}
</script>
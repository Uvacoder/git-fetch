<template>
  <div
    class="placeholder"
    :class="orientation"
    :style="style"
  >
    <div
      v-if="lines"
      class="placeholder__wrapper"
    >
      <div
        v-for="line in lines"
        :key="line"
        class="placeholder__item"
        :class="classes"
        :style="size"
      />
    </div>

    <div
      v-else
      class="placeholder__wrapper"
    >
      <div
        class="placeholder__item"
        :class="classes"
        :style="size"
      />
    </div>
  </div>
</template>

<script>
export default {
	props: {
		width: {
			type: String,
			default: '100%'
		},
		height: {
			type: String,
			default: '40px'
		},
		inline: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: 'text'
		},
		lines: {
			type: Number,
			default: 0
		},
		top: {
			type: String,
			default: '0'
		},
		right: {
			type: String,
			default: '0'
		},
		bottom: {
			type: String,
			default: '0'
		},
		left: {
			type: String,
			default: '0'
		}
	},
	computed: {
		classes() {
			return [
				`placeholder__item--${this.type}`,
				{
					'placeholder__item--line': this.lines
				}
			]
		},
		orientation() {
			return this.inline && 'placeholder--inline'
		},
		style() {
			return `
        margin-top: ${this.top};
        margin-right: ${this.right};
        margin-bottom: ${this.bottom};
        margin-left: ${this.left};
      `
		},
		size() {
			return `
        height: ${this.height};
        ${!this.lines && `width: ${this.width};`}
      `
		}
	}
}
</script>
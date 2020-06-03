<template>
  <a
    :href="link"
    target="_blank"
    class="profile__link"
  >
    <div class="profile">
      <div class="profile__info">
        <p class="profile__info__name">{{ name }}</p>
        <p class="profile__info__email">{{ email }}</p>
      </div>

      <div class="profile__image">
        <img
          :src="avatar"
          :alt="name"
        >

        <div class="profile__image__overlay">
          <Icon :icon="['fab', 'github']" />
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: mapGetters([
		'link',
		'name',
		'email',
		'avatar'
	])
}
</script>
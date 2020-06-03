<template>
  <div
    class="placeholders"
    :class="classes"
  >
    <ul
      v-if="items"
      class="placeholders__list"
    >
      <li
        v-for="item in items"
        :key="item"
        class="placeholders__list__item"
      >
        <div class="card">
          <Placeholder
            height="25px"
            bottom="30px"
          />

          <Placeholder
            width="40px"
            height="40px"
            type="image"
            right="10px"
            inline
          />
          <Placeholder
            width="50px"
            height="20px"
            right="30px"
            inline
          />

          <Placeholder
            width="40px"
            height="40px"
            type="image"
            right="10px"
            inline
          />
          <Placeholder
            width="45px"
            height="20px"
            right="30px"
            inline
          />

          <Placeholder
            width="115px"
            top="30px"
            bottom="30px"
          />

          <Placeholder
            width="30px"
            height="30px"
            type="image"
            right="15px"
            inline
          />
          <Placeholder
            width="75px"
            height="16px"
            inline
          />
        </div>
      </li>
    </ul>

    <div
      v-if="type == 'user'"
      class="user"
      :class="vertical"
    >
      <Placeholder
        v-if="vertical"
        width="60px"
        height="60px"
        type="image"
        bottom="15px"
        class="user__link user__link--internal"
      />

      <Placeholder
        width="60px"
        height="60px"
        type="image"
        bottom="15px"
        class="user__link user__link--external"
      />

      <div class="user__image">
        <Placeholder
          width="150px"
          height="150px"
          type="image"
          bottom="15px"
        />

        <Placeholder />
      </div>

      <div class="user__info">
        <div class="user__info__personal">
          <Placeholder
            height="57px"
            bottom="10px"
          />
          <Placeholder
            height="24px"
            :lines="3"
          />
        </div>

        <div class="user__info__contact">
          <div
            v-for="item in 3"
            :key="item"
            class="user__info__contact__item"
          >
            <Placeholder
              width="40px"
              right="10px"
              type="image"
              inline
            />

            <Placeholder
              :width="`${Math.floor(Math.random() * 100) + 60 }px`"
              height="26px"
              inline
            />          
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="type == 'project'"
      class="project"
    >
      <Placeholder
        width="40%"
        height="57px"
        bottom="5px"
      />
      <Placeholder
        height="24px"
        :lines="2"
      />

      <div class="languages">
        <Placeholder
          height="10px"
          bottom="10px"
        />

        <div class="languages__names">
          <div
            v-for="item in 3"
            :key="item"
            class="languages__names__item"
          >
            <Placeholder
              width="10px"
              height="10px"
              type="image"
              right="5px"
            />
            <Placeholder
              :width="`${Math.floor(Math.random() * 60) + 40 }px`"
              height="14px"
              right="5px"
            />
            <Placeholder
              width="38px"
              height="14px"
              right="10px"
            />
          </div>
        </div>
      </div>

      <Placeholder
        width="60px"
        height="60px"
        type="image"
        right="15px"
        inline
      />
      <Placeholder
        width="60px"
        height="60px"
        type="image"
        inline
      />
    </div>
  </div>
</template>

<script>
import Placeholder from '~/components/atoms/placeholder'

export default {
	components: {
		Placeholder
	},
	props: {
		items: {
			type: Number,
			default: 0
		},
		type: {
			type: String,
			default: null
		}
	},
	computed: {
		classes() {
			return this.type && `placeholders--${this.type}` 
		},
		vertical() {
			return this.$route.params.repository && 'user--vertical'
		}
	}
}
</script>
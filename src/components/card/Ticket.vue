<script setup>
import { defineProps, ref, onMounted } from 'vue'
import { preloadImage } from '../../utils/image.util'

defineProps({
  reverse: Boolean,
  small: Boolean,
  title: String,
  iconName: String,
  color: String,
  backgroundColor: String,
  image: {
    src: String,
    alt: String,
  },
  text: {
    color: String,
    title: String,
    paragraph: String,
  }
})

const iconsPath = ref({})
const imagesPath = ref({})

onMounted(async () => {
  const globImages = import.meta.glob(`@/assets/image/feature/*.png`, { eager: false })
  const globIcons = import.meta.glob(`@/assets/svg/icon/*.svg`, { eager: false })

  const [icons, images] = await Promise.all([preloadImage(globIcons), preloadImage(globImages)])
  iconsPath.value = icons
  imagesPath.value = images
})
</script>

<template>
  <div class="card-ticket" :class="{ 'card-ticket--small': small }">
    <div class="card-ticket__header" :style="`background-color: ${backgroundColor}; color: ${color};`">
      <h2>{{ title }}</h2>
      <img :src="iconsPath[`icon_${iconName}`]?.src" alt="" />
    </div>

    <div class="card-ticket__content" :class="{ 'card-ticket__content--reverse': reverse }" :style="`background-color: ${backgroundColor};`">
      <div class="card-ticket__content__frame">
        <img class="card-ticket__content__frame__image" :src="imagesPath[`feature_${image.src}`]?.src" :alt="image.alt" />
      </div>
      <div class="card-ticket__content__text" :style="`color: ${text.color};`">
        <h3 class="card-ticket__content__text__title">{{ text.title }}</h3>
        <p class="card-ticket__content__text__paragraph">{{ text.paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-ticket {
  display: flex;
  flex-direction: column;

  &__header {
    z-index: 1;
    box-shadow: 0px -2px 7px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 36px;
    border: var(--color-secondary-base) solid 5px;
    padding: 8px 24px;
    border-radius: 12px;
    gap: 12px;

    @media screen and (max-width: 768px) {
      padding: 8px 12px;
    }
  }

  &__content {
    flex-grow: 1;
    margin: 0 12px;
    padding: 44px;
    border-bottom: var(--color-secondary-base) solid 2px;
    border-left: var(--color-secondary-base) solid 2px;
    border-right: var(--color-secondary-base) solid 2px;
    border-radius: 0px 0px 12px 12px;
    display: flex;
    gap: 44px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    &--reverse {
      flex-direction: row-reverse;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }

    &__frame {
      flex: 0 1 auto;
      max-width: 280px;

      @media screen and (max-width: 768px) {
        max-width: 140px;
      }

      &__image {
        width: 100%;
      }
    }

    &__text {
      flex: 1 0 60%;
      display: flex;
      flex-direction: column;
      gap: 16px;
      color: var(--color-light-base);

      &__title {
        font-size: 24px;
      }

      &__paragraph {
        text-wrap: balance;
      }
    }
  }
}

.card-ticket--small {
  .card-ticket {
    &__header {
      font-size: 26px;
    }

    &__content {
      padding: 24px;
      gap: 24px;

      &__text {
        gap: 8px;
        flex: 1 0 60%;

        &__title {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
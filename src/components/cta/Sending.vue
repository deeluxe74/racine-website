<script setup>
import { defineProps, ref, onMounted} from 'vue'
import { preloadImage } from '../../utils/image.util'
import IconEmail from '../svg/IconEmail.vue'

defineProps({
  sending: Boolean,
  responseType: String,
  outlined: Boolean,
})

const iconsPath = ref({})

onMounted(async () => {
  const globIcons = import.meta.glob(`@/assets/svg/icon/*.svg`, { eager: false })

  iconsPath.value = await preloadImage(globIcons)
})
</script>

<template>
  <div class="cta-sending" :class="{ 'cta-sending--outlined': outlined }">
    <div v-if="responseType" class="cta-sending__message" :class="{ 'cta-sending__message--error': responseType === 'error' }">
      {{ responseType === 'success' ? 'Votre mail a été envoyé !' : 'Une erreur est survenue' }}
    </div>

    <button type="submit" class="cta-sending__button" :class="{ 'cta-sending__button--sending': sending }">
      <template v-if="!sending">
        <div :class="{ 'cta-sending__button__slot--hidden': responseType }">
          <slot  />
        </div>

        <img v-if="responseType === 'success'" class="cta-sending__button__icon cta-sending__button__icon--success" :src="iconsPath[`icon_email_success`]?.src" />

        <img v-if="responseType === 'error'" class="cta-sending__button__icon cta-sending__button__icon--error" :src="iconsPath[`icon_email_error`]?.src" />
      </template>

      <template v-if="sending" >

        <div class="cta-sending__button__slot--hidden">
          <slot  />
        </div>

        <IconEmail class="cta-sending__button__icon" :fill="outlined ? 'var(--color-secondary-base)' : 'var(--color-tertiary-base)'" :class="{ 'cta-sending__button__icon--sending': sending }" />

        <!-- <img class="cta-sending__button__icon" :class="{ 'cta-sending__button__icon--sending': sending }" :src="iconsPath[`icon_email`]?.src" /> -->
      </template>
    </button>
  </div>
</template>

<style lang="scss">
.cta-sending {
  position: relative;

  &__message {
    box-sizing: border-box;
    height: 45px;
    text-align: center;
    z-index: 899;
    position: absolute;
    top: -50px;
    left: 18%;
    background-color: var(--color-tertiary-base);
    color: var(--color-primary-base);
    padding: 8px 12px;
    font-size: 12px;
    border-radius: 4px;
    max-width: 120px;

    &--error {
      color: var(--color-secondary-base);
    }
  }

  &__button {
    height: 44px;
    position: relative;
    width: 175px;

    @media screen and (max-width: 480px) {
      // width: auto;
      // height: auto;
    }

    &--sending {
      pointer-events: none;
    }

    &__slot {
      &--hidden {
        opacity: 0;
      }
    }

    &__icon {
      position: absolute;
      left: 50%; 
      top: 50%; 
      height: 32px;
      width: auto;

      &--sending {
        animation: moveBottomTop 850ms linear 0ms infinite;
      }

      &--success {
        animation: appear 1 450ms forwards;
      }

      &--error {
        animation: appear 1 450ms forwards;
      }
    }
  }

  &--outlined {
    .cta-sending {
      &__button {
        background-color: inherit;
        border: 2px solid var(--color-secondary-base);
        color: var(--color-secondary-base);

        &:hover, &:focus {
          transform: translateX(4px);
          box-shadow: 0px 4px 0px 2px var(--color-secondary-base);
        }

        &__icon {
          fill: var(--color-secondary-base);
        }
      }

      &__message {
        box-sizing: border-box;
        background-color: var(--color-secondary-base);
        color: var(--color-tertiary-base);
      }
    }
  }
}

@keyframes moveBottomTop {
  0%, 100% {
    transform: translate(-50%, -50%) rotate(0) skew(0deg);
  }
  25% {
    transform: translate(calc(-50% + 0px), calc(-50% + 2px)) rotate(-0deg) skew(8deg);
  }
  50% {
    transform: translate(calc(-50% + 0px), calc(-50% + 0px)) rotate(-0deg) skew(0deg);
  }
  75% {
    transform: translate(calc(-50% + 0px), calc(-50% + -2px)) rotate(-0deg) skew(-8deg);
  }
}

@keyframes appear {
  0% {
    transform: translate(-50%, -50%) scale(0) rotate(0);
  }
  90% {
    transform: translate(-50%, -50%) scale(1.2) rotate(-4deg);
  }
  100% {
    transform: translate(-50%, -50%) scale(1) rotate(0deg);
  }
}
</style>
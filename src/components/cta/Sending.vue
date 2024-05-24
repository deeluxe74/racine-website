<script setup>
import { defineProps } from 'vue'

defineProps({
  sending: Boolean,
  responseType: String,
})
</script>

<template>
  <div class="cta-sending">
    <div v-if="responseType" class="cta-sending__message" :class="{ 'cta-sending__message--error': responseType === 'error' }">
      {{ responseType === 'success' ? 'Votre mail a été envoyé !' : 'Une erreur est survenue' }}
    </div>

    <button type="submit" class="cta-sending__button" :class="{ 'cta-sending__button--sending': sending }">
      <template v-if="!sending">
        <div :class="{ 'cta-sending__button__slot--hidden': responseType }">
          <slot  />
        </div>

        <img v-if="responseType === 'success'" class="cta-sending__button__icon cta-sending__button__icon--success" src="/public/svg/icon/icon_email_success.svg" />

        <img v-if="responseType === 'error'" class="cta-sending__button__icon cta-sending__button__icon--error" src="/public/svg/icon/icon_email_error.svg" />
      </template>

      <template v-if="sending" >

        <div class="cta-sending__button__slot--hidden">
          <slot  />
        </div>

        <img class="cta-sending__button__icon" :class="{ 'cta-sending__button__icon--sending': sending }" src="/public/svg/icon/icon_email.svg" />
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

    @media screen and (max-width: 768px) {
      width: 124px;
      height: 56px;
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
      fill: var(--color-tertiary-base);
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
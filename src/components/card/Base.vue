<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String,
  backgroundColor: String,
  text: {
    color: String,
    paragraph: String,
  }
})
</script>

<template>
  <div class="card-base" :style="`background-color: ${backgroundColor};`">
    <div class="card-base__header">
      <h3>{{ title }}</h3>
    </div>

    <div class="card-base__content" :style="`color: ${text.color};`">
      <p class="card-base__content__paragraph" v-html="text.paragraph" />
    </div>
  </div>
</template>

<style lang="scss">
.card-base {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;

  &__header {
    color: var(--color-tertiary-base);
    font-size: 24px;
  }

  &__content {
    &__paragraph {
      font-weight: 500;
    }
  }
}
</style>
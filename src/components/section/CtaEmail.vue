<script setup>
import { ref } from 'vue'
import { sendEmail } from '@/utils/mail.util'
import ctaSending from '@/components/cta/Sending.vue'

const email = ref('')
const isSending = ref(false)
const responseType = ref('')

async function handleSubmit() {
  isSending.value = true

  try {
    await sendEmail(email.value)
    responseType.value = 'success'
  } catch (error) {
    responseType.value = 'error'
  } finally {
    isSending.value = false
    setTimeout(() => {
      responseType.value = ''
      email.value = ''
    }, 4000);
  }
}
</script>

<template>
  <section class="section-cta-email">
    <div class="section-cta-email__content">
      <h2 class="section-cta-email__content__title">Commencez gratuitement</h2>
      <p class="section-cta-email__content__paragraph">Générer un code pour l'un de vos plats favoris. Ne payez que lorsque vous voyez le potentiel !</p>
    </div>
    
    <form class="section-cta-email__form" method="POST" @submit.prevent="handleSubmit()">
      <input class="section-cta-email__form__input" placeholder="Servez-nous votre email" id="email" type="email" name="email" required v-model="email">
      <ctaSending :sending="isSending" :responseType="responseType">
        Envoyer
      </ctaSending>
    </form>
  </section>
</template>

<style lang="scss">
.section-cta-email {
  max-width: var(--box-width-max-base);
  width: 100%;
  padding: 44px;
  background-color: var(--color-primary-light);
  color: var(--color-tertiary-base);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 28px;

  @media screen and (max-width: 768px) {
    padding: 44px 4px;
    border-radius: 0px;
  }
  
  &__content {
    text-align: center;

    &__title {
      font-size: 36px;
    }

    &__paragraph {
      max-width: 480px;
    }
  }

  &__form {
    display: flex;
    flex-direction: row;
    border: var(--color-tertiary-base) solid 1px;
    border-radius: 28px;
    width: fit-content;
    padding: 8px 8px;

    &__input {
      padding: 0px 16px;
      background: transparent;
      border: none;
      font-weight: 800;
      color: var(--color-secondary-base);
      caret-color: var(--color-tertiary-base);

      @media screen and (max-width: 768px) {
        width: 150px;
      }

      &::placeholder {
        color: var(--color-tertiary-base);
      }

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
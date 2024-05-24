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
  <section class="section-hero">
    <div class="section-hero__content">
      <div class="section-hero__content__text">
        <h1 class="section-hero__content__text__title">
          Révélez le vrai <mark>cœur</mark> de votre cuisine
        </h1>
        <p class="section-hero__content__text__paragraph">
          Découvrez comment nous pouvons transformer vos plats avec des traductions, des illustrations et des informations détaillées.
        </p>
      </div>

      <form class="section-hero__content__form" method="POST" @submit.prevent="handleSubmit()">
        <input class="section-hero__content__form__input" placeholder="Entrer votre email" id="email" type="email" name="email" required v-model="email">
        <ctaSending :sending="isSending" :responseType="responseType">
          Déguster la démo
        </ctaSending>
      </form>
    </div>

    <div class="section-hero__media">
      <video class="section-hero__media__video" autoplay playsinline muted preload="auto" poster="/public/image/hero/screenpopup.png">
        <source src="/public/video/screenpopup.webm" type="video/webm">
        <p>
          Votre navigateur ne supporte pas les vidéos. 
          Cette vidéo montre un exemple d'application avec la possibilité de traduire, illustrer, ou encore avertir sur les allergies de vos plats.
        </p>
      </video>
    </div>
  </section>
</template>

<style lang="scss">
.section-hero {
  container-type: inline-size;
  container-name: section-hero;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: var(--box-width-max-base);
  margin: 0 auto;
  padding-bottom: 24px;
  gap: 16px;

  @media screen and (max-width: 1024px) {
    padding: 0px 16px 24px 16px;
  }

  @media screen and (max-width: 768px) {
    padding: 44px 16px 44px 16px;
    flex-direction: column;
  }

  & mark {
    color: var(--color-tertiary-base);
  }

  &__content {
    width: 100%;
    flex: 1 0 45%;
    color: var(--color-tertiary-base);

    @media screen and (max-width: 768px) {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__text {
      margin-bottom: 44px;
    }

    &__form {
      display: flex;
      flex-direction: row;
      border: var(--color-tertiary-base) solid 1px;
      border-radius: 28px;
      width: fit-content;
      padding: 8px 8px;

      &__input {
        padding-left: 24px;
        background: transparent;
        border: none;
        font-weight: 500;
        color: var(--color-tertiary-base);
        caret-color: var(--color-tertiary-base);

        &::placeholder {
          color: var(--color-tertiary-base);
        }

        &:focus {
          outline: none;
        }
      }
    }
  }

  &__media {
    margin-top: -24px;
    flex: 0 1 auto;

    &__video {
      width: 100%;
    }
  } 
}

@container section-hero (width < 768px) {
  .section-hero {
    &__media {
      margin-top: 24px;

      &__video {
        width: 340px;
      }
    }
  }
}
</style>
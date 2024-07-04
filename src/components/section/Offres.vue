<script setup>
import { ref, onMounted } from 'vue'
import { sendEmail } from '@/utils/mail.util'
import { preloadImage } from '../../utils/image.util'
import ctaSending from '@/components/cta/Sending.vue'

const iconsPath = ref({})
const imagesPath = ref({})
const email = ref('')
const isSending = ref(false)
const responseType = ref('')
const isFormOpen = ref(false)

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
      isFormOpen.value = false
    }, 4000);
  }
}

onMounted(async () => {
  const globImages = import.meta.glob(`@/assets/image/*.png`, { eager: false })
  const globIcons = import.meta.glob(`@/assets/svg/icon/*.svg`, { eager: false })

  const [icons, images] = await Promise.all([preloadImage(globIcons), preloadImage(globImages)])
  iconsPath.value = icons
  imagesPath.value = images
})
</script>

<template>
  <section class="section-offres">
    <div class="section-offres__head">
      <h2 class="section-offres__head__title">Comment ca fonctionne ?</h2>
      <p class="section-offres__head__paragraph">
        Vous avez besoin d'un site web pour afficher vos délicieux plats et les mettre à disposition de vos clients. 
        Votre site doit être conforme aux normes RGPD, <strong>rapide, intuitif et avoir un design élégant.</strong> 
        <br>Mais pas de panique, on s'occupe de tout, même de faire briller vos assiettes virtuelle !
      </p>
    </div>

    <div class="section-offres__content">
      <div class="section-offres__content__section-one">
        <div class="section-offres__content__section-one__header">
          <div class="section-offres__content__section-one__header__title">
            <h3>Le site web</h3>
            <mark>a l’image de votre restaurant</mark>
          </div>
          <div class="section-offres__content__section-one__header__info">100% sur mesure <br> et réalisé sur devis</div>
        </div>

        <div class="section-offres__content__section-one__content">
          <p>
            Nos super webdesigners sont là, ils vont créer la maquette qui reflètera parfaitement l’image de votre restaurant.
            <br><br>
            Une fois validé avec vous, nous réalisons le développement de votre futur menu. Vos clients ont maintenant l’eau a la bouche avant même d’être servis.
          </p>
        </div>

      </div>

      <div class="section-offres__content__section-two">
        <div class="section-offres__content__section-two__card">
          <div class="section-offres__content__section-two__card__header">
            <h3>L’Offre Unique</h3>
            <div>Tout en un</div>
          </div>

          <div class="section-offres__content__section-two__card__price">
            <div class="section-offres__content__section-two__card__price__amount">80€</div>
            <div class="section-offres__content__section-two__card__price__mention">HT <span>/ MOIS</span></div>
          </div>

          <ul class="section-offres__content__section-two__card__list">
            <li class="section-offres__content__section-two__card__list__item">
              <strong>Service client 7j/7</strong>
            </li> 
            <li class="section-offres__content__section-two__card__list__item">
              <strong>Modifications illimité</strong>
            </li> 
            <li class="section-offres__content__section-two__card__list__item">
              QRcode autocollant
            </li> 
            <li class="section-offres__content__section-two__card__list__item">
              Hébergement sur serveur francais
            </li> 
            <li class="section-offres__content__section-two__card__list__item">
              Nom de domaine offert
            </li> 
            <li class="section-offres__content__section-two__card__list__item">
              Disponible sur tout support
            </li> 
          </ul>
        </div>

        <div class="section-offres__content__section-two__details">
          <div class="section-offres__content__section-two__details__header">
            <h3>Une seul offre</h3>
            <span>Parfaite pour tous !</span>
            <img class="section-offres__content__section-two__details__header__img" :src="imagesPath['fr-label']?.src" alt="Partenaires 100% francais" />
          </div>

          <p class="section-offres__content__section-two__details__paragraph">
            Bénéficier dès maintenant du meilleur de ce que nous offrons.
            Choissisez l’option la plus rapide, intuitif et élégante 
            pour votre menu.
          </p>

          <div class="section-offres__content__section-two__details__cards">
            <div id="news" class="section-offres__content__section-two__details__cards__card" style="border-color: var(--color-primary-light);">
              <img :src="iconsPath['icon_feature']?.src" alt="" />
              <div>Dernière <span style="color: var(--color-primary-light)">nouveauté</span></div>
            </div>

            <div id="update" class="section-offres__content__section-two__details__cards__card" style="border-color: #306EDA;">
              <img :src="iconsPath['icon_cloud']?.src" alt="" />
              <div>Mise à jour <span style="color: #306EDA">continue</span></div>
            </div>

            <div id="bug" class="section-offres__content__section-two__details__cards__card" style="border-color: #CD3333;">
              <img :src="iconsPath['icon_bug']?.src" alt="" />
              <div><span style="color: #CD3333">Suivie</span> incident</div>
            </div>

            <div id="extend" class="section-offres__content__section-two__details__cards__card" style="border-color: #DC00AC;">
              <img :src="iconsPath['icon_torch']?.src" alt="" />
              <div>Extensible pour <span style="color: #DC00AC">vos besoins*</span></div>
            </div>
          </div>

          <button v-if="!isFormOpen" class="section-offres__content__section-two__details__button" @click="isFormOpen = true">
            Commencer maintenant
            <img :src="iconsPath['icon_email_pixel']?.src" alt="" />
          </button>

          <form v-if="isFormOpen" class="section-offres__content__section-two__details__form" method="POST" @submit.prevent="handleSubmit()">
            <input class="section-offres__content__section-two__details__form__input" placeholder="Servez-nous votre email" id="email" type="email" name="email" required v-model="email">
            <ctaSending :outlined="true" :sending="isSending" :responseType="responseType">
              Envoyer
            </ctaSending>
          </form>

          <p class="section-offres__content__section-two__details__end-note">
            * Grâce à un site 100% conçu pour vous, nous pouvons créer des outils sur mesure spécifiquement adaptés à vos besoins uniques.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-offres {
  br {
    display: block;
    content: "";
    height: 4px;
  }

  container-type: normal;
  container-name: section-offres;

  max-width: var(--box-width-max-base);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 44px;

  @media screen and (max-width: 1024px) {
    padding: 0 16px;
  }

  @media screen and (max-width: 768px) {
    container-type: inline-size;
    margin: 0 0;
  }

  &__head {
    &__title {
      text-align: center;
      font-size: 36px;
      margin-bottom: 16px;
    }

    &__paragraph {
      text-align: center;
      text-wrap: balance;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 44px;

    &__section-one {
      box-sizing: border-box;
      border: 8px solid var(--color-quaternary-base);
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;
      border-radius: 12px;
      padding: 44px 24px;
      position: relative;

      &::before {
        position: absolute;
        top: -32px;
        left: -32px;
        content: "1";
        padding: 4px 12px;
        background-color: var(--color-quaternary-base);
        border-radius: 14px;
        font-size: 44px;
        color: var(--color-tertiary-base);

        @media screen and (max-width: 768px) {
          left: -20px;
        }
      }

      &__header {
        display: flex;
        flex-direction: row;
        gap: 24px;
        justify-content: space-between;
        font-size: 20px;
        font-family: var(--font-family-title);
        font-weight: 600;

        @media screen and (max-width: 768px) {
          flex-direction: column;
        }

        &__title {
          & h3 {
            font-weight: 900;
            font-size: 36px;
          }

          & mark {
            font-size: 24px;
            border: none;
            font-weight: 500;
            color: var(--color-secondary-base);
          }
        }

        &__info {
          text-align: right;
        }
      }

      &__content {
        & p {
          margin: 0;

          @media screen and (max-width: 768px) {
            text-align: center;
          }
        }
      }
    }

    &__section-two {
      display: flex;
      flex-direction: row;
      gap: 44px;
      width: 100%;

      @media screen and (max-width: 1024px) {
        flex-direction: column;
      }

      &__card {
        box-sizing: border-box;
        background-color: var(--color-primary-base);
        color: var(--color-tertiary-base);
        display: flex;
        flex-direction: column;
        gap: 40px;
        border-radius: 12px;
        padding: 44px 44px;
        position: relative;
        text-align: center;
        min-width: 380px;

        @media screen and (max-width: 768px) {
          min-width: inherit;
          padding: 44px 20px;
        }

        &::before {
          position: absolute;
          top: -20px;
          right: -32px;
          content: "2";
          padding: 4px 12px;
          background-color: var(--color-primary-base);
          border-radius: 14px;
          font-size: 44px;
          color: var(--color-tertiary-base);
          border: 2px solid var(--color-tertiary-base);

          @media screen and (max-width: 768px) {
            min-width: inherit;
            right: -8px;
          }
        }

        &__header {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 24px;
          font-family: var(--font-family-title);
          font-weight: 500;

          & h3 {
            font-weight: 900;
            font-size: 36px;
          }
        }

        &__price {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-end;
          gap: 8px;
          font-size: 16px;
          line-height: 0.8;
          color: var(--color-light-base);
          
          &__amount {
            font-weight: 900;
            font-size: 56px;
          }

          & span {
            font-size: 20px;
          }
        }

        &__list {
          list-style-type: none;
          margin: 0;
          padding: 0;

          & li {
            padding-bottom: 12px;
            margin-bottom: 12px;
            border-bottom: 1px solid var(--color-tertiary-base);
          }

          & strong {
            font-size: 20px;
          }
        }
      }

      &__details {
        display: flex;
        flex-direction: column;
        gap: 44px;
        text-align: center;

        &__header {
          font-family: var(--font-family-title);
          font-size: 20px;
          position: relative;

          & h3 {
            font-size: 36px;
            font-weight: 900;
          }

          &__img {
            position: absolute;
            width: 148px;
            top: -32px;
            right: -16px;

            @media screen and (max-width: 768px) {
              width: 88px;
              top: 40px;
            }
          }
        }

        &__paragraph {
          font-size: 16px;
          font-family: var(--font-family-title);
        }

        &__cards {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          grid-template-areas: 
            "news update bug"
            "extend extend .";
          gap: 20px;

          @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-areas:  
            "news"
            "update"
            "bug"
            "extend";
          }

          &__card {
            box-sizing: border-box;
            text-align: left;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            padding: 16px 16px;
            border: 4px solid var(--color-primary-base);
            border-radius: 8px;
            font-weight: 600;

            @media screen and (max-width: 768px) {
              justify-content: center;
            }
          }
        }

        &__button {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 16px;
          text-transform: uppercase;
          background-color: var(--color-secondary-base);
          color: var(--color-tertiary-base);
          border-radius: 8px;
          padding: 24px 24px;
          font-size: 20px;
          font-weight: 700;

          & img {
            width: 40px;
          }

          &:hover, &:focus {
            color: var(--color-tertiary-base);
            background-color: var(--color-secondary-base);
            opacity: 0.8;
          }
        }

        &__form {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 44px;
          border: 2px solid var(--color-secondary-base);
          color: var(--color-secondary-base);
          border-radius: 8px;
          padding: 24px 24px;
          font-size: 20px;
          font-weight: 700;
          height: 88px;
          box-sizing: border-box;

          &__input {
            padding: 0px;
            background: transparent;
            border: none;
            font-weight: 800;
            color: var(--color-secondary-base);
            caret-color: var(--color-secondary-base);
            padding-bottom: 4px;
            border-bottom: 2px solid var(--color-secondary-base);
            margin-bottom: -2px;

            @media screen and (max-width: 768px) {
              width: 150px;
            }

            &::placeholder {
              color: var(--color-secondary-base);
              opacity: 0.8;
            }

            &:focus {
              outline: none;
            }
          }
        }

        &__end-note {
          margin-top: auto;
          margin-bottom: 0;
          text-align: left;
          font-size: 14px;
        }
      }
    }
  }
}


#news {
  grid-area: news;
}

#update {
  grid-area: update;
}

#bug {
  grid-area: bug;
}

#extend {
  grid-area: extend;
}
</style>
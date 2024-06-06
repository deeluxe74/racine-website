<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import CardBase from '@/components/card/Base.vue'

const features = [
  {
    title: 'Ingrédients',
    slug: 'ingredient',
    backgroundColor: 'var(--color-primary-base)',
    text: {
      paragraph: 'Vos ingrédients définissent la qualité du plat que vous servez. <br><br> Mettez en avant leurs provenances et vous obtiendrez la confiance de vos clients. <br> Indiquer les allergènes pour veiller à la sécurité de tout le monde.',
    }
  },
  {
    title: 'Illustrations',
    slug: 'illustration',
    backgroundColor: 'var(--color-quaternary-base)',
    text: {
      paragraph: 'Une photo peut faire toute la différence, profitez-en !',
    }
  },
  {
    title: 'Coup de cœur',
    slug: 'coupdecoeur',
    backgroundColor: 'var(--color-secondary-base)',
    text: {
      color: 'var(--color-tertiary-base)',
      paragraph: 'Créer un coup de cœur, et augmenter vos ventes en mettant en valeur vos plats les plus rentables.',
    }
  },
  {
    title: 'Savoir-faire',
    slug: 'savoirfaire',
    backgroundColor: 'var(--color-primary-light)',
    text: {
      paragraph: "Savoir se différencier de vos concurrents peut être très important dans la restauration. <br><br> Communiquer sur la création et les étapes de votre plat. Pourquoi est-il si différent et meilleur !",
    }
  }
]
const videoRef = ref(null)
let observer

const handleIntersection = (entries) => {
  const video = entries[0].target

  if (entries[0].isIntersecting) {
    video.play()
    observer.disconnect()
  }
}

onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0
  })

  if (videoRef.value) {
    observer.observe(videoRef.value)
  }
})

onBeforeUnmount(() => {
  observer.disconnect()
})
</script>

<template>
  <section class="section-qr-code">
    <div class="section-qr-code__head">
      <h2 class="section-qr-code__head__title">Révéler vos plats <br> par un simple scan</h2>
      <p class="section-qr-code__head__paragraph">Transformez l'expérience de vos clients avec des QR codes dédiés pour chaque plat. Laissez-les accéder à des descriptions détaillées, des traductions, des photos alléchantes et des informations sur les allergènes, le tout en scannant un simple QR code.</p>
    </div>
    
    <video ref="videoRef" class="section-qr-code__video" playsinline muted preload="none">
      <source src="@/assets/video/lines.webm" type="video/webm">
      <p>
        Votre navigateur ne supporte pas les vidéos. 
        Cette vidéo illustre des Qr code attachés a des plats.
      </p>
    </video>

    <div class="section-qr-code__cards">
      <CardBase class="section-products__cards__card" v-for="feature in features" :key="feature.slug" v-bind="feature" :id="feature.slug" />
    </div>
  </section>
</template>

<style lang="scss">
.section-qr-code {
  container-type: inline-size;
  container-name: section-qr-code;

  max-width: var(--box-width-max-base);
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 44px;

  @media screen and (max-width: 1024px) {
    padding: 0 16px;
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

  &__video {
    display: flex;
    margin: 0 auto;
    width: 90%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  &__cards {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr 1.2fr 0.8fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
      "ingredient illustration savoirfaire"
      "ingredient coupdecoeur savoirfaire";

    @media screen and (max-width: 768px) {
      grid-template-columns: 1.3fr 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: 
        "ingredient savoirfaire"
        "coupdecoeur illustration";
    }

    @media screen and (max-width: 460px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: 
        "ingredient"
        "savoirfaire"
        "coupdecoeur"
        "illustration";
    }
  }
}

#ingredient {
  grid-area: ingredient;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.4);
}

#illustration {
  grid-area: illustration;
}

#savoirfaire {
  grid-area: savoirfaire;
}

#coupdecoeur {
  grid-area: coupdecoeur;
}
</style>

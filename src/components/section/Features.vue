<script setup>
import CardTicket from '@/components/card/Ticket.vue';

const features = [
  {
    title: 'Traductions',
    iconName: 'traduction',
    color: 'var(--color-tertiary-base)',
    backgroundColor: 'var(--color-primary-light)',
    image: {
      src: 'traduction',
      alt: 'Un plat traduit dans la langue francaise et anglaise [fr, en].',
    },
    text: {
      color: 'var(--color-light-base)',
      title: 'Augmenter votre clientèle avec des traductions précises',
      paragraph: 'Assurez-vous que chaque client comprenne parfaitement vos plats grâce à des traductions précises.<br style="height: 8px;"> En rendant vos plats accessibles dans plusieurs langues, vous pouvez attirer une clientèle internationale et optimiser votre service en gagnant du temps lors de la prise de commandes.',
    }
  },
  {
    small: true,
    title: 'Allergènes',
    iconName: 'allergene',
    color: 'var(--color-dark-base)',
    backgroundColor: 'transparent',
    image: {
      src: 'allergene',
      alt: 'Les 12 allergènes obligatoires a afficher sur vos plats.',
    },
    text: {
      color: 'var(--color-dark-base)',
      title: "Simplifiez l'affichage des allergènes",
      paragraph: `Garantissez la sécurité et la confiance de vos clients en affichant clairement les allergènes présents dans vos plats. <br style="height: 8px;"> Notre système intuitif simplifie l'affichage des informations cruciales, vous permettant de répondre aux normes obligatoires tout en offrant une expérience transparente et rassurante.`,
    }
  },
  {
    small: true,
    reverse: true,
    title: 'Photos',
    iconName: 'photo',
    color: 'var(--color-tertiary-base)',
    backgroundColor: 'var(--color-primary-base)',
    image: {
      src: 'photo',
      alt: 'Mettez vos plats en avant grâce a des photos de la préparation.',
    },
    text: {
      color: 'var(--color-light-base)',
      title: 'Attirez plus de clients avec des photos alléchantes',
      paragraph: `Capturez l'attention de vos clients et stimulez leur appétit avec des photos alléchantes de vos plats. <br style="height: 8px;">Mettez en valeur la beauté et la qualité de vos créations culinaires grâce à des images de haute qualité, offrant ainsi une expérience visuelle attrayante qui va augmenter vos ventes et attirer plus de clients.`,
    }
  }
]
</script>

<template>
  <section class="section-features">
    <div class="section-features__head">
      <h2 class="section-features__head__title">Gagner du temps<br> avec nos fonctionnalités</h2>
      <p class="section-features__head__paragraph">Optez pour des solutions qui simplifient votre travail et vous permettent de gagner du temps. Avec nos fonctionnalités dédiées, vous pouvez optimiser votre temps et concentrer vos efforts sur ce qui compte vraiment : <strong>offrir une expérience exceptionnelle à vos clients</strong>.</p>
    </div>

    <div class="section-features__content">
      <CardTicket v-for="feature in features" :key="feature.title" v-bind="feature" :id="feature.iconName" />
    </div>
  </section>
</template>

<style lang="scss">
.section-features {
  br {
    display: block;
    content: "";
    height: 0px;
  }

  container-type: normal;
  container-name: section-features;

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
    display: grid;
    gap: 44px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "traduction traduction"
      "allergene photo";

    @media screen and (max-width: 768px) {
      display: grid;
      gap: 44px;
      grid-template-columns: 1fr;
      grid-template-areas: 
        "traduction"
        "allergene"
        "photo";
    }
  }
}

#traduction {
  grid-area: traduction;
}

#allergene {
  grid-area: allergene;
}

#photo {
  grid-area: photo;
}
</style>
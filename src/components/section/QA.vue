<script setup>

</script>

<template>
  <section class="section-qa">
    <div class="section-qa__head">
      <h2 class="section-qa__head__title"># Une question ? On répond</h2>
    </div>

    <div class="section-qa__content">
      <div class="section-qa__content__question">
        <div class="section-qa__content__question__header">
          <h3 class="section-qa__content__question__header__title">Pourquoi seulement une seule offre ?</h3>
          <div class="section-qa__content__question__header__space" />
        </div>
        <p class="section-qa__content__question__paragraph">
          Nous croyons fermement en la qualité, la fiabilité et un suivi irréprochable. 
          Ce sont nos valeurs fondamentales afin de garantir le meilleur service à chacun de nos clients.
          <br>Nous proposons donc une seule offre, assurant ainsi une prise en charge équitable et de la plus haute qualité pour tous.
        </p>
      </div>

      <div class="section-qa__content__question">
        <div class="section-qa__content__question__header">
          <h3 class="section-qa__content__question__header__title">Un site sur mesure c’est plus cher !?</h3>
          <div class="section-qa__content__question__header__space" />
        </div>
        <p class="section-qa__content__question__paragraph">
          Oui, c’est effectivement plus cher que d’utiliser un seul thème revendu à chaque client. Nous savons que chaque entreprise est unique et a besoin de détails spécifiques. C’est pourquoi nous offrons uniquement des sites sur mesure.
          <br>De plus, nous voulons proposer un menu entièrement personnalisé qui reflète parfaitement l’image de votre restaurant.
        </p>
      </div>

      <div class="section-qa__content__question">
        <div class="section-qa__content__question__header">
          <h3 class="section-qa__content__question__header__title">Ma question n’a pas de réponse</h3>
          <div class="section-qa__content__question__header__space" style="background-color: #CD3333;" />
        </div>
        <p class="section-qa__content__question__paragraph">
          Pas de soucis, envoyer un email directement à <a href="mailto:rollet.raphael+racine@gmail.com">rollet.raphael+racine@gmail.com</a>, on vous garantit la réponse sous 24h.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-qa {
  br {
    display: block;
    content: "";
    height: 8px;
  }
  container-type: normal;
  container-name: section-qa;

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
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 32px;

    &__question {
      display: flex;
      flex-direction: column;
      gap: 12px;

      &__header {
        &__title {
          width: 80%;
          padding-bottom: 8px;
          font-size: 28px;

          @media screen and (max-width: 768px) {
            width: 100%;
          }
        }

        &__space {
          height: 4px;
          background-color: var(--color-primary-base);
          width: 80%;
          border-radius: 2px;
        }
      }

      &__paragraph {
        margin: 0;
        margin-top: 4px;
        text-wrap: pretty;

        & a {
          color: #306EDA;
        }
      }
    }
  }
}
</style>
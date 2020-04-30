<template>
  <main>
    <article>
      <h2>{{ contact.title }}</h2>

      <section>
        <label for="email">Email</label>
        <p id="email">
          <a :href="`mailto:${contact.email}`" target="_blank">{{ contact.email }}</a>
        </p>
      </section>

      <section>
        <label for="address">Address</label>
        <p v-for="(line, index) of contact.address" :id="`address-${index + 1}`">{{ line }}</p>
      </section>

      <section>
        <label for="phone">Phone</label>
        <p v-for="(phone, index) of contact.phone" :id="`phone-${index + 1}`">
          <a :href="`tel:+${phone}`" target="_blank">{{ phone }}</a>
        </p>
      </section>

      <section>
        <label for="social">Social</label>
        <ul>
          <li v-for="media of contact.social">
            <a :href="media.link" target="_blank">
              <ion-icon :name="'logo-' + media.name" size="large"/>
            </a>
          </li>
        </ul>
      </section>
    </article>
    <aside>
      <figure class="map">
        <img :src="$withBase(contact.map.image)" alt="">
        <a class="directions" :href="contact.map.directions" target="_blank"><ion-icon name="compass"></ion-icon> Directions</a>
      </figure>
    </aside>
  </main>
</template>

<script>
export default {
  computed: {
    contact() {
      return this.$page.frontmatter;
    }
  },
}
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 25% 75%;
  align-items: center;

  & > article {
    padding: 3rem;

    & > h2 {
      margin: 0;
      margin-bottom: 2.5rem;
    }

    & > section {
      margin-bottom: 2rem;

      & > label {
        font-size: .875rem;
        margin-bottom: .75rem;
        display: block;
        font-weight: 300;
      }

      & > p {
        font-weight: 300;
        font-size: 1.25rem;
        margin: 0;
      }

      & > ul {
        list-style: none;
        padding: 0;
        margin: 0;

        & > li {
          margin-right: 1rem;
          display: inline-block;

          & ion-icon {
            display: block;
          }
        }
      }
    }
  }

  & > aside {
    padding: 1.5rem;
    height: 100%;

    & > figure.map {
      margin: 0;
      width: 100%;
      height: 100%;
      border-radius: .5rem;
      background: var(--grey-500);
      box-shadow: 0 .25rem .5rem rgba(0,0,0,.16);
      overflow: hidden;
      position: relative;

      & > img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }

      & > .directions {
        position: absolute;
        bottom: .25rem;
        right: .25rem;
        padding: .5rem;
        opacity: .64;
        transition: var(--transition-quick);

        &:hover, &:focus {
          opacity: 1;
        }
      }
    }
  }
}

ion-icon {
  font-size: 1.25rem;
  vertical-align: middle;
}
</style>
<template>
  <main>
    <h2>About Us</h2>
    <blockquote>
      <Content slot-key="quote"/>
    </blockquote>

    <Content class="about-abstract"/>

    <section>
      <div v-for="person of data.people">
        <figure>
          <img src="https://via.placeholder.com/288x288" alt="">
        </figure>
        <h3>{{ person.name }}</h3>
        <span>Reg. No.: {{ person.reg_no }}</span>
        <p>{{ person.blurb }}</p>
        <ul class="social">
          <li v-for="media of person.social">
            <a :href="media.link" target="_blank">
              <ion-icon :name="'logo-' + media.name" size="large"></ion-icon>
            </a>
          </li>
        </ul>
      </div>

    </section>
  </main>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    margin-bottom: 1.5rem;
  }

  & > blockquote {
    max-width: 60vw;
    text-align: center;
    margin: 1rem 3rem;
    padding: 1rem;

    color: rgba(255,255,255,.64);
    font-weight: 300;
    font-size: 1.25rem;
    font-style: italic;

    quotes: "“" "”" "‘" "’";
    position: relative;

    &::before, &::after {
      position: absolute;
      top: 0rem;
      font-size: 3rem;
      font-family: cursive;
      color: rgba(255,255,255,.32);
    }
    &::before {
      content: open-quote;
      left: -2rem;
    }
    &::after {
      content: close-quote;
      right: -1rem;
    }
  }

  & .about-abstract {
    max-width: 80vw;
    text-align: center;
  }

  & > section {
    --top-offset: 1.5rem;

    display: grid;
    grid-template-columns: repeat(2, 24rem);
    grid-column-gap: 3rem;
    padding-top: var(--top-offset);

    & > div {
      background: var(--grey-500);
      border-radius: .5rem;
      box-shadow: 0 .25rem .5rem rgba(0,0,0,.16);

      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 1.5rem;

      & > figure {
        margin: 0;
        margin-top: calc(-1 * calc(var(--top-offset) + 1.5rem));
        margin-bottom: 2rem;
        border-radius: .5rem;
        box-shadow: 0 .25rem .5rem rgba(0,0,0,.16);
        overflow: hidden;
        width: 18rem;
        height: 18rem;

        & > img {
          display: block;
          width: 100%;
          height: 100%;
          background: var(--grey-400);
        }
      }

      & > h3 {
        margin: 0;
        margin-bottom: 1rem;
      }

      & > span {
        font-size: .75rem;
        color: rgba(255,255,255,.4);
        font-weight: 300;
        margin-bottom: 1rem;
      }

      & > p {
        font-weight: 300;
        text-align: center;
        color: rgba(255,255,255,.54);
        margin-bottom: 1rem;
        margin: 0;
        margin-bottom: 1.5rem;
      }

      & > ul.social {
        margin: 0;
        padding: 0;
        list-style: none;
        text-align: center;

        & > li {
          display: inline-block;
          margin: 0 .25rem;

          & ion-icon {
            display: inline-block;
            color: rgba(255,255,255,.54);
          }
        }
      }
    }
  }
}
</style>
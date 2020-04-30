<template>
  <main id="project-page">
    <article>
      <header>
        <the-button type="button" flat="true" myClass="btn-back" @click.native="goBack">
          <ion-icon name="arrow-back"></ion-icon>
        </the-button>
        <h3>{{ project.title }}</h3>
      </header>

      <section>
        <label for="location">Location</label>
        <p id="location">{{ project.location }}</p>
      </section>

      <section>
        <label for="status">Status</label>
        <p id="status">{{ project.status }}</p>
      </section>

      <section>
        <label for="timeline">Timeline</label>
        <p id="timeline">{{ project.startDate }} &ndash; {{ project.completionDate }}</p>
      </section>

      <section>
        <label for="carpetArea">Carpet Area</label>
        <p id="carpetArea">{{ project.carpetArea }}</p>
      </section>

      <Content class="description"/>
    </article>

    <aside>
      <figure>
        <img :src="selectedPicture.link" :alt="selectedPicture.description">
      </figure>
      <nav>
        <ul class="pictures-list">
          <li v-for="(picture, index) of project.pictures" @click="selectPicture(picture)" :key="index">
            <input hidden type="radio" name="thumbnail" :id="`thumbnail-${index}`" :checked="isPictureSelected(picture)" :autofocus="isPictureSelected(picture)">
            <label :for="`thumbnail-${index}`">
              <img :src="picture.link" :alt="picture.description">
            </label>
          </li>
        </ul>
      </nav>
    </aside>
  </main>
</template>

<script>
import TheButton from '@theme/components/TheButton';

export default {
  components: {
    TheButton,
  },
  computed: {
    project() {
      return this.$page.frontmatter;
    }
  },
  created() {
    },
  mounted() {
    if (this.project.pictures.length > 0) {
      this.selectPicture(this.project.pictures[0]);
    }

    document.addEventListener("keydown", (event) => {
      console.log(event);
      if (event.key === 'ArrowRight') {
        this.nextPicture();
      } else if (event.key === 'ArrowLeft') {
        this.previousPicture();
      }
    });
  },
  data() {
    return {
      selectedPicture: {},
    };
  },
  methods: {
    goBack(event) {
      this.$router.back();
    },
    selectPicture(picture) {
      this.selectedPicture = picture;
    },
    isPictureSelected(picture) {
      return this.selectedPicture.link === picture.link;
    },
    nextPicture() {
      const currentIndex = this.project.pictures.findIndex(this.isPictureSelected);
      const nextIndex = (currentIndex + 1) % this.project.pictures.length;
      this.selectPicture(this.project.pictures[nextIndex]);
    },
    previousPicture() {
      const currentIndex = this.project.pictures.findIndex(this.isPictureSelected);
      const nextIndex = (this.project.pictures.length + currentIndex - 1) % this.project.pictures.length;
      this.selectPicture(this.project.pictures[nextIndex]);
    },
  }
}
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 100%;
  height: calc(100vh - var(--header-height, 4rem));

  & > article {
    padding: 3rem;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    & > header {
      margin-bottom: 2.5rem;
      display: flex;
      align-items: flex-start;

      & > .btn.btn-back {
        position: fixed;
        top: calc(var(--header-height, 4rem) + 3rem);
        height: 2rem;
        width: 3rem;
        padding: 0;
        margin-left: -3rem;

        & > ion-icon {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      }

      & > h3 {
        margin: 0;
        line-height: 2rem;
      }
    }

    & > section {
      &:not(:last-of-type) {
        margin-bottom: 2rem;
      }

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
    }

    & .description {
      margin: 1rem 0;
      font-weight: 300;
      font-size: 1.25rem;
    }
  }

  & > aside {
    padding: 1.5rem;

    & > figure {
      margin: 0;
      width: 100%;
      height: calc(100vh - 8.5rem - 3rem - 4rem);
      border-radius: .5rem;
      background: var(--grey-500);
      box-shadow: 0 .25rem .5rem rgba(0,0,0,.16);
      overflow: hidden;
      position: relative;

      & > img {
        height: 100%;
        max-width: 100%;
        display: block;
        object-fit: contain;
        margin-left: auto;
        margin-right: auto;
      }
    }

    & nav {
      width: 100%;

      & > ul.pictures-list {
        margin: 0;
        padding: 0;
        list-style: none;
        padding: .5rem 0;

        display: grid;
        grid-auto-flow: column;

        overflow-x: auto;

        & > li {
          display: inline-block;
          width: 12rem;
          height: 8rem;
          margin-right: .5rem;

          & label {
            display: block;
            height: 100%;
            box-sizing: border-box;
            overflow: hidden;
          }

          & input[type=radio]:checked + label {
            border: 4px solid white;
            border-radius: .5rem;
          }

          & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }
      }
    }
  }
}
</style>

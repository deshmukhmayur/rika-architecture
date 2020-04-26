<template>
  <router-link :to="_project.path" class="card">
    <img :src="_project.thumbnail" :alt="_project.title">
    <section>
      <h5>{{ _project.title }}</h5>
      <p>
        <span class="type">{{ _project.type }}</span>
        <span class="status">{{ _project.status }}</span>
      </p>
    </section>
  </router-link>
</template>

<script>
export default {
  props: [
    'project',
  ],
  computed: {
    _project() {
      return {
        ...this.project.frontmatter,
        path: this.project.path,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;

  color: inherit;
  background: var(--grey-500);
  border-radius: .5rem;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.16);

  overflow: hidden;
  transition: transform var(--transition-quick);

  &:hover, &:focus {
    box-shadow: 0 .25rem .5rem rgba(0,0,0,.16);
    transform: scale(1.01);
  }

  & > img {
    width: 100%;
    min-height: 200px;
    display: block;
  }

  & > section {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: .5rem 1rem;
    box-sizing: border-box;

    border-radius: .5rem;
    background: linear-gradient(0deg, #2a2a2a 0%, #2a2a2aee 30%, #2a2a2a55 70%, transparent 100%);

    & > h5 {
      margin: 0;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.75rem;
    }

    & > p {
      margin: 0;
      font-size: .75rem;
      font-weight: 300;
      line-height: 1.25rem;

      & span.status {
        float: right;
        text-transform: capitalize;
      }
    }
  }
}
</style>

<template>
  <section class="projects-list">
    <project-card v-for="project of projects" :project="project"></project-card>
  </section>
</template>

<script>
import ProjectCard from '@theme/components/ProjectCard';

export default {
  components: {
    ProjectCard,
  },
  props: [
    'projects'
  ],
}
</script>

<style lang="scss" scoped>
.projects-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  grid-auto-flow: row;
}
</style>

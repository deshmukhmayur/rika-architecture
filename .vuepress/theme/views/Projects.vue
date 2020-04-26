<template>
  <main>
    <header>
      <h2>Projects</h2>

      <ul class="filters">
        <li>
          <input type="radio" name="statusFilter" id="status-all" value="all" v-model="selectedFilter">
          <label for="status-all">All</label>
        </li>
        <li>
          <input type="radio" name="statusFilter" id="status-ongoing" value="ongoing" v-model="selectedFilter">
          <label for="status-ongoing">Ongoing</label>
        </li>
        <li>
          <input type="radio" name="statusFilter" id="status-complete" value="complete" v-model="selectedFilter">
          <label for="status-complete">Complete</label>
        </li>
      </ul>
    </header>

    <projects-grid :projects="filteredProjects"></projects-grid>
  </main>
</template>

<script>
import ProjectsGrid from '@theme/components/ProjectsGrid';

export default {
  components: {
    ProjectsGrid,
  },
  data() {
    return {
      selectedFilter: 'all',
    };
  },
  computed: {
    filteredProjects() {
      const allProjects = this.$site.pages
        .filter(page => page.path.match(/^\/projects\/.+/i));

      if (this.selectedFilter === 'all') {
        return allProjects;
      } else {
        return allProjects.filter(project => project.frontmatter.status.toLowerCase() === this.selectedFilter);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > h2 {
    margin: 1rem 0;
  }

  & > ul.filters {
    list-style: none;
    padding: 0;
    margin: 0;

    & > li {
      display: inline-block;

      & > label {
        color: rgba(255,255,255,.64);
        padding: 0 1rem;
        line-height: 2.5rem;
        font-weight: 300;
        font-size: 1rem;
        display: inline-block;
        cursor: pointer;
      }

      & > input[type=radio] {
        display: none;

        &:checked + label {
          color: rgba(255,255,255,1);
          font-weight: 400;
        }
      }
    }
  }
}
</style>
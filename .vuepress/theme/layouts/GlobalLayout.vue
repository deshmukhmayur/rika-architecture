<template>
  <div class="page">
    <the-header></the-header>

    <transition name="fade" mode="out-in">
      <component :is="view"/>
    </transition>

    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '@theme/components/TheHeader';
import TheFooter from '@theme/components/TheFooter';

import Home from '@theme/views/Home';
import Projects from '@theme/views/Projects';
import Project from '@theme/views/Project';
import Contact from '@theme/views/Contact';
import About from '@theme/views/About';
import Page from '@theme/views/Page';

export default {
  components: {
    TheHeader,
    TheFooter,
    Home,
    Projects,
    Project,
    Contact,
    About,
    Page,
  },
  computed: {
    view() {
      if (this.$page.path) {
        if (this.$page.frontmatter.view) {
          return this.$page.frontmatter.view;
        }
        return 'page';
      }
      return 'NotFound';
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding-top: var(--header-height);
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: border-box;

  & > main {
    flex: 1 0 auto;
  }
}
</style>
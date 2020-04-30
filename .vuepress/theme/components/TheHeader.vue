<template>
  <header>
    <router-link
      class="logo"
      to="/">
      {{ $site.title }}
    </router-link>

    <nav>
      <router-link v-for="nav in links"
        :to="nav.link"
        :exact="true"
        class="nav-link">{{ nav.text }}</router-link>

      <the-button class="cta primary" :url="$withBase(cta.link)">{{ cta.text }}</the-button>
    </nav>
  </header>
</template>

<script>
import TheButton from '@theme/components/TheButton';

export default {
  components: { TheButton },
  computed: {
    links() {
      return this.$site.themeConfig.nav.filter(item => !item.cta);
    },
    cta() {
      return this.$site.themeConfig.nav.find(item => item.cta);
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--header-height, 4rem);
  padding: 0 2rem;
  background: transparent;
  z-index: 999;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
}

nav {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > .nav-link {
    font-weight: 300;
    text-decoration: none;
    color: var(--default-text);
    margin-left: .5rem;
    padding: .5rem 1rem;
    transition: all var(--transition-default);

    &:focus {
      text-decoration: underline;
    }

    &.router-link-active {
      color: var(--primary-color, red);
      font-weight: 600;
    }
  }

  & .cta {
    margin-left: 2rem;
  }
}

.logo {
  color: inherit;
  text-decoration: none;
}
</style>
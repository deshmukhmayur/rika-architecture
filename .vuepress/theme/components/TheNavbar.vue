<template>
  <nav>
    <ul>
      <li v-for="nav in $site.themeConfig.nav">
        <router-link
          class="nav-link"
          :to="nav.link"
          :exact="true">
          {{ nav.text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    nav() {
      return this.$site.themeConfig.nav
        .filter(nav => !nav.isInactive);
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: rgba(255,255,255,.15);
  box-shadow: 0 0 .5rem rgba(0,0,0,.16);

  & > ul {
    margin: 0;
    padding: 0 2rem;
    list-style: none;
    
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-evenly;


    & > li {
      width: 25%;
      text-align: center;
    }

    .nav-link {
      display: inline-block;
      padding: 0 1rem;
      color: inherit;
      text-decoration: none;
      font-size: 1.25rem;
      line-height: 5rem;
      font-weight: 300;
      transition: all 240ms ease-in-out;

      &:hover, &.router-link-active {
        font-weight: 600;
        color: var(--primary-color, red);
      }
    }
  }
}
</style>
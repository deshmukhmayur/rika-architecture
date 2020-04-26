<template>
  <footer>
    <p>&copy; 2020 <router-link to="/">rika Architecture</router-link></p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  // position: absolute;
  bottom: 0;
  left: 0;
  height: var(--footer-height);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > p {
    margin: 0;
    font-size: 1rem;
    font-weight: 200;
    color: rgba(255,255,255,.75);
  }
}
</style>
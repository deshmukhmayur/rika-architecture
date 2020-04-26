<template>
  <button v-if="type === 'button'" :class="['btn', myClass, { 'flat': flat }]"><slot></slot></button>
  <a v-else :href="url" :class="['btn', myClass, { 'flat': flat }]"><slot></slot></a>
</template>

<script>
export default {
  props: [
    'url',
    'myClass',
    'flat',
  ],
  data() {
    return {
      type: this.url ? 'link' : 'button',
    };
  },
}
</script>

<style lang="scss" scoped>
.btn {
  appearance: none;
  border: none;
  background: none;
  color: var(--default-text);
  padding: 0 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2.5rem;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: .5rem;
  cursor: pointer;
  transition: all 240ms ease-in-out;

  &:not(.flat) {
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.16);
  }

  &:hover, &:focus {
    box-shadow: 0 .25rem .5rem rgba(0,0,0,.16);
  }

  &.primary {
    background: var(--primary-color, red);

    &:hover, &:focus {
      background: var(--primary-color-dark, darkred);
    }
  }
}
</style>
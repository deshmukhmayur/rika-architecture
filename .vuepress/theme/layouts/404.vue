<template>
  <main class="not-found">
    {{ msg }}
  </main>
</template>

<script>
import TheHeader from '../components/TheHeader';
import TheNavbar from '../components/TheNavbar';

export default {
  components: { TheHeader, TheNavbar },
  data() {
    return {
      msg: 'Not Found',
    };
  }
}
</script>
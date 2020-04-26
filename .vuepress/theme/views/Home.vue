<template>
  <main>
    <section>
      <Content/>
    </section>
    <aside>
      <!-- <img src="{{ page.frontmatter.coverImage }}" :alt="page.frontmatter.coverImageAltText"> -->
      <figure>
        <img>
      </figure>
    </aside>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  grid-template-rows: 100%;
  align-items: center;

  & > section > div.content__default {
    padding: 10rem;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  & > aside {
    align-self: stretch;
    padding: 1.5rem;

    & > figure {
      margin: 0;
      background: var(--grey-500);
      height: 100%;
      width: 100%;
      border-radius: .25rem;
      overflow: hidden;
      box-shadow: 0 .125rem .25rem rgba(0,0,0,.16);
    }
  }
}
</style>
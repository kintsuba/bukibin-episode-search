<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p class="has-text-centered">
        <small>&copy; 2019 きんつば</small>
      </p>

      <b-button
        size="is-small"
        icon-pack="fab"
        icon-left="twitter"
        type="is-primary"
        outlined
        rounded
        tag="a"
        href="https://twitter.com/awhcs"
      >
        awhcs
      </b-button>

      <b-button
        size="is-small"
        icon-pack="fab"
        icon-left="github"
        type="is-primary"
        outlined
        rounded
        tag="a"
        href="https://github.com/kintsuba/"
      >
        Kintsuba
      </b-button>
      <b-button
        size="is-small"
        icon-pack="fab"
        icon-left="steam"
        type="is-primary"
        outlined
        rounded
        tag="a"
        href="https://steamcommunity.com/id/kintsuba/"
      >
        Kintsuba
      </b-button>
      <p class="has-text-centered mt-5">
        <small
          >Source:
          <a href="https://github.com/kintsuba/bukibin-episode-search"
            >https://github.com/kintsuba/bukibin-episode-search</a
          >
        </small>
      </p>
    </div>
  </footer>
</template>

<style scoped></style>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Bottom extends Vue {}
</script>

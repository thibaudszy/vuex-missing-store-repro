<template>
  <div id="app">
    <h1>Count from vuex</h1>

    <h2>{{ count }}</h2>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import { namespace } from './getSuffix';

export default {
  name: 'App',
  computed: {
    ...mapState({
      count: state => state[namespace].count
    } )
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

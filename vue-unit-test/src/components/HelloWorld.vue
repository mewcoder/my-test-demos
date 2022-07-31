<template>
  <div class="hello">
    <button @click="count += 1">Click</button>
    <button @click="$emit('hello', 123)" data-testid="btn">测试</button>
    <p data-testid="count-text">{{ count }}</p>
    <h1>{{ msg }}</h1>
    <Foo />
    <h3>Installed CLI Plugins</h3>
  </div>
</template>

<script>
import Foo from './Foo';

export default {
  name: 'HelloWorld',
  components: {
    Foo
  },
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

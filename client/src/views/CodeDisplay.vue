<template>
  <div class="wrapper">
    <div class="line-numbers">
      <p v-for="num in linesOfCode" v-bind:key="num">{{ num }}</p>
    </div>
    <pre><code class="code-display">{{value}}</code></pre>
  </div>
</template>

<script>
export default {
  name: "CodeDisplay",
  data() {
    return {
      value: "<h1>Loading Data...</h1>",
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    fetch(`/api/code/${this.$route.params.id}`, {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.value = data;
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    linesOfCode() {
      console.log(this.value);
      if (this.value.length !== 0) {
        return this.value.split("\n").length;
      }
      return 1;
    },
  },
};
</script>

<style>
code {
  color: var(--colMain);
  font-family: monospace;
}
.wrapper {
  display: flex;
  font-size: 1rem;
  margin-top: 1rem;
}
.code-display {
  padding: 0;
  margin: 0;
}
pre {
  margin: 0;
  padding: 0;
}
.line-numbers p {
  font-size: 1rem;
  color: var(--colMain);
  margin-right: 1rem;
  text-align: end;
}
.line-numbers {
  margin-left: 0.5rem;
  display: inline-block;
}
</style>
<template>
  <div class="wrapper">
    <div class="line-numbers">
      <p>1</p>
      <p>2</p>
    </div>
    <pre><code class="code-display">{{value}}</code></pre>
  </div>
</template>

<script>
export default {
  name: "CodeDisplay",
  data() {
    return {
      value: "<h1>hello<h1>",
    };
  },
  mounted() {
    console.log("fetch");
    hljs.highlightAll();
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
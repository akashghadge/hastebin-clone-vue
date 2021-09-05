<template>
  <div class="wrapper">
    <div class="line-numbers">
      <p v-for="num in linesOfCode - 1" v-bind:key="num">{{ num }}</p>
      <p>&gt;</p>
    </div>
    <textarea
      id="codeEditorTextarea"
      name="codeValue"
      v-model="codeData"
      @keyup="textAreAdjust"
      @keydown="textareaTab"
      autofocus
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "CodeEditor",
  data() {
    return {
      codeData: "",
    };
  },
  methods: {
    textareaTab(event) {
      let element = event.target;
      if (event.keyCode === 9) {
        event.preventDefault();
        var v = element.value,
          s = element.selectionStart,
          e = element.selectionEnd;
        element.value = v.substring(0, s) + "\t" + v.substring(e);
        element.selectionStart = element.selectionEnd = s + 1;
      }
    },
    textAreAdjust(e) {
      e = e.target;
      e.style.height = "1px";
      e.style.height = 25 + e.scrollHeight + "px";
    },
  },
  computed: {
    linesOfCode() {
      if (this.codeData.length !== 0) {
        return this.codeData.split("\n").length;
      }
      return 1;
    },
  },
};
</script>

<style>
#codeEditorTextarea {
  padding: 0;
  margin: 0;
  color: var(--colMain);
  font-family: monospace;
  outline: none;
  border: none;
  min-height: 100vh;
}
textarea {
  background: transparent;
  width: 100%;
  height: 100vh;
}
</style>
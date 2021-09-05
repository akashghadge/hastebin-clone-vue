<template>
  <div class="button-box">
    <h3>Hastebin</h3>
    <button @click="saveDoc">Save</button>
    <button @click="newDoc">New</button>
  </div>
</template>

<script>
export default {
  name: "ButtonBox",
  data() {
    return {};
  },
  methods: {
    // for saving snippet
    saveDoc(e) {
      this.$store
        .dispatch("saveCode", { codeData: this.$store.state.codeData })
        .then((data) => {
          console.log("succes", data);
          this.$alert(
            `Copy this link :-
            ${window.location.origin}/codes/${data._id}`,
            "Success",
            "success"
          );
        })
        .catch((err) => {
          console.log(err);
          this.$alert(err, "Failed to Save", "warning");
        });
    },
    newDoc() {
      window.location.assign("/");
    },
  },
};
</script>

<style>
.button-box {
  position: fixed;
  top: 0;
  right: 0;
  padding: 2rem;
  opacity: 1;
  background: var(--bgCol);
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 300ms ease-in-out;
}
.button-box :hover {
  cursor: pointer;
  opacity: 1;
}
.button-box h3 {
  color: var(--colMain);
  text-align: center;
}
.button-box button {
  padding: 0.5em;
  background-color: transparent;
  border: 1px solid var(--colMain);
  color: var(--colMain);
  margin-left: 0.25rem;
  border-radius: 00.25rem;
}
</style>
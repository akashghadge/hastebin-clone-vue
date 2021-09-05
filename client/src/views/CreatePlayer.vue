<template>
  <div>
    <label for="name">Name :</label>
    <input type="text" v-model="playerName" />
    <br />
    <label for="Country">Country :</label>
    <select name="country" v-model="country" id="">
      <option value="ind">ind</option>
      <option value="aus">aus</option>
      <option value="eng">eng</option>
      <option value="sa">sa</option>
      <option value="nz">nz</option>
      <option value="pak">pak</option>
      <option value="wi">wi</option>
      <option value="sl">sl</option>
    </select>
    <br />
    <input
      type="radio"
      name="typeOfPlayer"
      value="bat"
      v-model="typeOfPlayer"
      id=""
    />
    <label for="">Bat</label>
    <input
      type="radio"
      name="typeOfPlayer"
      v-model="typeOfPlayer"
      value="bowl"
      id=""
    />
    <label for="">Bowl</label>
    <input
      type="radio"
      name="typeOfPlayer"
      v-model="typeOfPlayer"
      value="all"
      id=""
    />
    <label for="">All</label>
    <input
      type="radio"
      name="typeOfPlayer"
      v-model="typeOfPlayer"
      value="wk"
      id=""
    />
    <label for="">Wk</label>
    <br />
    <label for="age">Age : </label>
    <input type="number" name="age" id="" v-model="age" />
    <br />
    <button @click="submit()">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerName: "akash",
      country: "ind",
      typeOfPlayer: "all",
      age: 18,
    };
  },
  methods: {
    submit() {
      let obj = {
        age: this.age,
        name: this.playerName,
        country: this.country,
        typeOfPlayer: this.typeOfPlayer,
      };
      //   saving to localstorage
      localStorage.setItem("player-main", JSON.stringify(obj));
      console.log(JSON.parse(localStorage.getItem("player-main")));
    },
  },
};
</script>

<style>
</style>
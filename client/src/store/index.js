import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    codeData: ""
  },
  mutations: {
    updateData(state, newCodeData) {
      state.codeData = newCodeData;
    }
  },
  actions: {
    saveCode(state, payload) {
      return new Promise((resolve, reject) => {
        fetch('http://localhost:5000/api/save-code', {
          method: "POST",
          codeData: state.codeData
        }).then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            resolve(data);
          })
          .catch((err) => {
            console.log(err);
            reject(err)
          })
      })
      state.codeData = "";
    }
  },
  modules: {
  }
})

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
      let obj = {
        codeData: payload.codeData
      };

      return new Promise((resolve, reject) => {
        fetch('/api/code/save-code', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
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
    }
  },
  modules: {
  }
})

const auth = {
  state: function () {
    return {
      user_id: '',
      name: '',
      token: '',
    }
  },
  mutations: {
    setAuthInfo: function (state, payload) {
      state.user_id = payload
    },
  },
  getters: {
    getToken: function (state) {
      return 'Bearer' + state.token
    },
  },
}
export default auth
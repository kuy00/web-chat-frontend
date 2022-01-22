const auth = {
  state: function () {
    return {
      user: {
        user_id: '',
        name: '',
        token: '',
      },
    }
  },
  mutations: {
    setAuthInfo: function (state, payload) {
      state.user = { ...payload }
    },
  },
  getters: {
    isAuth: function (state) {
      return !!state.user.token
    },
    getUser: function (state) {
      return {
        user_id: state.user.user_id,
        name: state.name,
      }
    },
    getToken: function (state) {
      return 'Bearer' + state.user.token
    },
  },
}
export default auth

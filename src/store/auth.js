const auth = {
  state: () => {
    return {
      user_id: '',
      name: '',
      token: '',
    }
  },
  mutations: {
    setAuthInfo: (state, auth) => {
      state.user_id = auth.user_id
      state.name = auth.name
      state.token = auth.token
    },
  },
  getters: {
    isAuth: (state) => {
      return !!state.token
    },
    getUser: (state) => {
      return {
        user_id: state.user_id,
        name: state.name,
      }
    },
    getToken: (state) => {
      return 'Bearer ' + state.token
    },
  },
}
export default auth

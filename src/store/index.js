import { createStore } from 'vuex'
import userStore from './userStore'
import movieStore from './movieStore';

export default createStore({
  modules: {
    userStore,
    movieStore
  }
})

import store from '@/store';

const loginGuard = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      store.commit('userStore/setUser', user);
      // Redirect to inside app
      return {name: 'show-list'}
    }
    // Acces to Login in case the user is not in local storage
    return true
}

export default loginGuard
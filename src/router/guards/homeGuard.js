import store from '@/store';

const homeGuard = () => {
    const user = store.getters['userStore/getUser'];
    if (user) return true 

    return {name: 'login'};
}

export default homeGuard
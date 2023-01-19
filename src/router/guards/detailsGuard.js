import store from "@/store"


const detailsGuard = () => {
    const selectedShow = store.getters['movieStore/selectedShow'];

    if (!selectedShow) {
        alert('Eyyyy!! where u go? You need to go to home page and select item first ;) ');
        return false;
    }

    return true;
}

export default detailsGuard;
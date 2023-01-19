const movieStore = {
    namespaced: true,
    state: () => ({
        shows: null,
        isLoadingData: false,
        selectedShow: null,
    }),
    mutations: {
        setShows(state, shows) {
            state.shows = shows;
        },
        setLoadingData(state, value) {
            state.isLoadingData = value;
        },
        setSelectedShow(state, show) {
            state.selectedShow = show;
        }
    },
    getters: {
        isLoadingData(state) {
            return state.isLoadingData;
        },
        selectedShow(state) {
            return state.selectedShow;
        },
        getShows(state) {
            return state.shows;
        },
        isLoadingData(state) {
            return state.isLoadingData;
        }
    },
    actions: {
        async loadShows({commit}, query) {
            commit('setLoadingData', true);
            const baseUrl = 'https://api.tvmaze.com/search/shows?q=';
            try {
                if (!query) query = 'girls';
                const resp = await fetch(`${baseUrl + query}`);
                const data = await resp.json();
                if (data) commit('setShows', data);
            } catch (error) {
                alert('Error to load data, please refresh the browser')
            } finally {
                commit('setLoadingData', false)
            }
        }
    }
};

export default movieStore;

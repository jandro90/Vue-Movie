const userStore = {
    namespaced: true,
    state: () => ({
        user: null,
        isLoadingUser: false,
    }),
    mutations: {
        setLoadingState(state, value) {
            state.isLoadingUser = value;
        },
        setUser(state, user) {
            state.user = user;
        },
        clearUser(state) {
            localStorage.removeItem('user');
            state.user = null;
        },
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getLoadingUser(state) {
            return state.isLoadingUser;
        },
    },
    actions: {
        async loginUser({commit}, {userNameValue, userPasswordValue}) {
            commit('setLoadingState', true);
            const fakeLogin = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (userNameValue === 'alejandro' && userPasswordValue === 'alejandro123') resolve({ userName: 'alejandro', userPassword: 'alejandro123' });
                    else reject();
                    commit('setLoadingState', false);
                },2000);
            });

            try {
                const response = await fakeLogin;
                commit('setUser', response);
                localStorage.setItem('user', JSON.stringify(response));
            } catch (err) {
                alert('Username or Password Incorrect!')
            }
        }
    }
};

export default userStore;

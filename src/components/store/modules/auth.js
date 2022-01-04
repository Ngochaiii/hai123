const state = {
    auth: {
        isAuthenticated : false
    }
};
const getter = {

};
const actions= {};
const mutations = {
    TOGGLE_AUTH(state) {
        state.auth.isAuthenticated =! state.auth.isAuthenticated;
    },
};
export default {
    state,
    getter,
    actions,
    mutations, 
};
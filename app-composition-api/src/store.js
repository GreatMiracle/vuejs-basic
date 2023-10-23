import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            count: 0.
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    },
    actions: {
        fetchTransaction(ctx) {
            console.log(ctx);
        }
    }
})

export default store;
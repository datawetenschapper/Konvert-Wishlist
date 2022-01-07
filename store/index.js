export const state = () => ({
        menus: null,
        menu: null,
    })
    // If you wish to modify state data prior to acquisition.
export const getters = {

    }
    // Used to set/mutate state 
export const mutations = {
        SET_STATE(state, item) {
            state[item.key] = item.value
        }

    }
    // Fetch data and add business logic if need be.
export const actions = {}
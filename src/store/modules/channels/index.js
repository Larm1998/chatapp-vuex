const module = {
    namespaced: true,
    state() {
        return {
            channel: null,
            channels: [
                { id: 1, name: 'Channel 1', messages: null },
                { id: 2, name: 'Channel 2', messages: null },
                { id: 3, name: 'Channel 3', messages: null },
                { id: 4, name: 'Channel 4', messages: null },
            ]
        }
    },
    getters: {
        getChannels: (state, getters, rootState, rootGetters) => (search) => {
            return state.channels
            .filter(
                (channel) => channel.name
                    .toLowerCase()
                    .includes(search.toLowerCase())
            ).map((channel) => {
                    const messages = rootGetters['messages/getUnreadMessages'](channel.id);
                    console.log(messages)
                    return {
                        ...channel,
                        messages
                    }
                })
        }
    },
    mutations: {
        setChannel: () => {

        }
    }
}

export default module
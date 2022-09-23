import getters from "./getters"

const module = {
    namespaced: true,
    state() {
        return {
            messages: [
                {
                    id: 1,
                    author: 1,
                    message: 'Hello 👀', 
                    timestamp: new Date().toLocaleTimeString(),
                    read: true,
                    channelId: 1,
                },
                {
                    id: 2,
                    author: 2,
                    message: 'Channel 2', 
                    timestamp: new Date().toLocaleTimeString(),
                    read: false,
                    channelId: 2,
                },
                {
                    id: 3,
                    author: 3,
                    message: 'Channel 2 - messages 2', 
                    timestamp: new Date().toLocaleTimeString(),
                    read: false,
                    channelId: 2,
                },
                {
                    id: 4,
                    author: 1,
                    message: 'My message', 
                    timestamp: new Date().toLocaleTimeString(),
                    read: false,
                    channelId: 2,
                },
            ]
        }
    },
    getters
}

export default module
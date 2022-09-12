import { reactive } from 'vue'

const store = reactive({
    username: 'lrangel',
    updateUsername(username) {
        this.username = username
    }
})

export default store
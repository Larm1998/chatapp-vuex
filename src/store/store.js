const store = {
    profile: {
        username: ''
    },
    contacts: [
        {
            id: 1,
            username: 'User 3'
        },
        {
            id: 2,
            username: 'User 2'
        }
    ],
    messages: [
        {
            id: 1,
            msg: 'Hello',
            author: 1,
        },
        {
            id: 2,
            msg: 'Hello',
            author: 2,
        },
        {
            id: 3,
            msg: 'Hello',
            author: 1
        },
        {
            id: 4,
            msg: 'Hello',
            author: 2
        }
    ],
    channels: [
        {
            id: 1,
            name: 'Channel 1',
            messages: [1, 2]
        },
        {
            id: 2,
            name: 'Channel 2',
            messages: [3,4]
        }
    ]
}
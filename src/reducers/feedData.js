const initialState = {
    feedData: {
        feed: undefined,
        comments: undefined
    }
}

const FeedData = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN_DATA': {
            return {
                feedData: {
                    feed: action.payload.value[0].data,
                    comments: action.payload.value[1].data
                }
            }
        }
        default:
            return state;
    }
}

export default FeedData;
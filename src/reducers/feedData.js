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
                // feedData: {
                //     feed: action.payload.value[0].data,
                //     comments: action.payload.value[1].data
                // }
                feedData: action.payload.value[0].data.map(
                    feedValue=>{return{
                        id: feedValue.id,
                        title: feedValue.title,
                        body: feedValue.body,
                        imageURL: feedValue.imageURL,
                        comments: action.payload.value[1].data.filter(
                            commentValue=>{
                                return commentValue.id === feedValue.id
                            }
                        )
                    }}
                )
            }
        }
        default:
            return state;
    }
}

export default FeedData;
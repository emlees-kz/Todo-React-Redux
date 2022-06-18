const COMMENT_CREATE = "COMMENT_CREATE"

let intialState = {
    comments: []

}

export const CommentReducer = (state = intialState, action) => {
    console.log("State info>>>", state.comments);
    switch (action.type) {
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data]
            }
        default:
            return state
    }
}

export function CommentCreate(text, id) {
    return {
        type: COMMENT_CREATE,
        data: { text, id }
    }
}
const COMMENT_CREATE = "COMMENT_CREATE"
const COMMENT_DELETE = "COMMENT_DELETE"

let intialState = {
    comments: []

}

export const CommentReducer = (state = intialState, action) => {
    switch (action.type) {
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data]
            }
        case COMMENT_DELETE:
            const {id} = action
            const {comments} = state
            const itemIndex = comments.findIndex(e => e.id === id)

            const nextComments = [
                ...comments.slice(0,itemIndex),
                ...comments.slice(itemIndex + 1)
            ]
            return {
                ...state,
                comments: nextComments
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

export function CommentDelete(id) {
    return {
        type: COMMENT_DELETE,
        id
    }
}
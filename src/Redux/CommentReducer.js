import { COMMENT_COMPLETE, COMMENT_CREATE, COMMENT_DELETE } from "./actions"


let intialState = {
    comments: [],
}

export const CommentReducer = (state = intialState, action) => {
    switch (action.type) {
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data]
            }
        case COMMENT_DELETE:
            const { id } = action
            const { comments } = state
            const itemIndex = comments.findIndex(e => e.id === id)

            const nextComments = [
                ...comments.slice(0, itemIndex),
                ...comments.slice(itemIndex + 1)
            ]
            return {
                ...state,
                comments: nextComments
            }
        case COMMENT_COMPLETE:
            return (() => {
                const { data } = action;
                const { comments } = state;
                const itemIndex = comments.findIndex(res => res.id === data.id);
          
                const nextComments = [
                  ...comments.slice(0, itemIndex),
                  data,
                  ...comments.slice(itemIndex + 1)
                ];
          
                return {
                  ...state,
                  comments: nextComments
                }
            })();
        default:
            return state
    }
}

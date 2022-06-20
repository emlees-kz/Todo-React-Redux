export const COMMENT_CREATE = "COMMENT_CREATE"
export const COMMENT_DELETE = "COMMENT_DELETE"
export const COMMENT_COMPLETE = "COMMENT_COMPLETE"

export function CommentCreate(text, id, completed) {
    return {
        type: COMMENT_CREATE,
        data: { text, id, completed}
    }
}

export function CommentDelete(id) {
    return {
        type: COMMENT_DELETE,
        id
    }
}

export function CommentComplete(text, id, completed) {
    return {
        type: COMMENT_COMPLETE,
        data: {text, id, completed}
    }
}
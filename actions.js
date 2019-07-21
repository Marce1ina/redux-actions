import uuid from "uuid";

const ACTION_TYPES = {
    ADD_COMMENT: "ADD_COMMENT",
    REMOVE_COMMENT: "REMOVE_COMMENT",
    EDIT_COMMENT: "EDIT_COMMENT",
    THUMB_UP_COMMENT: "THUMB_UP_COMMENT",
    THUMB_DOWN_COMMENT: "THUMB_DOWN_COMMENT"
};

function addComment(text) {
    return {
        type: ACTION_TYPES.ADD_COMMENT,
        text,
        id: uuid.v4()
    };
}

function removeComment(id) {
    return {
        type: ACTION_TYPES.REMOVE_COMMENT,
        id
    };
}

function editComment(text, id) {
    return {
        type: ACTION_TYPES.EDIT_COMMENT,
        text,
        id
    };
}

function thumbUpComment(id) {
    return {
        type: ACTION_TYPES.THUMB_UP_COMMENT,
        id
    };
}

function thumbDownComment(id) {
    return {
        type: ACTION_TYPES.THUMB_DOWN_COMMENT,
        id
    };
}

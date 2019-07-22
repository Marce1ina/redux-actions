import { ACTION_TYPES } from "actions.js";

const initialState = {
    comments: [],
    users: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    },
                    ...state.comments
                ]
            });
        case ACTION_TYPES.REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        case ACTION_TYPES.EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    Object.assign({}, state, {
                        comments: [
                            state.comments.find(comment => comment.id === action.id),
                            ...state.comments.filter(comment => comment.id !== action.id)
                        ]
                    });
                    ...state.comments.filter(comment => comment.id !== action.id)
                ]
            });
        case ACTION_TYPES.THUMB_UP_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        case ACTION_TYPES.THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        default:
            return state;
    }
}

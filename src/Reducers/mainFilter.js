const mainFilterReducer = (state = 'all', action) => {
    switch (action.type) {
        case 'all':
            return 'all';
        case 'dog':
            return 'dog';
        case 'cat':
            return 'cat';
        default:
            return state;
    }
};

export default mainFilterReducer
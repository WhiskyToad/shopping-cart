const subFilterReducer = (state = 'allSub', action) => {
    switch (action.type) {
        case 'allSub':
            return 'allSub';
        case 'hat':
            return 'hat';
        case 'top':
            return 'top';
        case 'glasses':
            return 'glasses';
        default:
            return state;
    }
};

export default subFilterReducer
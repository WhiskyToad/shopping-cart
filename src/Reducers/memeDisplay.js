const memeDisplay = (state = false, action) => {
    switch (action.type){
        case 'DISPLAY-MEME' :
            return true;
        case 'HIDE-MEME' :
            return false;
        default:
            return state;
    }
}

export default memeDisplay
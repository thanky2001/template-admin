
const initialState ={
    isShow: true,
}

const showComponents = (state = initialState, action) => {
    // console.log(action.Type.ABC);
    switch (action.Type) {
        case 'a':
            console.log("hihi");
            break;
    
        default:
            break;
    }
    return{...state};
}
export default showComponents;
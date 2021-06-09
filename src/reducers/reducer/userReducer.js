const initialState = {
    currentUser: {
        uid: 1,
        uName: 'Admin',
    },
    listUser:[
        {
            uid: 1,
            uName: 'Admin',
        },
        {
            uid: 2,
            uName: 'Mike Litorus',
        },
        {
            uid: 3,
            uName: 'Richard Miles',
        },
        {
            uid: 4,
            uName: 'John Doe',
        },
        {
            uid: 5,
            uName: 'Tarah Shropshire',
        },
        {
            uid: 6,
            uName: 'Catherine Manseau',
        },
        {
            uid: 7,
            uName: 'Domenic Houston',
        },
        {
            uid: 8,
            uName: 'Buster Wigton',
        },
        {
            uid: 9,
            uName: 'Rolland Webber',
        },
        {
            uid: 10,
            uName: 'Claire Mapes',
        },
        {
            uid: 11,
            uName: 'Melita Faucher',
        },
        {
            uid: 12,
            uName: 'Jeffery Lalor',
        },
        {
            uid: 13,
            uName: 'Loren Gatlin',
        },
        {
            uid: 14,
            uName: 'Tarah Shropshire',
        },
    ],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "value":

            break;

        default:
            break;
    }
    return {
        ...state
    };
}
export default userReducer;
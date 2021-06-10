const initialState = {
    currentUser: {
        uid: 1,
        uName: 'Admin',
    },
    profile: {
        uid: 1,
        firstName: 'Hieu',
        lastName: 'To',
        uName: 'Admin',
        birthDate: '05/06/1985',
        gendar: 'male',
        inforContact: {
            address: '4487 Snowbird Lane',
            city: 'New York',
            country: 'United States',
            pinCode: '10523',
            numberPhone: '631-889-3206'
        },
        inforEducation: {
            institution: 'Oxford University',
            subject: 'Computer Science',
            startingDate: '01/06/2002',
            compelteDate: '31/05/2006',
            degree: 'BE Computer Science',
            grade: 'Grade A',
        },
        inforExperience: {
            companyName: 'Digital Devlopment Inc',
            location: 'United States',
            jobPosition: 'Web Developer',
            periodFrom: '01/07/2007',
            periodTo: '08/06/2018',
        }
    },
    // ko có currentUser
    listUser: [
        {
            uid: 2,
            uName: 'Mike Litorus',
            designation: 'IOS Developer',
            numberPhone: '9876543210',
            createDay: '1 Jan 2013',
            roleId: 1,
        },
        {
            uid: 3,
            uName: 'Richard Miles',
            designation: 'Web Developer',
            numberPhone: '9876543210',
            createDay: '1 Jan 2013',
            roleId: 1,
        },
        {
            uid: 4,
            uName: 'John Doe',
            designation: 'Web Designer',
            numberPhone: '9876543210',
            createDay: '1 Jan 2013',
            roleId: 1,
        },
        {
            uid: 5,
            uName: 'Tarah Shropshire',
            designation: 'Android Developer',
            numberPhone: '9876543210',
            createDay: '1 Jan 2013',
            roleId: 1,
        },
        {
            uid: 6,
            uName: 'Catherine Manseau',
            designation: 'IOS Developer',
            numberPhone: '9876543210',
            createDay: '1 Jan 2013',
            roleId: 1,
        },
        {
            uid: 7,
            uName: 'Domenic Houston',
            designation: 'Android Developer',
            numberPhone: '9876543210',
            createDay: '1 Jan 2013',
            roleId: 1,
        },
        {
            uid: 8,
            uName: 'Buster Wigton',
            designation: 'Android Developer',
            numberPhone: '9876543210',
            createDay: '1 Jan 2013',
            roleId: 1,
        },
        {
            uid: 9,
            uName: 'Rolland Webber',
            designation: 'Web Designer',
            numberPhone: '9876543210',
            createDay: '1 Jan 2013',
            roleId: 1,
        },
        {
            uid: 10,
            uName: 'Claire Mapes',
            designation: 'Web Developer',
            numberPhone: '9876543210',
            createDay: '1 Jan 2013',
            roleId: 1,
        },
        {
            uid: 11,
            uName: 'Melita Faucher',
            designation: 'Android Developer',
            numberPhone: '9876543210',
            createDay: '1 Jan 2013',
            roleId: 1,
        },
        {
            uid: 12,
            uName: 'Jeffery Lalor',
            designation: 'Web Developer',
            numberPhone: '9876543210',
            createDay: '1 Jan 2013',
            roleId: 1,
        },
        {
            uid: 13,
            uName: 'Loren Gatlin',
            designation: 'IOS Developer',
            numberPhone: '9876543210',
            createDay: '1 Jan 2013',
            roleId: 1,
        },
        {
            uid: 14,
            uName: 'Tarah Shropshire',
            designation: 'Web Developer',
            numberPhone: '9876543210',
            createDay: '1 Jan 2013',
            roleId: 1,
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

const initialState ={
    //witgets
    revenue: 100,
    userCounts:900,
    projectCounts:99,
    TaskCounts: 600,
    //barCharts
    labelsBar: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
    datasetsBar: [
        {
            label: "test1",
            backgroundColor: [
                "rgb(11, 98, 164)",
            ],
            data: [100, 75, 50, 75, 89, 20, 67]
        },
        {
            label: "test2",
            backgroundColor: [
                "rgb(122, 146, 163)",
            ],
            data: [90, 65, 40, 65, 15, 11, 30]
        },
        {
            label: "test3",
            backgroundColor: [
                "rgb(77, 167, 77)",
            ],
            data: [0, 20, 10, 25, 89, 43, 67]
        },
        {
            label: "test4",
            backgroundColor: [
                "rgb(175, 216, 248)",
            ],
            data: [0, 55, 55, 55, 55, 55, 55]
        }
    ],
    //productStatus
    labelsProductStatus: ['1906', '1907', '1908', '1909'],
    datasetsProductStatus: [{
            label: 'test1',
            data: [65, 59, 80, 81],
            fill: false,
            borderColor: "rgb(11, 98, 164)",
            tension: 0.1
        },
        {
            label: 'test2',
            data: [100, 75, 50, 75],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
        {
            label: 'test3',
            data: [0, 20, 10, 25],
            fill: false,
            borderColor: "rgb(77, 167, 77)",
            tension: 0.1
        },
        {
            label: 'test4',
            data: [0, 55, 53, 35],
            fill: false,
            borderColor: "rgb(175, 216, 248)",
            tension: 0.1
        },
    ],
    //projectStatus
    datasetsProjectStatus: [{
            label: 'Projects',
            value: 45,
        },
        {
            label: 'Clients',
            value: 15,
        },
        {
            label: 'Tasks',
            value: 45
        },
        {
            label: 'Messages',
            value: 30,
        },
        {
            label: 'Employees',
            value: 20,
        }
    ],
    //tastStatus
    labelsTaskStatus: ['1906', '1907', '1908', '1909'],
    datasetsTaskStatus: [{
            label: 'test1',
            data: [65, 59, 80, 81],
            fill: true,
            backgroundColor: [
                "rgba(11, 98, 164,0.2)",
            ],
            borderColor: "rgb(11, 98, 164)",
            tension: 0.1
        },
        {
            label: 'test2',
            data: [110, 75, 50, 75],
            fill: true,
            backgroundColor: [
                "rgba(77, 167, 77,0.2)",
            ],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
    ],
}

const infomations = (state = initialState, action) => {
    switch (action.Type) {
        case 'a':
            break;
    
        default:
            break;
    }
    return{...state};
}
export default infomations;
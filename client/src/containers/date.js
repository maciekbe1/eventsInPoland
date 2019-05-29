export const dateConverter = eventDate => {
    if (eventDate) {
        const date = new Date(eventDate);
        const dateDay =
            date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const dateMonth =
            date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth();
        const dateYear = date.getFullYear();
        return `${dateDay}.${dateMonth}.${dateYear}`;
    }
};

// const dateConverter = (start, end) => {
//     if (start) {
//         const date = new Date(start);
//         const startDay =
//             date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
//         const startMonth =
//             date.getMonth() < 10
//                 ? `0${date.getMonth() + 1}`
//                 : date.getMonth();
//         const startYear = date.getFullYear();
//         return `${startDay}.${startMonth}.${startYear}`;
//     }
//     if (end) {
//         const date = new Date(end);
//         const endDay =
//             date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
//         const endMonth =
//             date.getMonth() < 10
//                 ? `0${date.getMonth() + 1}`
//                 : date.getMonth();
//         const endYear = date.getFullYear();
//         return `${endDay}.${endMonth}.${endYear}`;
//     }
// };

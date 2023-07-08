// let datlt: Teacher;
// let sontv: Teacher;

// type Teacher = string;
// type RoleId = number;

// let mssv: RoleId;

// type Info = {
//     id: number,
//     name: string,
//     avatar: string,
//     email: string
// }

// const myInfo: Info = {
//     id: 1,
//     name: "sontv",
//     avatar: '...',
//     email: '...'
// }
// const yourInfo: Info = {

// }
// myInfo.id = 200;

// interface Student {
//     id: number,
//     username: string,
//     roleId: number
// }
// const thienth: Student = {
//     id: 1,
//     username: 'thienth',
//     roleId: 1
// }

// /*
//     product = {
//         id:1,
//         name: 'Iphone 12',
//         price: 1000,
//         description: '...',
//         image: '...'
//         brand: 'Apple',
//     }
// */

/*
    - required
    - optional
    - readonly
*/

type Student = {
    readonly id: number,
    username: string,
    roleId?: number
}
const trang: Student = {
    id: 1,
    username: "Trang",
}
const hieu: Student = {
    id: 2,
    username: "Hieu",
    roleId: 1
}
// trang.id = 2;

// Union type ( | )
// let roleId: number | string = "10";

// type Manager = {
//     id: number | string,
//     username: string,
//     phoneNumber: number | string
// }

// type StudentInfo = {
//     id: number,
//     name: string
// }
// type CompanyInfo = {
//     id: number,
//     email: string,
//     place: string
// }


// type Info = StudentInfo & CompanyInfo;

// const myInfo: Info = {
//     id: 1,
//     name: 'sontv',
//     email: '...',
//     place: '...'
// }


// interface Employee {
//     id: number,
//     name: string,
//     email: string,
// }
// interface Manager extends Employee {
//     phoneNumber: string
// }
// const sontv: Manager = {
//     id: 1,
//     name: 'sontv',
//     email: '...'
// }

interface Manger {
    id: number,
    name: string,
}
// ....
interface Manger {
    id: number,
    email: string,
    phoneNumber: string
}
interface Manager {
    avatar: string
}
const sontv: Manger = {
    id: 1,
    name: 'sontv',
    email: '...',
    phoneNumber: '...'
}

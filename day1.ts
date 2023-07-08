let myName: string = 'sontv';
// myName = 100;
let age: number = 100;
let isAdmin: boolean = true;

/*
- Explicit types (kiểu tường minh)
- Inferred types (tự nhận biết được kiểu dữ liệu)
- Literal types (chỉ định một giá trị cụ thể làm kiểu dữ liệu)
*/

// let username = true;
// let username: 'datlt' ;
// username = 'sontv';

// let username = 'datlt' as const;
// username = 'sontv'

function getName(username: string) {
    // ...
}
getName('');

/*
    - khai báo biến username -> string
    - khai báo age -> number
    - khai báo isAdmin -> boolean
    - khai báo gender -> boolean

    viết 1 hàm và truyền vào 4 tham số bên trên
    hàm thực hiện chức năng hiển thị data ra html
    - nếu isAdmin = true -> hiển thị ra màn hình là admin
    - nếu isAdmin = false -> hiển thị ra màn hình là user
    - nếu gender = true -> hiển thị ra màn hình là nam
    - nếu gender= false -> hiển thị ra màn hình là nữ
*/ 
// function
// function sum(a: number = 10, b: number = 20): any {
//     const total = a + b;
//     console.log(total);

// }
// sum();


// const getInfo = (id: number, name: string, age: number) => {
//     console.log(id, name, age);
// }
// getInfo(1, 'datlt', 18);

const getInfo = (info: { id: number, name: string, age: number }) => {
    const { id, name, age } = info;
    console.log(id, name, age);
}
getInfo({
    id: 1,
    name: 'datlt',
    age: 18
})

interface Product {
    id: number,
    name: string,
    price: number,
    status: boolean
}

const products: Product[] = [
    { id: 1, name: 'iphone', price: 1000, status: true },
    { id: 2, name: 'samsung', price: 2000, status: false },
    { id: 3, name: 'oppo', price: 3000, status: true },
]
const addProduct = (newProduct: Product): Product => {
    products.push(newProduct);
    return newProduct
}
addProduct({ id: 4, name: 'xiaomi', price: 4000, status: true })
/*
    sử dụng interface định nghĩa kiểu dữ liệu cho mảng
    định nghĩa kiểu dữ liệu của tham số truyền vào hàm
    định nghĩa kiểu dữ liệu trả về của hàm là 
        object truyền vào 
*/ 
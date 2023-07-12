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
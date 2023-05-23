

// Normal Function
function add(num1:number,num2:number):number{
    return num1 + num2
}
add(2,3)



const addArrow = (num1:number,num2:number):number => num1 + num2;
addArrow(2,5)


const arr =[1,4,5]
const newArray2 = arr.map((element:number)=> element * element)



const person : {
    name: string;
    balance: number;
    addBalance(money:number): string;
} = {
    name:"John",
    balance:4,
    addBalance(money:number){
        return `My New Balance is ${this.balance+money}`
    }
}
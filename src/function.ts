// Normal Function
// Default value
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}
add(3);

//Spread Operator
const myFriends = ['chandler', 'joey', 'ross']
const newFriends = ['monica', 'rachel', 'pheobe']
myFriends.push(...newFriends);
console.log(myFriends)


//rest Parameter

const greetFriends = (friend1: string,friend2: string,friend3: string):void => console.log(`Hi ${friend1}`)

const addArrow = (num1: number, num2: number): number => num1 + num2;
addArrow(2, 5);

const arr = [1, 4, 5];
const newArray2 = arr.map((element: number) => element * element);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): string;
} = {
  name: "John",
  balance: 4,
  addBalance(money: number) {
    return `My New Balance is ${this.balance + money}`;
  },
};

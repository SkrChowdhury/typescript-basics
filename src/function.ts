// Normal Function
// Default value
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}
add(3);

//Spread Operator
const myFriends = ['chandler', 'joey', 'ross']
const newFriends = ['monica', 'rachel', 'pheobe']
const myBestFriend = {
  fullname: 'Abul Bashar',
  age: 24
}
myFriends.push(...newFriends);
console.log(myFriends)

// Array and Object destructuring

const [bestfriend] = myFriends;
const {fullname} = myBestFriend;



//Rest Parameter

const greetFriends = (...myFriends:string[]):void => myFriends.forEach((friend) => console.log(`Hi ${friend}`));

greetFriends('hashem','kashem','gashem', 'Bangla Bhai', 'English Bhai')




const addArrow = (num1: number = 30, num2: number): number => num1 + num2;
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

// Array

let fruitsNew: Array<string> = ['apple','grapes']
let foodNew: Array<string> = ['Vadapav','Burger']

let edibles: Array<string> = [...fruitsNew,...foodNew]

console.log(edibles)

let userNew = {
    firstName: "Anand",
    lastName: "Sonawane",
    userName: "AnandSonawane"
};

// ... spread operator

let userDetails = {
    ...userNew,
    address: "Pune",
    email: "as@gmail.com"
};

console.log(userDetails)

function add(x?:number,y?:number,z?:number):number{
    return x + y + z;
}

let numbers: Array<number> = [1,2,3];

console.log('Addition of Numbers ',add(...numbers));

// Backticks
console.log(
    "The user with name: "+
    userNew.firstName +
    " has an address of: "+
    userNew.lastName +
    "and an email of "+
    userNew.userName
)

console.log(`userName: ${userNew.firstName +" "+ userNew.lastName} userName: ${userNew.userName}`)


let {firstName : firstname}  = userNew;
console.log(firstname)

let [justApple,...restEdibles] = edibles

console.log(justApple)
console.log(restEdibles)


let{userName,...restUserDetails} = userDetails
console.log(userName)
console.log(restUserDetails)

function getEdibles(apple?,...restEdibles){
    console.log(apple);
    console.log(restEdibles)
}

getEdibles(...edibles)
// void

function logToConsole():void{
    console.log('Hello World');
    return;
}

// Array
let fruits: string[];
fruits = ['apple','banana','custardapple',"Watermelon".toUpperCase(),(() => "jackfruit")()]

let food:Array<string>;
food = ['Vadpav','Burger']

let genericArray: Array<string | number | boolean>;
genericArray = [null,undefined,true,false,0o123,1234,"AnandSonawane"];

// Tuple

let coordinate1: [number,number,number]
coordinate1 = [12,12,12]

let coordinate2: [number,boolean,string]
coordinate2 = [12,true,"12"]

// Objects
let user = {
    firstName : "Anand",
    lastName : "Sonawane",
    userName : "Anands",
    getUserName: (): string => this.userName
};

// Enum

enum DaysOfWeek {
    MONDAY = 'monday',
    TUESDAY = 'tuesday',
    WEDNESDAY = 'wednesday'
}

let daytoday: DaysOfWeek;
daytoday = DaysOfWeek.MONDAY;
daytoday = DaysOfWeek.TUESDAY;
daytoday = DaysOfWeek.WEDNESDAY;
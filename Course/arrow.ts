function greetUser(name:string){
    console.log(`Hello there, ${name}`)
}

const greetUserByName = function(name:string){
    console.log(`Hello there, ${name}`)   
}


greetUser("Anand")
greetUserByName("Anand Sonawane")


const greetUserByNameArrow = (name:string) => console.log(`Hello there, ${name}`);
greetUserByNameArrow("Anand Sonawane")


const edibles = [
    {
        edible:"milk",
        isVegam: false
    },
    {
        edible:"meet",
        isVegam: false
    },
    {
        edible:"methi",
        isVegam: true
    },
    {
        edible:"palak",
        isVegam: true
    },
    {
        edible:"milk",
        isVegam: true
    }
]


console.log(
    edibles.filter(
        function(item){
            return item.isVegam;
        }
    )
)


console.log(edibles.filter(item => item.isVegam))
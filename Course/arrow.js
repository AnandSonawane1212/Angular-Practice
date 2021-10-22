function greetUser(name) {
    console.log("Hello there, " + name);
}
var greetUserByName = function (name) {
    console.log("Hello there, " + name);
};
greetUser("Anand");
greetUserByName("Anand Sonawane");
var greetUserByNameArrow = function (name) { return console.log("Hello there, " + name); };
greetUserByNameArrow("Anand Sonawane");
var edibles = [
    {
        edible: "milk",
        isVegam: false
    },
    {
        edible: "meet",
        isVegam: false
    },
    {
        edible: "methi",
        isVegam: true
    },
    {
        edible: "palak",
        isVegam: true
    },
    {
        edible: "milk",
        isVegam: true
    }
];
console.log(edibles.filter(function (item) {
    return item.isVegam;
}));
console.log(edibles.filter(function (item) { return item.isVegam; }));

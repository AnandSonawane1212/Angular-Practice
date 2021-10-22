// void
var _this = this;
function logToConsole() {
    console.log('Hello World');
    return;
}
// Array
var fruits;
fruits = ['apple', 'banana', 'custardapple', "Watermelon".toUpperCase(), (function () { return "jackfruit"; })()];
var food;
food = ['Vadpav', 'Burger'];
var genericArray;
genericArray = [null, undefined, true, false, 83, 1234, "AnandSonawane"];
// Tuple
var coordinate1;
coordinate1 = [12, 12, 12];
var coordinate2;
coordinate2 = [12, true, "12"];
// Objects
var user = {
    firstName: "Anand",
    lastName: "Sonawane",
    userName: "Anands",
    getUserName: function () { return _this.userName; }
};
// Enum
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek["MONDAY"] = "monday";
    DaysOfWeek["TUESDAY"] = "tuesday";
    DaysOfWeek["WEDNESDAY"] = "wednesday";
})(DaysOfWeek || (DaysOfWeek = {}));
var daytoday;
daytoday = DaysOfWeek.MONDAY;
daytoday = DaysOfWeek.TUESDAY;
daytoday = DaysOfWeek.WEDNESDAY;

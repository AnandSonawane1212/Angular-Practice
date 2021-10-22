// Array
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var fruitsNew = ['apple', 'grapes'];
var foodNew = ['Vadapav', 'Burger'];
var edibles = __spreadArrays(fruitsNew, foodNew);
console.log(edibles);
var userNew = {
    firstName: "Anand",
    lastName: "Sonawane",
    userName: "AnandSonawane"
};
// ... spread operator
var userDetails = __assign(__assign({}, userNew), { address: "Pune", email: "as@gmail.com" });
console.log(userDetails);
function add(x, y, z) {
    return x + y + z;
}
var numbers = [1, 2, 3];
console.log('Addition of Numbers ', add.apply(void 0, numbers));
// Backticks
console.log("The user with name: " +
    userNew.firstName +
    " has an address of: " +
    userNew.lastName +
    "and an email of " +
    userNew.userName);
console.log("userName: " + (userNew.firstName + " " + userNew.lastName) + " userName: " + userNew.userName);
var firstname = userNew.firstName;
console.log(firstname);
var justApple = edibles[0], restEdibles = edibles.slice(1);
console.log(justApple);
console.log(restEdibles);
var userName = userDetails.userName, restUserDetails = __rest(userDetails, ["userName"]);
console.log(userName);
console.log(restUserDetails);
function getEdibles(apple) {
    var restEdibles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restEdibles[_i - 1] = arguments[_i];
    }
    console.log(apple);
    console.log(restEdibles);
}
getEdibles.apply(void 0, edibles);

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + "  " + this.lastName;
    };
    return Person;
}());
var person = new Person('Anand', 'Sonawane', 22);
console.log(person.getFullName());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, lastName, age, middleName) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.id = id;
        _this.middleName = middleName;
        return _this;
    }
    ;
    Employee.prototype.getFullName = function () {
        var nameSegments = _super.prototype.getFullName.call(this).split(' ');
        nameSegments.splice(1, 0, this.middleName);
        var fullName = nameSegments.join(' ');
        return "" + fullName;
    };
    return Employee;
}(Person));
var manager = new Employee(1, 'Anand', "Sonawane", 22, "R");
console.log(manager.getFullName());

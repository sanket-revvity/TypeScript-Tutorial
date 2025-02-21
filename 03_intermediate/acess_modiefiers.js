"use strict";
// class User{
//     public email : string
//     private name:string
//     readonly city : string = "Mumbai"
//     constructor(email:string,name:string){
//         this.email = email
//         this.name = name
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// You can also write above class in another way that is mostly prefered by coders
// You can also use getter and setter to put some restrictions and extra logic when aceesing the variable inside the class
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Mumbai";
    }
    User.prototype.deleteUser = function () {
        console.log("User deleted....");
    };
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (num) {
            if (num <= 1) {
                throw new Error("Course num should be more than 1.");
            }
            this._courseCount = num;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // But cannot acquire property as private so you can use protected acess modifier so that the variable can only be accessed within class and derived/child class
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this._courseCount = 4;
    };
    return SubUser;
}(User));
var user = new User("example@gmail.com", "sanket");

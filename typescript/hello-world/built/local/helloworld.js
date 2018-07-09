"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var faker = require("faker");
var Knight = (function () {
    function Knight(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    Knight.prototype.greeting = function () {
        return "Heya! This is knight " + this.fullName + "!";
    };
    return Knight;
}());
var petty = new Knight(faker.name.firstName(), faker.name.lastName());
lodash_1.each([petty], function (p) { return console.log(p.greeting()); });
//# sourceMappingURL=helloworld.js.map
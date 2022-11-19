"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(name) {
        this.name = name;
    }
    announce() {
        return "Hello,my name is " + this.name;
    }
}
exports.Customer = Customer;
// create a new instance
let firstCustomer = new Customer("Alice");
let newMessage = firstCustomer.announce();
// change  the text of the page
let webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;

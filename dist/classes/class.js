"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    getData() {
        throw new Error("Method not implemented.");
    }
}
class Usecase {
    constructor(userInterface) {
        this.userInterface = userInterface;
    }
    getData() {
        this.userInterface.getData();
    }
}
class Handler {
    constructor(usecase) {
        this.usecase = usecase;
    }
}
class Server {
    constructor(handler, usecase, name) {
        this.greet = () => {
            return `Hello ${this.name}`;
        };
        this.handler = handler;
        this.useCase = usecase;
        this.name = name;
    }
    /**
     * printThisData
     */
    printThisData() {
        console.log("Hello world");
    }
}
class UserServer extends Server {
    constructor(handler, useCase) {
        super(handler, useCase, "");
    }
    printThisData() {
        super.printThisData();
        console.log("Hello world");
    }
}
const user = new User();
const uc = new Usecase(user);
uc.getData();
//# sourceMappingURL=class.js.map
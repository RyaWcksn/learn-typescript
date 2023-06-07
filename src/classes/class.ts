import { UserInterface } from "../repository/repository";


class User implements UserInterface {
	getData(): void {
		throw new Error("Method not implemented.");
	}
}


class Usecase {
	constructor(private userInterface: UserInterface) { }

	getData(): void {
		this.userInterface.getData();
	}

}


class Handler {
	constructor(private usecase: Usecase) { }


}



class Server {
	private handler: Handler
	private useCase: Usecase
	private name: string
	constructor(handler: Handler, usecase: Usecase, name: string) {
		this.handler = handler
		this.useCase = usecase
		this.name = name

	}
	greet = (): string => {
		return `Hello ${this.name}`;
	};

	/**
	 * printThisData
	 */
	public printThisData(): void {
		console.log("Hello world");

	}

}

class UserServer extends Server {
	constructor(handler: Handler, useCase: Usecase) {
		super(handler, useCase, "");
	}

	printThisData(): void {
		super.printThisData()
		console.log("Hello world");
	}



}

const user = new User();
const uc = new Usecase(user);
uc.getData();

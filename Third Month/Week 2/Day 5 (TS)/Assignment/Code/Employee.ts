interface GEO {
    lat: string,
    lng: string
}


interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: GEO
}


interface IEmployee {
    readonly id: number | string,
    name: string,
    email: string,
}


class Employee implements IEmployee {
    id: number | string;
    name: string;
    email: string;
    private userName: string;
    protected address: Address;
    private static instanceCount: number = 0;

    constructor(
        id: number | string,
        name: string,
        userName: string,
        email: string,
        address: Address
    ) {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.address = address;
        Employee.instanceCount++;
    }
    public static getInstanceCount(): number {
        return Employee.instanceCount;
    }
}

const address: Address = {
    street: "el-sadat",
    suite: "12",
    city: "cairo",
    zipcode: "1665165",
    geo: {
        lat: "-37.55",
        lng: "98"
    }
};


const e1 = new Employee(1, "Basel", "basel@yahoo.com", "cairo", address);
const e2 = new Employee(2, "omar", "omar@yahoo.com", "suez", address);
console.log("Employee 1", e1);
console.log("Employee 2", e2);
console.log("Current instance count:", Employee.getInstanceCount());



////////////////////////////////////////////////////

class Manager extends Employee {
    public dept: string;
    constructor(
        id: number,
        name: string,
        email: string,
        username: string,
        address: Address,
        dept: string
    ) {
        super(id, name, email, username, address);
        this.dept = dept
    }

    public viewEmployeeAddress(): string {
        const a = this.address;
        return `Manager viewing address: ${a.suite}, ${a.street}, ${a.city}, ${a.zipcode}`;
    }
}


function Timestamp(constructor: Function) {
    const createdAt = new Date().toISOString();
    console.log(`Class: ${constructor.name}, Created At: ${createdAt}`);
}

@Timestamp
class User {
    constructor(public username: string) {
        console.log(`User ${username} created.`);
    }
}


namespace MathOperations {
    export function add(a: number, b: number): number {
        return a + b;
    }
}


// test

const sum = MathOperations.add(5, 3);


const user1 = new User("Alice");
console.log("Sum:", sum);
const manager = new Manager(
    1,
    "Basel",
    "basel@example.com",
    "basel123",
    address,
    "cs"
);

console.log(manager.viewEmployeeAddress());



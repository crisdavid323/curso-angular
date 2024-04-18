export class Person {

    // public name: string;
    // private address: string;

    // constructor(name: string, address: string) { 
    //     this.name = name;
    //     this.address = address;
    // }

    constructor(
        public firstName: string,
        public lastName: string,
        private address: string = 'No address'
    ) { }

}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, 'New York');
//     }
// }

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) { }
}

const tony = new Person('Tony', 'Stark', 'New York');

const iroman = new Hero('Iroman', 45, 'Tony', tony);

console.log(iroman);



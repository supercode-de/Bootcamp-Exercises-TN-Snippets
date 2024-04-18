function fahrrad(this: any) {
    console.log(this.name);
}

let nameOne: string = "Canyon";
let obj1 = { name: "Merida", fahrrad: fahrrad };
let obj2 = { name: "Scott", fahrrad: fahrrad };
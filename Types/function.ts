
const doSomething = (person: string,age: number,isFunny: boolean) => {

}

doSomething("DoubleE",3,true);   

function greet(name:string="Ruby") : string{
    return `Hello ${name}!`
}

function sum(num: number): number {
    return num * num;
}

function add (x:number, y:number):number {
    return x+y;
}

function rando(num:number) {
    if(num > 0.5){
        return num.toString;
    }
    return num;
}

sum(4);

// greet(3); error 

greet();
greet("Thuan");

const colors= ["Red","Blue","Green"];
colors.map(color => {
    // return color.toFixed() typescript can understand what type of color
    return color.toUpperCase();
})

function printTwice(msg:string):void {
    console.log(msg);
    console.log(msg);
    // return msg; can return with function type void
}

function msgError(msg:string) :never{
    throw new Error(msg);
}

//void can return undefined || null
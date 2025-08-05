let movieTitle: string = "Spider man 3";
movieTitle = "Forrest Gump";
// movieTitle = 3; Error type
// movieTitle.upper(); Error JS dont have upper() prototype

let num: number = 10;
num = -23
// num = "zero" can asign

let gameOver:boolean = false;
gameOver = true;
// gameOver = "false" this is string can't assign
// gameOver = 1 number is not boolean

//Type Inferences 
//TS can auto assign type when you declare variable

//The any type
let thing:any = "Hello";
thing = 1;
thing = true;
thing();
thing.toUpperCase();

let movieList = ["Forrest Gump","Up","Cut"];
let movieFound:string; // if dont declare string it have type is any

for (let movie of movieList) {
    if (movie === "Up") {
        movieFound = movie
    }
}

// movieFound = 2; Can assigh because movieFound have type is string
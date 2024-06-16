// control statement

//let people1 = 25;
//let people2 = 85;
//if(people1 >=45){
//console.log("people year 10 - 50")
//}
//else if(people2 >60){
//console.log("people year 45 - 85")}

//ternary operator

//let Age = 25;
//(Age>=18)?
//console.log("you can vote"):
//console.log("you can't vote");

//random

//let Name = "Dare";
//let Sex = "M";
//let  Age = "25";
//let score = Math.random()*100+1;
//console.log(Name,Sex,Age,score.toFixed(2));

//let total =Math.random()*100+5;
//(total>=50)?
//console.log("Pasted"):
//console.log("failed");

//function define 
//function myNumber(){
//  console.log("Meet you later!");
//}

//calling function
//myNumber();

 //function myFuc(a,b) {
    //return a+b;
//}
//console.log(myFuc("java","good"));
//myFuc();

//spreed operator
//1. copy value in Array
//let myArray = [20,"pase",true];
//console.log(...myArray);

//2. combine Array
//let array1 = [1001,"Chandra","Male"];
//let array2 = ["Bona", "TK"];
//let result = [...array1,...array2];
//console.log(result);

//3. passing argument

//let myArray = [100,200,400];
//function myTest(a,b,c){
//    return a+b+c;
//}
//console.log(myTest(...myArray));


                    //practices
// control statement

//const nameDara = 21;
//const nameRotha = 19;
//if (nameDara>=15){
//    console.log("People age 15 - 21");
//} else if (nameRotha>=10){
//    console.log("People age 10 - 19");
//}

// ternary operator

//var piseyAge = 17.99;
//(piseyAge>=18)?
//console.log("You can vote!!"):
//console.log("You can not vote!!");

//  random

//var name = "Lim";
//var sex = "M";
//var age = "19";
//var score = Math.random()*100+1;
//console.log(name,age,sex,score.toFixed(2));

   //let toatlScore = Math.random()*100+5;
   //if (toatlScore>=50){
   //    console.log("Pasted Exam");
   //} else if (toatlScore<50){
   //    console.log("Failed Exam");
   //}


    // string function


//let stri1 = "Hello world";
//let stri2 = "hello js";
//let stri3 = "Hi js languages";
//console.log(stri1.indexOf("d"));
//console.log(stri1.charAt(10));
//console.log(stri1.length());
//console.log(stri1.concat(stri2,stri3));
//console.log(stri3.toLocaleUpperCase());
//console.log(stri3.toLocaleLowerCase());
//console.log(stri3.split("Hi"));
//console.log(stri1.charCodeAt(0));
//console.log(stri3.search("l"));
//console.log(stri1.slice(0,7));

        //method

//let fruit = ["apple","orange","pineapple"];
//console.log(...fruit);
//  //loop
// for(i=0;i<fruit.length;i++){
//   console.log(fruit[i]);
// }
//
// i=0;
// while(i<fruit.length){
//   console.log(fruit[i]);
//   i++;
// }
//
// i=0;
// do{
//  console.log(fruit[i]); i++;
// } while(i>fruit.length);

    // for in  
//for (index in fruit){
//  console.log(fruit[index]);
//}
  // for of
//for (key of fruit){
//  console.log(key);
//}
//    // Method map
//onsole.log(fruit.map((e)=>e));
// return Boolean
// let result = fruit.some((e)=> e=="grape");
// console.log(result);

 // method filter
//fruit.forEach((e)=>console.log(e));
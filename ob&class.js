    //object and class
    let object ={
        id:1202,
        Name:"VY",
        School:"Etec",
    }
    //console.log(object.School);
    class test{
        price;
        total;
        item=[];
        constructor(price,total){
            this.price = price;
            this.total = total;
        }
        addItem(text){
            this.item.push(text);
        }
    }
    const result = new test("500$","250$");
   // result.addItem("apple");
   // result.addItem("Orange");
   // console.log(result);
    let  ArrayObject = [
        {id:1001,Name:"VY", Age:15, Sex:"F"},
        {id:1002,Name:"VY", Age:21, Sex:"F"},
        {id:1003,Name:"VY", Age:21, Sex:"M"},
        {id:1004,Name:"VY", Age:21, Sex:"M"},
        {id:1005,Name:"VY", Age:21, Sex:"M"},
    ];
   // ArrayObject.pop(); // remove last element
   // ArrayObject.shift();
   //  console.log(ArrayObject.map ((e)=>e));
   //console.log(ArrayObject.filter((e)=> e.Age < 18 && e.Sex==="F"));

   var myNumber= [10,20,30];
   //console.log(myNumber.reduce((p,c)=>p+c));

   // method sort
   let number = [10, 40, 20, 30];
   let month = ["mar", "feb", "apri"];
   
   function compar(a, b) {
       if (a > b) {
           return 1;
       } else if (a < b) {
           return -1;
       } else {
           return 0;
       }
   }
   //console.log(number.sort(compar));
   //console.log(number.sort((a,b)=>a-b))
   //console.log(month.sort());

            // testing practice 
 // object
 let objectItem ={
        Name: "VUTH VY",
        Sex: "M",
        Age: 21,
        School: "ETEC CENTER",
 }  
//console.log(objectItem);
//console.log(objectItem.Name);
//console.log(objectItem.Sex);
//console.log(objectItem.Age);
//console.log(objectItem.School);
  class Exam{
    score;
    totalScore;
    item =[];
    constructor(score,totalScore){
        this.score = score;
        this.totalScore = totalScore;
    }
    addItem(text){
        this.item.push(text);
    }
  }
  let resultScore = new Exam("58","98.5");
  resultScore.addItem("General information");
  resultScore.addItem("input score");
  resultScore.addItem("Hello js");
  //console.log(resultScore);

  let ArrayObject1 =[
    {Name: "VY",id: "1201",Sex: "M",Age: 21},
    {Name: "LIM",id: "1202",Sex: "F",Age: 19},
    {Name: "PISEY",id: "1203",Sex: "M",Age: 15},
    {Name: "DARA",id: "1204",Sex: "M",Age: 25},
    {Name: "BOPHA",id: "1205",Sex: "F",Age: 17},
  ];
  console.log(ArrayObject1.map((e)=>e));
  console.log(ArrayObject1.filter((e)=> e.Age <=18 && e.Sex==="F"));

   
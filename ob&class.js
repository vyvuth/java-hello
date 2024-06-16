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
   let number = [10, 20, 30, 40];
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
   console.log(month.sort((a,b)=>a-b))
   //console.log(month.sort());
   
   
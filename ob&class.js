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
        constructor(price,total){
            this.price = price;
            this.total = total;
        }
    }
    const result = new test("500$","250$");
    console.log(result);
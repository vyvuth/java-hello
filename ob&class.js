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
    result.addItem("apple");
    result.addItem("Orange");
    console.log(result);
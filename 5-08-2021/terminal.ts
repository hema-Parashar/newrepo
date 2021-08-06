const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class st_data{
    id;
    Name;
    Marks;
    constructor(i,n,m){
        this.id = i;
        this.Name = n;
        this.Marks = m;
    }
    show(){
        console.log(`Id is ${this.id}`);
        console.log(`Name is ${this.Name}`);
        console.log(`Marks is ${this.Marks}`);  
    }
};

var recursive_Func = function(){

rl.question('Enter ID ', (id) => {
    rl.question('Enter Name ', (Name) => {
        rl.question('Enter Marks ', (Marks) => {
            rl.question('Do You Want To Enter More Values? Y/N ', (answer4) =>{

                if (answer4 == "n" || answer4 == "N"){
                    var obj = new st_data(id,Name,Marks);
                    obj.show();
                    rl.close();
                }
                else{
                    var obj = new st_data(id,Name,Marks);
                    obj.show();
                    recursive_Func();
                }
        });
    });
});
});
};

recursive_Func();
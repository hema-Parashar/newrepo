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
    
};
var arr=[];
var recursive_Func = function(){

rl.question('Enter ID ', (id) => {
    rl.question('Enter Name ', (Name) => {
        rl.question('Enter Marks ', (Marks) => {
            rl.question('Do You Want To Enter More Values? Y/N ', (answer4) =>{

                if (answer4 == "n" || answer4 == "N"){
                    var obj = new st_data(id,Name,Marks);
                    arr.push(obj);
                    for(var i=0;i<arr.length;i++)
                    {
                            console.log(`student id is : ${arr[i].id}`);
                            console.log(`student name is :${arr[i].Name}`);
                            console.log(`student name is :${arr[i].Marks}`);
                    }
                    rl.close();
                }
                else{
                    var obj = new st_data(id,Name,Marks);
                    arr.push(obj);
                    recursive_Func();
                }
        });
    });
});
});
};

recursive_Func();
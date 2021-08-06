var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var st_data = /** @class */ (function () {
    function st_data(i, n, m) {
        this.id = i;
        this.Name = n;
        this.Marks = m;
    }
    st_data.prototype.show = function () {
        console.log("Id is " + this.id);
        console.log("Name is " + this.Name);
        console.log("Marks is " + this.Marks);
    };
    return st_data;
}());
;
var recursive_Func = function () {
    rl.question('Enter ID ', function (id) {
        rl.question('Enter Name ', function (Name) {
            rl.question('Enter Marks ', function (Marks) {
                rl.question('Do You Want To Enter More Values? Y/N ', function (answer4) {
                    if (answer4 == "n" || answer4 == "N") {
                        var obj = new st_data(id, Name, Marks);
                        obj.show();
                        rl.close();
                    }
                    else {
                        var obj = new st_data(id, Name, Marks);
                        obj.show();
                        recursive_Func();
                    }
                });
            });
        });
    });
};
recursive_Func();

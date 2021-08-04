function checkpass() {
    if (document.form.pass.value != document.form.cpass.value) {
        var msg="password did not match";        
        document.getElementById("errcpass").innerHTML=msg; 
        // alert("Confirm Password does not match with password");
        // document.myForm.cpass.focus(); 
        // document.myForm.cpass.blur();
    }else{
        document.getElementById("errcpass").innerHTML="";
    }
}
console.log("1230");
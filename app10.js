let email = document.getElementById("email");
let username = document.getElementById("name");
let password = document.getElementById("password");
let address = document.getElementById("address");
let button = document.getElementById("button");
let form = document.getElementById("login");
// let card = document.getElementById("card-id");
// let amount = document.getElementById("text-sal");


form.addEventListener('submit',(e) => {
    // function myFunction(){
    //     document.getElementById("card-id").innerHTML = 12334;
    //     document.getElementById("text-sal").innerHTML = 2000;
    // }
    if (email.value === 'samoeurnart6@gmail.com' && username.value === 'Samoeurn Art' && password.value === '882003' &&
    address === 'BTB'){
        // document.getElementById("card-id").innerHTML = 125353;
        // document.getElementById("text-sal").innerHTML = 2000;
        alert("Code ID : 876468 , Amount : 2000 $  (Samoeurn : ABA and Philip banks open)");
        // alert("Amount : 2000 $")
    } else if (email.value === 'seivmeysol77@gmaio.com' && username.value === 'Seivmey Sol' && password.value === '2004123' &&
    address === 'PP'){
        alert("Code ID : 987577 , Amount : 300 $  (Seivemey : ABA and Philip banks open)");
    } else if (email.value === 'thoeurnloy88@gmail.com' && username.value === 'Thoeurn Loy' && password.value === '2002123' &&
    address === 'PP'){
        alert("Code ID : 655433 , Amount : 150 $  (Loy : ABA and Philip banks open)");
    } else if (email.value === 'khunaryart99@gmail.com' && username.value === 'Khunary Art' && password.value === '2003124' &&
    address === 'PP'){
        alert("Code ID : 764786 , Amount : 200 $  (Khunary : ABA and Philip banks open)");
    } else {
        alert("Please try again");
    }
})

let cub = document.querySelector(".cur");
document.addEventListener("mousemove" , (event)=>{
    cub.style.left = event.pageX + "px";
    cub.style.top = event.pageY + "px";
})



let bt = document.querySelector(".btn");

let fr = document.querySelector(".frm");


let naam = document.querySelector("input[type=text]");

let emai = document.querySelector("input[type=email]");

let phon = document.querySelector("input[type=tel]");


let cli = document.querySelector(".arrow");


let sub = document.querySelector("input[type=button]");


let out = document.querySelector("h2");









var namPattern = /^[a-zA-Z\s-]+$/;



var emaiPattern = /^[a-z0-9\^\!\#\_\$\-]+@[a-z0-9\.\-]+\.[a-z]{2,}$/;


var phonePattern = /^[0-9]{0,10}$/;


let but = document.querySelector("input[type=submit]");





but.onclick = () => {
    if(naam.value == "" || !naam.value.match(namPattern)){
        alert("enter your first naam");
    }

    else if(emai.value == "" || !emai.value.match(emaiPattern)){
        alert(`enter your email`)
    }


    else if(phon.value == "" || !phon.value.match(phonePatternPattern)){
        alert(`enter your phone number`)
    }
}






let pass = document.querySelector("input[type=password]");

let show = document.querySelector(".show");
let hide = document.querySelector(".hide");



show.onclick =()=>{
    pass.type ="text"
    show.style.display = "none";
    hide.style.display = "inline";
}


hide.onclick =()=>{
    pass.type ="password"
    show.style.display = "inline";
    hide.style.display = "none";
}








naam.onkeydown = function(){
 

    if(naam.value.match(namPattern)){
        naam.style.border = "5px solid green"
    }
    else{
        naam.style.border = "5px solid red"
    }
}



emai.onkeydown = function(){
   

    if(emai.value.match(emaiPattern)){
        emai.style.border = "5px solid green"
    }
    else{
        emai.style.border = "5px solid red"
    }
}


phon.onkeydown = function(){
   

    if(phon.value.match(phonePattern)){

        phon.style.border = "5px solid green"
        
    }
    else{
        phon.style.border = "5px solid red"
    }
}


bt.onclick = function(){
    fr.style. transform = "scale(1)";
    
}



cli.onclick = function(){
    fr.style. transform = "scale(0)";

    naam.value = "";
   
}



sub.onclick = function(){

     let name = naam.value;
     let emailId = emai.value;
     let call =phon.value;
     let cod = pass.value

    out.innerHTML = name + emailId + call;

}



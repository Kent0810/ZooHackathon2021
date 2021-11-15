let toggle = document.querySelector(".fa-bars");
let sidebar = document.querySelector(".sidebar");
let x = document.querySelector(".fa-chevron-right");

toggle.addEventListener('click',()=>{
    sidebar.style.marginRight ="245px";
})
x.addEventListener("click",()=>{
    sidebar.style.marginRight ="-245px";
})

function InitialSlideIn(){
    const transtion_el = document.querySelector('.transition')
    setTimeout(()=>{
        transtion_el.classList.remove('is-active')
    },1000); 
}
InitialSlideIn();

const myForm =document.getElementById('myForm');
const inpFile =document.getElementById('inpFile');
const fileName =document.querySelector(".fileName");

inpFile.addEventListener('change',(e)=>{
   fileName.innerHTML = e.target.files[0].name;
})
myForm.addEventListener('submit',e=>{
    e.preventDefault();
    const endpoint = "upload.php";
    const formData =new FormData();
    formData.append("inpFile",inpFile.files[0]);  
    fetch(endpoint,{
        method: "POST",
        body: formData
    })
});//stop redirecting / refrreshing

const btn = document.querySelector(".fa-cloud-upload-alt");
btn.addEventListener("click",()=>{
    setTimeout(()=>{
        fileName.innerHTML = ""
        alert("Đã Gửi !")
    },500)
})


let recentBtn = document.querySelector(".recentBtn");
let content = document.querySelector(".recentReport_container")
let stateOff = true;
recentBtn.addEventListener("click",()=>{
    if(stateOff == true){
        content.style.display ="flex"
        stateOff = false;
    }
    else if(stateOff ==false){
        content.style.display ="none"
        stateOff = true;
    }
})
var flag = 0;
let reciverTitle = document.querySelectorAll(".rp_box_title");
let reciverLocation = document.querySelectorAll(".rp_box_location");
let reciverDate = document.querySelectorAll(".rp_box_date");

 let inputs = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addInput = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let input = {
                id: Date.now(),
                inp_activities: document.getElementById("inp_activities").value,
                inp_name: document.getElementById('inp_name').value,
                inp_number: document.getElementById('inp_number').value,
                inp_email: document.getElementById('inp_email').value,
                inp_location: document.getElementById('inp_location').value,
                inp_date: document.getElementById('inp_date').value,
                inp_description: document.getElementById('inp_description').value,
                inp_link: document.getElementById('inp_link').value,
                dot1: document.getElementById('dot-1').value,
                dot2: document.getElementById('dot-2').value,
                dot3: document.getElementById('dot-3').value,
            }
            inputs.push(input);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            addJSONtoRecent(inputs,flag);
            if (flag < reciverLocation.length-1){
                flag++;
            }
            //saving to localStorage
            localStorage.setItem('UserInputs', JSON.stringify(inputs));
        }
document.getElementById('button').addEventListener('click', addInput);


    

function addJSONtoRecent(inputs,flag){
    console.log(inputs)
      let i =flag;
    if(flag == reciverLocation.length){
         i  = reciverLocation.length-1;
    }
        reciverTitle[i].innerHTML = inputs[flag].inp_activities ;
        reciverLocation[i].innerHTML = `Location: ${inputs[flag].inp_location}`;
        reciverDate[i].innerHTML = `Date: ${inputs[flag].inp_date}`;
}


let dot1 = document.getElementById("dot-1")
let dot2 = document.getElementById("dot-2")
let dot3 = document.getElementById("dot-3")
let inp_alive = document.querySelectorAll("#inp_alive")
let inp_death = document.querySelectorAll("#inp_death")
dot1.addEventListener("change",()=>{
    for(let i = 0;i<inp_death.length;i++){
        inp_death[i].style.display = "none"
    }
    for(let i = 0;i<inp_alive.length;i++){
        inp_alive[i].style.display = "block" 
    }      
})
dot2.addEventListener("change",()=>{
    for(let i = 0;i<inp_alive.length;i++){
        inp_alive[i].style.display = "none" 
    }
      for(let i = 0;i<inp_death.length;i++){
        inp_death[i].style.display = "block";
    }
})
dot3.addEventListener("change",()=>{
    for(let i = 0;i<inp_alive.length;i++){
        inp_alive[i].style.display = "block"
    }   
    for(let i = 0;i<inp_death.length;i++){
        inp_death[i].style.display = "block";
    }
})
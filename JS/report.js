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

var flag = 0;
let reciverTitle = document.querySelectorAll(".rp_box_title");
let reciverLocation = document.querySelectorAll(".rp_box_location");
let reciverDate = document.querySelectorAll(".rp_box_date");

 let inputs = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addInput = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let isAlive = document.getElementById('dot-1').checked ;
            let isDead = true;
            if(isAlive){
                isDead = false;
            }
            let _date = document.getElementById('date').value;
            let newDate = new Date(_date).toString();
            let act = document.getElementById('activity').value;
            var _urgency;
            if(act === "Locked in the slaughterhouse" || act === "Being delivered"){
                _urgency = 2;
            }
            else if(act === "Traps/Hunters" || act === "Gathering trapped" || act === "Wildlife Product Storage"){
                _urgency = 1;
            }
            else if(act == "Illegal captivity" || act === "Exotic Animals Meat" || act === "Wildlife Product Selling"){
                _urgency = 0;
            }
            let input = {
                isDead: isDead,
                activity: act,
                location: document.getElementById('location').value,
                date: _date,
                desc: document.getElementById('desc').value,
                url: document.getElementById('url').value,
                contact:{
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    
                    phone: document.getElementById('phone').value,
                },
                urgency: _urgency
            }
            fetch("http://10.1.168.53:3000/report",{
                method: "POST", 
                headers: {
                    'Content-Type': 'application/JSON',
                },
                body: JSON.stringify(input)
            })
            .catch(response => {
                console.log("Error!");
            })
            // if (flag < reciverLocation.length-1){
            //     flag++;
            // }
            //inputs.push(input);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset(); 

            //for display purposes only
            
            //saving to localStorage
            //localStorage.setItem('UserInputs', JSON.stringify(inputs));
            
        }
document.getElementById('button').addEventListener('click', addInput);

recentBtn.addEventListener("click",()=>{
    if(stateOff == true){
        content.style.display ="flex"
        stateOff = false;
        fetch("http://10.1.168.53:3000/report")
            .then((res) => res.json())
            .then(json => {
                console.log(json);
                addJSONtoRecent(json);
            })
    }
    else if(stateOff ==false){
        content.style.display ="none"
        stateOff = true;
    }
})
    

function addJSONtoRecent(inputs){
    let i = inputs.length-1;
    let count = 0;
    while(count < reciverLocation.length && i >= 0){
        reciverTitle[count].innerHTML = inputs[i].desc;
        reciverLocation[count].innerHTML = `Location: ${inputs[i].location}`;
        reciverDate[count].innerHTML = `Date: ${inputs[i].data}`;
        i--;
        count++;
    }
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
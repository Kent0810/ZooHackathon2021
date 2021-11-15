let toggle = document.querySelector(".fa-bars");
let sidebar = document.querySelector(".sidebar");
let x = document.querySelector(".fa-chevron-right");

toggle.addEventListener('click',()=>{
    sidebar.style.marginRight ="245px";
})
x.addEventListener("click",()=>{


    sidebar.style.marginRight ="-245px";
})

//reveal
window.addEventListener('scroll',reveal);


function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    for(var i =  0;i<reveals.length;i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint =120;

        if(revealTop<windowHeight-revealPoint){
            reveals[i].classList.add('active');
        }
        //optional
        else{
            reveals[i].classList.remove('active');
        }
    }
}

//Translate
function translate(){
    let infromation  = document.querySelectorAll(".infromation");
    for(var i = 0 ;i<infromation.length;i++){
        infromation[i].innerHTML = "ADU"
    }
}


//Page Transition
    const transtion_el = document.querySelector('.transition')
    const anchors = document.querySelectorAll('.rpbtn')
    transtion_el.classList.remove('is-active')
    for (let i = 0;i<anchors.length;i++){
        anchors[i].addEventListener('click',(e)=>{
            transtion_el.classList.add('is-active')
            e.preventDefault();
            setTimeout(()=>{
                transtion_el.classList.remove('is-active')
                let target = e.target.href;
                window.location.href = target;
            },1000);
        })
    }
    
// let wrapper = document.querySelector(".about-us");
// let but = document.querySelector(".btn");
//     wrapper.style.display = "none";
//     but.addEventListener("click",()=>{
//         wrapper.style.display = "block";
//     })
// window.onload = () => {
//     // setTimeout(()=>{
//     //     transtion_el.classList.add('is-active')
//     // },5000);
//     // setTimeout(()=>{
//     //     transtion_el.classList.remove('is-active')
//     // },500);
//     // for (let i = 0;i<anchors.length;i++){
//     //     const anchor = anchors[i];
//     //     anchor = addEventListener('click',e=>{
//     //         e.preventDefault();
//     //         let target = e.target.href;
            
//     //         transtion_el.classList.add('is-active');
            
//     //         setTimeout(()=>{
//     //             window.location.href = target;
//     //         },500);
//     //     })
//     // }
// }
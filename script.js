// const res = fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q="lag ja gale"&type=video&key=AIzaSyC9Dof3_ans6aGXVe1bqHZ9m0O69fdXfTA`)

// console.log(res);


function switchDarkWhiteMode(){
    document.querySelector(".dark-white-mode").addEventListener("click", function(event){
        if(event.target.classList.contains("fa-moon")){
            document.querySelector(".fa-moon").classList.add("hidden");
            document.querySelector(".fa-sun").classList.remove("hidden");
            document.querySelector("main").classList.add("bg-dark")
            document.querySelector("main").classList.remove("bg-white")

        }
        else if(event.target.classList.contains("fa-sun")){
            document.querySelector(".fa-moon").classList.remove("hidden");
            document.querySelector(".fa-sun").classList.add("hidden");
            
            document.querySelector("main").classList.add("bg-white")
            document.querySelector("main").classList.remove("bg-dark")
        }
    })

}

switchDarkWhiteMode()

// isko baad me bnana hai

// function buttonTextShowHide(){
//     document.querySelector(".fixed").addEventListener("click",(e)=>{
//         e.preventDefault();
//         console.log(e.target.classList);
//     })
// }
// buttonTextShowHide();






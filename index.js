const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const hr = document.querySelectorAll("hr");

questions.forEach((q, i) =>{
    q.addEventListener("click", ()=>{
        if(q.classList.contains("active")){
            questions[i].classList.remove("active");
            answers[i].classList.remove("active");
            hr[i].classList.remove("active");
        } else {
            questions[i].classList.add("active");
            answers[i].classList.add("active");
            hr[i].classList.add("active");
        }
    })
});
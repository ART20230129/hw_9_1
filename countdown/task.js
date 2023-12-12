const timer = document.getElementById("timer");
let timerID = setInterval(() => {
       timer.textContent = Number(timer.textContent) - 1; 
        if (timer.textContent == -1) {
                clearInterval(timerID);
                alert("Вы победили в конкурсе!");
                return timer.textContent = 0; // чтобы на счетчике было значение 0, а не -1 !!!
               
        } 
        
}, 1000

)
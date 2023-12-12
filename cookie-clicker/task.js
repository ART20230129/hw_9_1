let clickUser = false;
const clicker__counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
cookie.onclick = () => {
       clicker__counter.textContent = Number(clicker__counter.textContent) + 1; // увеличиваем счетчик кликов
       if (clickUser == false) {  // меняем размер картинки
        cookie.width += 50;
        //clicker__counter.textContent = Number(clicker__counter.textContent) + 1;
        clickUser = true;
        } else {
                cookie.width -= 50;
                //clicker__counter.textContent = Number(clicker__counter.textContent) + 1;
                clickUser = false;
        }
}
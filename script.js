const message = document.querySelector('.popup');
const hand = document.querySelector('.disabled');
const firstslide = document.querySelector('.first_slide');
const twohand = document.querySelector('.disabled1');
const phone = document.querySelector('.phone');
const header = document.querySelector('header')
message.addEventListener('click', function () {
    message.classList.remove('message1');
    message.classList.add('onpopup');
    hand.classList.remove('disabled')
    hand.classList.add('enable')
});
firstslide.addEventListener('click', function () {
firstslide.classList.remove('message');
firstslide.classList.add('done_slide');
twohand.classList.remove('disabled1')
twohand.classList.add('enable1')
});
/* time - vremya */
function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    time = document.querySelector('timer');
    
    setTimeout(showTime, 1000);
}
/* scroll helper */ 

    document.addEventListener('wheel', function scroll (e){
      
        if (e.deltaY >= 1) {
         
            console.log('cookie');
            window.scrollTo({
                behavior: 'smooth',
                top: 2000
             })
        }
        else {
            console.log('ecx');
            window.scrollTo({
               behavior: 'smooth',
               top: -2000
            })
        
        }
      
    });
    phone.addEventListener('click', function () {
        header.classList.add('small_header')
        header.classList.toggle('full_header');

    });

showTime();
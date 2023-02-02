const message = document.querySelector('.popup');
const hand = document.querySelector('.disabled');
const firstslide = document.querySelector('.first_slide');
const twohand = document.querySelector('.disabled1');
const phone = document.querySelector('.phone');
const header = document.querySelector('header');
const nav = document.querySelector('.top__content__off')
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
         
          
            window.scrollTo({
                behavior: 'smooth',
                top: 2000
             })
        }
        else {
          
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
let setting1 = document.getElementById('myRange');
let countSaturation = document.querySelector('#value');
let effect = document.querySelector('.effectOn');
let html = document.getElementById('grand__parent');
setting1.addEventListener('mousemove', function () {
    let x = setting1.value;
    let color = 'linear-gradient(90deg, rgb(219,234,139)' + x + '%, rgb(48,49,44)' + x + '%)';
    setting1.style.background = color;
    countSaturation.innerHTML = " " + x;
    html.style.filter = "brightness(" + setting1.value * 2 + "%)";
    if (x >= 75) {
        countSaturation.innerHTML = " " + x + " warning - extreme count";
        countSaturation.style.color = '#ffa38c';   
    }
    if (x == 45) {
        countSaturation.innerHTML = " " + x + " recomended count ";
        countSaturation.style.color = '#e7f3db';  
    } 
    if (x <=10) {
    }
    else {
        countSaturation.style.color = '';
    }
})

setting1.addEventListener('touchmove', function () {
    let x = setting1.value;
    let color = 'linear-gradient(90deg, rgb(219,234,139)' + x + '%, rgb(48,49,44)' + x + '%)';
    setting1.style.background = color;
    countSaturation.innerHTML = " " + x;
    html.style.filter = "brightness(" + setting1.value * 2 + "%)";
    if (x >= 75) {
        countSaturation.innerHTML = " " + x + " warning - extreme count";
        countSaturation.style.color = '#ffa38c';   
    }
    if (x == 45) {
        countSaturation.innerHTML = " " + x + " recomended count ";
        countSaturation.style.color = '#e7f3db';  
    } 
    if (x <=10) {
    }
    else {
        countSaturation.style.color = '';
    }
})

setting1.addEventListener('keyup', function () {
    let x = setting1.value;
    let color = 'linear-gradient(90deg, rgb(219,234,139)' + x + '%, rgb(48,49,44)' + x + '%)';
    setting1.style.background = color;
    countSaturation.innerHTML = " " + x;
    html.style.filter = "brightness(" + setting1.value * 2 + "%)";
    if (x >= 75) {
        countSaturation.innerHTML = " " + x + " warning - extreme count";
        countSaturation.style.color = '#ffa38c';   
    }
    if (x == 45) {
        countSaturation.innerHTML = " " + x + " recomended count ";
        countSaturation.style.color = '#e7f3db';  
    } 
    if (x <=10) {
    }
    else {
        countSaturation.style.color = '';
    }
})
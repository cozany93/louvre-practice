document.addEventListener(`DOMContentLoaded`, function () { 
    // AOS
    AOS.init();


    // 마우스휠 이벤트(헤더가 휠이 내려갈때는 안보이다가 올라갈때 보이게끔 설정)
    window.addEventListener(`wheel`, (event) => { 
        const headerArea = document.querySelector(`.header_area`);

        if (event.deltaY > 0) {
            // wheel down
            headerArea.classList.remove(`scroll`);
            
        } else {
            // wheel up
            headerArea.classList.add(`scroll`);
        }

    });

    // menu
    const menu = document.querySelector(`.menu_section`);
    const menuBtn = document.querySelector(`.menu_btn`);
    const clostBtn = document.querySelector(`.close_btn`);
    const subMenu1 = document.querySelector(`.submenu_1`);

    const subMenu = document.querySelectorAll(`.submenu`);


    // querySelectorall all= if 반복문



    menuBtn.addEventListener(`click`, function (){
        this.classList.toggle(`block`);
        menu.style.display = "block";
    });

    clostBtn.addEventListener(`click`, function (){
        this.classList.toggle(`block`);
        menu.style.display = "";


    });

    const btn1 = document.querySelector(`.btn1`)
    const btn2 = document.querySelector(`.btn2`)
    const btn3 = document.querySelector(`.btn3`)
    const btn4 = document.querySelector(`.btn4`)

    



    // swiper
    var swiper = new Swiper(".mySwiper", {

        pagination: {
            // el: ".swiper-pagination",
        },

        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        }
    });
    

    // 상단 이동 버튼
    const topBtn = document.querySelector(`.top_btn`);
    window.addEventListener(`scroll`, function () { 
        const scrollTop = this.window.scrollY;
        console.log(sct);

        if (sct >= 300) {
            topBtn.classList.add(`scroll`);
        } else {
            topBtn.classList.remove(`scroll`);
        }
    });

    //클릭 시 최상단 이동
    topBtn.addEventListener(`click`, () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth',
        })
    })





}); /* 마지막스코프 */
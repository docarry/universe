
// 메인 배너 슬라이드
var mainSwiper = new Swiper("#main-banner.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    speed:800,
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    navigation: {
    nextEl: "#main-banner .swiper-button-next",
    prevEl: "#main-banner .swiper-button-prev",
    },
    pagination: {
    el: "#main-banner .swiper-pagination",
    clickable: true,
    },
});



// 아티스트 슬라이드
var artistSwiper = new Swiper("#artist-slide.mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,  // 슬라이드가 항상 중앙에 위치하도록 설정
    slidesPerView: 3, // 슬라이드 크기에 맞춰 자동으로 조정
    freeMode : false,
    coverflowEffect: {
    rotate: 0,
    stretch: 300,
    depth: -500,
    modifier: 1,
    slideShadows: false,
    },
    pagination: {
    el: "#artist-slide .swiper-pagination",
    },
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
});



// 스케쥴 변우석 1번
document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var calendar = new FullCalendar.Calendar(document.getElementById('calendar01'), {
        headerToolbar: { center: 'title' },
        locale: 'ko',
        initialView: 'dayGridWeek',
        initialDate: today.toISOString().split('T')[0],
        events: [
            { 
                title: 'test1', 
                start: new Date(today.setDate(today.getDate() - 3)).toISOString().split('T')[0], 
                allDay: true 
            },
            { 
                title: 'test2', 
                start: new Date(today.setDate(today.getDate() - 2)).toISOString().split('T')[0], 
                allDay: true 
            }
        ],
        eventDidMount: function(event) {
            let dayNumber = event.el.closest('.fc-daygrid-day').querySelector('.fc-daygrid-day-number').classList.add('test');

            if (dayNumber) { 
                dayNumber.style.color = '#ff0000'; 
                dayNumber.style.fontWeight = 'bold'; 
            }
        },
        views: {
            dayGridWeek: {
                dayHeaderContent: function(arg){
                    const dayNames = ['일','월','화','수','목','금','토'];
                    return dayNames[arg.date.getDay()];
                }
            }
        },
        fixedWeekCount: true,
        contentHeight: 250,
        dayCellDidMount: function(info){ 
            let dateTextContent = info.el.querySelector('.fc-daygrid-day-number').textContent;
            info.el.querySelector('.fc-daygrid-day-number').textContent = dateTextContent.replace('일', '');
            let dayNumberElem = info.el.querySelector('.fc-daygrid-day-number');
            let dateText = dayNumberElem.textContent.trim();
            if (dateText) {
                let paddedDate = dateText.padStart(2, '0'); 
                dayNumberElem.textContent = paddedDate;
            }
        }
    });
    calendar.render();
});
// 스케쥴 변우석 2번
document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var calendar = new FullCalendar.Calendar(document.getElementById('calendar02'), {
        headerToolbar: { center: 'title' },
        locale: 'ko',
        initialView: 'dayGridWeek',
        initialDate: today.toISOString().split('T')[0],
        events: [
            { 
                title: 'test1', 
                start: new Date(today.setDate(today.getDate() - 3)).toISOString().split('T')[0], 
                allDay: true 
            },
            { 
                title: 'test2', 
                start: new Date(today.setDate(today.getDate() - 2)).toISOString().split('T')[0], 
                allDay: true 
            }
        ],
        eventDidMount: function(event) {
            let dayNumber = event.el.closest('.fc-daygrid-day').querySelector('.fc-daygrid-day-number').classList.add('test');

            if (dayNumber) { 
                dayNumber.style.color = '#ff0000'; 
                dayNumber.style.fontWeight = 'bold'; 
            }
        },
        views: {
            dayGridWeek: {
                dayHeaderContent: function(arg){
                    const dayNames = ['일','월','화','수','목','금','토'];
                    return dayNames[arg.date.getDay()];
                }
            }
        },
        fixedWeekCount: true,
        contentHeight: 250,
        dayCellDidMount: function(info){ 
            let dateTextContent = info.el.querySelector('.fc-daygrid-day-number').textContent;
            info.el.querySelector('.fc-daygrid-day-number').textContent = dateTextContent.replace('일', '');
            let dayNumberElem = info.el.querySelector('.fc-daygrid-day-number');
            let dateText = dayNumberElem.textContent.trim();
            if (dateText) {
                let paddedDate = dateText.padStart(2, '0'); 
                dayNumberElem.textContent = paddedDate;
            }
        }
    });
    calendar.render();
});



// 릴리즈 슬라이드
// var releaseSwiper = new Swiper("#release-slide.mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true, 
//     coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: false,
//     },
//     pagination: {
//     el: "#release-slide .swiper-pagination",
//     },
//     loop: true,
//     // autoplay: {
//     //     delay: 3000,
//     //     disableOnInteraction: false,
//     // },
//     slidesPerView: 3,
// });
var releaseSwiper = new Swiper("#release-slide.mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: "#release-slide .swiper-pagination",
    },
  });
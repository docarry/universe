
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
var artistSwiper = new Swiper("#artist-slide", {
    initialSlide: 2,
    spaceBetween: -80,
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
        el: "#artist-slide .swiper-pagination",
        clickable: true,
    },
    loop: true,
});



// 스케줄 캘린더 변우석 1번
document.addEventListener('DOMContentLoaded', function() {
    var today01 = new Date();
    var calendar01 = new FullCalendar.Calendar(document.getElementById('calendar01'), {
        headerToolbar: { center: 'title' },
        locale: 'ko',
        initialView: 'dayGridWeek',
        initialDate: today01.toISOString().split('T')[0],
        events: [
            { 
                title: 'text1', 
                start: new Date(today01.setDate(today01.getDate() - 3)).toISOString().split('T')[0], 
                allDay: true 
            },
            { 
                title: 'text2', 
                start: new Date(today01.setDate(today01.getDate() - 2)).toISOString().split('T')[0], 
                allDay: true 
            }
        ],
        eventDidMount: function(event) {
            let dayGridDay = event.el.closest('.fc-daygrid-day');
            let dayNumberElem = dayGridDay.querySelector('.fc-daygrid-day-number');
            
            if (dayNumberElem) {
                // 이벤트가 있는 날짜를 두 자리 숫자로 표시
                let eventDate = new Date(event.event.start);
                let day = eventDate.getDate().toString().padStart(2, '0'); // 01, 02 형식으로 변환
                dayNumberElem.textContent = day;

                // 스타일 적용 (글자색 빨간색)
                dayNumberElem.style.color = '#ff0000';
                dayNumberElem.style.fontWeight = 'bold';
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
            let dayNumberElem = info.el.querySelector('.fc-daygrid-day-number');
            let dateText = dayNumberElem.textContent.trim();

            // 모든 날짜에 대해 패딩 처리 (01, 02 형식)
            if (dateText) {
                let paddedDate = dateText.padStart(2, '0'); 
                dayNumberElem.textContent = paddedDate;
            }
        }
    });
    calendar01.render();
});

// // 스케줄 캘린더 변우석 2번






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
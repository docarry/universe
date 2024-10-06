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
    keyboard: {
        enabled: true,
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
    keyboard: {
        enabled: true,
    },
});



// 스케줄, 캘린더
document.addEventListener('DOMContentLoaded', function() {
    function renderCalendar(elementId, events, weekClass) {
        var today = new Date();
        if (weekClass === 'week02' || weekClass === 'week04' || weekClass === 'week06' || weekClass === 'week08' || weekClass === 'week10') {
            today.setDate(today.getDate() + 7);
        }
        today.setDate(today.getDate() - today.getDay());

        var calendar = new FullCalendar.Calendar(document.getElementById(elementId), {
            headerToolbar: { center: 'title' },
            locale: 'ko',
            initialView: 'dayGridWeek',
            initialDate: today.toISOString().split('T')[0],
            events: events,
            eventDidMount: function(event) {
                let dayGridDay = event.el.closest('.fc-daygrid-day');
                let dayNumberElem = dayGridDay.querySelector('.fc-daygrid-day-number');

                if (dayNumberElem) {
                    // 이벤트 날짜를 두 자리 형식으로 패딩 처리
                    let eventDate = new Date(event.event.start);
                    let day = eventDate.getDate().toString().padStart(2, '0'); // 01, 02 형식으로 변환
                    dayNumberElem.textContent = day;

                    // 스타일 적용 (border 빨간색)
                    let eventLink = dayGridDay.querySelector('.fc-daygrid-day-top a');
                    if (eventLink) {
                        eventLink.classList.add('eventText'); // 클래스 추가
                    }

                    // 이벤트가 오늘 날짜와 겹칠 경우, 이벤트 border가 우선시되도록 처리
                    if (eventDate.toDateString() === new Date().toDateString()) {
                        eventLink.style.border = 'solid 2px #f86666'; // 이벤트 border를 우선시
                    }
                }
            },
            views: {
                dayGridWeek: {
                    dayHeaderContent: function(arg) {
                        const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
                        return dayNames[arg.date.getDay()];
                    }
                }
            },
            fixedWeekCount: true,
            contentHeight: 250,
            dayCellDidMount: function(info) {
                let dayNumberElem = info.el.querySelector('.fc-daygrid-day-number');
                if (dayNumberElem) {
                    let date = new Date(info.date);
                    let day = date.getDate().toString().padStart(2, '0'); // 01, 02 형식으로 변환
                    dayNumberElem.textContent = day;

                    // 일요일이면 텍스트 색상 빨간색으로 변경
                    if (date.getDay() === 0 || date.getDay() === 6) {
                        dayNumberElem.style.color = '#f86666'; // 일요일과 토요일 빨간색
                    }

                    // 오늘 날짜가 있을 경우
                    if (date.toDateString() === new Date().toDateString()) {
                        // 오늘 날짜에 대한 스타일을 먼저 적용
                        let todayLink = info.el.querySelector('.fc-daygrid-day-top a');
                        if (todayLink) {
                            todayLink.style.border = 'solid 2px #333'; // 기본적으로 오늘 날짜의 border
                        }
                    }
                }
            },
            datesSet: function() {
                // 날짜가 변경될 때마다 모든 일자에 대해 01, 02 형식으로 패딩 처리
                document.querySelectorAll('.fc-daygrid-day-number').forEach(function(dayElem) {
                    let date = new Date(dayElem.closest('.fc-day').getAttribute('data-date'));
                    let day = date.getDate().toString().padStart(2, '0');
                    dayElem.textContent = day;
                });
            },
            eventClick: function(info) {
                // 클릭한 이벤트의 날짜와 정보를 업데이트
                let eventDate = new Date(info.event.start);
                const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

                let formattedDate = (eventDate.getMonth() + 1) + '월 ' + eventDate.getDate().toString().padStart(2, '0') + '일 (' + dayNames[eventDate.getDay()] + ')';

                // 날짜 차이를 계산하여 D-Day 형식으로 표시
                let today = new Date();
                today.setHours(0, 0, 0, 0);
                eventDate.setHours(0, 0, 0, 0);

                let diffTime = eventDate.getTime() - today.getTime();
                let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                let ddayText = '';
                if (diffDays > 0) {
                    ddayText = `D+${diffDays}`;
                } else if (diffDays < 0) {
                    ddayText = `D${diffDays}`;
                } else {
                    ddayText = `D-Day`;
                }

                // dateText 요소에 포맷된 날짜 업데이트
                let dateTextElem = document.querySelector(`.${weekClass} .dateText`);
                if (dateTextElem) {
                    dateTextElem.textContent = formattedDate;
                }

                // dateTextDday 요소에 D-Day 형식 업데이트
                let dateTextDdayElem = document.querySelector(`.${weekClass} .dateTextDday`);
                if (dateTextDdayElem) {
                    dateTextDdayElem.textContent = ddayText;
                }

                // dateContent 요소에 이벤트의 title 정보 업데이트
                let dateContentElem = document.querySelector(`.${weekClass} .dateContent`);
                if (dateContentElem) {
                    dateContentElem.textContent = info.event.title;
                }
            }
        });
        calendar.render();

        // 기본적으로 첫 번째 이벤트의 정보를 표시
        var firstEvent = calendar.getEvents()[0];
        if (firstEvent) {
            let firstEventDate = new Date(firstEvent.start);
            const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

            let formattedDate = (firstEventDate.getMonth() + 1) + '월 ' + firstEventDate.getDate().toString().padStart(2, '0') + '일 (' + dayNames[firstEventDate.getDay()] + ')';

            let today = new Date();
            today.setHours(0, 0, 0, 0);
            firstEventDate.setHours(0, 0, 0, 0);

            let diffTime = firstEventDate.getTime() - today.getTime();
            let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            let ddayText = '';
            if (diffDays > 0) {
                ddayText = `D+${diffDays}`;
            } else if (diffDays < 0) {
                ddayText = `D${diffDays}`;
            } else {
                ddayText = `D-Day`;
            }

            let dateTextElem = document.querySelector(`.${weekClass} .dateText`);
            if (dateTextElem) {
                dateTextElem.textContent = formattedDate;
            }

            let dateTextDdayElem = document.querySelector(`.${weekClass} .dateTextDday`);
            if (dateTextDdayElem) {
                dateTextDdayElem.textContent = ddayText;
            }

            let dateContentElem = document.querySelector(`.${weekClass} .dateContent`);
            if (dateContentElem) {
                dateContentElem.textContent = firstEvent.title;
            }
        }
    }

    // calendar01과 calendar02에 대해 호출 : 변우석
    renderCalendar('calendar01', [
        {
            title: '공연)2024 이슬라이브 페스티벌-가평',
            start: new Date(new Date().setDate(new Date().getDate() - 0)).toISOString().split('T')[0],
            allDay: true
        },
        {
            title: '공연)2024 페스티벌-양평',
            start: new Date(new Date().setDate(new Date().getDate() - 4)).toISOString().split('T')[0],
            allDay: true
        }
    ], 'week01');

    renderCalendar('calendar02', [
        {
            title: '공연)2024 HEREH WORLD TOUR CONCERT ENCORE : THE WINNING',
            start: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split('T')[0],
            allDay: true
        }
    ], 'week02');

    // calendar03과 calendar04에 대해 호출 : 이지은
    renderCalendar('calendar03', [
        {
            title: '공연)2024 콘서트 <Love, Poen>',
            start: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0],
            allDay: true
        }
    ], 'week03');

    renderCalendar('calendar04', [
        {
            title: '앨범)<꽃갈피 둘>발매 7주년',
            start: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString().split('T')[0],
            allDay: true
        }
    ], 'week04');

    // calendar05과 calendar06에 대해 호출 : 윤계상
    renderCalendar('calendar05', [
        {
            title: '공연)2024 god Concert Chapter',
            start: new Date(new Date().setDate(new Date().getDate() - 0)).toISOString().split('T')[0],
            allDay: true
        }
    ], 'week05');

    renderCalendar('calendar06', [
        {
            title: 'Non-schedule',
            allDay: true
        }
    ], 'week06');

    // calendar07과 calendar08에 대해 호출 : 남우현
    renderCalendar('calendar07', [
        {
            title: 'Non-schedule',
            allDay: true
        }
    ], 'week07');

    renderCalendar('calendar08', [
        {
            title: '공연)2024 NAM WOO HYUN CONCERT',
            start: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split('T')[0],
            allDay: true
        }
    ], 'week08');


        // calendar09과 calendar10에 대해 호출 : 박서준
        renderCalendar('calendar09', [
            {
                title: '공연)2024 박서준 팬미팅 올림픽공원',
                start: new Date(new Date().setDate(new Date().getDate() - 0)).toISOString().split('T')[0],
                allDay: true
            }
        ], 'week09');
    
        renderCalendar('calendar10', [
            {
                title: '공연)2024 박서준 COMMA 언택트 팬미팅',
                start: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split('T')[0],
                allDay: true
            }
        ], 'week10');

});



// 릴리즈 슬라이드
var releaseSwiper = new Swiper("#release-slide", {
    initialSlide: 2,
    slidesPerView: 3,
    spaceBetween: 100,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true, 
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: -100,
    modifier: 1,
    slideShadows: false,
    },
    pagination: {
    el: "#release-slide .swiper-pagination",
    },
});
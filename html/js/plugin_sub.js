
// sub-artist----- 
// 메인 슬라이드
var subArtistMainswiper = new Swiper(".sub-artist-main-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".sub-artist-main-swiper .swiper-pagination",
        clickable: true,
    },
});
function changeImage(event, clickedFrameClass) {
    // 클릭한 프레임의 부모 요소를 찾음
    const frameWrap = event.currentTarget.closest('.frame-wrap');
    const largeFrame = frameWrap.querySelector('.sub-artist-frame1');
    const frame2 = frameWrap.querySelector('.sub-artist-frame2');
    const frame3 = frameWrap.querySelector('.sub-artist-frame3');

    // 현재 이미지 저장
    const largeImageSrc = largeFrame.querySelector('img').src;
    const frame2ImageSrc = frame2.querySelector('img').src;
    const frame3ImageSrc = frame3.querySelector('img').src;

    // 클릭된 프레임에 따라 이미지 교환
    if (clickedFrameClass === 'sub-artist-frame2') {
        largeFrame.querySelector('img').src = frame2ImageSrc;
        frame2.querySelector('img').src = frame3ImageSrc;
        frame3.querySelector('img').src = largeImageSrc;
    } else if (clickedFrameClass === 'sub-artist-frame3') {
        largeFrame.querySelector('img').src = frame3ImageSrc;
        frame3.querySelector('img').src = frame2ImageSrc;
        frame2.querySelector('img').src = largeImageSrc;
    }
}

// 앨범 슬라이드
var subArtistDiscoswiper = new Swiper(".sub-artist-disco-swiper", {
    loop: true,
    // effect: 'creative',
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 'auto',
    spaceBetween: 0,
    slidesPerGroup : 1,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".sub-artist-info-3 .swiper-button-next",
        prevEl: ".sub-artist-info-3 .swiper-button-prev",
    },
    autoHeight: true,
});
var subArtistDiscoMswiper = new Swiper(".sub-artist-disco-m-swiper", {
    slidesPerView: 2,
    spaceBetween: 28,
    loop: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        580: {
            slidesPerView: 2,
            spaceBetween: 28,
        },
    },
});

// sub-artist-----



// sub-goods---------------------------------------
var goodsSwiper = new Swiper("#subGoods #bestBox .swiper.mySwiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: "#subGoods #bestBox .nextBtn",
        prevEl: "#subGoods #bestBox .prevBtn",
    },
    breakpoints: {
        580: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
    },
});
// sub-goods---------------------------------------

// sub-schedule-----
document.addEventListener('DOMContentLoaded', function () {
    const calendars = {}; // 각 탭에 대한 캘린더 인스턴스를 저장할 객체

    // 날짜를 yyyy년 mm월 dd일 형식으로 포맷하는 함수
    function formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}년 ${month}월 ${day}일`;
    }

    // 캘린더 렌더링 함수
    function renderCalendar(elementId, events) {
        return new FullCalendar.Calendar(document.getElementById(elementId), {
            timeZone: 'UTC',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: ''
            },
            contentHeight: 950,  // 예: 500px로 고정 (한 달 크기 정도로 맞춰서 표시)
            locale: 'ko',
            initialView: 'dayGridMonth',
            titleFormat: {
                year: 'numeric',
                month: 'long'
            },
            buttonText: {
                today: '오늘'
            },
            eventDidMount: function (event) {
                let dayGridDay = event.el.closest('.fc-daygrid-day');
                let dayNumberElem = dayGridDay.querySelector('.fc-daygrid-day-number');

                if (dayNumberElem) {
                    let eventDate = new Date(event.event.start);
                    let day = eventDate.getDate().toString().padStart(2, '0');
                    dayNumberElem.textContent = day;

                    let eventLink = dayGridDay.querySelector('.fc-daygrid-day-top a');
                    if (eventLink) {
                        eventLink.classList.add('eventText');
                    }

                    if (eventDate.toDateString() === new Date().toDateString()) {
                        eventLink.style.border = 'solid 2px #f86666';
                    }
                }
            },
            dayCellDidMount: function (info) {
                let dayNumberElem = info.el.querySelector('.fc-daygrid-day-number');
                if (dayNumberElem) {
                    let date = new Date(info.date);
                    let day = date.getDate().toString().padStart(2, '0');
                    dayNumberElem.textContent = day;

                    if (date.getDay() === 0 || date.getDay() === 6) {
                        dayNumberElem.style.color = '#f86666'; // 일요일과 토요일 빨간색
                    }

                    if (date.toDateString() === new Date().toDateString()) {
                        let todayLink = info.el.querySelector('.fc-daygrid-day-top a');
                        if (todayLink) {
                            todayLink.style.border = 'solid 2px #333';
                        }
                    }
                }
            },
            datesSet: function () {
                document.querySelectorAll('.fc-daygrid-day-number').forEach(function (dayElem) {
                    let date = new Date(dayElem.closest('.fc-day').getAttribute('data-date'));
                    let day = date.getDate().toString().padStart(2, '0');
                    dayElem.textContent = day;
                });
            },
            eventClick: function (info) {
                var event = info.event;
                var eventDate = new Date(event.start); // 이벤트 날짜
                var formattedDate = formatDate(eventDate); // 날짜 포맷

                // 팝업 내용 구성
                var popupContent = `
                    <div class="popup-header">
                        <strong>${formattedDate}</strong>
                        <button class="popup-close-btn"><img src="/img/icon/close-black.svg"></button>
                    </div>
                    <span class="event-divider"></span>
                    <h5>${event.title}</h5>
                `; // 날짜와 닫기 버튼을 묶고, 타이틀과 선 추가

                var popup = document.querySelector('.event-popup');
                popup.innerHTML = popupContent;

                // 팝업 위치 계산
                var eventEl = info.el.getBoundingClientRect(); // 날짜의 위치와 크기 가져오기
                var popupWidth = popup.offsetWidth; // 팝업의 너비
                var popupHeight = popup.offsetHeight; // 팝업의 높이

                // fc-day의 중앙 위치 계산 (정확한 중앙 계산)
                var fcDayCenterX = eventEl.left + eventEl.width / 2;  // 날짜의 중앙 X 좌표
                var fcDayCenterY = eventEl.top + eventEl.height / 2;  // 날짜의 중앙 Y 좌표

                // 날짜의 요일을 추출 (0: 일요일, 1: 월요일, 2: 화요일, ...)
                var dayOfWeek = eventDate.getDay(); 

                // 일요일(0), 월요일(1), 화요일(2) 일 경우: 팝업의 left 하단이 날짜 중앙에 맞춰짐
                if (dayOfWeek === 0 || dayOfWeek === 1 || dayOfWeek === 2) {
                    // 팝업의 왼쪽이 날짜 중앙에 맞춰짐
                    var popupLeft = fcDayCenterX;  // 팝업 왼쪽 위치 (날짜의 중앙을 팝업의 왼쪽에 맞춤)
                    var popupTop = fcDayCenterY - popupHeight;  // 팝업 상단 위치 (오른쪽 하단을 중앙에 맞추기 위해 -popupHeight)
                } else {
                    // 그 외의 요일(수요일부터 토요일까지): 팝업의 오른쪽 하단이 날짜 중앙에 맞춰짐
                    var popupLeft = fcDayCenterX - popupWidth;  // 팝업 왼쪽 위치 (오른쪽 하단을 중앙에 맞추기 위해 -popupWidth)
                    var popupTop = fcDayCenterY - popupHeight;  // 팝업 상단 위치 (오른쪽 하단을 중앙에 맞추기 위해 -popupHeight)
                }

                // 추가적으로 팝업이 위로 올라가게 하려면 오프셋을 더합니다.
                var offsetTop = -90; // 팝업이 위로 20px 올라가게 하여 조정

                // 위치 적용 (팝업의 오른쪽 하단이 날짜 중앙에 맞도록)
                popup.style.left = `${popupLeft + window.scrollX}px`;
                popup.style.top = `${popupTop + window.scrollY + offsetTop}px`; // 오프셋 추가

                // 팝업 표시
                popup.classList.add('show');

                // 닫기 버튼 이벤트
                document.querySelector('.popup-close-btn').addEventListener('click', function () {
                    popup.classList.remove('show');
                });
            },
            events: events
        });
    }

    // 탭이 활성화될 때마다 해당 탭에 캘린더 렌더링
    $('#sub-schedule-Tab a').on('shown.bs.tab', function (e) {
        const targetTab = $(e.target).attr('href'); // 활성화된 탭

        // 각 탭에 대한 캘린더 렌더링
        if (targetTab === '#sub-schedule-byeon' && !calendars['byeon']) {
            calendars['byeon'] = renderCalendar('sub-calendar-byeon', [
                { 
                    title: '공연)2024 이슬라이브 페스티벌', 
                    start: '2024-11-05T19:00:00+09:00', 
                },
                { 
                    title: '공연)2024 수원 월드컵 경기장', 
                    start: '2024-11-09T13:00:00+09:00', 
                },
                { 
                    title: '공연)2024 HEREH WORLD TOUR CONCERT ENCORE : THE WINNING', 
                    start: '2024-11-23T18:00:00+09:00', 
                }
            ]);
            calendars['byeon'].render();
        }

        if (targetTab === '#sub-schedule-lee' && !calendars['lee']) {
            calendars['lee'] = renderCalendar('sub-calendar-lee', [
                { 
                    title: '공연)2024 콘서트 <Love, Poen>', 
                    start: '2024-11-08T19:00:00+09:00', 
                },
                { 
                    title: '앨범)<꽃갈피 둘>발매 7주년', 
                    start: '2024-11-12T00:00:00+09:00', 
                },
            ]);
            calendars['lee'].render();
        }

        if (targetTab === '#sub-schedule-yoon' && !calendars['yoon']) {
            calendars['yoon'] = renderCalendar('sub-calendar-yoon', [
                { 
                    title: '공연)2024 god Concert Chapter', 
                    start: '2024-11-09T18:00:00+09:00', 
                },
            ]);
            calendars['yoon'].render();
        }

        if (targetTab === '#sub-schedule-nam' && !calendars['nam']) {
            calendars['nam'] = renderCalendar('sub-calendar-nam', [
                { 
                    title: '공연)2024 NAM WOO HYUN CONCERT', 
                    start: '2024-11-16T18:00:00+09:00', 
                },
            ]);
            calendars['nam'].render();
        }

        if (targetTab === '#sub-schedule-park' && !calendars['park']) {
            calendars['park'] = renderCalendar('sub-calendar-park', [
                { 
                    title: '공연)2024 박서준 팬미팅 올림픽공원', 
                    start: '2024-11-08T18:00:00+09:00', 
                },
                { 
                    title: '공연)2024 박서준 COMMA 언택트 팬미팅', 
                    start: '2024-11-23T13:00:00+09:00', 
                },
            ]);
            calendars['park'].render();
        }
    });

    // 첫 번째 탭에 대한 캘린더 렌더링 (페이지 로드 시)
    if (!calendars['byeon']) {
        calendars['byeon'] = renderCalendar('sub-calendar-byeon', [
            { 
                title: '공연)2024 이슬라이브 페스티벌', 
                start: '2024-11-05T19:00:00+09:00', 
            },
            { 
                title: '공연)2024 수원 월드컵 경기장', 
                start: '2024-11-09T13:00:00+09:00', 
            },
            { 
                title: '공연)2024 HEREH WORLD TOUR CONCERT ENCORE : THE WINNING', 
                start: '2024-11-23T18:00:00+09:00', 
            }
        ]);
        calendars['byeon'].render();
    }

    // 팝업 밖을 클릭하면 팝업을 닫는 이벤트
    document.addEventListener('click', function(event) {
        var popup = document.querySelector('.event-popup');
        if (!popup.contains(event.target) && !event.target.closest('.fc-event')) {
            popup.classList.remove('show');
        }
    });
});
// sub-schedule-----
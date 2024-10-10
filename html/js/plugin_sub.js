// AOS 애니메이트 플러그인
AOS.init();


// sub-artist---------------------------------------
// 메인 슬라이드
// 공통 Swiper 옵션 정의
const subArtistMainswiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
        clickable: true,
    },
};

// 각 슬라이드에 대해 Swiper 인스턴스 생성
const subArtistMainswiper1 = new Swiper(".sub-artist-main-swiper-1", {
    ...subArtistMainswiperOptions,
    pagination: {
        ...subArtistMainswiperOptions.pagination,
        el: ".sub-artist-main-swiper-1 .swiper-pagination",
    },
});

const subArtistMainswiper2 = new Swiper(".sub-artist-main-swiper-2", {
    ...subArtistMainswiperOptions,
    pagination: {
        ...subArtistMainswiperOptions.pagination,
        el: ".sub-artist-main-swiper-2 .swiper-pagination",
    },
});

const subArtistMainswiper3 = new Swiper(".sub-artist-main-swiper-3", {
    ...subArtistMainswiperOptions,
    pagination: {
        ...subArtistMainswiperOptions.pagination,
        el: ".sub-artist-main-swiper-3 .swiper-pagination",
    },
});

const subArtistMainswiper4 = new Swiper(".sub-artist-main-swiper-4", {
    ...subArtistMainswiperOptions,
    pagination: {
        ...subArtistMainswiperOptions.pagination,
        el: ".sub-artist-main-swiper-4 .swiper-pagination",
    },
});

const subArtistMainswiper5 = new Swiper(".sub-artist-main-swiper-5", {
    ...subArtistMainswiperOptions,
    pagination: {
        ...subArtistMainswiperOptions.pagination,
        el: ".sub-artist-main-swiper-5 .swiper-pagination",
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

// 대표작 슬라이드
var subArtistbestswiper = new Swiper(".sub-artist-best-swiper", {
    slidesPerView: 5,
    spaceBetween: 28,
    centeredSlides: true,
    initialSlide: 3,
    loop: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        991: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1281: {
            slidesPerView: 5,
            spaceBetween: 28,
        }
    }
});

var subArtistbestMswiper = new Swiper(".sub-artist-best-m-swiper", {
    slidesPerView: 2,
    spaceBetween: 28,
    initialSlide: 3,
    loop: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        320: { // 320 ~ 
            slidesPerView: 1,
            spaceBetween: 10,
        },
        581: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        990: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
    },
});

// sub-artist---------------------------------------



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

// sub-schedule---------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const calendars = {}; // 각 탭에 대한 캘린더 인스턴스를 저장할 객체

    // 날짜를 yyyy년 mm월 dd일 형식으로 포맷하는 함수
    function formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}년 ${month}월 ${day}일`;
    }

    // 다가오는 스케줄을 업데이트하는 함수
    function updateUpcomingSchedule(events, tabName) {
        const currentDate = new Date(); // 현재 날짜

        // 다가오는 이벤트만 필터링
        const upcomingEvents = events.filter(event => {
            return new Date(event.start) > currentDate;
        });

        // 해당 탭의 다가오는 스케줄 영역을 찾기
        const scheduleContainer = document.querySelector(`#sub-schedule-${tabName} .sub-schedule-m-detail`);

        if (!scheduleContainer) return;

        // 기존 내용 초기화
        scheduleContainer.innerHTML = '';

        if (upcomingEvents.length === 0) {
            scheduleContainer.innerHTML = '<p>최근 60일내 스케쥴만 나타납니다.</p>';
        } else {
            upcomingEvents.forEach(event => {
                const eventDate = new Date(event.start);
                const formattedDate = formatDate(eventDate);

                // 시간 포맷 함수 (00:00 형식으로 출력)
                function formatTime(date) {
                    const hours = date.getHours().toString().padStart(2, '0');
                    const minutes = date.getMinutes().toString().padStart(2, '0');
                    return `${hours}:${minutes}`;
                }

                const eventHtml = `
                    <div class="event-item">
                        <p class="event-time">${formatTime(new Date(event.start))}</p> 
                        <div class="event-detail">
                            <p class="event-title"><strong>${event.title}</strong></p>
                            <p class="event-date">${formattedDate}</p>
                        </div>
                    </div>
                `;

                function formatDate(date) {
                    const month = (date.getMonth() + 1).toString().padStart(2, '0');
                    const day = date.getDate().toString().padStart(2, '0');
                    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()]; // 요일 이름
                    
                    return `${month}월 ${day}일 (${dayOfWeek})`;
                }
                scheduleContainer.insertAdjacentHTML('beforeend', eventHtml);
            });
        }
    }

    // 캘린더 렌더링 함수
    function renderCalendar(elementId, events, tabName) {
        const calendar = new FullCalendar.Calendar(document.getElementById(elementId), {
            headerToolbar: {
                left: 'today',
                center: 'title',
                right: 'prev,next'
            },
            contentHeight: 820,
            locale: 'ko',
            initialView: 'dayGridMonth',
            titleFormat: {
                year: 'numeric',
                month: 'long'
            },
            buttonText: {
                today: '오늘'
            },
            datesSet: function () {
                document.querySelectorAll('.fc-daygrid-day-number').forEach(function (dayElem) {
                    let date = new Date(dayElem.closest('.fc-day').getAttribute('data-date'));
                    let day = date.getDate().toString().padStart(2, '0');
                    dayElem.textContent = day;
                });
            },
            eventDidMount: function (event) {
                let dayGridDay = event.el.closest('.fc-daygrid-day');
                let dayNumberElem = dayGridDay.querySelector('.fc-daygrid-day-number');

                // 이미 날짜가 설정된 경우 처리하지 않음
                if (dayNumberElem && dayNumberElem.textContent !== "") {
                    return; // 날짜가 이미 설정되었으므로 종료
                }

                if (dayNumberElem) {
                    let eventDate = new Date(event.event.start);
                    let day = eventDate.getDate().toString().padStart(2, '0');
                    dayNumberElem.textContent = day; // '일'을 제외하고 숫자만 설정

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
                const dayNumElem = info.el.querySelector('.fc-daygrid-day-number'); // 변수 이름 변경
                if (dayNumElem) {
                    const dateAttr = info.date; // info.date를 사용
                    const date = new Date(dateAttr);
                    
                    if (!isNaN(date.getTime())) { 
                        const day = date.getDate().toString().padStart(2, '0');

                        // 날짜가 비어있을 때만 설정
                        if (dayNumElem.textContent === "") {
                            dayNumElem.textContent = day; // '일'을 제외하고 숫자만 설정
                        }
                    } else {
                        console.warn('Invalid date:', dateAttr); 
                    }
            
                    // 주말 처리
                    if (date.getDay() === 0 || date.getDay() === 6) {
                        dayNumElem.style.color = '#f86666'; // 일요일과 토요일 빨간색
                    }
            
                    // 오늘 날짜 처리
                    if (date.toDateString() === new Date().toDateString()) {
                        const todayLink = info.el.querySelector('.fc-daygrid-day-top a');
                        if (todayLink) {
                            todayLink.style.border = 'solid 2px #333';
                        }
                    }
                }
            },

            events: events,
            datesSet: function () {
                // 다가오는 이벤트만 필터링하여 탭에 표시
                updateUpcomingSchedule(events, tabName);
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
                `;

                var popup = document.querySelector('.event-popup');
                popup.innerHTML = popupContent;

                // 팝업 위치 계산
                var eventEl = info.el.getBoundingClientRect();
                var popupWidth = popup.offsetWidth;
                var popupHeight = popup.offsetHeight;
                var fcDayCenterX = eventEl.left + eventEl.width / 2;
                var fcDayCenterY = eventEl.top + eventEl.height / 2;
                var dayOfWeek = eventDate.getDay();

                var popupLeft, popupTop;
                if (dayOfWeek === 0 || dayOfWeek === 1 || dayOfWeek === 2) {
                    popupLeft = fcDayCenterX;
                    popupTop = fcDayCenterY - popupHeight;
                } else {
                    popupLeft = fcDayCenterX - popupWidth;
                    popupTop = fcDayCenterY - popupHeight;
                }

                var offsetTop = -60;

                popup.style.left = `${popupLeft + window.scrollX}px`;
                popup.style.top = `${popupTop + window.scrollY + offsetTop}px`;

                popup.classList.add('show');

                document.querySelector('.popup-close-btn').addEventListener('click', function () {
                    popup.classList.remove('show');
                });
            }
        });

        return calendar;
    }

    // 탭이 활성화될 때마다 해당 탭에 캘린더 렌더링
    $('#sub-schedule-Tab a').on('shown.bs.tab', function (e) {
        const targetTab = $(e.target).attr('href'); // 활성화된 탭

        // 각 탭에 대한 캘린더 렌더링
        if (targetTab === '#sub-schedule-byeon' && !calendars['byeon']) {
            calendars['byeon'] = renderCalendar('sub-calendar-byeon', [
                { title: '공연)2024 이슬라이브 페스티벌', start: '2024-11-05T19:00:00+09:00' },
                { title: '공연)2024 수원 월드컵 경기장', start: '2024-11-09T13:00:00+09:00' },
                { title: '공연)2024 HEREH WORLD TOUR CONCERT ENCORE : THE WINNING', start: '2024-11-23T18:00:00+09:00' }
            ], 'byeon');
            calendars['byeon'].render();
        }

        if (targetTab === '#sub-schedule-lee' && !calendars['lee']) {
            calendars['lee'] = renderCalendar('sub-calendar-lee', [
                { title: '공연)2024 콘서트 &lt;Love, Poen&gt;', start: '2024-11-08T19:00:00+09:00' },
                { title: '앨범)<꽃갈피 둘>발매 7주년', start: '2024-11-12T00:00:00+09:00' }
            ], 'lee');
            calendars['lee'].render();
        }

        if (targetTab === '#sub-schedule-yoon' && !calendars['yoon']) {
            calendars['yoon'] = renderCalendar('sub-calendar-yoon', [
                { title: '공연)2024 god Concert Chapter', start: '2024-11-09T18:00:00+09:00' }
            ], 'yoon');
            calendars['yoon'].render();
        }

        if (targetTab === '#sub-schedule-nam' && !calendars['nam']) {
            calendars['nam'] = renderCalendar('sub-calendar-nam', [
                { title: '공연)2024 NAM WOO HYUN CONCERT', start: '2024-11-16T18:00:00+09:00' }
            ], 'nam');
            calendars['nam'].render();
        }

        if (targetTab === '#sub-schedule-park' && !calendars['park']) {
            calendars['park'] = renderCalendar('sub-calendar-park', [
                { title: '공연)2024 박서준 팬미팅 올림픽공원', start: '2024-11-08T18:00:00+09:00' },
                { title: '공연)2024 박서준 COMMA 언택트 팬미팅', start: '2024-11-23T13:00:00+09:00' }
            ], 'park');
            calendars['park'].render();
        }
    });

    // 첫 번째 탭에 대한 캘린더 렌더링 (페이지 로드 시)
    if (!calendars['byeon']) {
        calendars['byeon'] = renderCalendar('sub-calendar-byeon', [
            { title: '공연)2024 이슬라이브 페스티벌', start: '2024-11-05T19:00:00+09:00' },
            { title: '공연)2024 수원 월드컵 경기장', start: '2024-11-09T13:00:00+09:00' },
            { title: '공연)2024 HEREH WORLD TOUR CONCERT ENCORE : THE WINNING', start: '2024-11-23T18:00:00+09:00' }
        ], 'byeon');
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
// sub-schedule---------------------------------------

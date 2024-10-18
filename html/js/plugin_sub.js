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
        draggable: true,
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
const subArtistBestswiperOptions = {
    slidesPerView: 5,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 3,
    loop: true,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
};

// 각 슬라이드에 대해 Swiper 인스턴스 생성
const subArtistBestswiper1 = new Swiper(".sub-artist-best-swiper-1", {
    ...subArtistBestswiperOptions,
    pagination: {
        ...subArtistBestswiperOptions.pagination,
        el: ".sub-artist-best-swiper-1 .swiper-pagination",
        draggable: true,
    },
});
const subArtistBestswiper2 = new Swiper(".sub-artist-best-swiper-2", {
    ...subArtistBestswiperOptions,
    pagination: {
        ...subArtistBestswiperOptions.pagination,
        el: ".sub-artist-best-swiper-2 .swiper-pagination",
        draggable: true,
    },
});
const subArtistBestswiper3 = new Swiper(".sub-artist-best-swiper-3", {
    ...subArtistBestswiperOptions,
    pagination: {
        ...subArtistBestswiperOptions.pagination,
        el: ".sub-artist-best-swiper-3 .swiper-pagination",
        draggable: true,
    },
});
const subArtistBestswiper4 = new Swiper(".sub-artist-best-swiper-4", {
    ...subArtistBestswiperOptions,
    pagination: {
        ...subArtistBestswiperOptions.pagination,
        el: ".sub-artist-best-swiper-4 .swiper-pagination",
        draggable: true,
    },
});
const subArtistBestswiper5 = new Swiper(".sub-artist-best-swiper-5", {
    ...subArtistBestswiperOptions,
    pagination: {
        ...subArtistBestswiperOptions.pagination,
        el: ".sub-artist-best-swiper-5 .swiper-pagination",
        
    },
});

const subArtistBestMswiperOptions = {
    slidesPerView: 5,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 3,
    loop: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        581: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    },
};

// 각 슬라이드에 대해 Swiper 인스턴스 생성
const subArtistBestMswiper1 = new Swiper(".sub-artist-best-m-swiper-1", {
    ...subArtistBestMswiperOptions,
    pagination: {
        ...subArtistBestMswiperOptions.pagination,
        el: ".sub-artist-best-m-swiper-1 .swiper-pagination",
    },
});
const subArtistBestMswiper2 = new Swiper(".sub-artist-best-m-swiper-2", {
    ...subArtistBestMswiperOptions,
    pagination: {
        ...subArtistBestMswiperOptions.pagination,
        el: ".sub-artist-best-m-swiper-2 .swiper-pagination",
    },
});
const subArtistBestMswiper3 = new Swiper(".sub-artist-best-m-swiper-3", {
    ...subArtistBestMswiperOptions,
    pagination: {
        ...subArtistBestMswiperOptions.pagination,
        el: ".sub-artist-best-m-swiper-3 .swiper-pagination",
    },
});
const subArtistBestMswiper4 = new Swiper(".sub-artist-best-m-swiper-4", {
    ...subArtistBestMswiperOptions,
    pagination: {
        ...subArtistBestMswiperOptions.pagination,
        el: ".sub-artist-best-m-swiper-4 .swiper-pagination",
    },
});
const subArtistBestMswiper5 = new Swiper(".sub-artist-best-m-swiper-5", {
    ...subArtistBestMswiperOptions,
    pagination: {
        ...subArtistBestMswiperOptions.pagination,
        el: ".sub-artist-best-m-swiper-5 .swiper-pagination",
    },
});
// sub-artist---------------------------------------



// sub-goods---------------------------------------
var goodsSwiper = new Swiper("#subGoods #bestBox .swiper.mySwiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    // autoplay: {
    //     delay: 4000, // 슬라이드 딜레이 (1000밀리초 === 1초)
    //     disableOnInteraction: false, // 사용자가 상호작용해도 자동 슬라이드 유지
    //     pauseOnMouseEnter: true, // 마우스 호버 시 자동 슬라이드 중지
    // },
    // loop: true,
    pagination: {
        el: "#subGoods #bestBox .swiper-pagination",
        clickable: true,
        },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
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
            events: events,
            datesSet: function () {
                updateUpcomingSchedule(events, tabName);
            },
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
                    if (eventDate.toDateString() === new Date().toDateString()) {
                        const mediaQuery = window.matchMedia("(min-width: 768px)");
                        
                        // 화면 크기에 따라 border 두께를 설정하는 함수
                        const setBorderThickness = () => {
                            if (mediaQuery.matches) {
                                // 화면 너비가 768px 이상인 경우
                                eventLink.style.border = 'solid 2px #f86666';
                            } else {
                                // 화면 너비가 0~767px인 경우
                                eventLink.style.border = 'solid 1px #f86666';
                            }
                        };
                    
                        // 처음 로드 시 실행
                        setBorderThickness();
                    
                        // 화면 크기가 변경될 때 실행
                        mediaQuery.addEventListener('change', setBorderThickness);
                    }                    
                }
            },
            datesSet: function() {
                const popup = document.querySelector('.event-popup');
                popup.classList.remove('show'); // 팝업 숨기기
            },
            dayCellDidMount: function (info) {
                const date = info.date;
                const dayNumElem = info.el.querySelector('.fc-daygrid-day-number');
            
                // 주말 처리
                if (date.getDay() === 0 || date.getDay() === 6) {
                    dayNumElem.style.color = '#f86666'; // 일요일과 토요일 빨간색
                } else {
                    dayNumElem.style.color = ''; // 평일 색상 초기화
                }
            
                // 날짜를 '일' 없이 두 자리로 설정
                const day = date.getDate(); // '일'을 제외하고 숫자만 가져옴
                dayNumElem.textContent = day; // 이전 날짜를 덮어쓰기
            
                // 이벤트가 있는 경우 팝업 설정
                const eventsOnDate = events.filter(event => {
                    return new Date(event.start).toDateString() === date.toDateString();
                });
            
                if (eventsOnDate.length > 0) {
                    const closePopup = () => {
                        const popup = document.querySelector('.event-popup');
                        popup.classList.remove('show');
                    };

                    info.el.addEventListener('mouseenter', function () {
                        const popup = document.querySelector('.event-popup');
                        popup.innerHTML = ''; // 이전 팝업 내용 초기화
            
                        eventsOnDate.forEach(event => {
                            const eventDate = new Date(event.start);
                            const formattedDate = formatDate(eventDate);
                            
            
                            // 요일을 계산
                            const dayOfWeek = eventDate.getDay();
            
                            // 팝업 내용 설정
                            const popupContent = `
                                <div class="popup-header">
                                    <strong>${formattedDate}</strong>
                                    <button class="popup-close-btn"><img src="/img/icon/close-black.svg"></button>
                                </div>
                                <span class="event-divider"></span>
                                <h5>${event.title}</h5>
                            `;
                            popup.innerHTML += popupContent;
            
                            // 팝업 위치 계산 및 표시
                            const popupWidth = popup.offsetWidth;
                            const popupHeight = popup.offsetHeight;
                            const rect = info.el.getBoundingClientRect();
            
                            const fcDayCenterX = rect.left + rect.width / 2;
                            const fcDayCenterY = rect.top + rect.height / 2;
            
                            let popupLeft, popupTop;
                            const offset = -10;
            
                            if (dayOfWeek === 0 || dayOfWeek === 1 || dayOfWeek === 2) {
                                popupLeft = fcDayCenterX;
                                popupTop = rect.top - popupHeight / 2 + offset;
                            } else {
                                popupLeft = fcDayCenterX - popupWidth;
                                popupTop = rect.top - popupHeight / 2 + offset;
                            }
            
                            popup.style.left = `${popupLeft + window.scrollX}px`;
                            popup.style.top = `${popupTop + window.scrollY}px`;
                            popup.classList.add('show');
            
                            // 닫기 버튼 클릭 이벤트
                            popup.querySelector('.popup-close-btn').addEventListener('click', function () {
                                popup.classList.remove('show');
                            });
                        });
                            // 아티스트 탭 버튼 클릭 시 팝업 닫기
                        const tabButtons = document.querySelectorAll('.nav-link'); // 아티스트 탭 버튼의 클래스 이름을 확인하세요
                        tabButtons.forEach(button => {
                            button.addEventListener('click', closePopup);
                        });
                    });
                }
            }
            
            
            

        });

        return calendar;
    }

    // 탭이 활성화될 때마다 해당 탭에 캘린더 렌더링
    $('#sub-schedule-Tab a').on('shown.bs.tab', function (e) {
        const targetTab = $(e.target).attr('href');

        // 각 탭에 대한 캘린더 렌더링
        if (targetTab === '#sub-schedule-byeon' && !calendars['byeon']) {
            calendars['byeon'] = renderCalendar('sub-calendar-byeon', [
                { title: '공연)2024 이슬라이브 페스티벌', 
                start: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0] + 'T19:00:00+09:00'
                },
                { title: '공연)2024 수원 월드컵 경기장', 
                    start: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString().split('T')[0] + 'T13:00:00+09:00' 
                },
                { title: '공연)2024 HEREH WORLD TOUR CONCERT ENCORE : THE WINNING', 
                    start: new Date(new Date().setDate(new Date().getDate() + 12)).toISOString().split('T')[0] + 'T18:00:00+09:00' 
                }
            ], 'byeon');
            calendars['byeon'].render();
        }

        if (targetTab === '#sub-schedule-lee' && !calendars['lee']) {
            calendars['lee'] = renderCalendar('sub-calendar-lee', [
                { title: '공연)2024 콘서트 &lt;Love, Poen&gt;', 
                    start: new Date(new Date().setDate(new Date().getDate() + 4)).toISOString().split('T')[0] + 'T19:00:00+09:00' 
                },
                { title: '앨범)<꽃갈피 둘>발매 7주년', 
                    start: new Date(new Date().setDate(new Date().getDate() + 8)).toISOString().split('T')[0] + 'T00:00:00+09:00' 
                }
            ], 'lee');
            calendars['lee'].render();
        }

        if (targetTab === '#sub-schedule-yoon' && !calendars['yoon']) {
            calendars['yoon'] = renderCalendar('sub-calendar-yoon', [
                { title: '공연)2024 god Concert Chapter', 
                    start: new Date(new Date().setDate(new Date().getDate() + 12)).toISOString().split('T')[0] + 'T18:00:00+09:00' 
                }
            ], 'yoon');
            calendars['yoon'].render();
        }

        if (targetTab === '#sub-schedule-nam' && !calendars['nam']) {
            calendars['nam'] = renderCalendar('sub-calendar-nam', [
                { title: '공연)2024 NAM WOO HYUN CONCERT', 
                    start: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString().split('T')[0] + 'T18:00:00+09:00' 
                }
            ], 'nam');
            calendars['nam'].render();
        }

        if (targetTab === '#sub-schedule-park' && !calendars['park']) {
            calendars['park'] = renderCalendar('sub-calendar-park', [
                { title: '공연)2024 박서준 팬미팅 올림픽공원', 
                    start: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString().split('T')[0] + 'T18:00:00+09:00' 
                },
                { title: '공연)2024 박서준 COMMA 언택트 팬미팅', 
                    start: new Date(new Date().setDate(new Date().getDate() + 19)).toISOString().split('T')[0] + 'T13:00:00+09:00' 
                }
            ], 'park');
            calendars['park'].render();
        }
    });

    // 첫 번째 탭에 대한 캘린더 렌더링 (페이지 로드 시)
    if (!calendars['byeon']) {
        calendars['byeon'] = renderCalendar('sub-calendar-byeon', [
                { title: '공연)2024 이슬라이브 페스티벌', 
                start: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0] + 'T19:00:00+09:00'
                },
                { title: '공연)2024 수원 월드컵 경기장', 
                    start: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString().split('T')[0] + 'T13:00:00+09:00' 
                },
                { title: '공연)2024 HEREH WORLD TOUR CONCERT ENCORE : THE WINNING', 
                    start: new Date(new Date().setDate(new Date().getDate() + 12)).toISOString().split('T')[0] + 'T18:00:00+09:00' 
                }
        ], 'byeon');
        calendars['byeon'].render();
    }
});





// sub-schedule---------------------------------------
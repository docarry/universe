// 메인 스케줄 끝 -------------------------------------------------------
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

                    // // 이벤트가 오늘 날짜와 겹칠 경우, 이벤트 border가 우선시되도록 처리
                    // if (eventDate.toDateString() === new Date().toDateString()) {
                    //     eventLink.style.border = 'solid 2px #f86666'; // 이벤트 border를 우선시
                    // }
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
// 메인 스케줄 끝 -------------------------------------------------------


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
            scheduleContainer.innerHTML = '<p>최근 60일내 스케줄만 나타납니다.</p>';
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
                    <div class="event-item" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                        <p class="event-time">${formatTime(new Date(event.start))}</p> 
                        <div class="event-detail">
                            <p class="event-title">${event.title}</p>
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
            // contentHeight: 970,
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
                updateUpcomingSchedule(events, tabName);
                const popup = document.querySelector('.event-popup');
                popup.classList.remove('show'); // 팝업 숨기기
                document.querySelectorAll('.fc-daygrid-day-number').forEach(function (dayElem) {
                    let date = new Date(dayElem.closest('.fc-day').getAttribute('data-date'));
                    let day = date.getDate().toString().padStart(2, '0');
                    dayElem.textContent = day;
                });
            },
            dayCellDidMount: function (info) {
                const date = new Date(info.date);
                const dayNumElem = info.el.querySelector('.fc-daygrid-day-number');

                if (dayNumElem) {
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
                    } else {
                        dayNumElem.style.color = ''; // 평일 색상 초기화
                    }
                    // 오늘 날짜 처리
                    if (date.toDateString() === new Date().toDateString()) {
                        const todayLink = info.el.querySelector('.fc-daygrid-day-top a');
                        if (todayLink) {
                            todayLink.style.border = 'solid 2px #333';
                        }
                    }
                }
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
                            // const fcDayCenterY = rect.top + rect.height / 2;

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
        function setInitialHeight() {
            let newHeight;
            if (window.innerWidth <= 480) {
                newHeight = 450;
            } else if (window.innerWidth <= 768) {
                newHeight = 750;
            } else {
                newHeight = 970;
            }
            calendar.setOption('contentHeight', newHeight);
        }
        setInitialHeight(); // 초기 높이 설정;

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

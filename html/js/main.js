// AOS 애니메이트 플러그인
AOS.init();



$(function(){

        // 탑버튼 고정
        $(window).on('scroll', function(){
            if($(window).scrollTop() > 0){
                $('#topBtn').addClass('btnShow');
            }else{
                $('#topBtn').removeClass('btnShow');
            }
        });


        // PC Default 투명 돋보기 클릭시 검색창 노출
        $('#header .pc-searchOn').on('click', function(){
            $('#pc-search').toggleClass('searchOn');
    
            const $searchIcon01 = $(this).find('img');
    
            if ($('#pc-search').hasClass('searchOn')) {
                $searchIcon01.attr('src', '/img/icon/close.svg');
                $searchIcon01.css('padding', '2px');
            } else {
                $searchIcon01.attr('src', '/img/icon/Search.svg');
                $searchIcon01.css('padding', '0');
            }
    
        });
        // PC 블랙 버전 돋보기 클릭시 검색창 노출
        $('#header-b .pc-searchOn').on('click', function(){
            $('#pc-search').toggleClass('searchOn');
    
            const $searchIcon = $(this).find('img');
    
            if ($('#pc-search').hasClass('searchOn')) {
                $searchIcon.attr('src', '/img/icon/close.svg');
                $searchIcon.css('padding', '2px');
            } else {
                $searchIcon.attr('src', '/img/icon/Search.svg');
                $searchIcon.css('padding', '0');
            }
    
        });


        // M 네비 햄버거 버튼, 네비 노출
        $('#m-header .navBtn').on('click', function() {
            // 만약 검색창이 열려있다면 검색창을 닫고 햄버거 메뉴를 연다
            if ($('#m-header .m-searchOn').hasClass('searchOn')) {
                $('#m-header .m-searchOn').removeClass('searchOn'); // 검색 버튼에서 searchOn 클래스 제거
                $('#m-search').removeClass('searchOn'); // 검색창 닫기

                const $searchIcon02 = $('#m-header .m-searchOn').find('img');

                // 해상도가 500 이하일 때는 /img/icon/Search.svg 유지
                if (window.innerWidth <= 500) {
                    $searchIcon02.attr('src', '/img/icon/Search.svg');
                } else {
                    $searchIcon02.attr('src', '/img/icon/m-Search.svg');
                }
                $searchIcon02.css('padding', '0px');
            }

            // 햄버거 메뉴 토글
            $(this).toggleClass('slideOn');
        });

        // M 돋보기 클릭시 검색창 노출
        $('#m-header .m-searchOn').on('click', function() {
            // 검색창이 열리면 햄버거 메뉴 닫기
            if ($('#m-header .navBtn').hasClass('slideOn')) {
                $('#m-header .navBtn').removeClass('slideOn');
            }

            // 검색창 토글
            $('#m-search').toggleClass('searchOn');
            $(this).toggleClass('searchOn'); // 검색 버튼에 searchOn 클래스 토글

            const $searchIcon02 = $(this).find('img');

            if ($('#m-search').hasClass('searchOn')) {
                // 검색창 열렸을 때 닫기 아이콘으로 변경 (해상도에 따라)
                if (window.innerWidth <= 500) {
                    $searchIcon02.attr('src', '/img/icon/close.svg');
                } else {
                    $searchIcon02.attr('src', '/img/icon/m-close.svg');
                }
            } else {
                // 검색창 닫혔을 때 500px 이하일 경우 계속 /img/icon/Search.svg로 유지
                if (window.innerWidth <= 500) {
                    $searchIcon02.attr('src', '/img/icon/Search.svg');
                } else {
                    $searchIcon02.attr('src', '/img/icon/m-Search.svg');
                }
            }

            // 아이콘이 close.svg 또는 m-close.svg일 때 margin-left 적용
            applyMarginLeft($searchIcon02);
        });

        // 윈도우 크기에 따른 이미지 변경
        $(window).on('resize', function() {
            const $searchIcon02 = $('#m-header .m-searchOn').find('img');

            if (window.innerWidth <= 500) {
                $('#m-header .m-utility .m-searchOn img').attr('src', '/img/icon/Search.svg');
                $('#m-header .m-utility .m-lock img').attr('src', '/img/icon/Lock.svg');
            } else {
                $('#m-header .m-utility .m-searchOn img').attr('src', '/img/icon/m-Search.svg');
                $('#m-header .m-utility .m-lock img').attr('src', '/img/icon/m-Lock.svg');
            }

            // 검색창이 열려있을 때 아이콘 변경 적용
            if ($('#m-search').hasClass('searchOn')) {
                if (window.innerWidth <= 500) {
                    $searchIcon02.attr('src', '/img/icon/close.svg');
                } else {
                    $searchIcon02.attr('src', '/img/icon/m-close.svg');
                }
            }

            // 아이콘이 close.svg 또는 m-close.svg일 때 margin-left 적용
            applyMarginLeft($searchIcon02);
        });

        // 초기 로딩 시 이미지 변경
        $(window).trigger('resize');

        // 아이콘에 맞는 margin-left 적용 함수
        function applyMarginLeft($searchIcon02) {
            const iconSrc = $searchIcon02.attr('src');
            if (iconSrc.includes('close.svg')) {
                // close.svg일 때 margin-left 4px 적용
                if (iconSrc === '/img/icon/close.svg') {
                    $searchIcon02.css('margin-left', '4px');
                }
                // m-close.svg일 때 margin-left 6px 적용
                else if (iconSrc === '/img/icon/m-close.svg') {
                    $searchIcon02.css('margin-left', '6px');
                }
            } else {
                // 닫기 아이콘이 아니면 margin-left 제거
                $searchIcon02.css('margin-left', '0px');
            }
        }


    // 메인 배너 슬라이드 반응형 이미지 바꾸기
    $(window).on('resize', function() {
        if (window.innerWidth <= 580) {
            $('#main-banner .img01').attr('src', '/img/mainbanner/m-main51.jpg');
            $('#main-banner .img02').attr('src', '/img/mainbanner/m-main52.jpg');
            $('#main-banner .img03').attr('src', '/img/mainbanner/m-main53.jpg');
            $('#main-banner .img04').attr('src', '/img/mainbanner/m-main54.jpg');
        } else if (window.innerWidth > 580 && window.innerWidth <= 767) {
            $('#main-banner .img01').attr('src', '/img/mainbanner/m-main71.jpg');
            $('#main-banner .img02').attr('src', '/img/mainbanner/m-main72.jpg');
            $('#main-banner .img03').attr('src', '/img/mainbanner/m-main73.jpg');
            $('#main-banner .img04').attr('src', '/img/mainbanner/m-main74.jpg');
        } else if (window.innerWidth > 767 && window.innerWidth <= 991) {
            $('#main-banner .img01').attr('src', '/img/mainbanner/m-main91.jpg');
            $('#main-banner .img02').attr('src', '/img/mainbanner/m-main92.jpg');
            $('#main-banner .img03').attr('src', '/img/mainbanner/m-main93.jpg');
            $('#main-banner .img04').attr('src', '/img/mainbanner/m-main94.jpg');
        } else if (window.innerWidth > 991) {
            $('#main-banner .img01').attr('src', '/img/mainbanner/main01.jpg');
            $('#main-banner .img02').attr('src', '/img/mainbanner/main02.jpg');
            $('#main-banner .img03').attr('src', '/img/mainbanner/main03.jpg');
            $('#main-banner .img04').attr('src', '/img/mainbanner/main04.jpg');
        }
    });
    // 초기 로딩 시 이미지 변경
    $(window).trigger('resize');


    // 공유 버튼 모달
    $('.shareBtn').click(function() {
        $('#shareModal').fadeIn(); // 모달을 부드럽게 표시
    });

    // 닫기 버튼 클릭 시 모달 숨기기
    $('.shareCloseBtn').click(function() {
        $('#shareModal').fadeOut(); // 모달을 부드럽게 숨김
    });
    


});



// 메인 인덱스 굿즈 효과
const galleryItems = document.querySelectorAll('.gallery-wrap .item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        galleryItems.forEach(otherItem => {
            otherItem.classList.remove('stretchWidth'); // 모든 아이템에서 클래스 제거
            otherItem.style.width = '20%'; // 기본적으로 20%로 설정
            
            const img = otherItem.querySelector('.goodsImg');
            if (img) {
                img.classList.remove('stretchImg'); // 이미지의 stretchImg 클래스 제거
            }
        });
        
        item.classList.add('stretchWidth'); // 현재 아이템에 stretchWidth 클래스 추가
        item.style.width = '60%'; // 선택된 아이템은 60%
        
        const img = item.querySelector('.goodsImg');
        if (img) {
            img.classList.add('stretchImg'); // 이미지에 stretchImg 클래스 추가
        }

        const galleryDim = item.querySelector('.gallery-dim');
        if (galleryDim) {
            galleryDim.classList.add('show'); // dim 효과 추가
        }
    });

    item.addEventListener('mouseleave', () => {
        galleryItems.forEach(otherItem => {
            otherItem.classList.remove('stretchWidth');
            otherItem.style.width = '24%'; // 다시 기본값으로 설정
            
            const img = otherItem.querySelector('.goodsImg');
            if (img) {
                img.classList.remove('stretchImg'); // 이미지의 stretchImg 클래스 제거
            }
        });
        
        const galleryDim = item.querySelector('.gallery-dim');
        if (galleryDim) {
            galleryDim.classList.remove('show'); // dim 효과 제거
        }
    });
});
<<<<<<< HEAD



// 변우석 스케줄, 캘린더 1번
document.addEventListener('DOMContentLoaded', function() {
    var today01 = new Date();
    var calendar01 = new FullCalendar.Calendar(document.getElementById('calendar01'), {
        headerToolbar: { center: 'title' },
        locale: 'ko',
        initialView: 'dayGridWeek',
        initialDate: today01.toISOString().split('T')[0],
        events: [
            {
                title: '공연)2024 이슬라이브 페스티벌-가평',
                start: new Date(today01.getFullYear(), today01.getMonth(), today01.getDate() - 0),
                allDay: true
            },
            {
                title: '공연)2024 페스티벌-양평',
                start: new Date(today01.getFullYear(), today01.getMonth(), today01.getDate() - 4),
                allDay: true
            }
        ],
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
                if (eventDate.toDateString() === today01.toDateString()) {
                    eventLink.style.border = 'solid 2px #ff0000'; // 이벤트 border를 우선시
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
                if (date.getDay() === 0) { // 일요일인 경우
                    dayNumberElem.style.color = '#ff0000'; // 텍스트 빨간색으로 변경
                }

                // 오늘 날짜가 있을 경우
                if (date.toDateString() === today01.toDateString()) {
                    // 오늘 날짜에 대한 스타일을 먼저 적용
                    let todayLink = info.el.querySelector('.fc-daygrid-day-top a');
                    if (todayLink) {
                        todayLink.style.border = 'solid 2px #333'; // 기본적으로 오늘 날짜의 border
                    }
                }
            }
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
            let dateTextElem = document.querySelector('.dateText');
            if (dateTextElem) {
                dateTextElem.textContent = formattedDate;
            }

            // dateTextDday 요소에 D-Day 형식 업데이트
            let dateTextDdayElem = document.querySelector('.dateTextDday');
            if (dateTextDdayElem) {
                dateTextDdayElem.textContent = ddayText;
            }

            // dateContent 요소에 이벤트의 title 정보 업데이트
            let dateContentElem = document.querySelector('.dateContent');
            if (dateContentElem) {
                dateContentElem.textContent = info.event.title;
            }
        }
    });
    calendar01.render();

    // 기본적으로 첫 번째 이벤트의 정보를 표시
    var firstEvent = calendar01.getEvents()[0];
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

        let dateTextElem = document.querySelector('.dateText');
        if (dateTextElem) {
            dateTextElem.textContent = formattedDate;
        }

        let dateTextDdayElem = document.querySelector('.dateTextDday');
        if (dateTextDdayElem) {
            dateTextDdayElem.textContent = ddayText;
        }

        let dateContentElem = document.querySelector('.dateContent');
        if (dateContentElem) {
            dateContentElem.textContent = firstEvent.title;
        }
    }
});

// 변우석 스케줄, 캘린더 2번
document.addEventListener('DOMContentLoaded', function() {
    var today02 = new Date();
    today02.setDate(today02.getDate() + 7); // 현재 날짜에서 7일 추가하여 다음 주로 설정

    var calendar02 = new FullCalendar.Calendar(document.getElementById('calendar02'), {
        headerToolbar: { center: 'title' },
        locale: 'ko',
        initialView: 'dayGridWeek',
        initialDate: today02.toISOString().split('T')[0],
        events: [
            {
                title: '공연)2024 다음주 페스티벌-서울',
                start: new Date(today02.getFullYear(), today02.getMonth(), today02.getDate() - 0),
                allDay: true
            }
        ],
        eventDidMount: function(event) {
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
                let day = date.getDate().toString().padStart(2, '0');
                dayNumberElem.textContent = day;

                if (date.getDay() === 0) {
                    dayNumberElem.style.color = '#ff0000';
                }
            }
        },
        eventClick: function(info) {
            let eventDate = new Date(info.event.start);
            const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

            let formattedDate = (eventDate.getMonth() + 1) + '월 ' + eventDate.getDate().toString().padStart(2, '0') + '일 (' + dayNames[eventDate.getDay()] + ')';

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
                ddayText = 'D-Day';
            }

            // dateText 요소에 포맷된 날짜 업데이트
            let dateTextElem = document.querySelector('.week02 .dateText');
            if (dateTextElem) {
                dateTextElem.textContent = formattedDate;
            }

            // dateTextDday 요소에 D-Day 형식 업데이트
            let dateTextDdayElem = document.querySelector('.week02 .dateTextDday');
            if (dateTextDdayElem) {
                dateTextDdayElem.textContent = ddayText;
            }

            // dateContent 요소에 이벤트의 title 정보 업데이트
            let dateContentElem = document.querySelector('.week02 .dateContent');
            if (dateContentElem) {
                dateContentElem.textContent = info.event.title;
            }
        }
    });
    calendar02.render();

    // 기본적으로 첫 번째 이벤트의 정보를 표시
    var firstEvent02 = calendar02.getEvents()[0];
    if (firstEvent02) {
        let firstEventDate = new Date(firstEvent02.start);
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

        let dateTextElem = document.querySelector('.week02 .dateText');
        if (dateTextElem) {
            dateTextElem.textContent = formattedDate;
        }

        let dateTextDdayElem = document.querySelector('.week02 .dateTextDday');
        if (dateTextDdayElem) {
            dateTextDdayElem.textContent = ddayText;
        }

        let dateContentElem = document.querySelector('.week02 .dateContent');
        if (dateContentElem) {
            dateContentElem.textContent = firstEvent02.title;
        }
    }
});
>>>>>>> origin/han
=======
>>>>>>> origin/han

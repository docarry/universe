// AOS 애니메이트 플러그인
AOS.init();


document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    const waveText = document.querySelector('#main #introduction .title h2');
    waveText.innerHTML = waveText.textContent.split('').map(char => `<span>${char}</span>`).join('');

    const textSpans = document.querySelectorAll('#main #introduction .title h2 span');

    // GSAP + ScrollTrigger를 사용한 애니메이션 설정
    gsap.to(textSpans, {
        scrollTrigger: {
            trigger: waveText, // 트리거로 사용할 요소
            start: "top 80%", // 트리거 시작 위치 (화면 상단에서 80%)
            end: "bottom 20%", // 트리거 종료 위치
            toggleActions: "play none none reset", // 스크롤 시 애니메이션 제어
        },
        duration: 1,
        opacity: 1, // 글자가 보이게 설정
        ease: "power1.inOut", // 애니메이션 가속 곡선
        stagger: {
            amount: 1, // 애니메이션 전체 시간
            from: "start", // 시작 위치
            onStart: function() {
                const startColor = 0; // 시작 색상 값
                const endColor = 360; // 종료 색상 값
                // 각 글자에 대한 색상 설정
                textSpans.forEach((span, i) => {
                    // 색상 값과 지연 시간 조정
                    const hue = (startColor + ((i % 10) * 30) + (i * 2)) % endColor; // HSL 색상 조정
                    gsap.to(span, {
                        color: '#fff',
                        duration: 1, // 각 글자 색상 애니메이션 시간
                        delay: (i * 0.1) + Math.abs(Math.sin(i * 0.5)) * 0.1, // 각 글자에 대해 시간차를 줘서 상하 물결 효과
                    });
                });
            },
        },
    });
});


$(function(){

        // M 헤더 고정
        $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('#m-header').addClass('fix');
        }else{
            $('#m-header').removeClass('fix');
        }
        });

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
            $('#main-banner .img01').attr('src', '/img/main/m-main51.jpg');
            $('#main-banner .img02').attr('src', '/img/main/m-main52.jpg');
            $('#main-banner .img03').attr('src', '/img/main/m-main53.jpg');
            $('#main-banner .img04').attr('src', '/img/main/m-main54.jpg');
        } else if (window.innerWidth > 580 && window.innerWidth <= 767) {
            $('#main-banner .img01').attr('src', '/img/main/m-main71.jpg');
            $('#main-banner .img02').attr('src', '/img/main/m-main72.jpg');
            $('#main-banner .img03').attr('src', '/img/main/m-main73.jpg');
            $('#main-banner .img04').attr('src', '/img/main/m-main74.jpg');
        } else if (window.innerWidth > 767 && window.innerWidth <= 991) {
            $('#main-banner .img01').attr('src', '/img/main/m-main91.jpg');
            $('#main-banner .img02').attr('src', '/img/main/m-main92.jpg');
            $('#main-banner .img03').attr('src', '/img/main/m-main93.jpg');
            $('#main-banner .img04').attr('src', '/img/main/m-main94.jpg');
        } else if (window.innerWidth > 991) {
            $('#main-banner .img01').attr('src', '/img/main/main01.jpg');
            $('#main-banner .img02').attr('src', '/img/main/main02.jpg');
            $('#main-banner .img03').attr('src', '/img/main/main03.jpg');
            $('#main-banner .img04').attr('src', '/img/main/main04.jpg');
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

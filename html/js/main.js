
$(function(){


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
            $('#main-banner .img01').attr('src', '/img/mainbanner/m-main011.jpg');
            $('#main-banner .img02').attr('src', '/img/mainbanner/m-main011.jpg');
            $('#main-banner .img03').attr('src', '/img/mainbanner/m-main011.jpg');
            $('#main-banner .img04').attr('src', '/img/mainbanner/m-main011.jpg');
        } else if (window.innerWidth > 580 && window.innerWidth <= 991) {
            $('#main-banner .img01').attr('src', '/img/mainbanner/m-main01.jpg');
            $('#main-banner .img02').attr('src', '/img/mainbanner/m-main01.jpg');
            $('#main-banner .img03').attr('src', '/img/mainbanner/m-main01.jpg');
            $('#main-banner .img04').attr('src', '/img/mainbanner/m-main01.jpg');
        } else if (window.innerWidth > 991) {
            $('#main-banner .img01').attr('src', '/img/mainbanner/main01.jpg');
            $('#main-banner .img02').attr('src', '/img/mainbanner/main02.jpg');
            $('#main-banner .img03').attr('src', '/img/mainbanner/main03.jpg');
            $('#main-banner .img04').attr('src', '/img/mainbanner/main04.jpg');
        }
    });
    // 초기 로딩 시 이미지 변경
    $(window).trigger('resize');


});



// 메인 인덱스 굿즈 효과
const items = document.querySelectorAll('.item');

// 각 .item에 마우스 오버/아웃 이벤트 추가
items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const galleryDim = item.querySelector('.gallery-dim');
        if (galleryDim) {
            galleryDim.classList.add('show');
        }
    });

    item.addEventListener('mouseleave', () => {
        const galleryDim = item.querySelector('.gallery-dim');
        if (galleryDim) {
            galleryDim.classList.remove('show');
        }
    });
});

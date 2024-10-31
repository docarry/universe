
// 오디션 페이지 시작 ---------------------------------------------
function setField(value, element) {
    // 모든 버튼에서 active 클래스 제거
    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 클릭한 버튼에 active 클래스 추가
    element.classList.add('active');
    
    // 인풋 필드에 값 설정
    document.getElementById('supportField').value = value;
}
// 오디션 페이지 끝   ---------------------------------------------

// SUB_Review START -------------------------------
    // 각 탭의 리스트 아이템 개수를 가져와 탭 제목에 표시
    function updateTabCounts() {
        const writeReviewItems = document.querySelectorAll("#write_review_tab_contents > ul > li");
        const writtenReviewItems = document.querySelectorAll("#written_review_tab_contents > ul > li");

        const writeReviewCount = document.getElementById("write_review_count");
        const writtenReviewCount = document.getElementById("written_review_count");

        if (writeReviewCount) {
            writeReviewCount.textContent = `(${writeReviewItems.length})`;
        }

        if (writtenReviewCount) {
            writtenReviewCount.textContent = `(${writtenReviewItems.length})`;
        }
    }

    // 초기 카운트 업데이트
    updateTabCounts();
// SUB_Review END ---------------------------------

// sub 아티스트----
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
// sub 아티스트 끝----
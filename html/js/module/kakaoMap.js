function createKakaoMap(containerId, lat, lng, zoomLevel, content = '', showMarker = true) {
    const mapContainer = document.getElementById(containerId);
    const map = new kakao.maps.Map(mapContainer, {
        center: new kakao.maps.LatLng(lat, lng),
        level: zoomLevel
    });

    // 마커 옵션
    const imageSrc = 'https://i.ibb.co/2vHfqFB/2216335-location-map-map-pin-marker-pin-icon.png';
    const imageSize = new kakao.maps.Size(68, 74);
    const imageOption = { offset: new kakao.maps.Point(36, 69) };
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    const markerPosition = new kakao.maps.LatLng(lat, lng);

    // 마커 출력
    if (showMarker) {
        const marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage
        });
        marker.setMap(map);
    }

    // 커스텀 오버레이 출력
    if (content) {
        const customOverlay = new kakao.maps.CustomOverlay({
            map: map,
            position: markerPosition,
            content: content,
            yAnchor: 1
        });
    }

    return map; // 필요 시 생성된 map 객체를 반환
}

// 카카오 지도 생성 함수 호출
createKakaoMap('map-box', 37.499557, 127.031397, 4, 
    '<div class="customoverlay">' +
    '<a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
    '<span class="title">유니버스 엔터테인먼트</span>' +
    '</a>' +
    '</div>',
    true // 마커를 표시하려면 true
);

// createKakaoMap('map-box2', 37.499557, 127.031397, 4);

createKakaoMap('map-box2', 37.499557, 127.031397, 4, 
    '<div class="customoverlay">' +
    '<a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
    '<span class="title">유니버스 엔터테인먼트</span>' +
    '</a>' +
    '</div>',
    true // 마커를 표시하려면 true
);
let container = document.getElementById('map');
let options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
};

// 지도 인스턴스를 생성합니다
let map = new kakao.maps.Map(container, options);

// 위도, 경도 값을 저장합니다
let lat = 0.0;
let lon = 0.0;

if (navigator.geolocation) {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        
        lat = position.coords.latitude; // 위도
        lon = position.coords.longitude; // 경도
        
        let locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;">여기에 계신가요?!<br>마커를 이동할 수 있어요</div>'; // 인포윈도우에 표시될 내용입니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
            
    });
    
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    let locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
        message = 'geolocation을 사용할수 없어요..'
        
    displayMarker(locPosition, message);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {
    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
    });
    marker.setDraggable(true);
    
    let iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    let infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map, marker);

    kakao.maps.event.addListener(marker, 'dragstart', function() {
        infowindow.close();
    });
    kakao.maps.event.addListener(marker, 'dragend', function() {
        lat = marker.getPosition().getLat();
        lon = marker.getPosition().getLng();
    });
    
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);
}

    //window.onload = init;

    // start location
    var s_latitude, s_longitude;
    // current location
    var c_latitude, c_longitude;

    // update number
    var number = 1;

    // Google map
    var map = null;

    // path
    var path = [];
    var lastMarker = null;

    // register the event handler for the button
    var startButton = document.getElementById("startButton");
    startButton.onclick = function () {
        // asynchronous call with callback success, 
        // error functions and options specified
        document.getElementById("startButton").disabled="true";
        var options = {
            enableHighAccuracy: true,
            timeout: 50000,
            maximumAge: 0
        };

        navigator.geolocation.getCurrentPosition(
            displayLocation, handleError, options);
    }

    function displayLocation(position) {
        document.getElementById("number").innerHTML =
            "Update#: " + number;

        s_latitude = position.coords.latitude;
        s_longitude = position.coords.longitude;

        document.getElementById("s_latitude").innerHTML = 
                "Start Latitude: " + s_latitude;
        document.getElementById("s_longitude").innerHTML = 
                "Start Longitude: " + s_longitude;

        c_latitude = s_latitude;
        c_longitude = s_longitude;

        document.getElementById("c_latitude").innerHTML =
            "Current Latitude: " + c_latitude;
        document.getElementById("c_longitude").innerHTML =
            "Current Longitude: " + c_longitude;

        // first point  
        var latlong = new google.maps.LatLng(s_latitude, s_longitude);
        path.push(latlong);

        setInterval(updateLocation, 5000);

        showOnMap(position.coords);
    }

    function handleError(error) {
        switch (error.code) {
            case 1:
                updateStatus("The user denied permission");
                break;
            case 2:
                updateStatus("Position is unavailable");
                break;
            case 3:
                updateStatus("Timed out");
                break;
        }
    }

    function updateStatus(message) {
        document.getElementById("status").innerHTML =
            "<strong>Error</strong>: " + message;
    }

    function showOnMap(pos) {
        var googlePosition =
            new google.maps.LatLng(pos.latitude, pos.longitude);

        var mapOptions = {
            zoom: 15,
            center: googlePosition,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var mapElement = document.getElementById("map");
        map = new google.maps.Map(mapElement, mapOptions);

        // add the marker to the map
        var title = "Location Details";
        var content = "Lat: " + pos.latitude +
            ", Long: " + pos.longitude;

        addMarker(map, googlePosition, title, content);
    }

    function addMarker(map, latlongPosition, title, content) {
        var options = {
            position: latlongPosition,
            map: map,
            title: title,
            clickable: true
        };
        var marker = new google.maps.Marker(options);

        var popupWindowOptions = {
            content: content,
            position: latlongPosition
        };

        var popupWindow = new google.maps.InfoWindow(popupWindowOptions);

        google.maps.event.addListener(marker, 'click', function () {
            popupWindow.open(map);
        });

        return marker;
    }

    function updateLocation() {
        // show the current number
        number++;
        document.getElementById("number").innerHTML = 
                "Update#: " + number;
        
        var latitude = Math.random() / 100;
        var longitude = Math.random() / 100;

        c_latitude += latitude;
        c_longitude -= longitude;
        // show current location
        document.getElementById("c_latitude").innerHTML = 
                "Current Latitude: " + c_latitude;
        document.getElementById("c_longitude").innerHTML = 
                "Current Longitude: " + c_longitude;
        // next point
        latlong = new google.maps.LatLng(c_latitude, c_longitude);
        path.push(latlong);


        var line = new google.maps.Polyline({
            path: path,
            strokeColor: '#0000ff',
            strokeOpacity: 1.0,
            strokeWeight: 3
        });
        line.setMap(map);

        map.panTo(latlong);

        if (lastMarker)
            lastMarker.setMap(null);
        // add the new marker
        lastMarker = addMarker(map, latlong, "Your new location", "You moved to: " + latitude + ", " + longitude);
    }

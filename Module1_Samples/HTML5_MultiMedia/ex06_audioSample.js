window.onload = init;

// HTML5 audio element
var audioObject;

var playButton, pauseButton, nextButton;

var songList; // array of JSON objects

var currentSongIndex = 0;

var timerId;

     
function init() {
    // access the audio element
     audioObject = document.getElementById("myAudio");
     // the buttons
     playButton = document.getElementById("playButton");
     pauseButton = document.getElementById("pauseButton");
     nextButton = document.getElementById("nextButton");
     // add event handlers for the buttons
     playButton.onclick = playButtonHandler;
     pauseButton.onclick = pauseButtonHandler;
     nextButton.onclick = nextButtonHandler;
     
     // initialize the JSON array
     songList = new Array();
     
    // load the playlist xml file
     makeRequest("playList.xml");
}

// play button handler
function playButtonHandler (e) {
     if (audioObject.paused) {
         audioObject.play();
         document.getElementById("status").innerHTML = 
                "Playing " + audioObject.currentSrc;
         timerId = setInterval(displayStatus, 1000);
     }
 }

// pause button handler     
function pauseButtonHandler (e) {
     if (!audioObject.paused) {
         audioObject.pause();
         document.getElementById("status").innerHTML = 
                 "Paused " + audioObject.currentSrc;
         clearInterval(timerId);
     }
}

// next button event handler
function nextButtonHandler (e) {
    if (!audioObject.paused) {
         audioObject.pause();
         clearInterval(timerId);
     }
     currentSongIndex = (currentSongIndex + 1) % songList.length;
     
     document.getElementById("status").innerHTML = 
            "Next " + audioObject.currentSrc;
      
     audioObject.src  = songList[currentSongIndex].location;
     audioObject.play();
     timerId = setInterval(displayStatus, 1000);
}
    
 // display the current song status
function displayStatus() {
    document.getElementById("status").innerHTML = 
        Math.round(audioObject.currentTime) + 
                "/" + Math.round(audioObject.duration) + "s " +
                songList[currentSongIndex].title;
    // automatically move to the next song if the current song has ended
    if (audioObject.ended) {
        currentSongIndex = (currentSongIndex + 1) % songList.length;
        audioObject.src  = songList[currentSongIndex].location;
        audioObject.play();
    }
}

// XMLHttpRequest - asynchronous loading of XML data
var xhr;

function makeRequest(url) {
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xhr) {
        xhr.onreadystatechange = loadXMLSongs;
        xhr.open("GET", url, true);
        xhr.send(null);
    }
    else {
        document.getElementById("status").innerHTML = 
            "Sorry, couldn't create an XMLHttpRequest";
    }
}

// callback function when data is loaded
function loadXMLSongs() {

    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            // get all the song elements
            var allSongs = xhr.responseXML.getElementsByTagName("song");
            for (var i = 0; i < allSongs.length; i++) {
                var title = 
                    allSongs[i].getElementsByTagName("title")[0].textContent;
                var artist = 
                    allSongs[i].getElementsByTagName("artist")[0].textContent;
                var location = 
                    allSongs[i].getElementsByTagName("location")[0].textContent;
                
                // create a new JSON object for each song
                var newSong = {
                    "title" : title,
                    "artist" : artist,
                    "location" : location
                };
                // add the object to the array
                songList.push(newSong);
            }

            document.getElementById("status").innerHTML = 
                    "Loaded " + songList.length + " songs";
            // set the first song
            currentSongIndex = 0;
            audioObject.src = songList[currentSongIndex].location;
        } else {
            document.getElementById("status").innerHTML = 
                    "There was a problem with the request " + xhr.status;
        }
    }
}




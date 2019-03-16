window.onload = init;

var src, target, msg, sourceId;

function init() {
    // check whether the senator has been loaded from XML file
    if (window.localStorage.length === 0) {
        loadXMLDoc('partyWise.xml');
    } else {
        loadFromLocal("senators");
    }

    src = document.getElementById("members");
    target = document.getElementById("dropLists");
    msg = document.getElementById("msg");

    // Add event handlers for the source
    src.ondragstart = dragStartHandler;
    src.ondragend = dragEndHandler;
    src.ondrag = dragHandler;
    // Add event handlers for the target
    target.ondragenter = dragEnterHandler;
    target.ondragover = dragOverHandler;
    target.ondrop = dropHandler;
    // show the existing voted senator
    var existSenator = showExist();

    for (var i=0; i<existSenator.length; i+=2) {
        var name = existSenator[i];
        var party = existSenator[i+1];
        addToDOM(name, party);
    }
}

function dragStartHandler(e) {
    //e.dataTransfer.setData("Text", e.target.id);
    sourceId = e.target.id;
    e.target.classList.add("dragged");
}

function dragEndHandler(e) {
    //msg.innerHTML = "Drag Ended";
    var elems = document.querySelectorAll(".dragged");
    for (var i = 0; i < elems.length; i++) {
        elems[i].classList.remove("dragged");
    }
}

function dragHandler(e) {
    msg.innerHTML = "Dragging " + e.target.id;
}

function dragEnterHandler(e) {
    msg.innerHTML = "Drag Entering " + e.target.id;
    e.preventDefault();
}

function dragOverHandler(e) {
    msg.innerHTML = "Drag Over " + e.target.id;
    e.preventDefault();
}

// control the drag boject to drop on the correct place
function dropHandler(e) {
    //var sourceId = e.dataTransfer.getData("Text");
    var sourceElement = document.getElementById(sourceId);
    var newElement = sourceElement.cloneNode(true);
    var voteTarget = document.getElementById(e.target.id);
    // check whether this senator has been voted
    if (hasBeenVoted(sourceElement.innerText)) {
        msg.innerHTML = "This senator has been voted";
    } else {
        if (checkParty(sourceElement.innerText, e.target.id)) {
            if (newElement.hasAttribute("draggable")) {
                newElement.setAttribute("draggable", "false");
            }
            voteTarget.appendChild(newElement);
        } else {
            msg.innerHTML = "Its not the correct party";
        }
    }
    e.preventDefault();
}

// check whether it has been voted
function hasBeenVoted(name) {
    var data = JSON.parse(window.localStorage.getItem("senators"));
    // checking variable
    var temp = false;
    for (var i in data) {
        if (data[i].name === name) {
            if (data[i].vote != "false") {
                temp = true
            }
        }
    }
    return temp;
}

// check whether the drag object is in the correct area
function checkParty(name, party) {
    var data = JSON.parse(window.localStorage.getItem("senators"));
    var temp = false;
    for (var i in data) {
        if (data[i].name === name) {
            if (data[i].party === party) {
                temp = true;
                updateStorage(name);
            }
        }
    }
    return temp;
}

// update the change "voted"
function updateStorage(name) {
    var data = JSON.parse(window.localStorage.getItem("senators"));
    for (var i in data) {
        if (data[i].name === name) {
            data[i].vote = "true";
        }
    }
    storeToLocal(data);
}

function showExist() {
    var data = JSON.parse(window.localStorage.getItem("senators"));
    var exist = [];
    for (var i in data) {
        if (data[i].vote === "true") {
            exist.push(data[i].name);
            exist.push(data[i].party);
        }
    }
    return exist;
}

function addToDOM(name, party) {
    var target1 = document.getElementById("Democrat");
    var target2 = document.getElementById("Republican");
    var txt;

    if (party === "Democrat") {
        txt = target1.innerHTML;
        txt += "<li>" + name + "</li>";
        target1.innerHTML = txt;
    }else {
        txt = target2.innerHTML;
        txt += "<li>" + name + "</li>";
        target2.innerHTML = txt;
    }
}

// load name and party from XML file
function loadXMLDoc(fname) {
    var xmlhttp;
    var name, party, txt, x, xx, i;
    var json_data = [];
    // check the website edition
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            txt = "";
            x = xmlhttp.responseXML.documentElement.getElementsByTagName("senator");
            for (i = 0; i < x.length; i++) {
                txt = txt + "<li draggable='true' id=" + i + '' + ">";
                // get the senator name from XML file
                xx = x[i].getElementsByTagName("name"); {
                    try {
                        txt = txt + xx[0].firstChild.nodeValue + "</li>";
                        name = xx[0].firstChild.nodeValue;
                    } catch (er) {
                        txt = txt + "<li> </li>";
                    }
                }
                // get the senator default party from XML file
                xx = x[i].getElementsByTagName("party"); {
                    try {
                        party = xx[0].firstChild.nodeValue;
                    } catch (er) {
                        txt = txt + "<li> </li>";
                    }
                }
                // create a json object to store
                json_data.push({
                    "name": name,
                    "party": party,
                    "vote": "false"
                });
            }
            storeToLocal(json_data);
            document.getElementById("members").innerHTML = txt;
            document.getElementById("msg").innerHTML = "From AJAX Loaded " + x.length + " senators";
        }
    }
    xmlhttp.open("GET", fname, true);
    xmlhttp.send();
}

// save the senator to localstorage
function storeToLocal(value) {
    window.localStorage.setItem("senators", JSON.stringify(value));
}

// display the senator from localstorage
function loadFromLocal(key) {
    var data = JSON.parse(window.localStorage.getItem(key));
    var senator = document.getElementById("members");
    var msg = document.getElementById("msg");
    var txt = "";
    var i = 0;
    for (i in data) {
        txt += "<li draggable='true' id=" + i + '' + ">" + data[i].name + "</li>";
    }
    senator.innerHTML = txt;
    msg.innerHTML = "From LocalStorage Loaded " + data.length + " senators";
}
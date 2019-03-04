window.onload = init;

function init(){
    // AJAX read the XML file
    $.ajax({
        url: 'partyWise.xml',
        type: 'GET',
        datatype: 'xml',
        timeout: 1000,
        cache: false,
        error: function(xml){
            alert('loading error');
        },
        success: function(xml){
            $(xml).find('senator').each(function(){
                var name = $(this).find('name').text();
                var party = $(this).find('party').text();
                // put the items into localstorage
                window.localStorage.setItem(name, party);
            })
        }
    })
    updateDOMItems();
    document.getElementById("msg").innerHTML = "From AJAX Loaded 10 senators";
}

function updateDOMItems(){
    var itemsList = document.getElementById("members");
    // Clear shown list
    itemsList.innerHTML = '';
    // Add current items to the list
    for(name in window.localStorage){
        if(localStorage[name] == "false"){
            addItemToDOM(name);
        }
        else if(localStorage[name] == "Democrat"){
            addItemToDemocrats(name);
        }
        else if(localStorage[name] == "Republican"){
            addItemToRepublicans(name);
        }
    }
}

function addItemToDOM(name){
    var items = document.getElementById("members");
    // create a line item and add to the end of the list
    var item = document.createElement("li");
    item.innerHTML = name;

    items.appendChild(item);
}

function addItemToDemocrats(name){
    var items = document.getElementById("democrats");
    // create a line item and add to the end of the list
    var item = document.createElement("li");
    item.innerHTML = name;

    items.appendChild(item);
}

function addItemToRepublicans(name){
    var items = document.getElementById("republicans");
    // create a line item and add to the end of the list
    var item = document.createElement("li");
    item.innerHTML = name;

    items.appendChild(item);
}

window.onstorage = function(e){
    updateDOMItems();
}
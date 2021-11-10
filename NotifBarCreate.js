window.onload = main

var choosenValue;
var texts = [];
var buttons = []
var brs = [];
var notifFields = [];
var notifications = [];
function main()
{
    
}

function SetChoosen(value)
{
    choosenValue = value;
    console.log(choosenValue)
}

function SaveAmount()
{
    console.log("here");
    ClearFields();

    var toAppend = document.getElementsByClassName("notification")[0];
    for(i=0; i<choosenValue; i++)
    {
        var input = document.createElement("input");
        input.type = "text";
        var str = "textBlock"+i;
        console.log(str)
        input.className = str;
        toAppend.appendChild(input);
        texts[i] = input;

        var but = document.createElement("button");
        but.innerText="Save";
        var butName = "textButton"+i;
        but.className = butName;
        toAppend.appendChild(but);
        buttons[i]=but;

        var someBr = document.createElement("br");
        var brName = "br"+i;
        someBr.className = brName;
        toAppend.appendChild(someBr);
        brs[i] = someBr;
    }
    var but2 = document.createElement("button");
        but2.innerText="Execute";
        var butName2 = "executeButton";
        but2.className = butName2;
        but2.onclick = () => CreateBlock(notifications);
        toAppend.appendChild(but2);

    buttons.forEach(btn => {
        btn.addEventListener('click', () => OnClickFunc(btn));
    })
}

function OnClickFunc(but)
{
    var str;
    for(j = 0; j<buttons.length; j++)
    {
        if(buttons[j] == but)
        {
            str = texts[j].value;
            console.log(str);
            SaveText(str, j);
        }
    }
}
function SaveText(data, num)
{
    if(data != "")
    {
        notifications[num] = data;
    }
    console.log(notifications);
}

function CreateBlock(notifications)
{
    ClearFields();
    console.log(notifications);
    DeleteFromDB();
    notifications = notifications.reverse();
    for(i = 0; i < notifications.length; i++)
    {
        if(notifications[i] != null)
        {
            SendToDB(notifications[i], i);
            var div = document.createElement("div");
            div.className = "notificationBlock"+i;
            div.innerText = notifications[i];
            var prependBlock = document.getElementsByClassName("main-block")[0];
            prependBlock.prepend(div);
            notifFields[i] = div;
        }
    }
}
function DeleteFromDB()
{
    var url = "https://localhost:44336/api/notification/deleteall";
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url);

    xhr.setRequestHeader("Accept", "*/*");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }};
    xhr.send();
}
function SendToDB(text, order)
{
    var url = "https://localhost:44336/api/notification/posttext/"+text+"/"+order;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
    }};
    xhr.send();
}

function ClearFields()
{
    var toAppend = document.getElementsByClassName("notification")[0];
    if(texts.length != 0)
        {
            texts.forEach(element => {
                toAppend.removeChild(element)
            });
            texts = [];
            notifications = [];
        }
    if(brs.length != 0)
    {
        brs.forEach(element2 => {
            toAppend.removeChild(element2) 
         });
         brs = [];
    }
    if(buttons.length != 0)
    {
        buttons.forEach(element1 => {
            toAppend.removeChild(element1)
        });
        buttons = [];
    }
    if(toAppend.getElementsByClassName("executeButton").length != 0)
    {
        var elem = toAppend.getElementsByClassName("executeButton")[0];
        toAppend.removeChild(elem);
    }
    if(notifFields.length != 0)
    {
        notifFields.forEach(element3 => {
            element3.parentElement.removeChild(element3)
        });
        notifFields = [];
    }
}
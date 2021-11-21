window.onload = main

var notifFields = [];
function main()
{
    GetData()
}

function GetData()
{
    var receivedTexts = [];
    var resp;
    var url = "https://gelder.ga/api/notification/gettext";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("Accept", "*/*");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            resp = xhr.response;
            var objs = JSON.parse(resp);
            objs.forEach(element => {
                receivedTexts.push(element);
            });
            receivedTexts.sort((a,b)=>
            {
                return a.order-b.order;
            });
            console.log(receivedTexts);
            CreateBlock(receivedTexts);
        }};
    xhr.send();
}

function CreateBlock(receivedTexts)
{
    DeleteBlock();
    for(i = 0; i < receivedTexts.length; i++)
    {
        if(receivedTexts[i] != null)
        {
            var div = document.createElement("div");
            div.className = "notificationBlock"+i;
            div.innerText = receivedTexts[i].text;
            var prependBlock = document.getElementsByClassName("main-block")[0];
            prependBlock.prepend(div);
            notifFields[i] = div;
        }
    }
}
function DeleteBlock()
{
    if(notifFields.length != 0)
    {
        notifFields.forEach(element3 => {
            element3.parentElement.removeChild(element3)
        });
        notifFields = [];
    }
}
window.onload = main



function main() {

    
    //3
    /*
    if(document.cookie !== undefined || document.cookie !== "lenght=")
    {
        alert("Delete cookie: " + document.cookie);
        document.cookie = "lenght=";
        alert("cookies are deleted")
        //location.reload();
    }*/

    //4
    if(localStorage.getItem("color"))
    {
        var menu2 = document.getElementsByClassName("menu-block")[0];
        menu2.style.background = window.localStorage.getItem("color");
    }
    //5
    if(localStorage.getItem("backgroundImage1"))
    {
        var menu3 = document.getElementsByClassName("text-in-footer")[0];
        menu3.style.background = window.localStorage.getItem("backgroundImage1");
    }
    if(localStorage.getItem("backgroundImage2"))
    {
        var menu4 = document.getElementsByClassName("menu-block")[0];
        menu4.style.background = window.localStorage.getItem("backgroundImage2");
    }
    if(localStorage.getItem("backgroundImage3"))
    {
        var menu5 = document.getElementsByClassName("main-block")[0];
        menu5.style.background = window.localStorage.getItem("backgroundImage3");
    }
    if(localStorage.getItem("backgroundImage4"))
    {
        var menu6 = document.getElementsByClassName("info-block")[0];
        menu6.style.background = window.localStorage.getItem("backgroundImage4");
    }

    //1
    var hightText = document.querySelector("[class='logo1']");
    var mislText = hightText.innerText;
    var lowText = document.querySelector("[class='logo2']");;
    hightText.innerText = lowText.innerText;
    lowText.innerText = mislText;

    //2
    var paralleloghramSquare = square(5, 10);
    var item = document.querySelector("[class='func']");
    item.innerText = paralleloghramSquare;

    //3
    var text = document.querySelector("[class='main-text-first']");
    var textArr = text.innerText.trim().split(/\s+/)
    //alert("lenght of the text is " + textArr.length);
    var len = textArr.length;
    document.cookie = "lenght=" + len.toString();
    //console.log(document.cookie);

}

function square( height, side)
{
    var result;
    result = height*side;
    return result;
}
//4
function SaveColor()
{
    console.log("in save color")

    /*if(localStorage.getItem("color") === document.getElementsByClassName("colorInput")[0].value)
    {
        var menu2 = document.getElementsByClassName("menu-block")[0];
        menu2.style.background = window.localStorage.getItem("color");
    }
    else
    {*/
        var userColor = document.getElementsByClassName("colorInput")[0];
        window.localStorage.setItem("color", userColor.value);

        var menu = document.getElementsByClassName("menu-block")[0];
        console.log(window.localStorage.getItem("color"));
        menu.style.background = window.localStorage.getItem("color");
    //}
    
    
}

function SetChoosenColor(){
    var menu2 = document.getElementsByClassName("menu-block")[0];
    menu2.style.background = window.localStorage.getItem("color");
}
function SetDefault()
{
    var menu = document.getElementsByClassName("menu-block")[0];
    menu.style.background = "#eadbff";
}

//5
function ChangeImage(classN, image, indent, SavebuttonName, DiscButtomName, startColor, parentClass)
{
    var blockToChange = document.getElementsByClassName(classN)[0];
    blockToChange.style.background = image;

    if((document.getElementsByClassName(SavebuttonName)[0]) == undefined)
    {
        var but = document.createElement("button");
        but.innerText="save";
        but.onclick = () => SaveFunc(classN, image, indent );
        but.setAttribute("class", SavebuttonName)
        document.querySelector(parentClass).appendChild(but);
    }
    
    if((document.getElementsByClassName(DiscButtomName)[0]) == undefined)
    {
        var but2 = document.createElement("button");
        but2.innerText="discard";
        but2.onclick = () => DiscardFunc(classN, startColor, indent);
        but2.setAttribute("class", DiscButtomName)
        document.querySelector(parentClass).appendChild(but2)
    }
}

function SaveFunc(block, color, imagenum)
{
    window.localStorage.setItem(imagenum, color);

    var menu = document.getElementsByClassName(block)[0];
    console.log(menu.style.background);
    console.log("here")
    console.log(window.localStorage.getItem(imagenum));
    menu.style.background = window.localStorage.getItem(imagenum);
}
function DiscardFunc(block, color, imagenum)
    {
        window.localStorage.removeItem(imagenum);
        var menu = document.getElementsByClassName(block)[0];
        menu.style.background = color;
        console.log(menu.style.background)

        if(localStorage.getItem("color") && imagenum === "backgroundImage2")
    {
        var menu2 = document.getElementsByClassName("menu-block")[0];
        menu2.style.background = window.localStorage.getItem("color");
    }
}
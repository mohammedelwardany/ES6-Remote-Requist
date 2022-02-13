var container = document.getElementById("container");
var btn = document.getElementsByTagName("button")[0];
var ul = document.getElementsByTagName("ul")[0];

// Request

var link = "https://jsonplaceholder.typicode.com/users";

function myRequest(url) {
    var p = fetch(url);
    return p.then(function (res) {
        return res.json();
    }).then(function (js) {
        btnCreation(js);
        // console.log(js);
    })
}

myRequest(link);

// Append <button>
function btnCreation(arr, num) {
    arr.forEach(function (ele, index) {
        var newEle = document.createElement("button");
        newEle.className = "btn-name";
        newEle.id = ele.id;
        newEle.innerHTML = ele.name;
        newEle.addEventListener("click", click);
        container.append(newEle);
    })

}

// headlines 
function click() {
    var id = this.id;
    ul.innerHTML = " ";
    promRequest(id);
}

// Promise request
async function promRequest(str) {
    var link = "https://jsonplaceholder.typicode.com/posts?userId=" + str;
    var x = await fetch(link);
    x = await x.json();
    liCreation(x, ul);
}

// Append <li>
function liCreation(arr, ul) {
    arr.forEach(function (ele, index) {
        var newLi = document.createElement("li");
        newLi.innerHTML = ele.title;
        ul.append(newLi);
    })
}
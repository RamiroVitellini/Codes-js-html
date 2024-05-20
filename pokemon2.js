const button = document.getElementById("button");

button.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    //if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
    //else xhr = new ActiveXObject("Microsoft.XMLHTTP");

    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");

    xhr.addEventListener("load", (event) => {
        const dataJSON = JSON.parse(event.target.response);
        const list = document.getElementById("list");
        list.innerHTML = '';

        const listItem = document.createElement("LI");
        listItem.textContent = `ID: ${dataJSON.id} - Name: ${dataJSON.name}`
        list.appendChild(listItem);
    });

    xhr.send();
});

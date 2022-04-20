let links = [
    { "label": "week1", "url": "index.html" },
    { "label": "week2", "url": "index2.html" }
];

function addItems(data) {
    let ord_list = document.getElementById("ordenedList");

    for (let i = 0; i < data.length; i++) {
        let row = `<li><a href='${data[i].url}'>${data[i].label}</a></li>`;

        ord_list.innerHTML += row;
    }
}

addItems(links);





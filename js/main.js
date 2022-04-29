let links = [
    { "label": "Week 1", "url": "index.html" },
    { "label": "Week 2", "url": "weektwo.html" }
];

function addItems(data) {
    let ord_list = document.getElementById("ordenedList");

    for (let i = 0; i < data.length; i++) {
        let row = `<li><a href='${data[i].url}'>${data[i].label}</a></li>`;

        ord_list.innerHTML += row;
    }
}

addItems(links);






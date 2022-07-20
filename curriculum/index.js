let links = [
    { "label": "Week 1", "url": "index.html" },
    { "label": "Week 2", "url": "weektwo.html" }
];


const ord_list = document.getElementById("listProjects");

function showAboutMe(){
    let content = document.getElementById("aboutMe");
    content.classList.toggle("show");
}

function showSkillsCard(){
    let content = document.getElementById("skills");
    content.classList.toggle("show");
}

function showAcademic(){
    let content = document.getElementById("academic");
    content.classList.toggle("show");
}

function showProject(){
    let content = document.getElementById("projects");
    content.classList.toggle("show");
}

function addProjects() {
    fetch('projects.json')
        .then(result => result.json()) //Indicamos el formato en que se desea obtener la información
        .then(projectsList => {
            projectsList.forEach(project => {
                const row = document.createElement('li');
                row.innerHTML += `
                    <li>${project.name}<br><p>${project.description}</p><a href="${project.link}">Github link</a><hr></li>

                `;
                ord_list.appendChild(row);

            });
        })
}

addProjects();

const userInput = document.querySelector("#comments input");
let comments = JSON.parse(localStorage.getItem("comments"));

userInput.addEventListener("keyup", e => {
    let commentsInput = userInput.value;
    if (e.key == "Enter" && !commentsInput == "") {
        if (!comments){
            comments = [];
        }
        let commentsInfo = { paragraph: commentsInput};
        comments.push(commentsInfo);
        userInput.value = "";
        localStorage.setItem("comments", JSON.stringify(comments))


    }
});

const commentsList = document.querySelector("#commentsList");
let commentStorage = JSON.parse(localStorage.getItem("comments"));

function showComments() {

    let li = "";
    if (commentStorage) {
        commentStorage.forEach((comment, paragraph) => {
            li += `
        <li>${comment.paragraph}</li>
    `;
        })
    };
    commentsList.innerHTML = li
}

showComments()

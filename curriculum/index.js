
const ord_list = document.getElementById("listProjects");

//Changing the class of each DIV to show and hide
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

//Bringing information from an JSON file, like and API
function addProjects() {
    fetch('projects.json')
        .then(result => result.json())
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

// Adding comments to LocalStorage 
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

//Showing the list of comments  
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

class Activity {
    constructor(id, title, description, url){
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, url) {
        const id = this.id++
        const activity = new Activity(id, title, description, url);
        this.activities.push(activity);
    }

    deleteActivity(id) {
       this.activities = this.activities.filter(activity => activity.id !== id);
    }
}

const repository = new Repository();

const inputTitle = document.getElementById("inputTitle");

const inputDescription = document.getElementById("inputDescription");

const inputUrl = document.getElementById("inputUrl");

const inputButton = document.getElementById("inputButton");

const newActivities = document.getElementById("newActivities")

const sumbit = () => {
    const title = inputTitle.value;
    const description = inputDescription.value;
    const url = inputUrl.value;

    if (title && description && url) {
        repository.createActivity(title, description, url);
        displayCards();
      } else {
        alert("Completa todos los campos");
      }


    inputTitle.value = "";
    inputDescription.value = "";
    inputUrl.value = "";
};

inputButton.addEventListener("click", sumbit);

function displayCards(Activity) {
    let activities = repository.getAllActivities();
    newActivities.innerHTML = "";

    activities.map((activity) => {
        const {id, title, description, url} = activity;
        const card = document.createElement("div");
        card.innerHTML= `
        <div class= "activity">
        <button id="buttonNew" onclick="deleteCard(${id})" >X</button>
        <img src= ${url} />
        <h1>${title}</h1>
        <p>${description}</p>
        </div>
        `;
        newActivities.appendChild(card)
    });
}

function deleteCard(id) {
    repository.deleteActivity(id);
    displayCards();
}

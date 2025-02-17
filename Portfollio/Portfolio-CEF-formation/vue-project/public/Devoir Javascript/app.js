// Récupération des élément 

const button = document.querySelector("button");
button.addEventListener("click", preventSubmit,);


function preventSubmit(e) {
    e.preventDefault();
}

// Je vérifie si les champs son vide 
button.addEventListener("click", champsvide)

function champsvide() {
    const chamNom = document.getElementById("first-name");
    const chamPrenom = document.getElementById("last-name");
    const champMess = document.getElementById("message");
    const errorMessage = document.getElementById("error-message");

    if (!chamNom.value || !chamPrenom.value || !champMess.value) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
    }
}
// J'envoie le commentaire dans la liste 

button.addEventListener("click", Commentaire)

function Commentaire() {
    const chamNom = document.getElementById("first-name");
    const chamPrenom = document.getElementById("last-name");
    const champMess = document.getElementById("message");
    const ListComm = document.getElementById("comment-list");

    let espaceComm = document.createElement("div");
    let bordure = document.createElement("div");
    let epaceID = document.createElement("h3");
    let espaceText = document.createElement("div");
    let letext = document.createElement("p");


    espaceComm.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
    bordure.classList.add("flex-1", "py-10", "border-t", "border-gray-200");
    epaceID.classList.add("font-medium", "text-gray-900");
    espaceText.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");

    espaceComm.append(bordure);
    bordure.append(epaceID);
    epaceID.append(espaceText);
    espaceText.append(letext);


    ListComm.append(espaceComm);

    epaceID.textContent = chamNom.value + " " + chamPrenom.value;
    letext.textContent = champMess.value;
}

// J'efface l'espace commentaire 

button.addEventListener("click", efface);

function efface() {
    const chamNom = document.getElementById("first-name");
    const chamPrenom = document.getElementById("last-name");
    const champMess = document.getElementById("message");

    chamNom.value = ""
    chamPrenom.value = ""
    champMess.value = ""
}
const pageContainer = document.querySelector(".page-container")
const submitBtn = document.getElementById("submit-btn")
const nameInpt = document.getElementById("name-inpt")
const invContainer = document.querySelector(".invitees-container")
const headerContainer = pageContainer.firstChild;
const hidebtn = document.getElementById("hide-box")




function createCard(name) {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";
    const invName = document.createElement("p");
    invName.textContent = name;
    cardContainer.className += " " + name
    cardContainer.append(invName);

    const confirmedContainer = document.createElement("div");
    confirmedContainer.className = "confirmed-container";

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "confirmed-box");

    const confirmedLabel = document.createElement("label");
    confirmedLabel.textContent = "Confirmed";
    confirmedLabel.setAttribute("for", "confirmed-box");

    confirmedContainer.append(confirmedLabel);
    confirmedContainer.append(checkbox);
    cardContainer.append(confirmedContainer);

    const cardBtns = document.createElement("div");
    cardBtns.className = "card-buttons";
    const editBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    editBtn.textContent = "Edit";
    removeBtn.textContent = "Remove";

    editBtn.className = "change-buttons";
    editBtn.className += " edit-btn"
    removeBtn.className = "change-buttons";
    removeBtn.className += " remove-btn"

    cardBtns.append(editBtn);
    cardBtns.append(removeBtn);
    cardContainer.append(cardBtns)
    return cardContainer

}




invContainer.addEventListener("click", (e) => {
    let obj = e.target;
    let classes = obj.classList;
    let card = obj.parentNode.parentNode;
    if (classes.contains("edit-btn")) {



        let para = card.firstChild;



        let inpt = document.createElement("input");

        inpt.type = "text";
        inpt.value = para.textContent;


        card.insertBefore(inpt, para);


        card.removeChild(para);

        obj.classList.remove("edit-btn");

        obj.classList.add("save-btn");

        obj.textContent = "Save";


    } else if (classes.contains("save-btn")) {

        console.log(card)

        let inpt = card.firstElementChild;

        console.log(classes)

        let para = document.createElement("p")

        para.textContent = `${inpt.value}`

        card.insertBefore(para, inpt);

        card.removeChild(inpt)

        console.log(classes)

        obj.classList.remove("save-btn");

        obj.classList.add("edit-btn");
        obj.textContent = "Edit"
    }

    if (classes.contains("remove-btn")) {

        invContainer.removeChild(card)

    }



})


submitBtn.addEventListener("click", () => {

    const newInvitee = createCard(nameInpt.value);
    invContainer.append(newInvitee)



})


hidebtn.addEventListener("click", () => {

    if(hidebtn.checked){
        hide()
    }
    else{
        show()
    }

})


function hide() {


    let cards = document.querySelector(".invitees-container").children;




    Array.from(cards).forEach((card) => {
        let chk = card.querySelector("#confirmed-box");


        if (!chk.checked) {

            card.classList.add("hide");

        }




    })
}

function show() {


    let cards = document.querySelector(".invitees-container").children;




    Array.from(cards).forEach((card) => {


        card.classList.remove("hide");




    })
}
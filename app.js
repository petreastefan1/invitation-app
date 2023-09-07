const  pageContainer=document.querySelector(".page-container")
const submitBtn = document.getElementById("submit-btn")
const nameInpt= document.getElementById("name-inpt")
const invContainer = document.querySelector(".invitees-container")






function createCard(name){
    const cardContainer = document.createElement("div");
    cardContainer.className="card-container";
    const invName = document.createElement("p");
    invName.textContent = name;
    cardContainer.append(invName);
    
    const confirmedContainer = document.createElement("div");
    confirmedContainer.className="confirmed-container";

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id","confirmed-box");

    const confirmedLabel=document.createElement("label");
    confirmedLabel.textContent="Confirmed";
    confirmedLabel.setAttribute("for","confirmed-box");

    confirmedContainer.append(confirmedLabel);
    confirmedContainer.append(checkbox);
    cardContainer.append(confirmedContainer);

    const cardBtns = document.createElement("div");
    cardBtns.className="card-buttons";
    const editBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    editBtn.textContent = "Edit";
    removeBtn.textContent="Remove";

    editBtn.className = "change-buttons";
    removeBtn.className="change-buttons";

    cardBtns.append(editBtn);
    cardBtns.append(removeBtn);
    cardContainer.append(cardBtns)


    return cardContainer

}











submitBtn.addEventListener("click",()=>{

    const newInvitee = createCard(nameInpt.value);
    invContainer.append(newInvitee)
    



})


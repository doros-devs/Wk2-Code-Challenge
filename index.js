const inputBox = document.getElementById("input-box");
const shoppingContainer = document.getElementById("shopping-container");

function addTask(){
    if (inputBox.value.trim() === ''){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        shoppingContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "Clear";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

shoppingContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        } else if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove();
                saveData();
            }
}, false)

function clearList() {
    shoppingContainer.innerHTML = ''; // Clears all list items
}

function saveData(){
    localStorage.setItem("data", shoppingContainer.innerHTML);
}

function showTask(){
    shoppingContainer.innerHTML = localStorage.getItem("data");
}
showTask();

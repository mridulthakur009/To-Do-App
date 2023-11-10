
function add() {
    let input = document.getElementById("input");

    if (input.value == "") {
        alert("Please enter any task");
    }
    else{
    let data = document.querySelector(".cardss")
    data.innerHTML +=    
    `
    <div class="card m-3">
      <div class="card-body">
       <input type="checkbox" class="checkbox">
        <p class="text"> &nbsp;
        ${document.querySelector("#input").value}
        </p>
        <label for="checkbox"></label>
        <button class="delete"><i class="fa-solid fa-xmark" style="color: #ff0000;" onclick="removeTask(this.parentNode)" ></i></button>
      </div>
    </div>
    `;
    
    input.value = "";
}
}

function removeTask(task) {
    task.parentNode.parentNode.remove();
}


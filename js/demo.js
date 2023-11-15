function add() {
    let input = document.getElementById("input");

    if (input.value == "") {
        alert("Please enter any task");
    } else {
        let data = document.querySelector(".cardss");

        let newTask = document.createElement("div");
        newTask.classList.add("card", "m-3");

        newTask.innerHTML = `
            <div class="card-body">
                <input type="checkbox" class="checkbox">
                <p class="text"> &nbsp; ${input.value}</p>
                <label for="checkbox"></label>
                <button class="delete">
                    <i class="fa-solid fa-xmark" style="color: #ff0000;" onclick="removeTask(this.parentNode.parentNode)"></i>
                </button>
            </div>
        `;

        data.insertBefore(newTask, data.firstChild);

        input.value = "";
    }
}

function removeTask(task) {
    task.remove();
}

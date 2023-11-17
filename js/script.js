function add() {
    console.time(" timer");
    let input = document.getElementById("input");
    
    if (input.value == "" || input.value == null || input.value == " ") {
     document.getElementById("inputValidation").innerHTML = " * Enter Task ! ! !" 
     
    } else {
        
      let data = document.querySelector(".cardss");
      
      let newTask = document.createElement("div");
      newTask.classList.add("card");

      newTask.innerHTML = `
          <div class="card-body">
              <input type="checkbox" class="checkbox">
              <p class="text"> ${input.value}</p>
              <label for="checkbox"></label>
              <button class="delete" onclick="removeTask(this.parentNode.parentNode)">
                  <i class="fa-solid fa-xmark" style="color: #ff0000;" ></i>
              </button>
          </div>
          `;
          
      data.insertBefore(newTask, data.firstChild);
      input.value = "";
  }
  console.timeEnd(" timer");
}

function removeTask(task) {
  task.parentNode.remove();
}

function removeVal()
{
    document.getElementById("inputValidation").innerText = "";
}

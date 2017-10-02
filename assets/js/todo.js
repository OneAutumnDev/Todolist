//User types new tasks in top input field, clicks the plus "+" button to add the defined task to bottom of list. 
//User clicks on a task within the list to toggle whether or not that task has been completed.
    //The bottom display will update count of current active tasks. 
//User clicks on either x or trash can item to remove task from list. 
    //If task is in middle of list, other tasks "move up". 
    //Styling changes to prevent error where two lines are the same color. (Need to alternate).
//User clicks on "remove completed" button. This removes all tasks that have finishedTask css class. 
//User can change the main style color "$primary-color" by selecting the color picker.
//(function(){ //IIFE: Immediately Invoked Function Expression. 
function init(){
    let newInput = document.querySelector(".inputContainer input");
    let fieldToggle = document.querySelector(".fa-plus");

    fieldToggle.addEventListener("click", function(){
        let listItem = document.createElement("li");
        let ulList = document.querySelector("ul");
        listItem.innerHTML = "<span>X </span>WHOLE BUNCH OF ITEMS";
        ulList.appendChild(listItem);
        console.log(1+1);
    });
}
init();
//})();
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
    let inp = document.querySelector(".listHeader input");
    let plus = document.querySelector(".fa-plus");
    let newTaskValue = "";
    let todoList = [];
    
    function clearInput(){
        newTaskValue = "";
        inp.value = "";
    }
    
    inp.addEventListener("input", function(){
        newTaskValue = this.value;
    });
    
    plus.addEventListener("click", function(){
        if(newTaskValue){
            console.log(newTaskValue); 
            //before I clear input, create a new list item using the input's current value.
            clearInput();         //add this into a reset function
        } else {
            console.log("Please add a new task!");
        }
    });
}
init();
//})();
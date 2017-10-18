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
    let listName = document.querySelector(".listHeader h1");//Selector for the <h1>Todo List</h1>
    let newInput = document.querySelector(" input");//Selector for the input
    let newList = []; //array where new tasks are pushed after input press enter.
    let activeItems = document.querySelector("#active");//Selector for the Active display at bottom

    //Entire keypress event that happens when the event key is pressed
    newInput.addEventListener("keypress", function(event){
        let listItem = document.createElement("li");
        let ulList = document.querySelector("ul");
        let listLength = document.querySelectorAll("ul li");
        let liFirstValue = document.querySelector("ul li");
        listItem.innerHTML = "<span><i class='fa fa-trash' aria-hidden='true'></i></span>" + newInput.value;
        if(event.keyCode === 13){
            if(newInput.value === ""){
                return;
            }
            if(newList.length === 0){
                listLength.forEach(function(e){
                    ulList.removeChild(e);
                    activeItems.textContent = newList.length;
                });
            }
            ulList.appendChild(listItem);
            newList.push(newInput.value);
            newInput.value = "";
            listName.textContent = newList[0];   
            activeItems.textContent = newList.length;
        }
    });

    //Check off todos by clicking
    $("ul").on("click", "li", function(){
        //set to the ul so that the click listener is added to lis after they are created
        $(this).toggleClass("completed");
        updateCompleted();
    });

    //Click on X to delete Todos
    $("ul").on("click", "span", function(event){
        $(this).parent().fadeOut(500,function(){
            let listIndex = $(this).index();
            $(this).remove();
            //remove the first index in the newList array, if it matches the list item that is deleted
            //used to update the list name when a new task is created.
            if($(this).text() === newList[0]){
                newList.shift();
                listName.textContent = newList[0];
                activeItems.textContent = newList.length;
                    //Check to see if newList array is empty, if all the list items have been deleted, rename back to "Todo List"
                if(newList.length === 0){
                    listName.textContent = "Todo List";
                }
            } else {
                    newList.splice(listIndex, 1);
                    activeItems.textContent = newList.length;
            }
        });
        event.stopPropagation();
    });

    //input Toggle
    $(".fa-plus").click(function(){
        $("input[type='text']").fadeToggle()
    });

    //ClearAll
    $(".clearAll").click(function(){
        newList = [];
        $("ul").empty();
        listName.textContent = "Todo List";
        newInput.value = "";
    });

    //Work in Progress for Completed Counter
    function updateCompleted() {
        let completedItems = document.querySelector("#completed");
        let completedCounter = 0;
        for(let i = 0; i < newList.length; i++){
            let liFirstValue = document.querySelectorAll("li")[i];
            console.log(liFirstValue);
        }
    }
}
init();
//})();





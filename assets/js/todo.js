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

    //Entire keypress event that happens when the event key is pressed
    newInput.addEventListener("keypress", function(event){
        let listItem = document.createElement("li");
        let ulList = document.querySelector("ul");
        let listLength = document.querySelectorAll("ul li");
        let liFirstValue = document.querySelector("ul li");
        listItem.innerHTML = "<span>X </span>" + newInput.value;
        if(event.keyCode === 13){
            if(newInput.value === ""){
                return;
            }
            /*
            //A way to remove the inital list items without using forEach
            if(newList.length === 0){
                for(let i = 0; i < listLength.length; i++){
                    ulList.removeChild(listLength[i]);   
                    //ulList.removeChild(document.querySelector("ul li"));                   
                }
                newList.push(newInput.value);
            }
            */
            if(newList.length === 0){
                listLength.forEach(function(e){
                    ulList.removeChild(e);
                });
            }
            ulList.appendChild(listItem);
            newList.push(newInput.value);
            newInput.value = "";
            listName.textContent = newList[0];   
        }
    });

    //Check off todos by clicking
    $("ul").on("click", "li", function(){
        $(this).toggleClass("completed");
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
    });

    /*
    //Active Field
    $("#active").text();
    //Completed Field
    $("#completed").text();
    */
}
init();
//})();





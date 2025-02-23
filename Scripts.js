document.addEventListener("DOMContentLoaded", () => {
    let currentDisplay = "";
    let display = document.querySelector(".display");
    let buttons = document.querySelectorAll(".all-buttons");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            //    let value = button.getAttribute("data-value");
            let value = button.dataset.value;

            if (value === "C") {
                currentDisplay = "";
            } else if (value === "=") {
                currentDisplay = new Function(`return ${currentDisplay}`)();
            } else {
                currentDisplay += value;
            }
            display.value = currentDisplay;
        });

    });

});



//addEventListener("DOMContentLoaded", () =>{}) = This event fires when the entire html document has been completely loaded and parsed

//querySelectorAll = Returns a NodeList(array-like structure) so we find using loop


/*button.dataset.value = This statement extract the value of a CUSTOM DATA ATTRIBUTE (data-valu) from a button element and assigns it to the constant variable value.

 More Readable - direct property acess (dataset.value) instead of getAttribute
 CamelCase Conversion - Automatically converts data-user-name to dataset-userName
 Better Performance - dataset is optimized for accessing multiple attributes
 */

// button.dataset = provides an object containing all data attributes of an element
//dataset.value = Retrives the value of data-value from the dataset 

/*currentDisplay = new Function(`return ${currentDisplay}`)();  =  This is used for evaluate math expressions dynamically while avoiding security risks. 

PURPOSE = Evaluates a mathematical expression stored as a string safely
HOW IT WORKS  =  Use new Function(`return expression`)() to create and execute a function dynamically
SECURITY  =  Safer than eval() because it does not have access to outer variables
PERFORMANCE  =  Faster then eval() since it compiles the function once and executes it.
*/
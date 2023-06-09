const input = document.querySelector('.input-box'); // Get the input box element
const item = document.querySelector('.item-list'); // Get the item list element
const li_tag = item.getElementsByTagName('li'); // Get all the li elements within the item list
const error = document.querySelector('.not-found-message'); // Get the Error Img 

// Attach an event listener to the input box for the `keyup` event
input.addEventListener('keyup', (event) => {
    const input_value = event.target.value.toLowerCase(); // Get the value entered in the input box and convert it to lowercase
    console.log(input_value); // Log the input value to the console

    const desiredStrings = ['net worth', 'networth', 'Net Worth'];

    if (desiredStrings.includes(input_value)) {  
        alert("You can't write Net Worth");
        input.value = ''; // Clear the input box
        return; // Exit the event listener
    }

    let foundMatch = false; // Flag to track if a match is found

    // Loop through each li element within the item list
    for (let i = 0; i < li_tag.length; i++) {
        let li_value = li_tag[i]; // Get the current li element
        let li_text = li_value.textContent.toLowerCase(); // Get the text content of the li element and convert it to lowercase
        // console.log(li_text); // Log the li text to the console

        // Check if the input value is found within the li text
        if (li_text.includes(input_value)) {   
            li_value.classList.remove('hidden');
            foundMatch = true;
        } else {
            li_value.classList.add('hidden'); // If not found, add the 'hidden' class to hide the li element
        }
    }
    
    if (!foundMatch) {
        error.style.display = 'flex';
    }else{
        error.style.display = 'none';
    }
});


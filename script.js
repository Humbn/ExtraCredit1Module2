// Select the form using querySelector
const form = document.querySelector("form");

// TODO: Attach a "submit" event listener to the form
//Start of listener
form.addEventListener = ("submit", function(event) {
  
});
  // TODO: Prevent the form from refreshing the page
  Event.preventDefault();
  
  /* 1. Show parent/children Data for learning/debugging */
  
  // TODO: Log the form's children collection in the console
  console.log(form.children);
  // TODO: Log the form's parent element tag name
  console.log()
  // TODO: Log how many children the form has

  /* 2. Extract values */
  // TODO: Select the name input
  const nameInput = "";


  // TODO: Select the satisfaction input by its id
  const satisfactionInput = "Your code instead of this string";

  //Get the value from the name input and trim spaces
  const name = nameInput.value.trim();
  //Convert satisfaction input to a numbe
  const score = parseInt(satisfactionInput.value);

  /* 3. TODO: Conditional operator
    Use the conditional operator ( ? : ) to create a message INCLUDING NAME INPUT where
    If score >= 4 → thank the customer
    Otherwise → promise to improve
  */

  // 4. TODO: Show the message in an alert
//End of listener

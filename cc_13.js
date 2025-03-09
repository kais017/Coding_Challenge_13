// Task 2: Adding Employee Cards Dynamically

// create function to make an employee card
function createEmployeeCard(name, position) {

// create employee card element
const employeeCard = document.createElement('div');
employeeCard.setAttribute('class','employee-card');  // setting class attribute
employeeCard.setAttribute('id', 'employeeCard');  // setting an id attribute

//creating employee name element
const employeeName = document.createElement('h2');
employeeName.textContent = name; 
employeeCard.appendChild(employeeName);

//creating employee position element with description
const employeePosition = document.createElement('p');
employeePosition.textContent = position; 
employeeCard.appendChild(employeePosition);

// making a remove button that deletes the card
const removeButton = document.createElement('button');
removeButton.textContent = 'Remove';
removeButton.setAttribute('class', 'remove-btn');

// task 4: adding an event listener on the container
removeButton.addEventListener('click', function(event) {
    event.stopPropagation(); 
    employeeCard.remove();
});

employeeCard.appendChild(removeButton);

const employeeContainer = document.getElementById('employeeContainer');
    employeeContainer.appendChild(employeeCard);

//task 5 - creating an edit button
// allows users to edit the employee card
const editButton = document.createElement('button');
editButton.textContent = 'Edit';
editButton.setAttribute('class','edit-btn');
employeeCard.appendChild(editButton);

// adding an event listener for edit button 
editButton.addEventListener('click', function() {
    // Check if the card is already in edit mode
    if (employeeName.querySelector('input') && employeePosition.querySelector('input')) {

        const nameUpdate = employeeName.querySelector('input').value;
        const positionUpdate = employeePosition.querySelector('input').value;

       // update information in card: name and position
        employeeName.textContent = nameUpdate;
        employeePosition.textContent = positionUpdate;

       // changes button back to edit
        editButton.textContent = 'Edit';

       // outputs information changes in dashboard
        employeeName.innerHTML = nameUpdate;
        employeePosition.innerHTML = positionUpdate;
    } else {
        
        employeeName.innerHTML = `<input type="text" value="${employeeName.textContent}">`;
        employeePosition.innerHTML = `<input type="text" value="${employeePosition.textContent}">`;

      // changes button back to save
        editButton.textContent = 'Save';
     }
  });
}



//calling the function to see the employee cards
createEmployeeCard('Batman', 'Superhero');
createEmployeeCard('Joker', 'Villain');

// Task 3: Converting NodeLists to Arrays for Bulk Updates

//creating function to bulk update employee cards
function employeeUpdates() {
    const employeeCards = document.querySelectorAll('.employee-card');
// converting NodeList to array
    const employeeCardArray = Array.from(employeeCards);

    // creating an array method to update the card style
    employeeCardArray.forEach(card => {
        card.style.backgroundColor = 'pink'; // changing background to pink
        card.style.border = '1px solid purple' // changing border color to purple
});
}
// calling the function
employeeUpdates();

// Task 4: Implementing Removal of Employee Cards with Event Bubbling
// (in task 2)
// adding an event listener on employee container
const employeeContainer = document.getElementById('employeeContainer');
employeeContainer.addEventListener('click', function() {
    console.log("Card has been clicked."); // displays message in the console when a card is clicked
});

// Task 5: Inline Editing of Employee Details
// in task 2



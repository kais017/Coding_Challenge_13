// Task 2: Adding Employee Cards Dynamically

// create function to make an employee card
function createEmployeeCard(name, position) {

// create employee card element
const employeeCard = document.createElement('div');
employeeCard.setAttribute('class','employee-card');
employeeCard.setAttribute('id', 'employeeCard');

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

}

//calling the function to see the employee cards
createEmployeeCard('Batman', 'Superhero');
createEmployeeCard('Penguin', 'Villain');

// Task 3: Converting NodeLists to Arrays for Bulk Updates

//creating function to bulk update employee cards
function employeeUpdates() {
    const employeeCards = document.querySelectorAll('.employee-card');
// convertin NodeList to array
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



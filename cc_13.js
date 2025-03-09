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


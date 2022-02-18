var modalSubmit = document.querySelector('#modal-entry-form');
var inputs = document.querySelector('#modal-entry-form').elements;

modalSubmit.addEventListener('submit', handleAddEntry);

function handleAddEntry(event) {
  console.log('day: ', inputs[0].value); // day
  console.log('time: ', inputs[1].value); // time
  console.log('description: ', inputs[2].value); // description
}

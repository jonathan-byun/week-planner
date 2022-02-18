/* global data */
/* exported data */
var modalSubmit = document.querySelector('#modal-entry-form');
var inputs = document.querySelector('#modal-entry-form').elements;
const modal = document.querySelector('.modal');
const addEntryButton = document.querySelector('.add-entry-button');

modalSubmit.addEventListener('submit', handleAddEntry);
addEntryButton.addEventListener('click', handleClickAdd);

function handleAddEntry(event) {
  const entry = {
    day: inputs[0].value,
    time: inputs[1].value,
    description: inputs[2].value
  };
  event.preventDefault();
  console.log('day: ', inputs[0].value); // day
  console.log('time: ', inputs[1].value); // time
  console.log('description: ', inputs[2].value); // description
  for (let i = 0; i < data.entries.length; i++) {
    if (i.toString() === inputs[0].value) {
      data.entries[i].push(entry);
    }
  }
  modal.classList.add('hidden');
}

function handleClickAdd(e) {

}

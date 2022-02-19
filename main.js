/* global data */
/* exported data */
var modalSubmit = document.querySelector('#modal-entry-form');
var inputs = document.querySelector('#modal-entry-form').elements;
const modal = document.querySelector('.modal');
const addEntryButton = document.querySelector('.add-entry-button');
const dayButtons = document.querySelector('.day-button-row');

modalSubmit.addEventListener('submit', handleSubmitEntry);
addEntryButton.addEventListener('click', handleClickAdd);
dayButtons.addEventListener('click', handleClickDayButton);

function handleSubmitEntry(event) {
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
  modal.classList.remove('hidden');
}

function handleClickDayButton(e) {
  if (e.target.className === 'day-buttons') {
    // console.log(e.target.getAttribute('id'));
    var i = parseInt(e.target.getAttribute('id'));
    var $tableBody = document.querySelector('tbody');
    var remaining = 0;
    for (var n = 0; n < data.entries[i].length; n++) {
      console.log('data[i]: ', data.entries[i][n]);
      console.log($tableBody.children[n]);
      const child = $tableBody.children[n].firstElementChild;
      console.log(child.firstElementChild);
      child.textContent = data.entries[i][n].time;
      var newDescriptionTd = document.createElement('td');
      var tdButton = document.createElement('button');
      tdButton.textContent = 'Edit';
      var tdText = document.createElement('p');
      tdText.textContent = data.entries[i][n].description;
      newDescriptionTd.appendChild(tdText);
      newDescriptionTd.appendChild(tdButton);
      $tableBody.children[n].appendChild(newDescriptionTd);
      child.nextElementSibling.remove();
      // child.nextElementSibling.textContent = data.entries[i][n].description;
      remaining = n;
    }

    if (data.entries[i].length === 0) {
      for (var j = 0; j < 8; j++) {
        $tableBody.children[j].firstElementChild.textContent = '';
        $tableBody.children[j].firstElementChild.nextElementSibling.textContent = '';
      }
    } else {
      remaining++;
      for (j = remaining; j < 8; j++) {
        $tableBody.children[j].firstElementChild.textContent = '';
        $tableBody.children[j].firstElementChild.nextElementSibling.textContent = '';
      }
    }
  }
}

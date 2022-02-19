/* global data */
/* exported data */
var modalSubmit = document.querySelector('#modal-entry-form');
var inputs = document.querySelector('#modal-entry-form').elements;
const modal = document.querySelector('.modal');
const addEntryButton = document.querySelector('.add-entry-button');
const dayButtons = document.querySelector('.day-button-row');
const tbody = document.querySelector('tbody');

modalSubmit.addEventListener('submit', handleSubmitEntry);
addEntryButton.addEventListener('click', handleClickAdd);
dayButtons.addEventListener('click', handleClickDayButton);
tbody.addEventListener('click', handleClickTable);

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
      var newDiv = document.createElement('div');
      newDiv.className = 'row justify-space-between align-center';
      tdButton.textContent = 'Update';
      tdButton.classList.add('update-button');
      tdButton.classList.add(n);
      var tdText = document.createElement('p');
      tdText.setAttribute('class', 'no-margin');
      tdText.textContent = data.entries[i][n].description;
      newDescriptionTd.appendChild(newDiv);
      newDiv.appendChild(tdText);
      newDiv.appendChild(tdButton);
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

function handleClickTable(e) {
  if (e.target.className.includes('update-button')) {
    // console.log('inside');
    console.log(e.target.className);

  }
}

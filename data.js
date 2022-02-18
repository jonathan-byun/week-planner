/* exported data */

var data = {
  entries: [[], [], [], [], [], [], []],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('week-planner-data-storage');

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', storingData);

function storingData(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('week-planner-data-storage', dataJSON);
}

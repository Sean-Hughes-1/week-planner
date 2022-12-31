var addButton = document.getElementById('add-entry');
var modalHider = document.getElementById('modal-hider');
var modalBackground = document.querySelector('.back-ground-div');
var submitButton = document.getElementById('submit-entry');
var day = document.getElementById('days');
var time = document.getElementById('time');
var notes = document.getElementById('text-area');
var entryForm = document.getElementById('entry-form');

var data = {
  entries: []
};

var previousData = localStorage.getItem('planner-data');
if (previousData !== null) {
  data = JSON.parse(previousData);
}
window.addEventListener('beforeunload', handleBeforeUnload);
function handleBeforeUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('planner-data', dataJSON);
}

addButton.addEventListener('click', handleModal);
function handleModal(event) {
  toggleView(true);
}

submitButton.addEventListener('click', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  var formData = {};
  formData.day = day.value;
  formData.time = time.value;
  formData.notes = notes.value;
  data.entries.push(formData);
  entryForm.reset();
  toggleView(false);
}

function toggleView(show) {
  if (show) {
    modalHider.classList.remove('hidden');
    modalBackground.classList.remove('hidden');
  } else {
    modalHider.className = 'modal-hider hidden';
    modalBackground.className = 'back-ground-div hidden';
  }
}

function renderTable(data) {
  var table = document.createElement('table');
  table.className = 'event-table';

  var thead = document.createElement('thead');
  var trHead = document.createElement('tr');
  var tr = document.createElement('tr');
  var th1 = document.createElement('th');
  var th2 = document.createElement('th');
  var tbody = document.createElement('tbody');
  var td = document.createElement('td');

  table.appendChild(thead);
  thead.appendChild(trHead);
  trHead.appendChild(th1);
  trHead.appendChild(th2);
  table.appendChild(tbody);
  tbody.appendChild(tr);
  tr.appendChild(td);
  tr.appendChild(td);
}

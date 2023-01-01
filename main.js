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
  var tr = document.createElement('tr');
  var tbody = document.querySelector('tbody');
  var tdTime = document.createElement('td');
  var tdDesc = document.createElement('td');

  tdTime.textContent = data.time;
  tdDesc.textContent = data.notes;

  tbody.appendChild(tr);
  tr.appendChild(tdTime);
  tr.appendChild(tdDesc);

  return tr;
}

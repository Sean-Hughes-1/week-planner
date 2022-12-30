var addButton = document.getElementById('add-entry');
var modalHider = document.getElementById('modal-hider');
var modalBackground = document.querySelector('.back-ground-div');
var submitButton = document.getElementById('submit-entry');

addButton.addEventListener('click', handleModal);
function handleModal(event) {
  toggleView(true);
}

submitButton.addEventListener('click', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

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

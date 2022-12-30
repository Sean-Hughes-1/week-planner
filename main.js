var addButton = document.getElementById('add-entry');
var modalHider = document.getElementById('modal-hider');
var modalBackground = document.querySelector('.back-ground-div');
addButton.addEventListener('click', handleModal);
function handleModal(event) {

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

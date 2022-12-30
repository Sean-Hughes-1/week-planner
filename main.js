var addButton = document.getElementById('add-entry');
var modalHider = document.getElementById('modal-hider');
addButton.addEventListener('click', handleModal);
function handleModal(event) {

}

function toggleView(show) {
  if (show) {
    modalHider.classList.remove('hidden');
  } else {
    modalHider.className = 'hidden';
  }
}

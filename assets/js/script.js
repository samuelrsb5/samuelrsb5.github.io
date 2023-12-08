function showContent(imagePath) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");

  modalContent.innerHTML = `<img src="${imagePath}" alt="Modal Image">`;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById('modal');
  if (event.target == modal) {
    closeModal();
  }
};

document.addEventListener("DOMContentLoaded", function () {
  closeModal();
});

function toggleCardContent(button) {
  const card = button.parentNode;
  const details = card.querySelector('.game_desc');

  if (details.style.display === 'none' || details.style.display === '') {
    details.style.display = 'block';
    button.innerText = 'Esconder Detalhes';
  } else {
    details.style.display = 'none';
    button.innerText = 'Mostrar Detalhes';
  }
}
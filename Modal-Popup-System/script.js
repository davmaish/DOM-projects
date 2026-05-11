const openBtn = document.getElementById("open-modal-btn");
const overlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const confirmBtn = document.querySelector(".confirm-btn");
const toastContainer = document.querySelector(".toast-container");

//console.log(overlay);

////----Functions----

function openModal() {
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

function createToast() {
  let card = document.createElement("div");
  card.classList.add("toast");
  card.classList.add("success");

  card.innerHTML = `
    <span>success😎 modal confimed.</span>
    <button class="close">&times;</button>
  `;
  toastContainer.appendChild(card);

  ///function to handle Removal
  function removeToast(element) {
    element.classList.add("fadeOut");

    setTimeout(() => {
      element.remove();
    }, 500);
  }

  ///auto remove
  const timer = setTimeout(() => {
    removeToast(card);
  }, 2000);

  //manual remove
  card.querySelector(".close").addEventListener("click", () => {
    clearTimeout(timer);
    removeToast(card);
  });
}

////----Eventlisteners----
openBtn.addEventListener("click", openModal);

//console.log(openModal());
closeBtn.addEventListener("click", closeModal);

/**
 //without propagation.
overlay.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});

 */
///with propagetion.
overlay.addEventListener("click", closeModal);

///KeyPress Event.
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("active")) {
    closeModal();
  }
});

///confirm buttton
confirmBtn.addEventListener("click", () => {
  createToast();

  //close modal.
  closeModal();
});

///stop propagetion();
modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

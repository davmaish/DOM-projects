const buttons = document.querySelectorAll(".toast-btn");
const toastContainer = document.querySelector(".toast-container");

const messages = {
  success: "Success! Action completed.",
  error: "Error! Something went wrong.",
  warning: "Warning! Check your input.",
  info: "Info: New updates available.",
};

// Now you can grab the right text using the 'type' variable from Step 3
///Dynamic element Creation.

function createToast(type) {
  let newCard = document.createElement("div");
  let message;
  if (!type || !messages[type]) return;
  //configuration.
  newCard.classList.add("toast");
  //console.log(newCard);
  message = messages[type];
  newCard.classList.add(type);
  //toastContainer.appendChild(newCard);
  //console.log(newCard);
  newCard.innerHTML = `
  <span>${message}</span>
  <button class="close-btn">&times;</button>
  `;

  //Append Child.
  toastContainer.appendChild(newCard);

  ///function to handle Removal
  function removeToast(element) {
    element.classList.add("fadeOut");

    setTimeout(() => {
      element.remove();
    }, 500);
  }

  ///auto remove
  const timer = setTimeout(() => {
    removeToast(newCard);
  }, 5000);

  //manual remove
  newCard.querySelector(".close-btn").addEventListener("click", () => {
    clearTimeout(timer);
    removeToast(newCard);
  });
}

//Eventlisteners

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    createToast(type);
  });
});

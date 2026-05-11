const faqCard = document.querySelectorAll(".faq-item");
const faqContainer = document.querySelector(".faq-container");

/**
 * 
 * faqCard.forEach((item) => {
  //console.log(item);
  item.addEventListener("click", () => {
    ///isOpen
    const isOpen = item.classList.contains("active");

    ///close all items first.
    faqCard.forEach((card) => {
      card.classList.remove("active");
    });

    if (!isOpen) {
      item.classList.add("active");
    }
  });
});
 */

//Event Delegation

faqContainer.addEventListener("click", (e) => {
  const item = e.target.closest(".faq-item");

  //guard.
  if (!item) return;

  ///isOpen
  const isOpen = item.classList.contains("active");
  ///close items first
  faqCard.forEach((card) => {
    card.classList.remove("active");
  });

  if (!isOpen) {
    item.classList.add("active");
  }
});

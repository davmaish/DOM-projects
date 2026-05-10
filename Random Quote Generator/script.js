const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "— Steve Jobs",
    category: "Motivation",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "— Nelson Mandela",
    category: "Motivation",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "— Theodore Roosevelt",
    category: "Motivation",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts",
    author: " — Winston Churchill",
    category: "success",
  },
  {
    quote: "The secret of success is to do the common thing uncommonly well.",
    author: "— John D. Rockefeller Jr.",
    category: "success",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "— Henry David Thoreau",
    category: "success",
  },
  {
    quote: "Talk is cheap. Show me the code.",
    author: "— Linus Torvalds",
    category: "Coding",
  },
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute",
    author: "— Harold Abelson",
    category: "Coding",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "— Dalai Lama",
    category: "life",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "— John Lennon",
    category: "life",
  },
];

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const category = document.querySelector(".category");
const getQuote = document.getElementById("generate-btn");
const copyQuote = document.getElementById("copy-btn");
const message = document.getElementById("status-message");
//const quoteCard = document.querySelector(".quote-card");

//console.log(getQuote);

///---Functions----

let lastIndex = -1; // Global tracker

function uiLogic() {
  let newIndex = Math.floor(Math.random() * quotes.length);
  quote.classList.add("fade");
  author.classList.add("fade");
  category.classList.add("fade");
  message.textContent = "Loading...";
  getQuote.disabled = true;
  copyQuote.disabled = true;

  setTimeout(() => {
    if (newIndex === lastIndex) {
      console.log("Duplicate detected! Retrying...");
      return uiLogic();
    }

    lastIndex = newIndex;
    //localStorage.setItem("previousIndex", lastIndex);

    const randomQuote = quotes[newIndex];
    localStorage.setItem("savedQuote", JSON.stringify(randomQuote));

    quote.innerText = randomQuote.quote;
    author.innerText = randomQuote.author;
    category.innerText = randomQuote.category;
    message.textContent = "Click the button to generate a new quote.";

    quote.classList.remove("fade");
    author.classList.remove("fade");
    category.classList.remove("fade");
    getQuote.disabled = false;
    copyQuote.disabled = false;
  }, 1000);
}

//copyLogic

function copyLogic() {
  navigator.clipboard
    .writeText(`${quote.innerText} ${author.innerText}`)
    .then(() => {
      message.textContent = "Copied to clipboard!";
      setTimeout(() => {
        message.textContent = "Click the button to generate a new quote.";
      }, 1500);
    })
    .catch(() => {
      message.textContent = "Something went wrong!";
      setTimeout(() => {
        message.textContent = "Click the button to generate a new quote.";
      }, 1500);
    });
}

//----Eventlisteners-----
getQuote.addEventListener("click", () => {
  uiLogic();
});

copyQuote.addEventListener("click", () => {
  copyLogic();
});

///savedQuote

let savedQuote = localStorage.getItem("savedQuote");
//console.log(savedQuote);

if (savedQuote) {
  savedQuote = JSON.parse(savedQuote);
  quote.innerText = savedQuote.quote;
  author.innerText = savedQuote.author;
  category.innerText = savedQuote.category;
}

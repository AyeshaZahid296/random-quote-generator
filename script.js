const quotes = [
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Knowledge is power.",
    author: "Francis Bacon"
  },
  {
    text: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin"
  },
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates"
  }
];
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const button = document.getElementById("generate-btn");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteElement.textContent = `"${randomQuote.text}"`;
  authorElement.textContent = `- ${randomQuote.author}`;

  quoteElement.style.animation = "fadeIn 1s ease-in-out";
  authorElement.style.animation = "fadeIn 1.5s ease-in-out";

  setTimeout(() => {
    quoteElement.style.animation = "";
    authorElement.style.animation = "";
  }, 1500);
});

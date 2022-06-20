const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const quoteButton = document.getElementById("new-quote")

fetch('https://api.quotable.io/random')
  .then(r => r.json)
  .then(quote => {
  quoteText.textContent = quote.content;
  quoteAuthor.textContent = quote.author;
})


quoteButton.addEventListener("click", function(){
                             fetch('https://api.quotable.io/random')
    .then(r => r.json())
    .then(quote => {
      quoteText.textContent = quote.content;
      quoteAuthor.textContent = quote.author;
})});



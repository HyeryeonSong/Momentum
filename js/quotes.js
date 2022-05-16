const quotes = [
  {
    quote : "True Knowledge exists in knowing that you know nothing.", author : "Socrates"
  },
  {
    quote : "The secret of happiness is renunciation.", author : "Andrew Carnegie"
  },
  {
    quote : "Life is like riding bicycle. To keep your balance you must keep moving.", author : "Albert Einstein"
  },
  {
    quote : "Never underestimate your own ignorance.", author : "Albert Einstein"
  },
  {
    quote : "You never know what life is like, until you have lived it.", author : "Marilyn Monroe"
  },
  {
    quote : "It's not that I'm so smart , it's just that I stay with problems longer.", author : "Albert Einstein"
  },
  {
    quote : "We could never learn to be brave and patient, if there were only joy in the world.", author : "Helen Adams Keller"
  },
  {
    quote : "Challenges are what make life interesting and overcoming them is what makes life meaningful.", author : "Joshua J. Marine"
  },
  {
    quote : "Action is the foundational key to all success.", author : "Pablo Picasso"
  },
  {
    quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.", author : "Nelson Mandela"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
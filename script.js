const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    text: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    text: "Opportunities don't happen, you create them.",
    author: "Chris Grosser",
  },
  {
    text: "I never dreamed about success, I worked for it.",
    author: "Estée Lauder",
  },
  {
    text: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    text: "If you want to achieve greatness, stop asking for permission.",
    author: "Unknown",
  },
  {
    text: "Failure is simply the opportunity to begin again, this time more intelligently.",
    author: "Henry Ford",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving them.",
    author: "Zig Ziglar",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  {
    text: "Small steps in the right direction can turn out to be the biggest step of your life.",
    author: "Unknown",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "It’s not whether you get knocked down, it’s whether you get up.",
    author: "Vince Lombardi",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen R. Covey",
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  {
    text: "Difficulties in life are intended to make us better, not bitter.",
    author: "Dan Reeves",
  },
  {
    text: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem",
  },
  { text: "Your limitation—it's only your imagination.", author: "Unknown" },
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = quotes[randomIndex].text;
  const quoteAuthor = quotes[randomIndex].author;

  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  quoteElement.style.opacity = "0";

  setTimeout(() => {
    quoteElement.textContent = `"${quoteText}"`;
    authorElement.textContent = `- ${quoteAuthor}`;
    quoteElement.style.opacity = "1"; // Fade in effect
  }, 300);
}

function copyQuote() {
  const quoteText = document.getElementById("quote").textContent;
  navigator.clipboard.writeText(quoteText).then(() => {
    const copiedMessage = document.getElementById("copiedMessage");
    copiedMessage.style.opacity = "1";

    setTimeout(() => {
      copiedMessage.style.opacity = "0";
    }, 2000);
  });
}

document.getElementById("tweetBtn").addEventListener("click", function () {
  const quoteText = document.getElementById("quote").textContent;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    quoteText
  )}`;
  window.open(tweetUrl, "_blank");
});

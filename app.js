
// API URL
const url = "https://api.quotable.io/random";

// Select DOM elements
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.querySelector("button:first-of-type");
const tweetButton = document.querySelector("button:last-of-type");

// Fetch and display a new quote
async function getQuote(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        
        // Update quote and author in DOM
        quoteElement.textContent = `"${data.content}"`;
        authorElement.textContent = `- ${data.author}`;
    } catch (error) {
        quoteElement.textContent = "Oops! Could not fetch a quote.";
        authorElement.textContent = "";
        console.error("Error fetching the quote:", error);
    }
}

// Share the quote on Twitter
function tweetQuote() {
    const quoteText = quoteElement.textContent;
    const authorText = authorElement.textContent;
    const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${quoteText} ${authorText}`
    )}`;
    window.open(tweetURL, "_blank");
}

// Event listeners
newQuoteButton.addEventListener("click", () => getQuote(url));
tweetButton.addEventListener("click", tweetQuote);

// Initial quote load
getQuote(url);

// Select elements from the DOM
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteButton = document.querySelector('.quote-box button:first-of-type');
const tweetButton = document.querySelector('.quote-box button:last-of-type');

// Fetch quotes from an API
async function getQuote() {
    const apiUrl = 'https://api.quotable.io/random'; // Using a public quotes API
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Update the DOM with the fetched quote and author
        quoteText.textContent = `"${data.content}"`;
        authorText.textContent = `- ${data.author}`;
    } catch (error) {
        quoteText.textContent = 'Oops! Something went wrong.';
        authorText.textContent = '';
        console.error('Error fetching the quote:', error);
    }
}

// Share the quote on Twitter
function tweetQuote() {
    const quote = quoteText.textContent;
    const author = authorText.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        quote + ' ' + author
    )}`;
    window.open(twitterUrl, '_blank');
}

// Event listeners
newQuoteButton.addEventListener('click', getQuote);
tweetButton.addEventListener('click', tweetQuote);


getQuote();


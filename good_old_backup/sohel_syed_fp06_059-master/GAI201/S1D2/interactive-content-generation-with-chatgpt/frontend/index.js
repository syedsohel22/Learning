// app.js
const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");
const saveBtn = document.getElementById("save-btn");
const shareBtn = document.getElementById("share-btn");

generateBtn.addEventListener("click", generateQuote);
saveBtn.addEventListener("click", saveQuote);
shareBtn.addEventListener("click", shareQuote);

let currentQuote = null;

async function generateQuote() {
  try {
    const theme = prompt(
      "Enter the theme for the quote (e.g., success, love, life):"
    );
    if (!theme) return;

    const response = await fetch("/generate-quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ theme }),
    });

    const data = await response.json();
    const quote = data.quote;
    quoteElement.innerText = quote;

    currentQuote = quote;
    saveBtn.disabled = false;
    shareBtn.disabled = false;
  } catch (error) {
    console.error("Error generating quote:", error);
    alert("Failed to generate quote. Please try again later.");
  }
}

async function saveQuote() {
  if (!currentQuote) return;

  try {
    const response = await fetch("/save-quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ quote: currentQuote }),
    });

    alert("Quote saved successfully!");
  } catch (error) {
    console.error("Error saving quote:", error);
    alert("Failed to save quote. Please try again later.");
  }
}

function shareQuote() {
  if (!currentQuote) return;

  // Generate shareable link for the quote
  const shareableLink = `http://yourdomain.com/share?content=${encodeURIComponent(
    currentQuote
  )}`;
  // Replace "yourdomain.com" with your actual domain.

  alert(`Share this link: ${shareableLink}`);
}

// Check if the user is authenticated
const token = localStorage.getItem("token");
if (token) {
  saveBtn.disabled = false;
  shareBtn.disabled = false;
} else {
  saveBtn.disabled = true;
  shareBtn.disabled = true;
}

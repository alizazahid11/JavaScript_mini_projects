const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "One piece of paper can't decide your future",
    "You need to be patience"
];
const quote=document.getElementById("quote");
const button=document.getElementById("quoteButton");

function getquote(){
const randomindex=Math.floor(Math.random()*quotes.length);
quote.textContent=quotes[randomindex];
}
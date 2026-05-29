const data = ["ketan kanojerj", "hello world", "Java developer", "React expert"];

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click', () => {
    const index = Math.floor(Math.random() * data.length); // ✅ correct range

    quote.innerHTML = data[index]; // ✅ correct variable
});
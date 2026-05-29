console.log("Hello world start");

fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
        const parent = document.getElementById("first");

        const image = document.createElement("img");

        image.src = data[0].avatar_url;   // ✅ FIX

        parent.append(image);
    })
    .catch(err => console.log(err));

console.log("Hello world End");
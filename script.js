document.querySelector("#pokeball").addEventListener("click", getPokemon);

function getPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=36")
    .then((response) => response.json())
    .then((data) => {
    //    console.log(data)
    const results = data.results;
    for (let i = 0; i <results.length; i++) {
        const address = results[i].url;
        fetch(address)
        .then((response) => response.json())
        .then((data) => {
            const name = data.name;
            const image = data.sprites.front_default;
            const type = data.types[0].type.name;

            const card = document.getElementById("card");
            const codex = document.createElement("div");
            codex.id = "codex",
            codex.className = type;

            const title = document.createElement("h2");
            title.innerHTML = `${name}`;

            const img = document.createElement("img");
            img.src = `${image}`;

            const gen = document.createElement("h3");
            gen.innerHTML = `type: ${type}`;

            card.appendChild(codex);
            codex.appendChild(title);
            codex.appendChild(img);
            codex.appendChild(gen);
            });
        }
    });
}

// .catch((err) => {
//     console.log("Pokemon not found", err);
// })
// }

// getPokemon();

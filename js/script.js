const divChampOne = document.querySelector(".championone");
const inputChampion = document.getElementById("inputchampion");
const button = document.getElementById("buttonchampion");
const imgChamp = document.getElementById("imgchamp");

async function getChampions(event) {

    if (inputChampion.value == null || inputChampion.value == "") {
        event.preventDefault();
    } else {
        const inputText = inputChampion.value;

        const url2= `http://ddragon.leagueoflegends.com/cdn/10.10.3216176/data/en_US/champion.json`;
        const url = `https://ddragon.leagueoflegends.com/cdn/10.10.3216176/data/pt_BR/champion/${inputText}.json`;
        
        const response = await fetch(url);
        const result = await response.json();
        const champions = result.data;

        const urlImgLow = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${inputText}_0.jpg`
        const urlImg = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${inputText}_0.jpg`;


        divChampOne.innerHTML =
            `
                <h3>${champions[inputText].title}</h3>
                <h1>${champions[inputText].name}</h1>
                <div class="lore">
                    <p>${champions[inputText].lore}</p>
                </div>
            `
        imgChamp.setAttribute("src", urlImg);
    }
}
button.addEventListener("click", getChampions);

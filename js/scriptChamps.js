const divContainer = document.getElementById("container");

async function getChampions() {
    const urlChamp = "https://ddragon.leagueoflegends.com/cdn/10.10.3216176/data/en_US/champion.json";
    const response = await fetch(urlChamp);
    const result = await response.json();
    const champions = result.data;

    const keysChamp = Object.keys(champions);

    console.log(keysChamp)

    const keysMapped = keysChamp.map(key => {
        let nameChamp = champions[key].id;
        console.log(nameChamp);
        divContainer.innerHTML += 
        `
        <div class="champs">
            <img src='http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nameChamp}_0.jpg'>
            <p>${nameChamp}</p>
        <div>
        `;
    })
}
getChampions();


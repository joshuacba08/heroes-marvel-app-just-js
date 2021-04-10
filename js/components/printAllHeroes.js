import { getHeroes } from "../helpers/heroesProvider.js";

function printAllHeroes(leter) {
    
    const heroesContainer = document.querySelector('.heroes-container');

    let html = '';
    getHeroes(leter).then( res => {

        res.map((heroe) => {
            html += `
                <div class="heroe-card">
                    <img src="${heroe.image}" alt="${heroe.name}" />
                    
                        <p class="heroe-card__name">${heroe.name}</p>
                    
                </div>
            `;
        });

        heroesContainer.innerHTML = html;

    });

}

export default printAllHeroes;
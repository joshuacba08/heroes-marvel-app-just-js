import { getHeroesByStarWith } from "../helpers/heroesProvider.js";

function printSearchHeroes(leters) {

    const heroesContainer = document.querySelector('.heroes-container');

    let html = '';
    getHeroesByStarWith(leters).then(res => {

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

export default printSearchHeroes;
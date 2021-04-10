import { getHeroesByName } from "../helpers/heroesProvider.js";

function printHeroeByName(id) {

    const heroesContainer = document.querySelector('.heroe-container');
    // location = window.location.href;
    // console.log(location);

    let html = '';
    getHeroesByName(id).then(heroe => {
        
            console.log(heroe)

            let description = "This hero dosen't have any description";
            heroe.description&& (description = heroe.description);

            html += `

                <div class="modal-container">
                    <a class="close-modal "href="/">{ Close X }</a>
                    <div class="modal-container__heroe-card">
                        <div class="heroe-image-container">
                            <img src="${heroe.thumbnail.path}.jpg" alt="${heroe.name}" />
                        </div>
                        
                        <div class="heroe-detail">
                            <p class="heroe-card__name">${heroe.name}</p>
                            <p class="heroe-card__description">${description}</p>
                        </div>
                    </div>
                </div>
            `;

        heroesContainer.innerHTML = html;

    });

}

export default printHeroeByName;
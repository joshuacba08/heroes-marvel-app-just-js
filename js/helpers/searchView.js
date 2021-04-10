import printSearchHeroes from "../components/printSearchHeroes.js";
import { getHeroesByStarWith } from "./heroesProvider.js";


function searchView() {

    const search = document.querySelector('.search-input');
    const form = document.querySelector('.search-form')


    search.addEventListener('input', (e) => {

        printSearchHeroes(e.target.value);

    })

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
    })

}

export default searchView;
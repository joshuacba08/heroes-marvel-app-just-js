import printAllHeroes from "./components/printAllHeroes.js";
import { printLeters } from "./components/printLeters.js";
import events from "./helpers/heroesView.js";
import { getHeroes, getHeroesById } from "./helpers/heroesProvider.js";
import heroesView from "./helpers/heroesView.js";
import heroeView from "./helpers/heroeView.js";

(()=>{

    
    printLeters();

    heroesView();

    heroeView();
    

    

})();
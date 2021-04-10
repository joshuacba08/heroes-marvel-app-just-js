import printHeroeByName from "../components/printHeroe.js";


function heroeView() {

    const idResults = document.querySelector('.heroes-container');
    
    console.log(idResults);
    let name;

    const handleClickId = (e) => {

        
        name = e.target.innerHTML;
        printHeroeByName(name);

    }

        idResults.onclick = handleClickId;


}


export default heroeView;
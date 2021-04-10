import printAllHeroes from "../components/printAllHeroes.js";

function heroesView() {
    
    const letersResults = document.querySelector('.leter-container').children;

    let leter;

    !leter&&printAllHeroes('a');

    const handleClick = (e) => {


        leter = e.target.innerHTML;
        printAllHeroes(leter);
        
    }

    for (let index = 0; index < letersResults.length; index++) {
        letersResults[index].onclick = handleClick;

    }

}


export default heroesView;




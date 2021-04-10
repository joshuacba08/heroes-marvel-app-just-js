export const printLeters = () => {

    const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];

    
    const leterContainer = document.querySelector('.leter-container');
    
    const handleClick = (leter) => {
        console.log(leter);
    }

    let html = '';

    abc.forEach(leter => {

        html += `
        
            <li class="leter" onclick="handleClick('${leter}')">${leter}</li>

        `;
        
    });

    leterContainer.innerHTML = html;

}
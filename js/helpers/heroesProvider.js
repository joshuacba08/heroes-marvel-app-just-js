    const getHeroes = async (leter) => {

    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=52fcad5afeab098c2bf9070b7448c111&hash=54d1126e9fce676a64266f26ab5a79f8&limit=100&nameStartsWith=${leter}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const heroes = data.results.map(heroe => {
        return {
            id: heroe.id,
            name: heroe.name,
            image: `${heroe.thumbnail.path}.jpg`
        }
    })

    return heroes;
};

const getHeroesById = async (id) => {

    console.log(id);

    const url = `https://gateway.marvel.com:443/v1/public/characters/${encodeURI(id)}?ts=1&apikey=52fcad5afeab098c2bf9070b7448c111&hash=54d1126e9fce676a64266f26ab5a79f8`;

    const resp = await fetch(url);
    const { data } = await resp.json();


    return data.results[0];
}

const getHeroesByName = async (name) => {

    console.log(name);

    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=52fcad5afeab098c2bf9070b7448c111&hash=54d1126e9fce676a64266f26ab5a79f8&limit=100&name=${name}`;

    const resp = await fetch(url);
    const { data } = await resp.json();


    return data.results[0];
}


const getHeroesByStarWith = async (name) => {

    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=52fcad5afeab098c2bf9070b7448c111&hash=54d1126e9fce676a64266f26ab5a79f8&limit=100&nameStartsWith=${name}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const heroes = data.results.map(heroe => {
        return {
            id: heroe.id,
            name: heroe.name,
            image: `${heroe.thumbnail.path}.jpg`
        }
    })

    return heroes;
}



export {
    getHeroes,
    getHeroesById,
    getHeroesByName,
    getHeroesByStarWith,
}
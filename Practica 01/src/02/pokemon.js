const { httpclient } = require('./plugins/httpclient');

const BuscarPokemonId = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await httpclient.get(url);
        return pokemon.name;
    } catch (error) {
        throw new Error(`Error al buscar el Pokémon: ${error.message}`);
    }
};

module.exports = { BuscarPokemon: BuscarPokemonId };

// Best game api response adapter (Internal)
function BestGameAdapter(response) {

    return response.best;
}

// Only game api response adapter (Internal)
function OnlyGameAdapter(response) {
    return response.games;
}

// app.rawg.io api response adapter (External)
function RawgAdapter(response) {
    let games = [];

    response.results.map(function(game) {
        games.push({
            name: game.name,
            picture: game.background_image,
            rate: game.rating,
            released: game.released
        })
    })
    return games;
}

const adapters = {
    best_games: BestGameAdapter,
    only_games: OnlyGameAdapter,
    rawg: RawgAdapter
}

module.exports = adapters;

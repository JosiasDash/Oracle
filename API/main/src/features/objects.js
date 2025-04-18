
function Game(name, url_image, description, rate){
    this.name = name;
    this.image = url_image;
    this.brief = description;
    this.rate = rate;
    this.displayed = "Video games";
}

function Movie(name, url_image, description, out_date) {
    this.name = name;
    this.image = url_image;
    this.brief = description;
    this.date = out_date;
    this.displayed = "Movies";
}

module.exports = {
    Game,
    Movie
}

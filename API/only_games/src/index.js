const express = require("express");
const app = express();
const port = 4012;
const cors = require("cors");

const pes = "https://i.ytimg.com/vi/IGSoMJTE-G8/maxresdefault.jpg";
const surf = "https://image.jeuxvideo.com/images/jaquettes/00044850/jaquette-subway-surfers-iphone-ipod-cover-avant-g-1336744308.jpg";
const games = [
    {name: "eFootball 2025", rate: 3, released: "01-12-2025", picture: pes},
    {name: "Subway surfers", rate: 4.8, released: "01-09-2014", picture: surf}
]

app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/my-games", (req, res)=> {
    res.status(200).json({
        games: games
    })
})

app.listen(port, ()=> {
    console.log(`Only games api is waiting for your requests on ${port}`);
})

const express = require("express");
const app = express();
const port = 4011;
const fc = "https://image.api.playstation.com/vulcan/ap/rnd/202409/1320/584f33ff0ba9f56e779e146ed4192e78d62efe36220b2779.png";
const gow = "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRVLF2IU2L1FNtu9d3MKLq.jpg";
const cors = require("cors");

app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const games = [
    {name: "God of war", rate: 4, released: "01-12-2004", picture: gow},
    {name: "FC 25", rate: 4.1, released: "01-09-2024", picture: fc}
]

app.get("/some-games", (req, res)=> {
    res.status(200).json({
        best: games,
    })
})

app.listen(port, ()=> {
    console.log(`Best games api is waiting for requests on ${port}`)
})

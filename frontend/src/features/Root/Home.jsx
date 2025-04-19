import {useEffect, useState} from "react";
import Header from "../../components/layout/Header";
import {Container, Row, Col} from "react-bootstrap";
import "../../styles/Home.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import axios from "axios";

const fc = "https://image.api.playstation.com/vulcan/ap/rnd/202409/1320/584f33ff0ba9f56e779e146ed4192e78d62efe36220b2779.png";
const gow = "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRVLF2IU2L1FNtu9d3MKLq.jpg";

function GetArray(len) {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= Number(len)) {
            arr.push(true);
        } else
            arr.push(false);
    }
    return arr;
}

function HomePage({games}) {
    // const games = [
    //     {name: "God of war", rate: 4, released: "01-12-2004", picture: gow},
    //     {name: "FC 25", rate: 4.1, released: "01-09-2024", picture: fc}
    // ]
    
    
    return (
        <div className="home">
            <Container className="">
                <Row className="m-0">
                    {
                        games.map((game, index)=> {
                            return (
                                <Col key={index} xs={4} className="p-4" >
                                    <div className="game-card w-100 bg-white p-2 rounded-3">
                                        <div style={{
                                            'backgroundImage': `url(${game.picture})`
                                        }} className="game-card-preview rounded-top-3">

                                        </div>
                                        <div className="mt-4 d-flex justify-content-between">
                                            <h4 className="fw-semibold">{game.name}</h4>
                                            <div className="d-flex align-items-center" >
                                                {
                                                    GetArray(game.rate).map((rate, ind)=>{
                                                        return (
                                                            rate ? <FaStar className="text-warning" key={ind} /> : <FaRegStar className="text-secondary" key={ind}  />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <h6 className="mt-3">Released : <span className="text-secondary">{game.released}</span></h6>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

function Home() {
    
    const [search, setSearch] = useState("");
    const [games, setGames] = useState([]);
    useEffect(()=> {
        document.title = "MY ORACLE"
    }, [])
    const search_something = (event)=> {
        if (search.length == 0)
            return;
        const url = `http://localhost:4000/search/?query=${search}`;
        axios.get(url)
        .then((response)=> {
            console.log(response.data);
            setGames(response.data.result);
        }).catch((err)=> {
            alert("Unexpected error");
            console.log(err);
        })
        
    }
    return (
        <div>
            <Header setSearch={setSearch} search={search} onSearch={search_something}  />
            <HomePage games={games} />
        </div>
    )
}

export default Home;

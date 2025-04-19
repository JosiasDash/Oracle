import feature from "./config";
import Home from "./Home";
/*
** This urls must follow the format: {path: "", component:}
*/
let urls = [
    {path: "", component: <Home/>}
]

urls.map(function(url, index) {
    urls[index].path = feature.root + urls[index].path
})

export default urls;

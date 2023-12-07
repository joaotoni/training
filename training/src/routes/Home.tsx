import axios from "axios";
import {useState, useEffect} from "react";


 export default function Home() {
    const [posts, setPosts] = useState([]);

    const getPosts = async() =>{
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

            const data = response.data;
            setPosts(data)
        }   catch (error) {
            console.log(error);
        }
    };
    useEffect(() =>{
        getPosts()
    }, []);
    return (
        <div>
            <h1>Últimos posts</h1>
            {posts.length === 0 ? <p>Carregando</p> : <p>Carregou</p>}
        </div>
    )
}
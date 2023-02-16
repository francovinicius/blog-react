import { useParams } from "react-router-dom"
import posts from "json/posts.json"

export default function Post() {
    const parametros = useParams();


    
    return (
        <h1>Post {parametros.id}</h1>
    )
}
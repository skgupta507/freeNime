import useFetch from "../hooks/useFetch"
import Card from "./Card"
import { useParams } from "react-router-dom"
import Search from "./Search"
import useLoad from "../hooks/useLoad"
import Loading from "./Loading"

const Results = () => 
{
    const {search} = useParams()
    const results = useFetch(search)
    const loading = useLoad()

    return (
        <main>
            {loading && <Loading/>}
            <Search/>
            <h2>RESULTS FOR "{search}"</h2>
            <div className="box">
                {results?.results.map(obj=><Card className='card' key={obj.id} anime={obj} isRecent={false}/>)}
            </div>
        </main>
    )
}

export default Results
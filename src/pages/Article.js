import { useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

export default function Article() {
    // params in this example will be the property we defined in the Route inside App.js (in this case an id)
    const { id } = useParams()
    const url = 'http://localhost:3000/articles/' + id
    const { data: article, isPending, error } = useFetch(url)
    const history = useHistory()

    useEffect(() => {
        if (error) {
            // redirect
            // history.goBack()
            setTimeout(() => {
                history.push('/')
            }, 2000)
        }
    }, [error, history])

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {article && (
                <div>
                    <h2>{article.title}</h2>
                    <p>By {article.author}</p>
                    <p>{article.body}</p>
                </div>
            )}
        </div>
    )
}

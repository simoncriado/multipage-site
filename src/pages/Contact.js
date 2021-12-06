import { useLocation } from "react-router-dom"

export default function Contact() {
    const queryString = useLocation().search

    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get("name")

    // ?name=mario

    return (
        <div>
            <h2>Hey {name}, contact us here...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In id a nisi minus, architecto consectetur! Voluptatem officia recusandae minus perferendis fugiat. Est dolorem dignissimos dolor porro, doloribus eligendi. Optio, excepturi?</p>
        </div>
    )
}

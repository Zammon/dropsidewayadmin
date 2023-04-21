import { useParams } from "react-router-dom"

export default function ReviewPost() {
    const { id } = useParams();
    return(
        <div className="container-page">
            {`Show Post ID : ${id}`}
        </div>
    )
}
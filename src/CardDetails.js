import { useParams } from "react-router-dom";

const CardDetails = () => {
    const { id } = useParams();
    return (
        <div>
            card details page - {id}
        </div>

    );
}
 
export default CardDetails;
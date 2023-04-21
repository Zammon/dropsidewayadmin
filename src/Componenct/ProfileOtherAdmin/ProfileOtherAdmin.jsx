import { useParams } from "react-router-dom";

export default function ProfileOtherAdmin() {
    const { id } = useParams();
    return(
        <div className="">
            {"Profile Admin Number: "+ id}
        </div>
    );
}
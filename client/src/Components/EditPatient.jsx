import { useParams } from 'react-router-dom';


const EditPatient = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Edit Patient: {id}</h2>
            <input type="text" placeholder={id} ></input>
        </div>
        
    )
}

export default EditPatient;
import React, {useState} from "react";
import { ReactComponent as DeleteSVG } from "../SVGs/delete.svg";

function DeleteButton(props) {
	const [deleteConfirmation, setDeleteConfirmation] = useState(false);

    const classNameIdle = "hover:bg-farahgray-100 rounded-lg p-2 opacity-0 group-hover/" + props.group + ":opacity-100 transition-opacity duration-200";
    const classNameDelete = "bg-red-400 transform scale-110 rounded-lg p-2 opacity-0 group-hover/" + props.group + ":opacity-100 transition-opacity duration-200";
    const handleDelete = () => {
        if (deleteConfirmation) {
            props.function();
            setDeleteConfirmation(false);
        } else {
            setDeleteConfirmation(true);
            setTimeout(() => {
                setDeleteConfirmation(false);
            }, 3000);
        }
    }
	return (
		<button
			className={
				deleteConfirmation
					? classNameDelete
					: classNameIdle
			}
			onClick={() => handleDelete()}
		>
			<DeleteSVG />
		</button>
	);
}

export default DeleteButton;
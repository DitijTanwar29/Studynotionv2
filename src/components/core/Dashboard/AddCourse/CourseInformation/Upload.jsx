import React from "react";

const Upload = ({name,label,register,errors,setValue}) => {
    return (
        <form>
            <label htmlFor={name}>{label}</label>
            <input
            type="file"
            draggable="true"
            onDragStart="drag(event)"
            id={name}
            {...register(`{${name}}`,{required:true})}

            
            ></input>

            {
                errors.name && (
                    <span>{name} is required</span>
                )
            }
        </form>
    )
}

export default Upload
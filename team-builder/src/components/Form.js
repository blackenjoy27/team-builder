import React from "react";


const Form = (prop)=>{
    const {value, update, submit} = prop;

    const onChange = (evt) =>{
        const {name,value} = evt.target;
        update(name,value);
    }
    const onSubmit = (evt)=>{
        evt.preventDefault();
        submit();
    }


    return (
        <form onSubmit={onSubmit}>
            <label> Name:
                <input type="text" value={value.name} onChange={onChange} name="name"/>
            </label>
       
            <label> Email:
                <input type="text" value={value.email} onChange={onChange} name="email"/>
            </label>
            
            <label> Role:
                <select value={value.role} onChange={onChange} name="role">
                <option value="">---Select One Role---</option>
                <option value="Front-End Enginneer">Front-End engineer</option>
                <option value="Back-End Enginneer">Back-End engineer</option>
                <option value="Full-Stack Enginneer">Full-Stack engineer</option>
                <option value="Project Manager">Project Manager</option>
                </select>
            </label>
            <button> Submit </button>
        </form>
    )


}

export default Form;
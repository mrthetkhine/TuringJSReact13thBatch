import {useState} from "react";

export default function useCustomForm()
{
    const [formState, setFormState] = useState({})

    function onChangeHandler(field) {
        return function(event) {
            setFormState({
                ...formState,
                [field]: event.target.value
            })
        }
    }
    function register(field)
    {
        return {
            name : field,
            value:formState[field],
            onChange: onChangeHandler(field),
        }
    }
    function handleSubmit(onSubmit)
    {
        return function(event)
        {
            event.preventDefault();
            onSubmit(formState);
        }
    }
    return {
        register,
        handleSubmit,
    }
}
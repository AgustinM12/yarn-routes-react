import { useState } from "react";

cost[form, setForm] = useState(initalState)

export const useForm = (initalState) => {
    const handleInputChange = ({ target }) => {

        setForm({
            ...FormData,
            [target.name]: target.value
        })


    }
}
import React, {useState} from "react";
import {createUseStyles} from 'react-jss'
import Errors from "./Errors";
import Btn from "./Btn";
import Input from "./Input";

const Search = ({onSearch}) => {
    const classes = useStyles()
    const [inputText, setInputText] = useState('');
    const [errors, setErrors] = useState([]);

    const handleChange = (event) => {
        setInputText(event.target.value);
    }

    const handleClick = () => {
        setErrors([])
        if (inputText.length) {
            return onSearch(inputText)
        }

        setErrors(['Введите текст'])
    }

    return (
        <div>

            {
                errors.length ? <Errors errors={errors}/> : ''
            }

            <div className={classes.SearchContainer}>
                <Input onChange={handleChange} value={inputText} width='90%' />

                <div>
                    <Btn onClick={handleClick}>
                        Поиск
                    </Btn>
                </div>
            </div>

        </div>
    )
}

const useStyles = createUseStyles({
    SearchContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 50
    },
})

export default Search

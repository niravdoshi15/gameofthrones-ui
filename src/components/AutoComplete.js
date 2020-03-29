import React, { useEffect, useState, Fragment } from "react";
import axios from 'axios';
import { DisplayBattle } from './DisplayBattle'

export const AutoComplete = () => {

    const [list, setList] = useState([])
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)
    const [text, setText] = useState('')
    const [finalResult, setFinalResult] = useState([])
    const [activeOption, setActiveOption] = useState(0)

    useEffect(() => {
        async function fetchData() {
            try {
                let url = process.env.SERVICE_URL || 'https://carrerninjagot.herokuapp.com'
                let response = await axios(`${url}/api/battles`)
                let uniqueResult = []
                for (let i = 0; i < response.data.length; i++) {
                    if (!uniqueResult.includes(response.data[i])) {
                        uniqueResult.push(response.data[i])
                    }
                }
                setList(uniqueResult)
            }
            catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [])

    const handleChange = (e) => {
        const value = e.target.value
        setText(value)
        let suggestions = []
        if (value.length > 0) {
            const regex = new RegExp(value, 'i')
            setSuggestions([])
            suggestions = list.sort().filter(f => f.match(regex))
            if (suggestions.length > 0) {
                setSuggestions(suggestions)
                setShowSuggestion(true)
            } else {
                setShowSuggestion(false)
            }
        }
        if (value.length === 0) {
            setShowSuggestion(false)
        }
    }

    const handleSearchOnClick = (text) => {
        async function getBattleInfo() {
            try {
                let url = process.env.SERVICE_URL || 'https://carrerninjagot.herokuapp.com'
                let response = await axios(`${url}/api/search?battle=${text}`)
                setFinalResult(response.data)
            }
            catch (e) {
                console.log(e)
            }
        }
        getBattleInfo()
    }

    const selectSuggestion = (value, index) => {
        setText(value)
        setActiveOption(index)
        setShowSuggestion(false)
        handleSearchOnClick(value)
    }

    const handleOnKeyPress = (e, text) => {
        if (e.keyCode === 0) {
            handleSearchOnClick(text)
        }
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            setText(suggestions[activeOption])
            handleSearchOnClick(text)
            setShowSuggestion(false)
        }
        else if (e.keyCode === 40) {
            if(activeOption === suggestions.length - 1){
                return;
            }
            setActiveOption(activeOption + 1)
        }
        else if (e.keyCode === 38) {
            if(activeOption === 0){
                return;
            }
            setActiveOption(activeOption - 1)
        }
    }

    return (
        <Fragment>
            <div className="Search-Component">
                <input className="form-control" placeholder="Search Battle" type='text' value={text} onChange={handleChange} onKeyDown={(e) => handleKeyDown(e)} onKeyPress={(e) => handleOnKeyPress(e, text)} />
                {/* <button onClick={() => handleSearchOnClick(text)}>Search</button> */}
                {showSuggestion && suggestions.map((l, i) => (
                    <div className="AutoCompleteText">
                        <ul>
                            <li className={activeOption === i ? 'active' : null} onClick={() => selectSuggestion(l, i)}>{l}</li>
                        </ul>
                    </div>
                ))}

                <DisplayBattle finalResult={finalResult[0]} />
            </div>
        </Fragment>
    )
}

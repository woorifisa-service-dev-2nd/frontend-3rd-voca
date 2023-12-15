import React, { useEffect } from 'react'
import WordList from '../components/words/WordList'
import { useWordsDispatch } from "../contexts/WordsContext";

const MyWords = () => {
    const dispatch = useWordsDispatch();

    useEffect(() => {
        dispatch({
            type: "FILTER",
            checkedBookmark: false
        });
    }, [])

    return (
        <WordList></WordList>
    )
}

export default MyWords
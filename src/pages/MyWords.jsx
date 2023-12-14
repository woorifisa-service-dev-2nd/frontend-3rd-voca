import React from 'react'
import { WordProvider } from '../contexts/WordsContext'
import WordList from '../components/words/WordList'

const MyWords = () => {
    return (
        <WordProvider>
            <WordList></WordList>
        </WordProvider>
    )
}

export default MyWords
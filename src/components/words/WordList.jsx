import React from 'react'
import WordItem from './wordItem'
import { useWords } from '../../contexts/WordsContext'

const WordList = () => {
    const data = useWords();

    const filterWords = (words, checkedBookmark) => checkedBookmark === false ? words : words.filter(word => word.bookmark === true);
    const filteredWords = filterWords(data.data, data.checkedBookmark);

    return (
        <div className='word-list'>
            <div className='list-body'>
                {filteredWords.map((word) => (
                    <WordItem key={word.id} word={word}></WordItem>
                ))}
            </div>
        </div>
    )
}

export default WordList
import React from 'react'
import { useWordsDispatch } from '../../../contexts/WordsContext';
import WordForm from './WordForm';


const AddForm = () => {
    const dispatch = useWordsDispatch();

    const onAdd = ({ eng, kor, sentence, translation }) => {
        dispatch({ type: "ADD", newWord: { eng, kor, example: { sentence, translation }, bookmark: false } })
    };

    const buttons = [
        { label: 'ADD', onClick: onAdd },
    ];

    return (
        <WordForm
            title="New Word"
            buttons={buttons}
        />
    );
}


export default AddForm
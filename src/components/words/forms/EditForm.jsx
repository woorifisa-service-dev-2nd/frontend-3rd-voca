import React from 'react'
import { useWordsDispatch } from '../../../contexts/WordsContext';
import WordForm from './WordForm';

const EditForm = ({ sourceWord }) => {
    const dispatch = useWordsDispatch();

    const onUpdate = ({ id, eng, kor, example, bookmark }) => {
        dispatch({ type: "UPDATE", updateWord: { id, eng, kor, example, bookmark } })
    };

    const onDelete = ({ id }) => {
        dispatch({ type: "DELETE", deleteWordId: id })
    };

    const buttons = [
        { label: 'UPDATE', onClick: onUpdate },
        { label: 'DELETE', onClick: onDelete },
    ];

    return (
        <WordForm
            title={sourceWord.eng}
            sourceWord={sourceWord}
            buttons={buttons}
        />
    );
};

export default EditForm
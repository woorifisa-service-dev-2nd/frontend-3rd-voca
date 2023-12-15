import { createContext, useContext, useReducer } from "react";
import dummy from '../db/wordData.json'

export const WordsContext = createContext();
export const WordsDispatchContext = createContext();

export const useWords = () => useContext(WordsContext);
export const useWordsDispatch = () => useContext(WordsDispatchContext);

export const WordProvider = ({ children }) => {

    const [words, dispatch] = useReducer(reducer, { data: dummy.wordList, checkedBookmark: false });

    return (
        <WordsContext.Provider value={words}>
            <WordsDispatchContext.Provider value={dispatch}>
                {children}
            </WordsDispatchContext.Provider>
        </WordsContext.Provider>
    )
}

const reducer = (words, action) => {
    const { data, checkedBookmark } = words;

    switch (action.type) {
        case 'ADD':
            const newWord = action.newWord;
            console.log(newWord);
            return { data: [...data, { id: self.crypto.randomUUID(), ...newWord }], checkedBookmark };

        case 'UPDATE':
            const updateWord = action.updateWord;
            const updatedWords = data.map(word => word.id === updateWord.id ? { ...updateWord } : word);

            return { data: updatedWords, checkedBookmark }

        case 'DELETE':
            const deleteWordId = action.deleteWordId;
            const deletedWords = data.filter(word => word.id !== deleteWordId);

            return { data: deletedWords, checkedBookmark }

        case 'FILTER':
            return { data, checkedBookmark: action.checkedBookmark }
    }
}


import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import '../../../css/form.css';

const WordForm = ({ title, sourceWord, buttons }) => {
    const [eng, setEng] = useState(sourceWord ? sourceWord.eng : '');
    const [kor, setKor] = useState(sourceWord ? sourceWord.kor : ['']);
    const [sentence, setSentence] = useState(sourceWord ? sourceWord.example.sentence : '');
    const [translation, setTranslation] = useState(sourceWord ? sourceWord.example.translation : '');

    const handleButtonClick = (button) => {
        button.onClick({ id: sourceWord?.id, eng, kor, example: { sentence, translation }, bookmark: sourceWord?.bookmark });
    };

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <Dialog.Title className="eng">{title}</Dialog.Title>

                {/* {
                    kor.map((str, idx) => <Dialog.Description key={idx} className="kor">
                        {str}
                    </Dialog.Description>)
                }

                <Dialog.Description className="sentence">
                    {sentence}
                </Dialog.Description>
                <Dialog.Description className="translation">
                    {translation}
                </Dialog.Description> */}
                <div id="label">
                    <label className="Label" htmlFor="name">
                        ENGLISH
                    </label>
                    <div>
                        <input className="Input" id="eng" type="text" value={eng} onChange={e => { setEng(e.target.value) }} />
                    </div>
                    <label className="Label" htmlFor="username">
                        KOREA
                    </label>
                    <div>
                        {
                            kor.map((str, idx) => <input key={idx} className="Input" id="kor" type="text" value={str} onChange={e => { setKor([...kor, e.target.value]) }} />)
                        }
                    </div>
                    <label className="Label">
                        예문
                    </label>
                    <div>
                        <input className="Input" id="kor" type="text" value={sentence} onChange={e => { setSentence(e.target.value) }} />
                    </div>
                    <label className="Label">
                        해석
                    </label>
                    <div>
                        <input className="Input" id="kor" type="text" value={translation} onChange={e => { setTranslation(e.target.value) }} />
                    </div>
                </div>
                <div id="button" style={{ display: 'flex', marginTop: 25, justifyContent: 'center' }} >
                    {
                        buttons.map((button, idx) => (
                            <Dialog.Close key={idx} asChild>
                                <button className="Button green"
                                    key={idx}
                                    onClick={() => handleButtonClick(button)}
                                >
                                    {button.label}
                                </button>
                            </Dialog.Close>
                        ))
                    }
                </div>
                <Dialog.Close asChild>
                    <button className="IconButton" aria-label="Close">
                        <Cross2Icon />
                    </button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal >
    )
};

export default WordForm
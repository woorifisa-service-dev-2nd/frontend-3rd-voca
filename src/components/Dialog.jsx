import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';

// const DialogProps = [
//   {
//     id: 1,
//     eng: 'apple',
//     korea: '사과',
//     example: {
//       "sentence": 'apple',
//       "translation": "사과사과"
//     }
//   },
//   {
//     id: 2,
//     eng: 'apple',
//     korea: '사과',
//     example: {
//       "sentence": 'apple',
//       "translation": "사과사과"
//     }
//   },
//   {
//     id: 3,
//     eng: 'apple',
//     korea: '사과',
//     example: {
//       "sentence": 'apple',
//       "translation": "사과사과"
//     }
//   }
// ];
// const [bookmark, setBookmark] = useState(false);

// const bookMarkHandler = () => {
//   setBookmark(!bookmark);
// };

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">ADD</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        {/* <div className='bookmark' onClick={bookMarkHandler}>
          {bookmark ? (<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V13.5C12 13.6818 11.9014 13.8492 11.7424 13.9373C11.5834 14.0254 11.3891 14.0203 11.235 13.924L7.5 11.5896L3.765 13.924C3.61087 14.0203 3.41659 14.0254 3.25762 13.9373C3.09864 13.8492 3 13.6818 3 13.5V2.5ZM4 3V12.5979L6.97 10.7416C7.29427 10.539 7.70573 10.539 8.03 10.7416L11 12.5979V3H4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>) : (<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 2C3.22386 2 3 2.22386 3 2.5V13.5C3 13.6818 3.09864 13.8492 3.25762 13.9373C3.41659 14.0254 3.61087 14.0203 3.765 13.924L7.5 11.5896L11.235 13.924C11.3891 14.0203 11.5834 14.0254 11.7424 13.9373C11.9014 13.8492 12 13.6818 12 13.5V2.5C12 2.22386 11.7761 2 11.5 2H3.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>)}
        </div> */}
        <Dialog.Title className="DialogTitle">VOCA</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          단어장입니다.
        </Dialog.Description>

        <div id="label">
          <label className="Label" htmlFor="name">
            ENGLISH
          </label>
          <div>
            <input className="Input" id="eng" />
          </div>
          <label className="Label" htmlFor="username">
            KOREA
          </label>
          <div>
            <input className="Input" id="kor" />
          </div>
        </div>



        {/* <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            ENGLISH
          </label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            KOREA
          </label>
          <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset> */}
        <div id="button">
          <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
            <Dialog.Close asChild>
              <button className="Button green">수정</button>
            </Dialog.Close>
            <button className="Button green">삭제</button>
          </div>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;

import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { BookmarkIcon, BookmarkFilledIcon, SpeakerLoudIcon, Pencil1Icon } from '@radix-ui/react-icons'
import './styles.css';

// const [bookmark, setBookmark] = useState(false);

// const bookMarkHandler = () => {
//   setBookmark(!bookmark);
// }

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">ADD</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <BookmarkIcon />
        <BookmarkFilledIcon />
        <Dialog.Title className="eng">resume</Dialog.Title>
        <Dialog.Description className="kor">
          이력서 <SpeakerLoudIcon />
        </Dialog.Description>


        <Dialog.Description className="sentence">
          Fax your resume and cover letter to the above number.
        </Dialog.Description>
        <Dialog.Description className="translation">
          위 번호로 이력서와 자기소개서를 팩스로 보내주세요.
        </Dialog.Description>

        <div id="button" style={{ display: 'flex', marginTop: 25, justifyContent: 'center' }}>
          <Dialog.Close asChild>
            <button className="Button green">수정</button>
          </Dialog.Close>
          <button className="Button green">삭제</button>
        </div>

        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root >
);

export default DialogDemo;

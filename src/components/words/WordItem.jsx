import React from 'react'
import { Flex, Card, Text } from '@radix-ui/themes';
import { BookmarkIcon, BookmarkFilledIcon } from '@radix-ui/react-icons';
import Butcon from '../ui/buttons/Butcon';
import { useWordsDispatch } from '../../contexts/WordsContext'
import * as Dialog from '@radix-ui/react-dialog';
import EditForm from './forms/EditForm';

const WordItem = ({ word }) => {
    const { id, eng, kor, example, bookmark } = word;
    const dispatch = useWordsDispatch();

    return (
        <div className='word-item'>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Card
                        size="2" variant="classic"
                        style={{
                            width: '420px',
                            minHeight: 80,
                            padding: '20px',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            cursor: 'pointer'
                        }}>
                        <Flex justify="between" align="center">
                            <Text as="div" size="4" weight="bold" style={{
                                fontSize: '20px',
                                fontWeight: 'bold',

                            }}>{eng}</Text>
                            <Text as="div" size="2">
                                {kor.map((str, idx) => <Text as="div" size="3" key={idx}>{str}</Text>)}
                            </Text>
                            <Butcon onClick={() => { dispatch({ type: 'UPDATE', updateWord: { ...word, bookmark: !bookmark } }) }}
                                isChecked={bookmark}
                                checkedIcon={<BookmarkFilledIcon />}
                                uncheckedIcon={<BookmarkIcon />}
                            >
                            </Butcon>
                        </Flex>
                    </Card>
                </Dialog.Trigger>
                <EditForm sourceWord={word}></EditForm>
            </Dialog.Root >
        </div >
    )
}


export default WordItem
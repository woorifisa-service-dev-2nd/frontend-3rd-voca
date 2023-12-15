import React, { useEffect } from 'react'
import WordList from '../components/words/WordList'
import { useWordsDispatch } from "../contexts/WordsContext";
import { PlusCircledIcon } from '@radix-ui/react-icons';
import * as Dialog from '@radix-ui/react-dialog';
import WordFooter from '../components/words/WordFooter';
import AddForm from '../components/words/forms/AddForm';
import { Button, Flex } from '@radix-ui/themes';

const MyWords = () => {
    const dispatch = useWordsDispatch();

    useEffect(() => {
        dispatch({
            type: "FILTER",
            checkedBookmark: false
        });
    }, [])

    return (
        <>
            <WordList></WordList>
            <WordFooter>
                <Flex gap="3" justify="center">
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <Button variant="surface" size="4" color="blue"
                                style={{
                                    marginTop: '10px',
                                    width: '300px',
                                    padding: '30px',
                                    fontSize: '20px'
                                }}
                            >
                                <PlusCircledIcon width="16" height="16" />
                                NEW
                            </Button>
                        </Dialog.Trigger>
                        <AddForm></AddForm>
                    </Dialog.Root>
                </Flex>
            </WordFooter>
        </>
    )
}

export default MyWords
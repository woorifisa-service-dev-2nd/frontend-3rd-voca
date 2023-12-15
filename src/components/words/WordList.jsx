import React from 'react'
import WordItem from './wordItem'
import { Button, Grid, ScrollArea, Flex } from '@radix-ui/themes';
import { useWords } from '../../contexts/WordsContext'
import { PlusCircledIcon } from '@radix-ui/react-icons';
import WordFooter from './WordFooter';
import * as Dialog from '@radix-ui/react-dialog';
import AddForm from './forms/AddForm';

const WordList = () => {
    const data = useWords();

    const filterWords = (words, checkedBookmark) => checkedBookmark === false ? words : words.filter(word => word.bookmark === true);
    const filteredWords = filterWords(data.data, data.checkedBookmark);

    return (
        <>
            <ScrollArea type="always" scrollbars="vertical" style={{ height: 500 }}>
                <Grid columns="2" gap="5">
                    {filteredWords.map((word) => (
                        <WordItem key={word.id} word={word}></WordItem>
                    ))}
                </Grid>
            </ScrollArea>
            <WordFooter>
                <Flex gap="3" justify="center">
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <Button variant="surface" size="4" color="blue">
                                <PlusCircledIcon width="16" height="16" />
                                Add
                            </Button>
                        </Dialog.Trigger>
                        <AddForm></AddForm>
                    </Dialog.Root>
                </Flex>
            </WordFooter>
        </>
    )
}

export default WordList
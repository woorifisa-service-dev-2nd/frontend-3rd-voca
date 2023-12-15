import React, { useEffect } from 'react'
import WordList from "../components/words/WordList";
import { useWordsDispatch } from "../contexts/WordsContext";

function Bookmarks() {
  const dispatch = useWordsDispatch();

  useEffect(() => {
    dispatch({
      type: "FILTER",
      checkedBookmark: true
    });
  }, [])

  return (
    <WordList></WordList>
  )
}

export default Bookmarks;
import { Route, Routes } from "react-router-dom";
import NavigatorLayout from "./layouts/NavigatorLayout";
import Bookmarks from "./pages/Bookmarks";
import MyWords from "./pages/MyWords";
import { Container, Heading } from '@radix-ui/themes';
import { WordProvider } from "./contexts/WordsContext";

const App = () => {

    return (
        <div>
            <div id="main-title">My Voca</div>
            <WordProvider>
                <Routes>
                    <Route path="/" element={<NavigatorLayout />}>
                        <Route index element={<MyWords />} />
                        <Route path="bookmarks" element={<Bookmarks />} />
                    </Route>
                </Routes>
            </WordProvider>
        </div>
    );
}

export default App

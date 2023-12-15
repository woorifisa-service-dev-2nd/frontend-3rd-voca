import Bookmarks from "./Bookmarks";
import MyWords from "./MyWords";

const pageList = [
    {
        id: 1,
        url: "/",
        name: 'My Words',
        component: <MyWords />
    },
    {
        id: 2,
        url: "/bookmarks",
        name: 'Bookmarked Words',
        component: <Bookmarks />
    },

]

export default pageList;

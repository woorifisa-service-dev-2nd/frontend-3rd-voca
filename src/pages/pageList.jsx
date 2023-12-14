import Home from "./Home";
import MyWords from "./MyWords";

const pageList = [
    {
        id: 1,
        url: "/",
        name: 'Home',
        component: <Home />
    },
    {
        id: 2,
        url: "myWords",
        name: 'My Words',
        component: <MyWords />
    },

]

export default pageList;

import Greetings from "./Greetings";
import Home from "./Home";
import MyWords from "./MyWords";

const pageList = [
    {   id : 1,
        url : "/",
        name : 'Home',
        component: <Home />
    },
    {
        id : 2,
        url : "greetings",
        name : 'Greetings',
        component: <Greetings />
    },
    {
        id : 3,
        url : "mywords",
        name : 'My Words',
        component : <MyWords />
    },

]

export default pageList;

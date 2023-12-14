import { Route, Routes } from "react-router-dom";
import { DataContextProvider } from "./contexts/DataContext";
import NavigatorLayout from "./layouts/NavigatorLayout";
import Home from "./pages/Home";
import MyWords from "./pages/MyWords";
import { Heading } from '@radix-ui/themes';

const App = () => {

    return (
        <div>
            <Heading>Woori Voca</Heading>

            <p>
                {/**
         * Routers tag 내부에 <Router>를 통해 URL과 Page를 Mapping합니다.
         * Page Component들은 ./pages/ 내부에 있습니다.
         * Page Component에 각각 필요한 Component를 호출하는 등 필요한 로직을 작성합니다.
         * return하는 JSX문 내에서 <Link> 태그로 하이퍼링크를 생성할 수 있습니다.
         * 
         * -예제-
         * 
         * <Route path = "URL" , element = {<페이지 컴포넌트 />} // http://localhost:5173/URL에 맵핑된 <페이지 컴포넌트 /> 페이지
         * 
         * return(
         *  <li>
         *    <Link to="/URL"> </Link>  // http://localhost:5173/URL에 접속하는 링크
         *  </li>
         *  
         * )
         * 
         * 
         * */ }
            </p>

            <DataContextProvider >
                <Routes>
                    <Route path="/" element={<NavigatorLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/myWords" element={<MyWords />} />
                    </Route>
                </Routes>
            </DataContextProvider>
        </div>
    );
}

export default App

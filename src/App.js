import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import NewsPage from "./Pages/NEWS/NewsPage";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage/> }/>
      <Route path="/home" element={<HomePage/> }/>
      <Route path="/news" element={<NewsPage/> }/>
      <Route path="/*" element={<NotFound/>}/>
   </Routes>
  );
}

export default App;

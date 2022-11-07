import { Route, Routes } from "react-router-dom";
import Cricket from "./Pages/Home/Components/Cricket/Cricket";
import Football from "./Pages/Home/Components/Football/Football";
import Livetv from "./Pages/LiveTv/Livetv";
import DetailsNewsPage from "./Pages/NEWS/DetailsNewsPage";

import NewsPage from "./Pages/NEWS/NewsPage";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Football />} />
      <Route path="/football" element={<Football />} />
      <Route path="/football" element={<Football />} />
      <Route path="/football/list-live" element={<Football />} />
      <Route path="/football/allMatches/:date" element={<Football />} />
      <Route path="/cricket" element={<Cricket />} />
      <Route path="/cricket/list-live" element={<Cricket />} />
      <Route path="/cricket/allMatches/:date" element={<Cricket />} />
      {/* <Route path="/cricket/:cricketEndpoints" element={<Cricket />} /> */}
      <Route path="news/details/:id" element={<DetailsNewsPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/liveTv" element={<Livetv />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

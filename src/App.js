import { Route, Routes } from "react-router-dom";
import LatestNewsProvider from "./Context/LatestNewsProvider";
import CMatchDetails from "./Pages/CMatchDetails/CMatchDetails";
import FMatchDetails from "./Pages/FMatchDetails/FMatchDetails";
import Cricket from "./Pages/Home/Components/Cricket/Cricket";
import Football from "./Pages/Home/Components/Football/Football";
import Livetv from "./Pages/LiveTv/Livetv";
import CategoryNewsDetails from "./Pages/NEWS/Components/Category/CategoryNewsDetails";
import DetailsNewsPage from "./Pages/NEWS/DetailsNewsPage";

import NewsPage from "./Pages/NEWS/NewsPage";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <LatestNewsProvider>
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
        <Route path="/news/all" element={<NewsPage />} />
        <Route path="/news/football" element={<NewsPage />} />
        <Route path="/news/cricket" element={<NewsPage />} />
        <Route path="/news/champion_league" element={<NewsPage />} />
        <Route path="/news/world_cup_2022" element={<NewsPage />} />
        <Route path="/news/transfer_news" element={<NewsPage />} />
        <Route path="/news/others_news" element={<NewsPage />} />
        <Route path="/news/category/:id" element={<CategoryNewsDetails />} />
        <Route path="/liveTv" element={<Livetv />} />
        <Route
          path="/football/matchDetails/:eventIDtabName"
          element={<FMatchDetails />}
        ></Route>
        <Route
          path="/cricket/matchDetails/:eventIDtabName"
          element={<CMatchDetails />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </LatestNewsProvider>
  );
}

export default App;

import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import IsportsLatestProvider from "./Context/IsportsLatestProvider";
import LatestNewsProvider from "./Context/LatestNewsProvider";
import { db } from "./Firebase/DBinit";
import CMatchDetails from "./Pages/CMatchDetails/CMatchDetails";
import FMatchDetails from "./Pages/FMatchDetails/FMatchDetails";
import Cricket from "./Pages/Home/Components/Cricket/Cricket";
import Football from "./Pages/Home/Components/Football/Football";
import Livetv from "./Pages/LiveTv/Livetv";
import CategoryNewsDetails from "./Pages/NEWS/Components/Category/CategoryNewsDetails";
import IsportsDetailsnews from "./Pages/NEWS/Components/isportsSpecial/CategorytypesNews/IsportsDetailsnews";
import DetailsNewsPage from "./Pages/NEWS/DetailsNewsPage";
import NewsPage from "./Pages/NEWS/NewsPage";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  // set trigger
  const [live, setLive] = useState(true);

  // get real data
  useEffect(() => {
    const triggerRef = collection(db, "site_trigger");
    const triggerInfo = onSnapshot(triggerRef, (snapshot) => {
      // console.log(snapshot.docs[0].data());
      const liveStatus = snapshot.docs[0].data();
      setLive(liveStatus.status);
      console.log(liveStatus.status);
    });
  }, []);

  return (
    <LatestNewsProvider>
      {/* <IsportsLatestProvider> */}
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
          <Route
            path="/isportsnews/details/:id"
            element={<IsportsDetailsnews />}
          />
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
        <Footer />
      {/* </IsportsLatestProvider> */}
    </LatestNewsProvider>
  );
}

export default App;

import { useQuery } from "@tanstack/react-query";
import { getInstagramFeed } from "./data/api";
import "./App.scss";
import PreLoader from "./components/PreLoader";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import routs from "./pages/routs";
import Home from "./pages/Home";
import Shots from "./pages/Shots";

function App() {
  const { isPending, data: feed } = useQuery({
    queryKey: ["feed"],
    queryFn: () => getInstagramFeed(),
  });

  if (isPending) {
    return <PreLoader />;
  }

  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path={routs.home}
          element={<Home latestShots={feed.map((post) => post.media_url)} />}
        />
        <Route path={routs.shots} element={<Shots allShots={feed} />} />
      </Routes>
    </>
  );
}

export default App;

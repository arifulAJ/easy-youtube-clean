import React from "react";

import NavigationBar from "./components/navigation";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PlaylistComponents from "./components/playlistComponent";

import NotFoundPage from "./UI/ErrorText";
import RecentComponent from "./components/recent";
import FavoriteComponent from "./components/favorite";
import Home from "./components/home";
import PlaylistPlayer from "./components/playlistComponent/playlistPlayer";

const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<PlaylistComponents />} />
        <Route path="/" element={<Home />} />
        <Route index path="/playlistItems" element={<PlaylistComponents />} />
        <Route path="/playlistPlayer/:id" element={<PlaylistPlayer />} />

        <Route path="/recent" element={<RecentComponent />} />
        <Route path="/favorite" element={<FavoriteComponent />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={route} />;
};

export default App;

const Root = () => {
  return (
    <>
      <NavigationBar />
    </>
  );
};

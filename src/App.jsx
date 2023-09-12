import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SearchContextProvider } from "./context/searchContext";

import AppLayout from "./ui/AppLayout";
import Details from "./pages/Details";
import PopularPage from "./pages/Popular";
import TopRatedPage from "./pages/TopRated";
import UpComingPage from "./pages/UpComing";
import NowPlayingPage from "./pages/NowPlaying";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <SearchContextProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Navigate replace to="popular" />} />
              <Route path="popular" element={<PopularPage />} />
              <Route path="top-rated" element={<TopRatedPage />} />
              <Route path="upcoming" element={<UpComingPage />} />
              <Route path="now-playing" element={<NowPlayingPage />} />
            </Route>
            <Route path="/movie/:movieId" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </SearchContextProvider>
  );
};

export default App;

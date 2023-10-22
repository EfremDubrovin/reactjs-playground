import CounterComponent from "./components/counter/CounterComponent";
import MovieTable from "./components/table/MovieTable";

function App() {
  return (
    <>
      <CounterComponent />
      <MovieTable
        movieItems={[
          {
            movieName: "Matricata",
            episodeNumber: 1,
            isAvailableForDownload: true,
          },
          {
            movieName: "Столичани в повече",
            episodeNumber: 3,
            isAvailableForDownload: false,
          },
        ]}
      />
    </>
  );
}

export default App;

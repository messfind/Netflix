
import React from "react";
import Row from "./Row";
import './Netflix.css'
// import Nav from "./Nav";
import requists from "./requist";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
 <h1 className="net">NETFLIX</h1>
      {/* <Nav/> */}
      <Banner/>
      <Row title="NETFLIX ORIGINAL"
        fetchUrl={requists.fetchNetflixOriginals}
        isLargeRow={true} />
      <Row title="Trending Now"
        fetchUrl={requists.fetchTrend} />
      <Row title="Top Rated Movies"
        fetchUrl={requists.fetchTopratedMovies} />
      <Row title="Action Movies"
        fetchUrl={requists.fetchActionMovies} />
      <Row title="Comady Movies"
        fetchUrl={requists.fetchComadyMovies} />
      <Row title="Horror Movies"
        fetchUrl={requists.fetchHorrorMovies} />
      <Row title="Romance Movies"
        fetchUrl={requists.fetchRomanceMovies} />
      <Row title="Documentaries"
        fetchUrl={requists.fetchDocumentaries} />
  
    </div>
  )
}

export default App;
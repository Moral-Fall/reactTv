import { useState } from "react";
import { tvShows } from "./shows/data"
import { ShowSelection } from "./shows/ShowSlection";
import { ShowDetails } from "./shows/ShowDetails";

// **
//  * React TV is an web streaming platform that allows users to browse
//  * through the episodes of a variety of different shows.
//  */
export default function App() {
  const [shows] = useState(tvShows)
  const [selectedShows, setSelectedShows] = useState()

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          shows = {shows}
          selectedShows = {selectionShows}
          setSelectedShows = {setSelectedShows}
        />
      </header>

      <main>
        <ShowDetails key = {selectedShows?.name} show = {selectedShow} />
      </main>
    </>
  );
}

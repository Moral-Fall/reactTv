import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ episode }) {
    if (!episode) {
      return (
        <section className = "show-details">
          <h2>Episode Details</h2>
          <p>Select show to learn more</p>
        </section>
      );
    }

  return (
    <section className = "esipode-detial">
      <h2> Epsiode {episode.number}</h2>
      <h3>{episode.title}</h3>
      <p> {episode.description}</p>
      <button>Watch Now</button>
   </section>
  );
}

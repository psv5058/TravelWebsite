import Paris1 from "../assets/paris1.jpg";
import Paris2 from "../assets/paris2.jpg";
import Paris3 from "../assets/paris3.jpg";
import Paris4 from "../assets/paris4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Favorite Destinations</h1>
      <p>Travel to live out your bucket list dreams</p>
      <DestinationData
        className="first-des"
        heading="Montmarte,Paris"
        text="One of the most beautiful place in paris,Montmartre. This charming neighborhood is steeped in history and culture, with its cobblestone streets, colorful buildings, and outdoor cafes. The highlight is the famous Sacré-Cœur Basilica, which offers breathtaking views of the city. But Montmartre is more than just a tourist destination - it's a vibrant and authentic Parisian neighborhood that's home to artists, musicians, and locals. Take a stroll through the winding streets, explore the art galleries and boutiques, and soak up the bohemian atmosphere. Whether you're a history buff, an art lover, or just looking for a unique Parisian experience, Montmartre is not to be missed."
        img1={Paris1}
        img2={Paris2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Rhine Valley,Germany"
        text="One of the most beautiful place in paris,Montmartre. This charming neighborhood is steeped in history and culture, with its cobblestone streets, colorful buildings, and outdoor cafes. The highlight is the famous Sacré-Cœur Basilica, which offers breathtaking views of the city. But Montmartre is more than just a tourist destination - it's a vibrant and authentic Parisian neighborhood that's home to artists, musicians, and locals. Take a stroll through the winding streets, explore the art galleries and boutiques, and soak up the bohemian atmosphere. Whether you're a history buff, an art lover, or just looking for a unique Parisian experience, Montmartre is not to be missed."
        img1={Paris3}
        img2={Paris4}
      />
    </div>
  );
};

export default Destination;

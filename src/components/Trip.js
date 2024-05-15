import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/aus.jpg";
import Trip3 from "../assets/can.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1> Recent Trips!</h1>
      <p> You can discover unique destinations using google maps </p>
      <div className="tripcard">
        <TripData
          image={Trip3}
          heading="Trip in Canada "
          text="Canada offers a diverse range of experiences, from breathtaking natural landscapes to bustling cities. Outdoor enthusiasts can explore the stunning scenery of Banff National Park or go whale watching off the coast of Vancouver Island. The vibrant cities of Toronto, Montreal, and Vancouver offer world-class dining, shopping, and cultural attractions. History buffs can visit Quebec City, the only walled city in North America, or learn about Canada's Indigenous culture at the Canadian Museum of History in Ottawa. With friendly locals and a high standard of living, Canada is a welcoming and exciting destination for travelers."
        />

        <TripData
          image={Trip2}
          heading="Trip in Australia"
          text="Australia is a vast and diverse country, offering travelers an array of stunning landscapes, vibrant cities, and unique wildlife. Visitors can explore iconic landmarks such as the Sydney Opera House and Uluru, snorkel in the Great Barrier Reef, hike through rainforests, and witness kangaroos and koalas in their natural habitats. With a friendly and laid-back culture, Australia is also known for its excellent food and wine scene, bustling markets, and outdoor activities such as surfing and hiking. Whether you're looking for an adventure-filled trip or a relaxing escape, Australia has something for everyone."
        />

        <TripData
          image={Trip1}
          heading="Trip in Paris!"
          text="Paris, the city of lights and love, is a must-visit destination for anyone seeking beauty, history, and culture. It Paris is a city that captures the hearts of all who visit. Its iconic landmarks, charming streets, and rich cultural heritage make it a must-see destination for travelers from around the world. The Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum are just a few of the city's most famous attractions, but Paris has much more to offer beyond the tourist hotspots. You can spend hours strolling along the Seine River, browsing the shops in Le Marais, or simply sitting at a café and watching the world go by. Paris also boasts a thriving culinary scene, with everything from street food to Michelin-starred restaurants. No matter what you do in Paris, you're sure to fall in love with its beauty, history, and culture."
        />
      </div>
    </div>
  );
}

export default Trip;

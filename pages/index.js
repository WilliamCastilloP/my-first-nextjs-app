import { getFeaturedEvents } from "../dummyData";
import EventList from "../components/events/event-list";

function HomePage(props) {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomePage;

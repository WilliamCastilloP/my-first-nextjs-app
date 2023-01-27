import { getAllEvents } from "../../dummyData";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

const ShowAllEvents = () => {
  const allEvents = getAllEvents();
  const router = useRouter();

  const navigateToFilteredEvents = (year, month) => {
    const thePath = `/events/${year}/${month}`;
    router.push(thePath);
  };

  return (
    <ul>
      <EventSearch onSearch={navigateToFilteredEvents} />
      <EventList events={allEvents} />
    </ul>
  );
};

export default ShowAllEvents;

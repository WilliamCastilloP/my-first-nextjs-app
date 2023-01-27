import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummyData";
import Eventlist from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/events/error-alert";

const FilteredEvents = () => {
  const router = useRouter();
  const filtered = router.query.filtered;

  if (!filtered) {
    return <p className="center">Loading...</p>;
  }

  const year = filtered && Number(router.query.filtered[0]);
  const month = filtered && Number(router.query.filtered[1]);

  const eventDate = new Date(year, month - 1);

  if (
    isNaN(year) ||
    isNaN(month) ||
    year < 2021 ||
    year > 2030 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <ErrorAlert>
        <p>Oops, values are not correct!</p>
      </ErrorAlert>
    );
  }

  const filteredEvents = getFilteredEvents({ year: year, month: month });
  if (filteredEvents.length !== 0 || !filteredEvents) {
    console.log(filteredEvents);
    return (
      <div>
        <ResultsTitle date={eventDate} />
        <Eventlist events={filteredEvents} />
      </div>
    );
  } else {
    return (
      <div className="center">
        <ErrorAlert>
          Sorry mate, no events were found with that crazy filter!
        </ErrorAlert>
        <Button link="/events">Show all events</Button>
      </div>
    );
  }
};

export default FilteredEvents;

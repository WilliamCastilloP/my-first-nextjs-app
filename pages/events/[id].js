import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummyData";
import EventContent from "../../components/event detail/event-content";
import EventLogistics from "../../components/event detail/event-logistics";
import EventSummary from "../../components/event detail/event-summary";
import ErrorAlert from "../../components/events/error-alert";

const EventDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const event = getEventById(id);
  if (!event) {
    return (
      <ErrorAlert>
        <p>Event does not exist</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;

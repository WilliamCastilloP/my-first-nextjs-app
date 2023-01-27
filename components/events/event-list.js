import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map((item) => (
        <EventItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default EventList;

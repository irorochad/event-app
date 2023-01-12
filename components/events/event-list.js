import classes from "./event-list.module.css";

import EventItem from "./event-item";

const EventList = (props) => {
  const { itmes } = props;

  return (
    <ul className={classes.list}>
      {itmes.map((event) => (
        <EventItem
          key={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
        />
      ))}
    </ul>
  );
};

export default EventList;

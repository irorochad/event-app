import EventItem from "./event-item";

const EventList = (props) => {
  const { itmes } = props;

  return (
    <ul>
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

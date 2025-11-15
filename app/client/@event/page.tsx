export default async function EventSlot({
  params: { eventId },
}: {
  params: { eventId: string };
}) {
  // fetch and render event
  return <div>Event Page: {eventId || "No Event ID"}</div>;
}

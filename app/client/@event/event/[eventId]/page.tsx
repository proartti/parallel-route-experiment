export default async function EventPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  // fetch and render event
  return <div>Event Page: event id:{eventId || "No Event ID"}</div>;
}

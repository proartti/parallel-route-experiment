export default function PatientLayout({
  info,
  history,
  event,
}: {
  info: React.ReactNode;
  history: React.ReactNode;
  event: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Root Layout</h1>
      <hr className="my-6" />
      <div className="grid grid-cols-3 gap-4">
        <section>{info}</section>
        <section>{history}</section>
        <section>{event}</section>
      </div>
    </div>
  );
}

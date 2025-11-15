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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "1rem",
      }}
    >
      <section>{info}</section>
      <section>{history}</section>
      <section>{event}</section>
    </div>
  );
}

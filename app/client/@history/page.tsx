export default async function HistorySlot() {
  // fetch and render history
  return (
    <div>
      <h2>History Page</h2>

      <ul>
        <li>
          <a href="/client/event/1">Event 1: Checkup on 2023-01-15</a>
        </li>
        <li>
          <a href="/client/event/2">Event 2: Vaccination on 2023-03-22</a>
        </li>
        <li>
          <a href="/client/event/3">Event 3: Follow-up on 2023-06-10</a>
        </li>
      </ul>
    </div>
  );
}

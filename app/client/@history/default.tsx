import Link from "next/link";

export default async function HistorySlot() {
  // fetch and render history
  return (
    <div>
      <h2 className="text-xl font-semibold">History Page</h2>

      <ul>
        <li className="py-2">
          <Link href="/client/event/1" className="hover:underline">
            Event 1: Checkup on 2023-01-15
          </Link>
        </li>
        <li className="py-2">
          <Link href="/client/event/2" className="hover:underline">
            Event 2: Vaccination on 2023-03-22
          </Link>
        </li>
        <li className="py-2">
          <Link href="/client/event/3" className="hover:underline">
            Event 3: Follow-up on 2023-06-10
          </Link>
        </li>
      </ul>
    </div>
  );
}

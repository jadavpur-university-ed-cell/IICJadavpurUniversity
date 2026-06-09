import { useState } from 'react';
import eventsData from '../data/events.json';

type EventEntry = {
  year: string;
  month: string;
  sl_no: string;
  event_name: string;
  date: string;
  organization: string;
  cooperation: string;
  participants: string;
};

export default function Events() {
  const events = eventsData as EventEntry[];

  // Group by year
  const years = Array.from(new Set(events.map(e => e.year))).sort((a, b) => Number(b) - Number(a));
  const [selectedYear, setSelectedYear] = useState<string>(years[0]);

  const filteredEvents = events.filter(e => e.year === selectedYear);

  return (
    <main className="min-h-screen bg-gray-950 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Events & Activities</h1>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Jadavpur University fosters innovation through various annual events organized by the IIC, IPR Cell, Idea Incubation Centre, E-Cell, and Club activities.
        </p>

        {/* Year Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedYear === year
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Events Table */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-800 text-gray-300 uppercase font-semibold">
                <tr>
                  <th className="px-6 py-4">Event Name</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Organization</th>
                  <th className="px-6 py-4">Cooperation</th>
                  <th className="px-6 py-4 text-right">Participants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredEvents.map((event, idx) => (
                  <tr key={idx} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-white max-w-xs truncate" title={event.event_name}>
                      {event.event_name}
                    </td>
                    <td className="px-6 py-4 text-gray-300">{event.date}</td>
                    <td className="px-6 py-4 text-gray-400 max-w-[200px] truncate" title={event.organization}>{event.organization}</td>
                    <td className="px-6 py-4 text-gray-400 max-w-[200px] truncate" title={event.cooperation}>{event.cooperation}</td>
                    <td className="px-6 py-4 text-right font-mono text-gray-300">{event.participants}</td>
                  </tr>
                ))}
                {filteredEvents.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                      No events found for {selectedYear}.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

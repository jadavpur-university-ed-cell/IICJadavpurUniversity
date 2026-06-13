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
    <main className="min-h-screen bg-midnight text-pure-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Events & Activities</h1>
        <p className="text-white/60 mb-8 max-w-2xl">
          Jadavpur University fosters innovation through various annual events organized by the IIC, IPR Cell, Idea Incubation Centre, E-Cell, and Club activities.
        </p>

        {/* Year Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedYear === year
                ? 'bg-electric-blue text-white'
                : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Events Table */}
        <div className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-normal">
              <thead className="bg-white/5 text-white/80 uppercase font-semibold">
                <tr>
                  <th className="px-6 py-4 border-b border-white/10">Event Name</th>
                  <th className="px-6 py-4 border-b border-white/10">Date</th>
                  <th className="px-6 py-4 border-b border-white/10">Organization</th>
                  <th className="px-6 py-4 border-b border-white/10">Cooperation</th>
                  <th className="px-6 py-4 border-b border-white/10 text-right">Participants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredEvents.map((event, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-pure-white">
                      {event.event_name}
                    </td>
                    <td className="px-6 py-4 text-white/70 whitespace-nowrap">{event.date}</td>
                    <td className="px-6 py-4 text-white/70">{event.organization}</td>
                    <td className="px-6 py-4 text-white/70">{event.cooperation}</td>
                    <td className="px-6 py-4 text-right font-mono text-white/70 whitespace-nowrap">{event.participants}</td>
                  </tr>
                ))}
                {filteredEvents.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-white/50">
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

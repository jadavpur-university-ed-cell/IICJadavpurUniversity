import { Link } from 'react-router';

export default function Startup() {
  return (
    <main className="min-h-screen bg-midnight text-pure-white pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-medium tracking-[0.08em] uppercase mb-4" style={{ color: 'rgba(200, 229, 88, 0.8)' }}>
          OUR INITIATIVES
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          <img src="/assets/incubation.jpg" alt="Startup & Incubation Logo" className="w-24 h-24 object-cover rounded-xl" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{`Startup & Incubation`}</h1>
        </div>

        <div className="prose prose-invert prose-lg space-y-6 mb-12">
          <h3 className="text-xl font-semibold">Our Legacy</h3>
          <p className='text-gray-300 leading-relaxed'>
            For the last hundred years or more, Jadavpur University has been a cradle of innovation and entrepreneurship, nurturing countless startups that drive transformative change across industries. The university's rich legacy of research and creativity has empowered visionary ideas to evolve into groundbreaking ventures.
          </p>

          <h3 className="text-xl font-semibold">Startup Ecosystem</h3>
          <p className='text-gray-300 leading-relaxed'>
            Jadavpur University provides an enabling environment for startup creation and entrepreneurial growth by connecting innovators with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Experienced mentors and industry experts</li>
            <li>Investors and venture capital networks</li>
            <li>Institutional support systems and funding</li>
            <li>Business incubation facilities</li>
            <li>Patent and IPR protection assistance</li>
            <li>Networking opportunities with alumni entrepreneurs</li>
          </ul>

          <h3 className="text-xl font-semibold">Incubation Centers</h3>
          <p className='text-gray-300 leading-relaxed'>
            Our Incubation Centers serve as platforms for both internal and external entrepreneurs to implement technological innovations. We provide infrastructure, mentorship, and resources to help startups transition from ideation to market-ready solutions.
          </p>

          <h3 className="text-xl font-semibold">Recognition & Achievements</h3>
          <p className='text-gray-300 leading-relaxed'>
            We've supported numerous startups that have achieved government recognition, including startups registered under Udyam Registration, Certificate of Incorporation, and the prestigious Startup India certification scheme.
          </p>

          <p className='text-gray-300 leading-relaxed'>
            Our initiatives contribute significantly to West Bengal's and India's innovation landscape, strengthening the journey toward global innovation leadership.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="mailto:iicju@jadavpuruniversity.in" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors">
            Get in Touch
          </a>
          <Link to="/startup-generated" className="px-6 py-3 bg-soft-lime text-midnight font-medium hover:bg-[#b5d642] rounded-lg transition-colors">
            View Success Stories & Documents
          </Link>
        </div>
      </div>
    </main>
  );
}

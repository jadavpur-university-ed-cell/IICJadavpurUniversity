
export default function Ecell() {
  return (
    <main className="min-h-screen bg-midnight text-pure-white pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-medium tracking-[0.08em] uppercase mb-4" style={{ color: 'rgba(200, 229, 88, 0.8)' }}>
          OUR INITIATIVES
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">{`Entrepreneurship Cell (E-Cell)`}</h1>

        <div className="prose prose-invert prose-lg space-y-6 mb-12">
          <p className='text-gray-300 leading-relaxed'>
            The Jadavpur University Entrepreneurship Cell was created with the aim of invoking a spirit of entrepreneurship among the new generation, a stepping stone towards the better future of our Nation and its growing economy.
          </p>

          <p className='text-gray-300 leading-relaxed'>
            Founded on 20th July, 2016 through a workshop held in the Salt Lake Campus of Jadavpur University, in presence of Prof. Suranjan Das, Vice Chancellor of Jadavpur University, Prof. Asis Mazumdar, Member Secretary, Business Incubation Centre (MSME), and several other distinguished personalities of the startup community.
          </p>

          <h3 className="text-xl font-semibold">Mission</h3>
          <p className='text-gray-300 leading-relaxed'>
            To provide a platform to guide creative minds through effective interaction between the student body and esteemed members of the corporate world, successful entrepreneurs, investors, and venture capitalists. This enables transformation of innovative ideas into entrepreneurial ventures.
          </p>

          <h3 className="text-xl font-semibold">Activities of the E-Cell</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Organizing events and workshops to develop an entrepreneurial culture among students</li>
            <li>Offering mentorship to aspiring entrepreneurs with guidance on business planning, entrepreneurial finance, startup laws, and technology development</li>
            <li>Imparting training in investment through virtual stock markets</li>
            <li>Organizing Business Plan competitions and preparing students for competitions by other prestigious institutes</li>
            <li>Overall grooming of members, creating the new wave of entrepreneurs</li>
          </ul>

          <h3 className="text-xl font-semibold">Our Focus</h3>
          <p className='text-gray-300 leading-relaxed'>
            Whether you are a student looking to launch a startup, an educator looking to bring entrepreneurship into your classroom, or a professional from the corporate world, we have something for everyone.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="mailto:ecell@jadavpuruniversity.in" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors">
            Contact E-Cell
          </a>
          <a href="https://www.juecell.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}

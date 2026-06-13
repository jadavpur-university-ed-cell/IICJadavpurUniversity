
export default function Tinkering() {
  return (
    <main className="min-h-screen bg-midnight text-pure-white pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-medium tracking-[0.08em] uppercase mb-4" style={{ color: 'rgba(200, 229, 88, 0.8)' }}>
          OUR INITIATIVES
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          <img src="/assets/tink.jpg" alt="Tinkering Lab Logo" className="w-24 h-24 object-cover rounded-xl" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{`Tinkering Lab`}</h1>
        </div>

        <div className="prose prose-invert prose-lg space-y-6 mb-12">
          <h3 className="text-xl font-semibold">Vision and Goals</h3>
          <p className='text-gray-300 leading-relaxed'>
            The Tinkering Lab at IIC Jadavpur University is a dynamic hub designed to foster innovation, creativity, and interdisciplinary learning. Our vision is to instill curiosity and problem-solving skills, cultivating a culture of exploration and hands-on experimentation among students and the wider community.
          </p>

          <p className='text-gray-300 leading-relaxed'>
            As an inclusive space, the lab encourages individuals to ideate, design, and prototype solutions to real-world challenges. Equipped with cutting-edge infrastructure, expert mentorship, and extensive resources, we aim to bridge the gap between theory and practice.
          </p>

          <h3 className="text-xl font-semibold">Our Commitment</h3>
          <p className='text-gray-300 leading-relaxed'>
            We are committed to fostering an entrepreneurial mindset, inspiring students to think critically, act on their ideas, and drive innovation for a better future. Our goal is to empower individuals by transforming their knowledge into practical applications and tangible innovations.
          </p>

          <h3 className="text-xl font-semibold">School Mentorship & Outreach</h3>
          <p className='text-gray-300 leading-relaxed'>
            <strong>ATL Scheme - NITI Aayog:</strong> The JU Tinkering Lab extends its impact beyond the university by mentoring schools in West Bengal under the Atal Tinkering Lab (ATL) scheme of NITI Aayog. We actively support schools in creating innovative products and solutions through structured guidance and mentorship.
          </p>

          <h3 className="text-xl font-semibold">Schools We Support</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Bohichberia High School (H.S.)</li>
            <li>Beler Dhanyakuria Madhyamik Vidyalaya (H.S.), Basirhat</li>
            <li>Harasankar Garkilla Santmayi High School (H.S.)</li>
            <li>Raghunathbari Ramtarak High School</li>
          </ul>

          <p className='text-gray-300 leading-relaxed'>
            Beyond direct mentorship, we also motivate other schools to establish their own School Innovation Councils and guide them in applying for the ATL Scheme, fostering a larger ecosystem of creativity and technological advancement at the school level.
          </p>

          <p className='text-gray-300 leading-relaxed'>
            <strong>Recognition:</strong> We have received official consent from the President of the West Bengal Council of Higher Secondary Education (WBCHSE) and a letter of support from the Ministry of Education (MoE) Innovation Cell. These endorsements validate our mission and empower us to expand our outreach and impact.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="mailto:iicju@jadavpuruniversity.in" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors">
            Contact Lab
          </a>
        </div>
      </div>
    </main>
  );
}

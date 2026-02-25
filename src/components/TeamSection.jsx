export default function TeamSection() {
  const team = [
    {
      id: 1,
      name: 'Lucas Melika',
      role: 'Full-stack Developer & Founder',
      bio: 'Expert in React, Node.js en cloud architecture. 8+ jaar webdevelopment experience. Architect van 50+ productieprojekten.',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'DevOps'],
      emoji: '👨‍💻'
    },
    {
      id: 2,
      name: 'Custom Team',
      role: 'Design & Backend Specialists',
      bio: 'Voor grotere projecten brengen we specialized designers en backend engineers in. Network van ervaren developers.',
      skills: ['UI/UX Design', 'Python', 'PostgreSQL', 'System Architecture', 'Testing'],
      emoji: '👥'
    },
    {
      id: 3,
      name: 'Continuous Learning',
      role: 'Innovation & Quality',
      bio: 'We investeren in de nieuwste technologieën en best practices. Regelmatig training en code audits voor excellence.',
      skills: ['AI Integration', 'Security', 'Performance', 'Testing', 'Cloud Native'],
      emoji: '🚀'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Wie staat achter ClearBuildIT
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ervaren developers en designers die jouw visie waarmaken. We geloven in vakmanschap en transparantie.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 text-center hover:shadow-lg transition-shadow"
            >
              {/* Avatar */}
              <div className="text-6xl mb-6">{member.emoji}</div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
              <p className="text-green-600 font-semibold mb-4">{member.role}</p>

              {/* Bio */}
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">{member.bio}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-slate-50 rounded-lg p-12 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Onze waarden
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-semibold text-slate-900 mb-2">Clarity</h4>
              <p className="text-slate-600 text-sm">Duidelijke communicatie zonder jargon. Je begrijpt elke stap.</p>
            </div>
            <div>
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold text-slate-900 mb-2">Speed</h4>
              <p className="text-slate-600 text-sm">Snelle delivery zonder shortcuts. Efficiency + quality.</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="font-semibold text-slate-900 mb-2">Security</h4>
              <p className="text-slate-600 text-sm">Data privacy & protection is non-negotiable priority.</p>
            </div>
            <div>
              <div className="text-3xl mb-3">📈</div>
              <h4 className="font-semibold text-slate-900 mb-2">Growth</h4>
              <p className="text-slate-600 text-sm">Scalable solutions die groeien met jouw bedrijf.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Klaar voor jouw volgende project?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Start een project
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Stuur een bericht
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

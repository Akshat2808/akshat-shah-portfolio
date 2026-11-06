export default function Education() {
    const education = [
        {
            school: "Saint Louis University",
            degree: "Master of Science in Computer Science",
            period: "Aug 2024 – May 2026",
            location: "Missouri, USA",
            gpa: "GPA: 3.76 / 4.00",
            link: "https://www.slu.edu/"
        },
        {
            school: "Charotar University of Science and Technology",
            degree: "B.Tech in Computer Science",
            period: "Aug 2020 – Jun 2024",
            location: "Gujarat, India",
            gpa: "GPA: 4.00 / 4.00",
            link: "https://www.charusat.ac.in/"
        }
    ];

    return (
        <section className="relative w-full py-20 px-4 md:px-10 z-20 bg-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Education</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-2xl font-bold text-white">{edu.school}</h3>
                                        {edu.link && (
                                            <a
                                                href={edu.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-purple-400 transition-colors"
                                                aria-label={`Visit ${edu.school} website`}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                    <span className="text-purple-400 font-mono text-sm whitespace-nowrap ml-4">{edu.period}</span>
                                </div>
                                <p className="text-xl text-gray-200 mb-2">{edu.degree}</p>
                                <p className="text-gray-400 text-sm">{edu.location}</p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                                <span className="inline-block bg-purple-500/15 border border-purple-500/30 text-purple-300 font-semibold text-sm px-3 py-1 rounded-full">
                                    {edu.gpa}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

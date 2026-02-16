export default function Education() {
    const education = [
        {
            school: "Saint Louis University",
            degree: "Masters of Science - Computer Science",
            period: "May 2026",
            location: "Missouri, USA",
        },
        {
            school: "Charotar University of Science and Technology",
            degree: "B.Tech in Computer Science",
            period: "Jun 2024",
            location: "Changa, India",
        }
    ];

    return (
        <section className="relative w-full py-20 px-4 md:px-10 z-20 bg-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Education</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white">{edu.school}</h3>
                                <span className="text-purple-400 font-mono text-sm whitespace-nowrap ml-4">{edu.period}</span>
                            </div>
                            <p className="text-xl text-gray-200 mb-2">{edu.degree}</p>
                            <p className="text-gray-400 text-sm">{edu.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["C", "C++", "Java", "Python"]
        },
        {
            title: "Cloud Computing",
            skills: ["AWS", "Azure"]
        },
        {
            title: "Tools",
            skills: ["Git", "GitHub", "GitLab", "Qt", "SpringBoot", "Eclipse IDE", "Android Studio", "Docker", "CI/CD"]
        },
        {
            title: "Operating Systems",
            skills: ["Windows", "Linux"]
        }
    ];

    const certifications = [
        "AWS Certified Cloud Practitioner",
        "AZURE certified AZ-900, AI-900, PL-900",
        "Google Analytics Certification",
        "Machine Learning Specialization",
        "Cloud Core",
        "Data Analytics",
        "Python for Data Science"
    ];

    return (
        <section className="relative w-full py-20 px-4 md:px-10 z-20 bg-[#121212] text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Skills & Certifications</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-xl font-bold text-purple-400 border-b border-purple-500/30 pb-2">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-6 text-white">Certifications</h3>
                    <div className="flex flex-wrap gap-4">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex items-center gap-2 bg-purple-900/20 border border-purple-500/20 px-4 py-2 rounded-lg text-purple-100 text-sm">
                                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

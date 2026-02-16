export default function Experience() {
    const experiences = [
        {
            role: "Software Engineer",
            company: "Dynamic Active Inc.",
            period: "Jan 2026 – Present",
            location: "California, USA",
            description: [
                "Will develop and integrate scalable backend systems with secure database connectivity, implementing authentication, role-based access, and robust API workflows.",
                "Will design and optimize data-driven features with a focus on performance, security, and real-world usability, following industry best practices and clean code standards."
            ]
        },
        {
            role: "Research Assistant",
            company: "Saint Louis University",
            period: "Mar 2025 – Present",
            location: "Saint Louis, USA",
            description: [
                "Working on a research project to detect Backdoor attacks and whether the user prompt contains the trigger or not.",
                "And providing solutions to prevent the user from Backdoor attacks."
            ]
        },
        {
            role: "Software Intern",
            company: "Wastefull Insights Pvt. Ltd.",
            period: "Dec 2023 – Aug 2024",
            location: "Vadodara, India",
            description: [
                "Developed IoT dashboards using Qt and deployed databases on AWS, enhancing system performance and data accessibility.",
                "Implemented Deepstream technologies to adjust robotic parameters, and optimize operational efficiency."
            ]
        },
        {
            role: "Java and AWS Intern",
            company: "TSPL",
            period: "May 2023 – Jul 2023",
            location: "Vadodara, India",
            description: [
                "Contributed to the development of cloud-based applications using Java (Spring Boot) and AWS services, improving backend scalability."
            ]
        },
        {
            role: "Cybersecurity Intern",
            company: "Acmegrade",
            period: "May 2022 – Jul 2022",
            location: "Vadodara, India",
            description: [
                "Gained foundational cybersecurity skills, including network security, data protection, and threat analysis."
            ]
        }
    ];

    return (
        <section className="relative w-full py-20 px-4 md:px-10 z-20 bg-[#121212] text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Work Experience</h2>

                <div className="relative border-l border-gray-700 ml-4 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                <span className="text-gray-400 font-mono text-sm">{exp.period}</span>
                            </div>

                            <div className="flex items-center gap-2 mb-4 text-purple-400">
                                <span className="font-medium text-lg">{exp.company}</span>
                                <span className="bg-white/10 w-1 h-1 rounded-full"></span>
                                <span className="text-sm text-gray-400">{exp.location}</span>
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-300 max-w-3xl">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="leading-relaxed">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

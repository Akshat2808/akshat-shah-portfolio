export default function Projects() {
    const projects = [
        {
            title: "Hosting Application on AWS",
            category: "Cloud / DevOps",
            description: "Hosted API, uploaded JSON files and whole application on AWS by using different services of AWS. Built with AWS and Spring Boot.",
        },
        {
            title: "Ticket Booking Desktop App",
            category: "Desktop Application",
            description: "A desktop application that provides cinema hall owners a digital system for managing movie shows and ticket bookings. Built with vb.net and MS-SQL.",
        },
        {
            title: "Indian Sign Recognition",
            category: "Machine Learning",
            description: "Created a project for Indian Sign Recognition of hands using Machine Learning based on CNN.",
        },
        {
            title: "Voice Assistant Companion",
            category: "AI / Python",
            description: "An application that works on voice input, gives voice output, and displays text. Provides instant computed results to the user.",
        },
        {
            title: "Donation Application",
            category: "Full Stack",
            description: "A fully working application used to donate funds easily to collaborated charities. built with XML and Java.",
        },
        {
            title: "Car Rental Application",
            category: "Full Stack",
            description: "Application used to rent several types of cars from a single platform with a user-friendly interface. Built with XML and Java.",
        }
    ];

    return (
        <section className="relative w-full py-20 px-4 md:px-10 z-20 bg-[#121212]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Selected Works</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className="relative z-10">
                                <span className="text-sm font-medium text-purple-400 uppercase tracking-widest mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {project.description}
                                </p>

                                <div className="mt-8 flex items-center gap-2 text-white font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    View Case Study
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

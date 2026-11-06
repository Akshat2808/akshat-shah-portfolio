export default function Projects() {
    const projects = [
        {
            title: "Backdoor Attack Detection in Large Language Models",
            category: "AI Security & LLMs",
            techStack: ["Python", "PyTorch", "NLP", "Sentence Transformers", "GMM"],
            highlights: [
                "Designed and implemented an AI security framework to identify hidden triggers, semantic anomalies, and backdoor attack patterns in large language model prompts.",
                "Developed sentence embedding and semantic similarity pipelines using transformer-based language models and Gaussian Mixture Models for unsupervised anomaly detection.",
                "Processed and evaluated thousands of prompt samples against backdoor attacks, prompt injection, jailbreak attempts, and adversarial scenarios.",
                "Automated preprocessing, feature extraction, anomaly detection, and evaluation workflows, reducing manual security analysis effort by over 80%."
            ]
        },
        {
            title: "MCP Server Evaluation & CAPTCHA Automation Framework",
            category: "Agentic AI & Distributed Automation",
            techStack: ["Python", "Playwright", "MCP", "LangGraph", "Multi-Agent"],
            highlights: [
                "Developed a scalable benchmarking framework capable of evaluating 7,000+ MCP servers through automated health checks, capability validation, tool testing, ranking, and standardized performance assessment.",
                "Implemented asynchronous MCP client-server communication, tool discovery, execution workflows, and server capability analysis to support distributed automation.",
                "Built LangGraph-based multi-agent orchestration and Playwright browser automation for parallel server execution and CAPTCHA interaction workflows.",
                "Automated server evaluation and reporting, reducing manual validation effort by approximately 90% while generating detailed capability and benchmarking reports."
            ]
        },
        {
            title: "End-to-End Object Localization ML Pipeline",
            category: "Computer Vision & Deep Learning",
            techStack: ["Python", "TensorFlow", "OpenCV", "Object Localization"],
            highlights: [
                "Developed an end-to-end computer vision pipeline for image preprocessing, bounding-box prediction, model training, evaluation, and inference using Python, TensorFlow, and OpenCV.",
                "Trained and evaluated machine learning models on image datasets, applying feature engineering and hyperparameter optimization to improve generalization and prediction performance.",
                "Developed visualization and evaluation workflows to analyze localization accuracy, bounding-box predictions, and model performance."
            ]
        },
        {
            title: "Breaking the Loop: Security in ML-Driven Robotic Systems",
            subtitle: "Proposed in IEEE Transactions on Systems, Man and Cybernetics: Systems",
            category: "Robotics Security Research",
            badge: "Research Publication",
            techStack: ["Adversarial ML", "Cyber-Physical Security", "Threat Modeling", "AI Safety"],
            highlights: [
                "Conducted a systematic review of adversarial attacks, backdoor attacks, prompt injection, data poisoning, and jailbreak vulnerabilities in machine learning-driven robotic systems.",
                "Proposed a security taxonomy spanning perception, planning, decision-making, and execution layers, evaluating defense strategies and research directions for trustworthy AI and cyber-physical systems."
            ]
        }
    ];

    return (
        <section className="relative w-full py-20 px-4 md:px-10 z-20 bg-[#121212]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Selected Works & Research</h2>
                        <p className="text-gray-400">Featured projects in AI security, multi-agent frameworks, computer vision, and systems research.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl flex flex-col justify-between overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between gap-2 mb-3">
                                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20">
                                        {project.category}
                                    </span>
                                    {project.badge && (
                                        <span className="text-xs font-medium text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded">
                                            {project.badge}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                                    {project.title}
                                </h3>

                                {project.subtitle && (
                                    <p className="text-sm text-gray-400 italic mb-4">
                                        {project.subtitle}
                                    </p>
                                )}

                                <div className="flex flex-wrap gap-1.5 my-4">
                                    {project.techStack.map((tech, tIdx) => (
                                        <span key={tIdx} className="text-xs bg-white/10 text-gray-300 px-2.5 py-1 rounded-md">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-gray-300 leading-relaxed mb-6">
                                    {project.highlights.map((bullet, bIdx) => (
                                        <li key={bIdx}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

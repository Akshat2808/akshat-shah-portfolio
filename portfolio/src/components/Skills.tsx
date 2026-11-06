export default function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Java", "Python", "C", "C++", "SQL", "JavaScript", "TypeScript"]
        },
        {
            title: "Software Engineering & Backend",
            skills: [
                "Data Structures", "Algorithms", "Object-Oriented Programming", "Spring Boot",
                "Spring Security", "FastAPI", "REST APIs", "Microservices", "Distributed Systems",
                "System Design", "Authentication & Authorization", "API Integration",
                "WebSockets", "Asynchronous Programming", "Database Optimization", "Error Handling"
            ]
        },
        {
            title: "Generative AI, LLMs & Agentic AI",
            skills: [
                "GPT-OSS", "Llama", "RAG", "Embeddings", "Semantic Retrieval",
                "Prompt Engineering", "Context Engineering", "Grounded Generation",
                "SFT", "Instruction Tuning", "DPO", "RLHF", "LoRA", "QLoRA", "PEFT",
                "Multi-Agent Systems", "AI Agents", "MCP", "LangGraph", "Tool Calling",
                "Agent Routing", "Planning & Reasoning", "Agent State Management",
                "Retrieval Evaluation", "Grounding Evaluation"
            ]
        },
        {
            title: "Machine Learning & Deep Learning",
            skills: [
                "PyTorch", "TensorFlow", "Scikit-Learn", "Hugging Face", "Transformers",
                "NLP", "Sentence Transformers", "OpenCV", "Computer Vision",
                "Machine Learning", "Deep Learning", "Feature Engineering",
                "Image Preprocessing", "Object Localization", "Bounding-Box Prediction",
                "Model Training & Evaluation", "Hyperparameter Tuning", "Benchmarking"
            ]
        },
        {
            title: "Cloud, Databases & DevOps",
            skills: [
                "AWS (EC2, S3, IAM, RDS, Lambda, EKS, ECR, CloudWatch)", "Azure",
                "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "MLflow",
                "OpenTelemetry", "Apache Spark", "Delta Lake", "MySQL", "PostgreSQL",
                "MS SQL Server", "Git", "GitHub", "GitLab", "Linux", "Postman"
            ]
        },
        {
            title: "MLOps, Inference & Optimization",
            skills: [
                "Model Deployment", "Model Serving", "Experiment Tracking", "Model Registry",
                "Drift Monitoring", "vLLM", "TensorRT-LLM", "NVIDIA Triton", "Quantization",
                "Batching", "Caching", "GPU Optimization", "Latency Optimization",
                "Throughput Optimization", "Model Evaluation"
            ]
        },
        {
            title: "Security, Robotics & Automation",
            skills: [
                "AI Security", "Cybersecurity", "Adversarial Machine Learning",
                "Backdoor Attack Detection", "Prompt Injection Detection", "Industrial IoT",
                "Robotic Parameter Optimization", "Deepstream", "Qt Framework",
                "Real-Time Dashboards", "IoT Communication Interfaces", "Playwright",
                "W3C WebDriver", "Browser Automation", "Parallel Execution"
            ]
        }
    ];

    const certifications = [
        { name: "AWS Certified Cloud Practitioner", link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/26XCB66162FQQ7C1" },
        { name: "AZURE certified AZ-900, AI-900, PL-900", link: "" },
        { name: "Google Analytics Certification", link: "https://images.credential.net/embed/8ll80ciw_1745929324204.png" },
        { name: "Machine Learning Specialization", link: "https://www.coursera.org/account/accomplishments/specialization/P8KLPM7N57R9" },
        { name: "Cloud Core", link: "https://www.credly.com/badges/dd9d8236-12d0-47ca-ba2e-27b990e56d49/print" },
        { name: "Data Analytics", link: "https://www.jobaajlearnings.com/certificate?file=certificate-34459-30.jpeg" },
        { name: "Python for Data Science", link: "https://www.credly.com/badges/1f37fd1a-21c6-4d01-8b36-24536f5a504e/print" }
    ];

    return (
        <section className="relative w-full py-20 px-4 md:px-10 z-20 bg-[#121212] text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Skills & Certifications</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="space-y-4 bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all">
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
                            cert.link ? (
                                <a
                                    key={index}
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-purple-900/20 border border-purple-500/20 px-4 py-2 rounded-lg text-purple-100 text-sm hover:bg-purple-900/40 transition-colors cursor-pointer group"
                                >
                                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                    <span>{cert.name}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 opacity-70 group-hover:opacity-100 transition-opacity">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                            ) : (
                                <div key={index} className="flex items-center gap-2 bg-purple-900/20 border border-purple-500/20 px-4 py-2 rounded-lg text-purple-100 text-sm">
                                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                    {cert.name}
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

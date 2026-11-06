export default function Contact() {
    return (
        <footer className="relative w-full py-20 px-4 md:px-10 z-20 bg-black text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-2">Akshat Shah</h2>
                    <p className="text-gray-400">Software Engineer & AI/ML Engineer | Scalable Backend, Generative AI, Cloud & MLOps</p>
                </div>

                <div className="flex flex-col gap-3 text-center md:text-right">
                    <a href="mailto:akshatshah7528@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                        akshatshah7528@gmail.com
                    </a>
                    <a href="tel:+13145377263" className="text-gray-300 hover:text-purple-400 transition-colors">
                        +1 314-537-7263
                    </a>
                    <p className="text-gray-500">Saint Louis, MO</p>
                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 mt-2">
                        <a
                            href="https://www.linkedin.com/in/akshat-shah-433632214/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 underline underline-offset-4"
                        >
                            <span>LinkedIn</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                        <a
                            href="https://github.com/akshatshah288"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 underline underline-offset-4"
                        >
                            <span>GitHub</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                        <a
                            href="/Akshat%20Shah%20Resume%20(USA).pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full text-sm text-gray-200 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            <span>Resume PDF</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-600">
                <p>&copy; {new Date().getFullYear()} Akshat Shah. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default function Contact() {
    return (
        <footer className="relative w-full py-20 px-4 md:px-10 z-20 bg-black text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-2">Akshat Shah</h2>
                    <p className="text-gray-400">Software Engineer | Cybersecurity, IoT Solutions, Cloud, Machine Learning Specialist</p>
                </div>

                <div className="flex flex-col gap-4 text-center md:text-right">
                    <a href="mailto:akshatshah7528@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                        akshatshah7528@gmail.com
                    </a>
                    <a href="tel:+13145377263" className="text-gray-300 hover:text-purple-400 transition-colors">
                        +1 314-537-7263
                    </a>
                    <p className="text-gray-500">Saint Louis, MO</p>
                    <a
                        href="https://www.linkedin.com/in/akshat-shah-433632214/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-purple-400 hover:text-purple-300 underline underline-offset-4"
                    >
                        Connect on LinkedIn
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-600">
                <p>&copy; {new Date().getFullYear()} Akshat Shah. All rights reserved.</p>
            </div>
        </footer>
    );
}

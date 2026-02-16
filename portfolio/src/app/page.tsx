import fs from 'fs';
import path from 'path';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  // Server-side logic to read image sequence
  const sequenceDir = path.join(process.cwd(), 'public', 'sequence');
  let imagePaths: string[] = [];

  try {
    const files = fs.readdirSync(sequenceDir);
    imagePaths = files
      .filter((file) => file.endsWith('.png'))
      .sort() // Ensure correct order (frame_000, frame_001...)
      .map((file) => `/sequence/${file}`);
  } catch (error) {
    console.error("Error reading sequence directory:", error);
  }

  return (
    <main className="bg-[#121212] min-h-screen">
      <div className="relative h-[500vh]">
        <ScrollyCanvas imagePaths={imagePaths} />
        <Overlay />
      </div>
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      {/* Footer is inside Contact component */}
    </main>
  );
}

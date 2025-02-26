import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const OffensiveSecurity = [
    "Kali Linux",
    "Metasploit",
    "Burp Suite",
    "Nmap",
    "Wireshark",
  ];

  const Scripting = ["Python", "Bash", "Network Security", "Penetration Testing"];

  const AIVideoEditing = ["RunwayML", "Pika Labs", "CapCut", "Canva"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate cybersecurity enthusiast with expertise in ethical hacking, automation, and networking. Also skilled in AI-powered video editing and content creation.
            </p>

            {/* Skill Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Offensive Security */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Offensive Security</h3>
                <div className="flex flex-wrap gap-2">
                  {OffensiveSecurity.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Scripting & Automation */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Scripting & Automation</h3>
                <div className="flex flex-wrap gap-2">
                  {Scripting.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI Video Editing */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">AI Video Editing</h3>
                <div className="flex flex-wrap gap-2">
                  {AIVideoEditing.map((tool, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Intermediate in C.S</strong> - Tameer-i-Wattan Public Schools & Colleges (2024-2026)
                </li>
                <li>
                  Relevant Coursework: Hackers by Z Security, Wireless Pentesting, Wireshark, Python for Hackers by Z Security...
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Freelancer at Fiverr (2023 - Present)</h4>
                  <p>Edited and produced high-quality videos for various digital platforms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

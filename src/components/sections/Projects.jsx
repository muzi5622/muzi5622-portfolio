import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const repositories = [
    { name: "WiFi Scanner", language: "Python", description: "A tool to scan available WiFi networks.", url: "https://github.com/muzi5622/wifi-scanner" },
    { name: "Mac Address Changer", language: "Python", description: "A script to change MAC addresses for anonymity.", url: "https://github.com/muzi5622/Mac-Address-Changer" },
    { name: "Text To Speech", language: "Python", description: "Convert text into speech using Windows built-in features.", url: "https://github.com/muzi5622/Text-To-Speech-Using-Windows" },
    { name: "Arp Spoofing", language: "Python", description: "An ARP spoofing tool for network security testing.", url: "https://github.com/muzi5622/arp-spoofing" },
    { name: "Packet Sniffer", language: "Python", description: "A packet sniffer using Scapy to analyze network traffic.", url: "https://github.com/muzi5622/packet_sniffer_with_scapy" },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repositories.map((repo, key) => (
              <div
                key={key}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
                <p className="text-gray-400 mb-4">{repo.description}</p>
                <div className="flex justify-between items-center">
                  <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                    View Repository →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

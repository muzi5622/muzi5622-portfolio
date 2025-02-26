import { RevealOnScroll } from "../RevealOnScroll";

export const LatestArticles = () => {
  const articles = [
    {
      title: "Understanding Ethical Hacking",
      description: "A deep dive into ethical hacking and its importance in cybersecurity.",
      url: "https://medium.com/your-article-1",
    },
    {
      title: "How to Get Started with Bug Bounties",
      description: "Beginner's guide to finding and reporting security vulnerabilities.",
      url: "https://medium.com/your-article-2",
    },
    {
      title: "Automating Security with Python",
      description: "Exploring Python scripts for cybersecurity automation.",
      url: "https://medium.com/your-article-3",
    },
    {
      title: "Networking Essentials for Hackers",
      description: "Key networking concepts every ethical hacker should know.",
      url: "https://medium.com/your-article-4",
    },
  ];

  return (
    <section id="articles" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-400 mb-4">{article.description}</p>
                <div className="flex justify-between items-center">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                    Read More →
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

import { Linkedin, PenTool, Github } from "lucide-react"; // Import icons

export const Footer = () => {
  return (
    <footer className="w-full py-6 bg-[rgba(10,10,10,0.8)] text-white text-center">
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/m-muzammal-99m/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          <Linkedin size={30} />
        </a>
        <a
          href="https://medium.com/@your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <PenTool size={30} />
        </a>
        <a
          href="https://github.com/muzi5622"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          <Github size={30} />
        </a>
      </div>
    </footer>
  );
};

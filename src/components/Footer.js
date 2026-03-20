export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Sudhaman. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <a href="https://www.linkedin.com/in/sudhaman-kannan-yogeswar-02111996/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light transition-colors">LinkedIn</a>
          <a href="https://github.com/SudhamanKannanYogeswar" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light transition-colors">GitHub</a>
          <a href="mailto:sudruk02@gmail.com" className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}

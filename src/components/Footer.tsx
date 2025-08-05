export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-2.5">
        <div className="text-center text-gray-600">
          <p className="text-sm">
            Developed with ❤️ by{" "}
            <a
              href="https://jobayerahmed.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              Jobayer Ahmed
            </a>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

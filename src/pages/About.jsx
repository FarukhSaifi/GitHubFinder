export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          About GitHub Finder
        </h1>

        {/* Description */}
        <p className="text-gray-700 mb-4">
          <strong>GitHub Finder</strong> is a powerful web application that
          allows users to search for GitHub profiles, view user details,
          repositories, and key statistics in a visually appealing and intuitive
          way.
        </p>

        {/* Features */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          ✨ Features
        </h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>🔍 Search for GitHub users in real-time</li>
          <li>
            📊 View user statistics including followers, repos, and
            contributions
          </li>
          <li>
            📂 Explore user repositories with details like stars and forks
          </li>
          <li>🌙 Dark mode support for better readability</li>
          <li>🚀 Fast performance powered by Vite + React</li>
        </ul>

        {/* Technology Stack */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          🛠️ Built With
        </h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>⚛️ React.js (with Hooks)</li>
          <li>⚡ Vite (for fast builds)</li>
          <li>🎨 Tailwind CSS (for styling)</li>
          <li>🌐 React Router DOM (for navigation)</li>
          <li>📡 GitHub API (for fetching user data)</li>
        </ul>

        {/* Author */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          👨‍💻 About the Author
        </h2>
        <p className="text-gray-700 mt-2">
          This project was created by{" "}
          <strong className="text-indigo-600">Farukh Saifi</strong>, a
          passionate developer focused on building intuitive and
          high-performance web applications.
        </p>

        {/* GitHub Link */}
        <div className="mt-6">
          <a
            href="https://github.com/FarukhSaifi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-semibold hover:underline"
          >
            🌟 Visit my GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

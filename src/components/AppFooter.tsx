// "© 2025 Your Name" (auto-update year)
export default function AppFooter() {
  return (
    <footer className="bg-sky-600 text-white text-center p-4 mt-8">
      <p>© {new Date().getFullYear()} Your Name</p>
    </footer>
  );
}

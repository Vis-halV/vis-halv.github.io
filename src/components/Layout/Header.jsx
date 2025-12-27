const Header = () => {
  return (
    <header className="w-full">
      <div className="px-10 py-4 flex items-center justify-between bg-[#0c0c0c]">
        
        {/* Brand */}
        <span className="departure-mono text-lg">
          V<span className="departure-mono inline-block scale-x-[-1]">S</span>D
        </span>

        {/* Navigation */}
        <nav className="flex gap-6">
          <button className="h-4 w-4 bg-white rounded-full"></button>
        </nav>

      </div>
    </header>
  );
};

export default Header;

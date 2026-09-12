

export default function Navbar() {
  return (
    <nav className="h-20">
      <div className="flex justify-between items-center w-full h-full mx-auto py-0 px-6">
        <figure className="max-w-52">
          <img className="w-full h-full" src="/assets/logo.png" alt="logo" />
        </figure>
        <ul className="flex gap-6">
          <li className="cursor-pointer text-[#032b41] transition-colors duration-300 hover:text-[#2bd97c]">
            Login
          </li>
          <li className="hidden cursor-not-allowed text-[#032b41] transition-colors duration-300 hover:text-[#2bd97c] sm:block">
            About
          </li>
          <li className="hidden cursor-not-allowed text-[#032b41] transition-colors duration-300 hover:text-[#2bd97c] sm:block">
            Contact
          </li>
          <li className="hidden cursor-not-allowed text-[#032b41] transition-colors duration-300 hover:text-[#2bd97c] sm:block">
            Help
          </li>
        </ul>
      </div>
    </nav>
  );
}

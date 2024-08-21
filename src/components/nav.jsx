export default function Nav() {
  return (
    <nav className="h-24 w-screen flex items-center justify-between bg-white px-40 absolute z-10 top-0 left-0">
      <div>
        <img src="images/logo.svg" className="h-6" />
      </div>
      <ul className="flex gap-8">
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
        <li href="#">Blog</li>
        <li href="#">Careers</li>
      </ul>
      <button className="bg-gradient-to-r from-green-500 to-cyan-500 py-3 px-9 text-white font-semibold rounded-full">
        Request Invite
      </button>
    </nav>
  );
}

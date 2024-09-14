export default function Nav(props) {
  return (
    <nav
      className={`h-20 lg:h-24 w-full px-[8%] mx-auto flex items-center justify-between bg-white ${
        props.mobileStatue ? "fixed" : "absolute"
      } z-30 top-0`}
    >
      <div>
        <img src="images/logo.svg" className="h-6" />
      </div>
      {!props.mobileStatue ? (
        <button
          className="block xl:hidden w-8"
          onClick={() => props.setMobileStatue(true)}
        >
          <img src="/images/icon-hamburger.svg" className="w-8" />
        </button>
      ) : (
        <button
          className="block xl:hidden w-8"
          onClick={() => props.setMobileStatue(false)}
        >
          <img src="/images/icon-close.svg" className="w-6" />
        </button>
      )}
      <ul className="hidden xl:flex gap-8">
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
        <li href="#">Blog</li>
        <li href="#">Careers</li>
      </ul>
      <button className="hidden xl:block bg-gradient-to-r from-limegreen to-cyandef py-3 px-9 text-white font-semibold rounded-full">
        Request Invite
      </button>
    </nav>
  );
}

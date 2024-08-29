export default function MobileList(props) {
  return (
    <div className="fixed top-0 left-0 z-20 flex flex-col items-center gap-12 xl:hidden">
      <div
        className="w-screen h-screen bg-darkblue bg-opacity-75"
        onClick={() => props.setMobileStatue(false)}
      ></div>
      <ul className="mobileList bg-white flex flex-col font-semibold items-center gap-5 w-[90%] py-6 rounded-md absolute top-24 lg:top-32">
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
        <li href="#">Blog</li>
        <li href="#">Careers</li>
      </ul>
    </div>
  );
}

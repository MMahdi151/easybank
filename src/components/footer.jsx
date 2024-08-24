export default function Footer() {
  return (
    <footer className="bg-darkblue text-grayblue-200 w-full px-44 h-36 py-28 flex items-center gap-40">
      <div>
        <div className="w-full mb-16">
          <img src="/images/logo.svg" className="invert hue-rotate-180 h-6" />
        </div>
        <div className="flex gap-4 social">
          <img src="/images/icon-facebook.svg" />
          <img src="/images/icon-youtube.svg" />
          <img src="/images/icon-twitter.svg" />
          <img src="/images/icon-pinterest.svg" />
          <img src="/images/icon-instagram.svg" />
        </div>
      </div>
      <ul className="flex gap-36">
        <div className="flex flex-col gap-3">
          <li href="#">About Us</li>
          <li href="#">Contacts</li>
          <li href="#">Blog</li>
        </div>
        <div className="flex flex-col gap-3">
          <li href="#">Careers</li>
          <li href="#">Support</li>
          <li href="#">Privacy Policy</li>
        </div>
      </ul>
      <div className="ml-auto">
        <button className="bg-gradient-to-r from-limegreen to-cyandef py-3 px-9 text-white font-semibold rounded-full mb-8 block ml-auto">
          Request Invite
        </button>
        <p className="text-grayblue-300">© Easybank, All Rights Reserved</p>
      </div>
    </footer>
  );
}

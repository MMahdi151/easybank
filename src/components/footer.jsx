export default function Footer() {
  return (
    <footer className="bg-darkblue text-grayblue-200 w-screen py-12">
      <div className="max-w-7xl mx-auto grid grid-flow-row md:grid-flow-col grid-rows-2 gap-x-16 gap-y-8 items-center text-center md:text-left">
        <div className="h-6 mx-auto md:mx-0">
          <img
            src="/images/logo.svg"
            className="invert hue-rotate-180 h-full"
          />
        </div>
        <div className="flex gap-4 social mx-auto md:mx-0">
          <img src="/images/icon-facebook.svg" />
          <img src="/images/icon-youtube.svg" />
          <img src="/images/icon-twitter.svg" />
          <img src="/images/icon-pinterest.svg" />
          <img src="/images/icon-instagram.svg" />
        </div>
        <ul className="flex flex-col md:flex-row gap-3 md:gap-36 md:row-start-1 md:row-end-3">
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
        <button className="bg-gradient-to-r from-limegreen to-cyandef py-3 px-9 text-white font-semibold rounded-full block md:justify-self-end mx-auto md:mx-0">
          Request Invite
        </button>
        <p className="text-grayblue-300 md:justify-self-end mx-auto md:mx-0">
          © Easybank, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

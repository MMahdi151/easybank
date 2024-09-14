export default function Hero() {
  return (
    <section className="h-screen flex flex-col-reverse md:flex-row w-full max-w-7xl relative">
      <div className="flex flex-col gap-8 md:gap-12 pt-12 px-6 md:p-0 md:pr-[5%] text-center md:text-left md:place-content-center md:w-1/2 h-1/2 md:h-full">
        <h1 className="text-5xl md:text-6xl">
          Next generation digital banking
        </h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div>
          <button className="bg-gradient-to-r from-limegreen to-cyandef py-3 px-9 text-white font-semibold rounded-full">
            Request Invite
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative md:static overflow-hidden">
        <img
          src="/images/bg-intro-desktop.svg"
          className="absolute z-0 h-full min-w-[460px] left-1/2 -translate-x-1/2 scale-95 md:scale-100 md:h-auto md:min-w-[1440px] md:top-1/2 md:-translate-y-[54%] md:left-[44%] md:translate-x-0"
        />
        <img
          src="/images/image-mockups.png"
          className="absolute z-20 h-full md:h-auto left-1/2 -translate-x-1/2  md:scale-[115%] md:top-6 md:left-[72%] md:translate-x-0 lg:left-[62%]"
        />
      </div>
    </section>
  );
}

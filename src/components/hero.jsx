export default function Hero() {
  return (
    <section className="h-screen flex flex-col-reverse md:flex-row w-screen max-w-7xl">
      <div className="flex flex-col gap-8 md:gap-12 pt-12 px-6 md:p-0 md:pr-[5%] text-center md:text-left md:place-content-center md:w-1/2 h-1/2 md:h-full">
        <h1 className="text-5xl md:text-7xl">
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
          className="absolute z-0 h-full left-1/2 -translate-x-1/2 scale-95 md:scale-100 md:h-auto md:min-w-[1440px] md:top-1/2 md:-translate-y-[54%] md:left-[44%] md:translate-x-0"
        />
        <img
          src="/images/image-mockups.png"
          className="absolute z-20 h-full md:h-auto left-1/2 -translate-x-1/2  md:scale-[115%] md:top-6 md:left-[62%] md:translate-x-0"
        />
      </div>
      {/* <div className="md:w-1/2 h-1/2 md:h-full relative z-20">
        <img
          src="/images/bg-intro-desktop.svg"
          className="scale-[200%] ml-[24%] lg:ml-[36%] lg:mt-[16%] absolute z-0"
        />
        <img
          src="/images/image-mockups.png"
          className="absolute lg:scale-[120%] w-full -top-[4%] lg:top-[8%] lg:left-[28%] z-50"
        />
      </div> */}
      {/* <div className="w-full lg:w-1/2  h-1/2 lg:h-full overflow-hidden">
        <div className="">
          <img
            src="/images/bg-intro-desktop.svg"
            className="w-full md:absolute top-[44%] md:-translate-y-1/2 left-1/2 md:-translate-x-[5%]"
          />
          <img
            src="/images/image-mockups.png"
            className="md:w-[56%] md:absolute top-[56%] -translate-y-[72%] md:-translate-y-1/2 left-[60%] z-20"
          />
        </div>
      </div> */}
      {/* <div className="relative bottom-0 w-full lg:w-1/2 h-1/2 lg:h-full">
        <img
          src="/images/bg-intro-desktop.svg"
          className="min-w-[240%] -translate-x-[14%] lg:-translate-x-14 absolute -bottom-12 lg:min-w-[260%] lg:-bottom-28"
        />
        <img
          src="/images/image-mockups.png"
          className="absolute bottom-0 lg:min-w-[160%] md:right-6 lg:left-28 lg:-top-6 z-10"
        />
      </div> */}
    </section>
  );
}

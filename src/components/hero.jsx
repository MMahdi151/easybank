export default function Hero() {
  return (
    <section className="h-screen flex flex-col-reverse lg:flex-row  max-w-6xl">
      <div className="flex flex-col gap-8 lg:gap-12 pt-12 px-6 lg:p-0 text-center lg:text-left lg:place-content-center lg:w-1/2 h-1/2 lg:h-full">
        <h1 className="text-5xl lg:text-7xl">
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
      <div className="relative bottom-0 w-full lg:w-1/2 h-1/2 lg:h-full">
        <img
          src="/images/bg-intro-desktop.svg"
          className="min-w-[240%] -translate-x-[14%] lg:-translate-x-14 absolute -bottom-12 lg:min-w-[260%] lg:-bottom-28"
        />
        <img
          src="/images/image-mockups.png"
          className="absolute bottom-0 lg:min-w-[160%] md:right-6 lg:left-28 lg:-top-6 z-20"
        />
      </div>
      {/* <div className="lg:w-1/2 top-0 lg:relative max-h-1/2">
        <img
          src="/images/bg-intro-desktop.svg"
          className="min-w-[200%] lg:min-w-[244%] -mt-40 lg:-mt-[32%] -ml-36 -ml-1/2"
        />
        <img
          src="/images/image-mockups.png"
          className="min-w-[] lg:min-w-[150%] absolute -top-12 left-[20%] z-20"
        />
      </div> */}
    </section>
  );
}

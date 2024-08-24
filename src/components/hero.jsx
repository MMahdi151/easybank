export default function Hero() {
  return (
    <section className="h-screen lg:px-44 flex flex-col-reverse lg:flex-row bg-grayblue-100 relative overflow-x-clip">
      <div className="flex flex-col gap-12 place-content-center lg:w-2/5">
        <h1 className="text-4xl lg:text-6xl">
          Next generation digital banking
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          possimus corrupti dignissimos fuga nisi sequi laudantium quae magni
          quod, dicta blanditiis consectetur, ab nesciunt, at nostrum voluptatum
          fugit numquam porro!
        </p>
        <div>
          <button className="bg-gradient-to-r from-limegreen to-cyandef py-3 px-9 text-white font-semibold rounded-full">
            Request Invite
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 relative lg:absolute top-0 right-0 lg:scale-125 z-0">
        <img
          src="/images/bg-intro-desktop.svg"
          className="-top-16 -right-20 scale-150 relative lg:top-14 lg:-right-32"
        />
        <img
          src="/images/image-mockups.png"
          className="absolute lg:top-0 lg:-right-16 scale-95 z-20"
        />
      </div>
    </section>
  );
}

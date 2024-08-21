export default function Hero() {
  return (
    <section className="h-screen px-40 flex flex-row">
      <div className="flex flex-col gap-12 place-content-center w-1/2 pr-28">
        <h1 className="text-6xl">Next generation digital banking</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          possimus corrupti dignissimos fuga nisi sequi laudantium quae magni
          quod, dicta blanditiis consectetur, ab nesciunt, at nostrum voluptatum
          fugit numquam porro!
        </p>
        <div>
          <button className="bg-gradient-to-r from-green-500 to-cyan-500 py-3 px-9 text-white font-semibold rounded-full">
            Request Invite
          </button>
        </div>
      </div>
      <div>
        <img
          src="/images/bg-intro-desktop.svg"
          className="absolute scale-125 -top-24 -z-10"
        />
        <img
          src="/images/image-mockups.png"
          className="absolute top-6 -right-24 scale-[115%]"
        />
      </div>
    </section>
  );
}

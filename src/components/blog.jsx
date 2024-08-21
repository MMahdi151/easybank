export default function Blog() {
  return (
    <section className="h-screen px-40 flex flex-col gap-8 bg-amber-50 place-content-center">
      <h2>Lastest Articles</h2>
      <div className="flex gap-8">
        <div className="cart">
          <div className="max-h-48 overflow-hidden">
            <img src="/images/image-currency.jpg" className="w-full " />
          </div>
          <div className="cart-det">
            <span>By Claire Robinson</span>
            <h4>Receive money in any currency with no fees</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              officiis sunt repellat dolor, corrupti blanditiis ab nemo error
              consequuntur, magni neque quasi eaque nisi cumque quidem fugit
              omnis. Fugiat, enim!
            </p>
          </div>
        </div>
        <div className="cart">
          <div className="max-h-48 overflow-hidden">
            <img src="/images/image-restaurant.jpg" className="w-full" />
          </div>
          <div className="cart-det">
            <span>By Wilson Hutton</span>
            <h4>Treat yourself without worrying about money</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa et
              reiciendis ea illum commodi atque aperiam beatae, nulla
              repellendus harum, ad nam hic, obcaecati voluptatem. Nostrum ipsam
              quidem cum tempora.
            </p>
          </div>
        </div>
        <div className="cart">
          <div className="max-h-48 overflow-hidden">
            <img src="/images/image-plane.jpg" className="w-full" />
          </div>
          <div className="cart-det">
            <span>By Wilson Hutton</span>
            <h4>Take your Easybank card wherever you go</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
              fuga labore error cum quibusdam, veritatis soluta neque suscipit
              deleniti blanditiis, modi quas illo nisi rerum. Corrupti provident
              error quasi cupiditate!
            </p>
          </div>
        </div>
        <div className="cart">
          <div className="max-h-48 overflow-hidden">
            <img src="/images/image-confetti.jpg" className="w-full" />
          </div>
          <div className="cart-det">
            <span> By Claire Robinson</span>
            <h4>Our invite-only Beta accounts are now live!</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, modi ipsam quos sunt aliquam quasi, illum distinctio ut
              mollitia, culpa delectus eveniet quam ea. Minus quaerat similique
              repellendus beatae nam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

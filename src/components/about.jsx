export default function About() {
  return (
    <section className="bg-grayblue-200 w-screen flex items-center place-content-center relative py-28 px-6 lg:px-0 text-center lg:text-left">
      <div className="flex flex-col gap-24 items-center max-w-7xl">
        <div className="self-stretch">
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn you bank account into your
            financial hub.
            <br />
            Control your finances ike never before.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-14">
          <div className="flex flex-col gap-6 lg:w-1/4 items-center lg:items-start">
            <div className="lg:w-1/3">
              <img src="/images/icon-online.svg" />
            </div>
            <h3 className="text-2xl mt-2">Online Banking</h3>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:w-1/4 items-center lg:items-start">
            <div className="lg:w-1/3">
              <img src="/images/icon-budgeting.svg" />
            </div>
            <h3 className="text-2xl mt-2">Simple Budgeting</h3>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:w-1/4 items-center lg:items-start">
            <div className="lg:w-1/3">
              <img src="/images/icon-onboarding.svg" />
            </div>
            <h3 className="text-2xl mt-2">Fast Onboarding</h3>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:w-1/4 items-center lg:items-start">
            <div className="lg:w-1/3">
              <img src="/images/icon-api.svg" />
            </div>
            <h3 className="text-2xl mt-2">Open API</h3>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

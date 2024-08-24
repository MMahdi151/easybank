export default function About() {
  return (
    <section className="py-28 bg-grayblue-200 px-44 flex flex-col gap-24 place-content-center relative z-10">
      <div>
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn you bank account into your financial
          hub.
          <br />
          Control your finances ike never before.
        </p>
      </div>
      <div className="flex gap-12">
        <div className="flex flex-col gap-6 w-1/4">
          <div className="w-1/3">
            <img src="/images/icon-online.svg" />
          </div>
          <h3 className="text-3xl">Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="flex flex-col gap-6 w-1/4">
          <div className="w-1/3">
            <img src="/images/icon-budgeting.svg" />
          </div>
          <h3 className="text-3xl">Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className="flex flex-col gap-6 w-1/4">
          <div className="w-1/3">
            <img src="/images/icon-onboarding.svg" />
          </div>
          <h3 className="text-3xl">Fast Onboarding</h3>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="flex flex-col gap-6 w-1/4">
          <div className="w-1/3">
            <img src="/images/icon-api.svg" />
          </div>
          <h3 className="text-3xl">Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </section>
  );
}

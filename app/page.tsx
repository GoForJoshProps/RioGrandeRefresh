const Arrow = () => <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 19 19 5M5 5h14v14" /></svg>;


function Cooler() {
  return (
    <div className="cooler-scene">
      <img
        src="/620S.png"
        alt="Rio Grande Refresh smart vending machine with digital advertising screen"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          borderRadius: "24px",
        }}
      />
    </div>
  );
}

 

export default function Home() {
  const email = 'riogranderefresh@gmail.com';
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="shell flex flex-wrap items-center justify-between gap-5 py-6">
    
<a href="#" className="wordmark" aria-label="Rio Grande Refresh home">
  <img
    src="/RGR Logo.png"
    alt="Rio Grande Refresh"
    style={{ width: "220px", height: "auto", maxWidth: "100%" }}
  />
</a>

      <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-5 text-sm"><a href="#solutions">Our solutions</a><a href="#easy-shopping">How to use our coolers</a><a href="#advertise">Advertising</a><a className="nav-cta" href="#request-machine">Free machine <Arrow /></a></nav>
    </header>
    <main id="main">
      <section className="shell hero grid items-center gap-10 lg:grid-cols-2">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> NEW MEXICO ROOTS. A FRESHER FUTURE.</p>
          <h1>Modern Machines.<br /><span className="sunset-text">Everyday Essentials.</span></h1>
          <p className="hero-description">AI-powered vending and smart coolers for the places New Mexico works. Good things to grab. One less thing to manage.</p>
          <div className="flex flex-wrap gap-4"><a className="button button-orange" href="#request-machine">Refresh your workplace <Arrow /></a><a className="button button-outline" href="#solutions">Explore the possibilities</a></div>
          <div className="hero-footnote"><span aria-hidden="true">✦</span> Built around your business. Inspired by the Land of Enchantment.</div>
        </div>
        <Cooler />
      </section>
      <div className="benefit-strip"><div className="shell flex flex-wrap justify-between gap-5"><span>SMART TECHNOLOGY</span><span aria-hidden="true">✦</span><span>EVERYDAY CONVENIENCE</span><span aria-hidden="true">✦</span><span>NEW MEXICO SPIRIT</span></div></div>
      <section id="solutions" className="shell section-space">
        <div className="section-heading"><div><p className="eyebrow">THE BREAK ROOM, REIMAGINED</p><h2>Fresh options.<br />Smarter spaces.</h2></div><p>From the first coffee break to the late shift, make room for refreshments that fit the way your team moves.</p></div>
        <div className="grid gap-5 md:grid-cols-2">
          <article className="solution-card"><span className="card-number">01 / INTELLIGENT CONVENIENCE</span><div className="solution-icon" aria-hidden="true">▦</div><h3>AI-powered vending</h3><p>A modern take on the everyday essential. Give your team convenient access to snacks and drinks with an intelligent vending experience.</p><a href="#contact">Find your fit <Arrow /></a></article>
          <article className="solution-card teal-card"><span className="card-number">02 / A FRESH PERSPECTIVE</span><div className="solution-icon" aria-hidden="true">❄</div><h3>Smart coolers</h3><p>Bring a fresh selection into your workplace with connected coolers that make the refreshment stop feel effortless.</p><a href="#contact">Explore smart coolers <Arrow /></a></article>
        </div>
      </section>
      <section id="how-it-works" className="process-section"><div className="shell section-space"><p className="eyebrow">LESS FRICTION. MORE REFRESHMENT.</p><h2 className="whitespace-normal text-[clamp(1.5rem,3.2vw,3rem)] leading-tight tracking-tight lg:whitespace-nowrap">Your next great break starts here.</h2><div className="grid gap-9 md:grid-cols-3 mt-12">{[
        ['01', 'Tell us about your space', 'Share your location, team size, and what a better refreshment experience looks like for your business.'],
        ['02', 'Find the right setup', 'We’ll talk through vending and cooler options to find an approach that works for your workplace.'],
        ['03', 'Make room for refreshment', 'Plan the next steps with our team and bring a little more convenience to the workday.'],
      ].map(([number,title,text]) => <article key={number} className="step"><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="shell section-space local-section"><div><p className="eyebrow">ROOTED RIGHT HERE</p><h2>Big ideas.<br /><span className="sunset-text">New Mexico heart.</span></h2></div><div><p className="local-copy">Better breaks belong everywhere people do good work.</p><p className="muted">Rio Grande Refresh brings AI-powered vending machines and smart coolers to businesses in New Mexico. Offices, shared workspaces, and teams on the move — let’s find a fresh fit for your space.</p><span className="location-tag">⌖ &nbsp; Serving New Mexico businesses</span></div></section>
     
<section id="machines" className="shell section-space">
  <div className="section-heading">
    <p className="eyebrow">SMART VENDING SOLUTIONS</p>
    <h2>Meet Our Smart Coolers</h2>
    <p>
      Convenient snacks, drinks, and fresh food options
      for New Mexico workplaces.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2">
    <article className="solution-card">
      <img
        src="/CS%20Ultra%201200.jpg"
        alt="Rio Grande Refresh Ultra 1200 double-door AI cooler"
        className="w-full h-[420px] rounded-2xl object-contain"
      />
      <h3 className="mt-5 text-2xl font-bold">Ultra 1200 AI Cooler</h3>
      <p>
        Our spacious double-door smart cooler offers a wide
        selection of drinks, snacks, and convenient meals.
        Ideal for busy workplaces with larger teams.
      </p>
    </article>

    <article className="solution-card">
      <img
        src="/CTS%20Mini%20360.jpg"
        alt="Rio Grande Refresh Mini 360 single-door AI cooler"
        className="w-full h-[420px] rounded-2xl object-contain"
      />
      <h3 className="mt-5 text-2xl font-bold">Mini 360 AI Cooler</h3>
      <p>
        A compact smart cooler providing convenient access
        to drinks, snacks, and everyday essentials.
        Great for smaller break rooms and workplaces.
      </p>
    </article>
  </div>
</section>
<section id="easy-shopping" className="shell section-space" aria-label="How to shop our smart coolers">
  <div className="mb-10">
    <p className="eyebrow">TAP. OPEN. GRAB. GO.</p>
    <h2 className="mt-3 whitespace-normal text-[clamp(1.5rem,3.25vw,3rem)] font-bold leading-tight tracking-tight lg:whitespace-nowrap">Using Our Smart Coolers Is That Easy.</h2>
    <p className="muted mt-4 max-w-2xl">No cash, no buttons, no scanning every item. Just the refreshments you want, in seconds.</p>
  </div>
  <div className="grid gap-5 md:grid-cols-4">
    {[
      { number: "01", title: "Tap to start", description: "Tap or insert your payment card at the cooler's payment terminal to begin." },
      { number: "02", title: "Open the door", description: "Once the cooler unlocks, open it and browse the selection." },
      { number: "03", title: "Take what you want", description: "Grab a drink, a snack, or a meal. Take more than one item if you'd like." },
      { number: "04", title: "Close & go", description: "Close the door when you're done. The smart cooler automatically charges you for the items you took." },
    ].map(({ number, title, description }, index) => (
      <article key={number} className="solution-card flex flex-col gap-3">
        <span className="card-number">{number} / SIMPLE SHOPPING</span>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-400/40 bg-teal-400/10 text-teal-300" aria-hidden="true">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
            {index === 0 ? <><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20M7 15h4"/></> :
             index === 1 ? <><path d="M5 21V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17"/><path d="M3 21h18M15 12h.01"/></> :
             index === 2 ? <><path d="M4 8h16l-1.4 12H5.4L4 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></> :
             <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>}
          </svg>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </article>
    ))}
  </div>
  <p className="muted mt-6 text-center">No checkout line or item-by-item scanning. Payment is processed automatically after you close the door.</p>
</section>
<section id="products" className="shell section-space" aria-label="Products available in our machines">
  <div className="section-heading">
    <div><p className="eyebrow">SOMETHING FOR EVERY BREAK</p><h2>What’s Inside Our Machines?</h2></div>
    <p>Fresh food, refreshing drinks, snacks, and everyday essentials for your team.</p>
  </div>
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {[
      { name: "Fresh Food", x: "1.8%", y: "49.9%" },
      { name: "Energy Drinks", x: "35%", y: "49.9%" },
      { name: "Cold Drinks", x: "66.6%", y: "49.9%" },
      { name: "Hot Meals", x: "98.5%", y: "49.9%" },
      { name: "Candy & Snacks", x: "1.8%", y: "71.3%" },
      { name: "Pastries", x: "35%", y: "71.3%" },
      { name: "Everyday Essentials", x: "66.6%", y: "71.3%" },
      { name: "Personal Care", x: "98.5%", y: "71.3%" },
    ].map(({ name, x, y }) => (
      <div key={name} role="img" aria-label={`Rio Grande Refresh product selection: ${name}`}
        className="w-full rounded-2xl"
        style={{
          aspectRatio: name === "Candy & Snacks" || name === "Pastries" || name === "Everyday Essentials" || name === "Personal Care" ? "243 / 255" : "243 / 270",
          backgroundImage: 'url("/product-gallery.png.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "421.4% auto",
          backgroundPosition: `${x} ${y}`,
          backgroundColor: "#001e23",
        }}
      />
    ))}
  </div>
  <p className="muted mt-6 text-center">Selections vary by location. Request your favorites!</p>
  <div className="mt-8 flex flex-col items-center gap-3 text-center">
    <a
      className="button button-orange inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-2xl px-8 py-5 text-base font-extrabold uppercase tracking-wide shadow-[0_12px_36px_rgba(255,126,28,0.4)] ring-2 ring-orange-300/70 transition-transform hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(255,126,28,0.55)] sm:w-auto sm:text-lg"
      href="#request-machine"
    >
      Request Your FREE Machine <Arrow />
    </a>
    <p className="muted text-sm">No equipment, installation, or maintenance cost to your business.</p>
  </div>
</section>
<section className="shell section-space" aria-label="Businesses we serve">
  <div className="section-heading">
    <p className="eyebrow">TRUSTED LOCAL PARTNERS</p>
    <h2 className="whitespace-nowrap text-[clamp(1.15rem,3.1vw,2.65rem)] tracking-tight">Proudly Serving New Mexico Businesses</h2>
    <p>Bringing convenient refreshments to workplaces across New Mexico.</p>
  </div>
  <div className="overflow-hidden py-8">
    <div className="flex w-max items-center gap-6 animate-[clientScroll_24s_linear_infinite] motion-reduce:animate-none">
      {Array.from({ length: 4 }, (_, group) => group).flatMap((group) =>
        [
          { name: "CTS", logo: "/CTS%20Logo.png" },
          { name: "NORC", logo: "/NORCLogo_Short_Color-1.png" },
          { name: "THE HOME DEPOT", logo: "/Home-Depot-Logo-PNG-Photos.png" },
        ].map(({ name, logo }) => (
          <div
            key={group + name}
            aria-hidden={group > 0}
            className="solution-card flex h-28 w-56 shrink-0 items-center justify-center text-center text-2xl font-bold"
          >
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-20 w-full object-contain"
              style={{ display: "block", maxWidth: "180px" }}
            />
          </div>
        ))
      )}
</div>
</div>
   
  <style>{`
    @keyframes clientScroll {
      from { transform: translateX(0); }
      to { transform: translateX(-25%); }
    }
  `}</style>
</section>
      <section id="request-machine" className="shell section-space">
        <div className="section-heading"><div><p className="eyebrow">NO-COST MACHINE PLACEMENT</p><h2>Request a free vending machine.</h2></div><p>Bring convenient snacks, drinks, and meals to your workplace without buying the equipment. We handle stocking and servicing at approved locations.</p></div>
        <div className="grid gap-5 md:grid-cols-3">
          <article className="solution-card"><span className="card-number">01 / TELL US ABOUT YOUR SPACE</span><h3>Your workplace</h3><p>Share your location, approximate employee count, and break room needs.</p></article>
          <article className="solution-card"><span className="card-number">02 / FIND THE RIGHT FIT</span><h3>Customized selections</h3><p>We’ll discuss smart coolers and snack, drink, and meal options that work for your team.</p></article>
          <article className="solution-card"><span className="card-number">03 / LOCAL SUPPORT</span><h3>We take care of it</h3><p>Our team manages restocking, cleaning, and machine support.</p></article>
        </div>
        <p className="muted mt-6 text-sm">Equipment placement is subject to site approval. Products purchased from the machine are not free.</p>
        <a className="button button-orange mt-6" href="#contact">Request a machine <Arrow /></a>
      </section>
      <section id="advertise" className="process-section">
        <div className="shell section-space">
          <p className="eyebrow">ADVERTISE WITH RIO GRANDE REFRESH</p>
          <h2>Your business. Our screens.</h2>
          <p className="muted mt-6 max-w-2xl">Put your local business in front of customers with rotating digital ads on participating vending machine screens. Ask about available placements, five-second spots, and annual advertising options.</p>
          <a className="button button-outline mt-6" href="#contact">Ask about advertising <Arrow /></a>
        </div>
      </section>
      <section id="contact" className="shell contact-wrap"><div className="contact-panel"><p className="eyebrow">LET’S BRING SOMETHING FRESH TO YOUR SPACE</p><h2>Want a FREE<br />Vending Machine?</h2><p>Get a modern AI vending machine for your workplace at absolutely no cost. We handle installation, stocking, cleaning, and maintenance. You provide the space, and we handle the rest!</p><div className="flex flex-wrap items-center gap-5"><form action="https://formspree.io/f/xoeezawv" method="POST" className="grid gap-3 w-full max-w-xl">
<label htmlFor="inquiry-name" className="font-bold text-sm">Your name</label><input id="inquiry-name" name="name" type="text" autoComplete="name" required className="w-full rounded-md p-3 text-slate-900 bg-white" />
<label htmlFor="inquiry-email" className="font-bold text-sm">Email</label><input id="inquiry-email" name="email" type="email" autoComplete="email" required className="w-full rounded-md p-3 text-slate-900 bg-white" />
<label htmlFor="inquiry-business" className="font-bold text-sm">Company / workplace</label><input id="inquiry-business" name="company" type="text" className="w-full rounded-md p-3 text-slate-900 bg-white" />
<label htmlFor="inquiry-phone" className="font-bold text-sm">Phone (optional)</label><input id="inquiry-phone" name="phone" type="tel" className="w-full rounded-md p-3 text-slate-900 bg-white" />
<label htmlFor="inquiry-type" className="font-bold text-sm">How can we help?</label><select id="inquiry-type" name="inquiry_type" required defaultValue="" className="w-full rounded-md p-3 text-slate-900 bg-white"><option value="" disabled>Select a topic</option><option>Request a free machine</option><option>Advertise on vending screens</option><option>General question</option></select>
<label htmlFor="inquiry-message" className="font-bold text-sm">Message</label><textarea id="inquiry-message" name="message" rows={4} required className="w-full rounded-md p-3 text-slate-900 bg-white" />
<button className="button button-dark cursor-pointer" type="submit">Send inquiry <Arrow /></button>
</form><a className="font-bold" href="tel:+15059200299">(505) 920-0299</a></div><a className="inline-block mt-5 text-sm break-all" href={`mailto:${email}`}>{email}</a></div></section>
    </main>
    <footer className="shell flex flex-wrap justify-between items-center gap-6 py-9"><a className="wordmark" href="#">RIO GRANDE <small>REFRESH</small></a><p className="text-sm muted">© {new Date().getFullYear()} Rio Grande Refresh · New Mexico</p><a className="text-sm" href="#main">Back to top ↑</a></footer>
  </>;
}

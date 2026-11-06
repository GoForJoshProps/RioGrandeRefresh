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

      <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-5 text-sm"><a href="#machines">Our machines</a><a href="#easy-shopping">How to use our coolers</a><a href="#advertise">Advertising</a><a className="nav-cta" href="#request-machine">Free machine <Arrow /></a></nav>
    </header>
    <main id="main">
      <section className="shell hero grid items-center gap-10 lg:grid-cols-2">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> NEW MEXICO ROOTS. A FRESHER FUTURE.</p>
          <h1>Modern Machines.<br /><span className="sunset-text">Everyday Essentials.</span></h1>
          <p className="hero-description">AI-powered vending and smart coolers for the places New Mexico works. Good things to grab. One less thing to manage.</p>
          <div className="flex flex-wrap gap-4"><a className="button button-orange" href="#request-machine">Refresh your workplace <Arrow /></a><a className="button button-outline" href="#machines">Explore the possibilities</a></div>
          <div className="hero-footnote"><span aria-hidden="true">✦</span> Built around your business. Inspired by the Land of Enchantment.</div>
        </div>
        <Cooler />
      </section>
      <div className="benefit-strip"><div className="shell flex flex-wrap justify-between gap-5"><span>SMART TECHNOLOGY</span><span aria-hidden="true">✦</span><span>EVERYDAY CONVENIENCE</span><span aria-hidden="true">✦</span><span>NEW MEXICO SPIRIT</span></div></div>
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
<section id="why-choose-us" className="shell section-space" aria-label="Why choose Rio Grande Refresh">
  <div className="section-heading">
    <div>
      <p className="eyebrow">LOCAL SERVICE. SMARTER REFRESHMENTS.</p>
      <h2 className="text-[clamp(1.7rem,3.4vw,3rem)] leading-tight tracking-tight">Why Choose <span className="sunset-text">Rio Grande Refresh?</span></h2>
    </div>
    <p>We handle the machines, products, and upkeep, so your team can enjoy better breaks without adding work to your day.</p>
  </div>
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {[
      { number: "01", title: "Free Machine Placement", description: "For qualifying workplaces, we provide and install the machine at no equipment cost to your business." },
      { number: "02", title: "No Spoilage Responsibility", description: "We manage product dates and inventory. Your business isn't billed for unsold or expired items." },
      { number: "03", title: "Real-Time Monitoring", description: "Our connected machines help us track inventory and identify when products need attention or restocking." },
      { number: "04", title: "Reliable Restocking & Care", description: "We stock, clean, and maintain our machines, with service tailored to your location's needs." },
      { number: "05", title: "Customized Selections", description: "From energy drinks and fresh food to snacks and everyday essentials, we listen to what your team wants." },
      { number: "06", title: "Locally Owned & Responsive", description: "Proudly serving New Mexico businesses with personal communication and hands-on support." },
    ].map(({ number, title, description }) => (
      <article key={number} className="solution-card flex flex-col gap-3">
        <span className="card-number">{number} / THE RIO GRANDE DIFFERENCE</span>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-400/40 bg-teal-400/10 text-teal-300" aria-hidden="true">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            {number === "01" ? <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M9 17h6"/></> :
             number === "02" ? <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></> :
             number === "03" ? <><path d="M3 19V5M3 19h18M7 15l4-4 3 2 5-6"/></> :
             number === "04" ? <><path d="M4 7h16M4 12h16M4 17h10"/><path d="m17 17 2 2 3-4"/></> :
             number === "05" ? <><path d="M4 7h16M7 12h10M10 17h4"/><circle cx="9" cy="7" r="2" fill="currentColor"/><circle cx="15" cy="12" r="2" fill="currentColor"/></> :
             <><path d="M12 21s7-5 7-12a7 7 0 1 0-14 0c0 7 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></>}
          </svg>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </article>
    ))}
  </div>
  <div className="mt-8 flex flex-col items-center gap-3 text-center">
    <a className="button button-orange inline-flex items-center justify-center gap-3 px-8 py-4 font-bold" href="#request-machine">Request Your FREE Machine <Arrow /></a>
    <p className="muted text-sm">Tell us about your workplace and we'll help you find the right fit.</p>
  </div>
</section>
<section id="businesses-we-serve" className="shell section-space" aria-label="Businesses we serve">
  <div className="section-heading">
    <div>
      <p className="eyebrow">BUILT FOR YOUR WORKPLACE</p>
      <h2 className="text-[clamp(1.7rem,3.4vw,3rem)] leading-tight tracking-tight">Businesses <span className="sunset-text">We Serve.</span></h2>
    </div>
    <p>From early shifts to late nights, our smart vending solutions bring convenient refreshments to the places New Mexico works, lives, and gathers.</p>
  </div>
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {[
      { number: "01", title: "Manufacturing & Warehouses", description: "Keep busy crews fueled across shifts with quick access to cold drinks, filling meals, and grab-and-go snacks.", kind: "factory" },
      { number: "02", title: "Call Centers & Offices", description: "Make short breaks more convenient with refreshments right where employees work—without leaving the building.", kind: "office" },
      { number: "03", title: "Apartment Communities", description: "Give residents an easy way to pick up drinks, snacks, and everyday essentials without making another trip.", kind: "home" },
      { number: "04", title: "Hotels & Hospitality", description: "Offer guests convenient options for late arrivals, early departures, and everything in between.", kind: "hotel" },
      { number: "05", title: "Healthcare & Medical Offices", description: "Help staff, patients, and visitors find convenient refreshments during busy days and long shifts.", kind: "health" },
      { number: "06", title: "Gyms & Fitness Centers", description: "Offer members refreshing drinks, protein-forward snacks, and convenient post-workout options.", kind: "fitness" },
    ].map(({ number, title, description, kind }) => (
      <article key={number} className="solution-card group flex flex-col gap-3 overflow-hidden !p-0">\n        <div className="relative h-40 overflow-hidden"><img src={`/business-${kind}.svg`} alt={`${title} illustrated business setting`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#122c30] via-transparent to-transparent" /></div>\n        <div className="flex flex-col gap-3 px-6 pb-7">
        <span className="card-number">{number} / WHERE WE FIT</span>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-400/40 bg-teal-400/10 text-teal-300" aria-hidden="true">
          <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
            {kind === "factory" ? <><path d="M3 21V10l6 4v-4l6 4V5h6v16H3Z"/><path d="M7 18h1M12 18h1M17 18h1"/></> :
             kind === "office" ? <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3"/></> :
             kind === "home" ? <><path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7"/></> :
             kind === "hotel" ? <><path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M2 21h20M9 21v-5h6v5M8 8h2M14 8h2M8 12h2M14 12h2"/></> :
             kind === "health" ? <><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 7v10M7 12h10"/></> :
             <><path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12"/></>}
          </svg>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
        </div>\n      </article>
    ))}
  </div>
  <div className="mt-8 flex flex-col items-center gap-3 text-center">
    <p className="muted">Don't see your type of business? We can help you explore the right setup for your space.</p>
    <a className="button button-orange inline-flex items-center justify-center gap-3 px-8 py-4 font-bold" href="#request-machine">See If Your Location Qualifies <Arrow /></a>
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
    <div className="mb-9">
      <p className="eyebrow">ADVERTISE WITH RIO GRANDE REFRESH</p>
      <h2 className="mt-3 text-[clamp(1.4rem,2.8vw,2.65rem)] leading-tight tracking-tight lg:whitespace-nowrap">Your Business. <span className="sunset-text">Our Screens.</span> More Local Exposure.</h2>
    </div>
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)]">
      <div>
        <p className="muted max-w-xl">Put your business in front of customers where they work and take their breaks. Our smart vending screens feature rotating digital advertisements throughout the day.</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            { number: "01", title: "5-Second Digital Ads", text: "Short, eye-catching spots designed for quick attention." },
            { number: "02", title: "Rotating Throughout the Day", text: "Your ad shares screen time with other participating advertisers." },
            { number: "03", title: "Reach Local Workplaces", text: "Get your business seen by customers at participating vending locations." },
          ].map(({ number, title, text }) => (
            <div key={number} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-teal-400/40 bg-teal-400/10 text-sm font-bold text-teal-300">{number}</span>
              <div><h3 className="mb-1 text-lg font-bold">{title}</h3><p className="muted text-sm">{text}</p></div>
            </div>
          ))}
        </div>
        <a className="button button-orange mt-8" href="#contact">Advertise Your Business Today <Arrow /></a>
        <p className="muted mt-3 text-sm">Ask us about available screen placements and annual advertising options.</p>
      </div>
      <div className="relative mx-auto w-full max-w-[440px] rounded-3xl border border-teal-400/30 bg-[#172e30] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.35)] sm:p-6">
        <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br from-teal-400/15 to-orange-400/15 blur-xl" aria-hidden="true" />
        <div className="overflow-hidden rounded-2xl bg-[#0d1b1e]">
          <img src="/advertising-pos-screen.jpg" alt="Rio Grande Refresh advertisement displayed on an actual PAX vending cooler payment screen" className="w-full object-contain" />
        </div>
        <p className="muted mt-4 text-center text-xs">Actual Rio Grande Refresh digital advertising screen</p>
      </div>
    </div>
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

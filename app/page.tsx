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

      <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-5 text-sm"><a href="#solutions">Our solutions</a><a href="#how-it-works">How it works</a><a className="nav-cta" href="#contact">Let’s talk <Arrow /></a></nav>
    </header>
    <main id="main">
      <section className="shell hero grid items-center gap-10 lg:grid-cols-2">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> NEW MEXICO ROOTS. A FRESHER FUTURE.</p>
          <h1>Modern Machines.<br /><span className="sunset-text">Everyday Essentials.</span></h1>
          <p className="hero-description">AI-powered vending and smart coolers for the places New Mexico works. Good things to grab. One less thing to manage.</p>
          <div className="flex flex-wrap gap-4"><a className="button button-orange" href="#contact">Refresh your workplace <Arrow /></a><a className="button button-outline" href="#solutions">Explore the possibilities</a></div>
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
      <section id="how-it-works" className="process-section"><div className="shell section-space"><p className="eyebrow">LESS FRICTION. MORE REFRESHMENT.</p><h2>Your next great break<br />starts here.</h2><div className="grid gap-9 md:grid-cols-3 mt-12">{[
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
<section className="shell section-space" aria-label="Businesses we serve">
  <div className="section-heading">
    <p className="eyebrow">TRUSTED LOCAL PARTNERS</p>
    <h2>Proudly Serving New Mexico Businesses</h2>
    <p>Bringing convenient refreshments to workplaces across New Mexico.</p>
  </div>
  <div className="overflow-hidden py-8">
    <div className="flex w-max items-center gap-6 animate-[clientScroll_24s_linear_infinite] motion-reduce:animate-none">
      {Array.from({ length: 4 }).flatMap((_, group) =>
       
([
  { name: "CTS", logo: "/CTS%20Logo.png" },
  { name: "NORC", logo: "/NORCLogo_Short_Color-1.png" },
  { name: "THE HOME DEPOT", logo: "/Home-Depot-Logo-PNG-Photos.png" }
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
      <section id="contact" className="shell contact-wrap"><div className="contact-panel"><p className="eyebrow">LET’S BRING SOMETHING FRESH TO YOUR SPACE</p><h2>Ready for a<br />better break?</h2><p>Let’s talk about your business and what’s possible.</p><div className="flex flex-wrap items-center gap-5"><a className="button button-dark" href={`mailto:${email}?subject=Refresh%20my%20workplace`}>Start a conversation <Arrow /></a><a className="font-bold" href="tel:+15059200299">(505) 920-0299</a></div><a className="inline-block mt-5 text-sm break-all" href={`mailto:${email}`}>{email}</a></div></section>
    </main>
    <footer className="shell flex flex-wrap justify-between items-center gap-6 py-9"><a className="wordmark" href="#">RIO GRANDE <small>REFRESH</small></a><p className="text-sm muted">© {new Date().getFullYear()} Rio Grande Refresh · New Mexico</p><a className="text-sm" href="#main">Back to top ↑</a></footer>
  </>;
}

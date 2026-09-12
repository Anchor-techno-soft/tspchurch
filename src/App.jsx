import React from "react";
import { useState } from "react";
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone, Mail, ArrowRight, Cross, Clock, ChevronRight } from "lucide-react";
import { church, saints, founders, clergy, churchTimeline } from "./data";
// import { church, saints, founders, clergy, churchTimeline } from "./data";

const navItems = [
  ["/", "Home"],
  ["/saint-history", "Saint History"],
  ["/church-history", "Church History"],
  ["/founder-history", "Founder History"],
  ["/fathers-sisters", "Fathers & Sisters"]
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span><Clock size={14}/> Sunday Mass • 7:00 AM & 9:00 AM</span>
          <a href={`tel:${church.phone}`}><Phone size={14}/> {church.phone}</a>
        </div>
      </div>
      <div className="nav-wrap">
        <div className="container navbar">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark"><Cross size={24}/></span>
            <span><strong>{church.shortName}</strong><small>Heritage • Faith • Service</small></span>
          </Link>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X/> : <Menu/>}
          </button>
          <nav className={open ? "nav open" : "nav"}>
            {navItems.map(([to, label]) => (
              <NavLink key={to} to={to} className={({isActive}) => isActive ? "active" : ""} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
            <Link className="nav-cta" to="/#visit" onClick={() => setOpen(false)}>Visit Us <ArrowRight size={16}/></Link>
          </nav>
        </div>
      </div>
      {location.hash && <div />}
    </header>
  );
}

function Footer() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${church.latitude},${church.longitude}`;
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <div className="brand footer-brand">
            <span className="brand-mark"><Cross size={24}/></span>
            <span><strong>{church.shortName}</strong><small>Heritage • Faith • Service</small></span>
          </div>
          <p>A welcoming community preserving its history while serving the generations of today and tomorrow.</p>
        </div>
        <div>
          <h4>Explore</h4>
          {navItems.slice(1).map(([to,label]) => <Link key={to} to={to}>{label}</Link>)}
        </div>
        <div>
          <h4>Contact</h4>
          <a href={`tel:${church.phone}`}><Phone size={15}/> {church.phone}</a>
          <a href={`mailto:${church.email}`}><Mail size={15}/> {church.email}</a>
          <span><MapPin size={15}/> {church.address}</span>
        </div>
        <div className="coordinates">
          <h4>Church Location</h4>
          <div className="coord-row"><span>Latitude</span><strong>{church.latitude.toFixed(6)}°</strong></div>
          <div className="coord-row"><span>Longitude</span><strong>{church.longitude.toFixed(6)}°</strong></div>
          <a className="map-link" href={mapUrl} target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight size={15}/></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {church.name}. All rights reserved.</span>
        <span>Built with faith & purpose.</span>
      </div>
    </footer>
  );
}

function Layout({children}) {
  return <><Header/><main>{children}</main><Footer/></>;
}

function PageHero({eyebrow, title, text, image}) {
  return (
    <section className="page-hero" style={{backgroundImage: `linear-gradient(90deg, rgba(27,18,15,.86), rgba(27,18,15,.48)), url(${image})`}}>
      <div className="container page-hero-content">
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

function SectionTitle({eyebrow, title, text, center=false}) {
  return <div className={`section-title ${center ? "center" : ""}`}>
    <span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}
  </div>;
}

// function Home() {
//   return (
//     <>
//       <section className="hero">
//         <div className="hero-overlay"/>
//         <div className="container hero-content">
//           <span className="eyebrow light">A living heritage of faith</span>
//           <h1>Rooted in history.<br/><em>Growing in faith.</em></h1>
//           <p>{church.tagline}. Discover the people, stories and milestones that shaped our church community.</p>
//           <div className="hero-actions">
//             <Link className="button primary" to="/church-history">Explore Our History <ArrowRight size={17}/></Link>
//             <Link className="button ghost" to="/fathers-sisters">Meet Our Community</Link>
//           </div>
//         </div>
//         <div className="hero-scroll">Scroll to explore <ChevronRight size={16}/></div>
//       </section>

//       <section className="section intro">
//         <div className="container split">
//           <div>
//             <span className="eyebrow">Welcome</span>
//             <h2>A place where generations meet.</h2>
//             <p>For decades, this church has been a place of prayer, celebration, learning and service. Our story is carried by every family, pastor, sister and volunteer who has served here.</p>
//             <Link className="text-link" to="/church-history">Read the church story <ArrowRight size={16}/></Link>
//           </div>
//           <div className="quote-card">
//             <Cross size={27}/>
//             <blockquote>“Faith is not only something we inherit; it is something we live, share and pass forward.”</blockquote>
//             <span>— Parish Community</span>
//           </div>
//         </div>
//       </section>

//       <section className="section soft">
//         <div className="container">
//           <SectionTitle eyebrow="Our heritage" title="Stories that continue to inspire" text="Explore the people and milestones behind our community." center/>
//           <div className="feature-grid">
//             <FeatureCard title="Saint History" text="Discover the life, mission and legacy of saints who inspire our faith." to="/saint-history" image={saints[0].image}/>
//             <FeatureCard title="Church History" text="Walk through the important milestones that shaped our parish." to="/church-history" image="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80"/>
//             <FeatureCard title="Founder History" text="Learn about the vision and service of our founding pastor." to="/founder-history" image={founders[0].image}/>
//           </div>
//         </div>
//       </section>

//       <section className="section people-preview">
//         <div className="container">
//           <SectionTitle eyebrow="Our people" title="Those who serve our community" text="Meet our fathers and sisters who continue the mission of service."/>
//           <div className="people-row">
//             {clergy.slice(0,3).map(person => <PersonCard key={person.id} person={person}/>)}
//           </div>
//           <div className="center-action"><Link className="button outline" to="/fathers-sisters">View all fathers & sisters <ArrowRight size={16}/></Link></div>
//         </div>
//       </section>

//       <LocationSection/>
//     </>
//   );
// }

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />

        <div className="container hero-content">
          <span className="eyebrow light">
            A LIFE OF LOVE • அன்பின் வாழ்க்கை
          </span>

          <h1>
            Little in the world.
            <br />
            <em>Great in God's love.</em>
          </h1>

          <p className="hero-bilingual">
            Discover the life and spirituality of St. Thérèse of the Child
            Jesus, the Little Flower.
            <br />
            <span>
              சிறிய மலராக வாழ்ந்து, இறைவனின் அன்பில் பெரியவரான புனித
              குழந்தை இயேசுவின் தெரேசாவின் வாழ்க்கையையும் ஆன்மீகத்தையும்
              அறிந்துகொள்வோம்.
            </span>
          </p>

          <div className="hero-actions">
            <Link className="button primary" to="/saint-history">
              Discover Her Life <ArrowRight size={17} />
            </Link>

            <Link className="button ghost" to="/church-history">
              Our Church History
            </Link>
          </div>
        </div>

        <div className="hero-scroll">
          Scroll to explore <ChevronRight size={16} />
        </div>
      </section>

      <section className="section intro">
        <div className="container split">
          <div>
            <span className="eyebrow">
              Welcome • வரவேற்பு
            </span>

            <h2>
              A simple life.
              <br />
              A powerful witness.
            </h2>

            <p>
              St. Thérèse of the Child Jesus teaches us that holiness is not
              only found in great achievements, but also in small acts of
              love, humility, prayer and trust in God.
            </p>

            <p className="tamil-text">
              புனித குழந்தை இயேசுவின் தெரேசா, பெரிய சாதனைகளில் மட்டுமல்ல,
              சிறிய அன்புச் செயல்கள், தாழ்மை, ஜெபம் மற்றும் இறைவன் மீதான
              நம்பிக்கையிலும் புனிதத்தைக் காணலாம் என்று நமக்கு கற்றுத்
              தருகிறார்.
            </p>

            <Link className="text-link" to="/saint-history">
              Read Saint Thérèse's Story <ArrowRight size={16} />
            </Link>
          </div>

          <div className="quote-card">
            <Cross size={27} />

            <blockquote>
              “Little things done with great love can become a beautiful
              offering to God.”
            </blockquote>

            <p className="quote-tamil">
              “பெரிய அன்புடன் செய்யப்படும் சிறிய செயல்களும் இறைவனுக்கு
              அழகான அர்ப்பணிப்பாக மாறும்.”
            </p>

            <span>
              St. Thérèse of the Child Jesus
              <br />
              புனித குழந்தை இயேசுவின் தெரேசா
            </span>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionTitle
            eyebrow="Saint Thérèse • புனித தெரேசா"
            title="A life that continues to inspire"
            text="Discover the important moments of St. Thérèse's life, her spirituality and the legacy she left to the Church."
            center
          />

          <div className="feature-grid">
            <FeatureCard
              title="Saint History"
              text="Birth, childhood, Carmelite life, death, canonization and spiritual legacy of St. Thérèse."
              to="/saint-history"
              image={saints[0].image}
            />

            <FeatureCard
              title="Church History"
              text="Walk through the important milestones that shaped our parish community."
              to="/church-history"
              image="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80"
            />

            <FeatureCard
              title="Founder History"
              text="Learn about the vision and service of our founding pastor."
              to="/founder-history"
              image={founders[0].image}
            />
          </div>
        </div>
      </section>

      <section className="section saint-message">
        <div className="container saint-message-grid">
          <div>
            <span className="eyebrow">
              Her Spirituality • அவரது ஆன்மீகம்
            </span>

            <h2>
              The Little Way
              <br />
              <span>சிறிய வழி</span>
            </h2>

            <p>
              St. Thérèse believed that we can become holy by doing ordinary
              things with extraordinary love.
            </p>

            <p className="tamil-text">
              சாதாரண செயல்களை அசாதாரணமான அன்புடன் செய்வதன் மூலம் நாம்
              புனிதத்தன்மையில் வளர முடியும் என்று புனித தெரேசா நம்பினார்.
            </p>

            <Link className="button outline" to="/saint-history">
              Explore Her Teachings <ArrowRight size={16} />
            </Link>
          </div>

          <div className="saint-facts">
            <div>
              <strong>1873</strong>
              <span>Born • பிறப்பு</span>
            </div>

            <div>
              <strong>1897</strong>
              <span>Died • இறப்பு</span>
            </div>

            <div>
              <strong>1925</strong>
              <span>Canonized • புனிதர் பட்டம்</span>
            </div>

            <div>
              <strong>1997</strong>
              <span>Doctor of the Church • மறைவல்லுநர்</span>
            </div>
          </div>
        </div>
      </section>

      <LocationSection />
    </>
  );
}

function FeatureCard({title,text,to,image}) {
  return <Link className="feature-card" to={to}>
    <img src={image} alt="" />
    <div className="feature-content"><span className="eyebrow light">Discover</span><h3>{title}</h3><p>{text}</p><span className="card-arrow">Explore <ArrowRight size={16}/></span></div>
  </Link>;
}

function PersonCard({person}) {
  return <article className="person-card">
    <img src={person.image} alt={person.name}/>
    <div><span>{person.role}</span><h3>{person.name}</h3><p>{person.service}</p></div>
  </article>;
}

// function SaintHistory() {
//   const saint = saints[0];
//   return <>
//     <PageHero eyebrow="Lives of faith" title="Saint History" text="Stories of courage, compassion and devotion that continue to guide generations." image={saint.image}/>
//     <section className="section">
//       <div className="container detail-grid">
//         <div className="portrait"><img src={saint.image} alt={saint.name}/><div className="portrait-caption"><strong>{saint.name}</strong><span>{saint.years}</span></div></div>
//         <div><SectionTitle eyebrow="A life of service" title={saint.name} text={saint.summary}/><p>His missionary journey remains a reminder that faith can cross languages, cultures and borders. Use this page as a reusable template for adding more saints, biographies, photographs and historical sources.</p></div>
//       </div>
//     </section>
//     <Timeline items={saint.timeline}/>
//     <section className="section soft"><div className="container"><SectionTitle eyebrow="More inspiration" title="Another life of service" center/><div className="feature-grid two">{saints.slice(1).map(s=><FeatureCard key={s.id} title={s.name} text={s.summary} to="/saint-history" image={s.image}/>)}</div></div></section>
//   </>;
// }

function SaintHistory() {
  const saint = saints[0];

  return (
    <>
      <PageHero
        eyebrow="Saint History • புனிதர் வரலாறு"
        title="St. Thérèse of the Child Jesus"
        text="A life of love, humility, prayer and complete trust in God."
        image={saint.image}
      />

      {/* Introduction */}
      <section className="section">
        <div className="container saint-introduction">
          <div className="portrait">
            <img src={saint.image} alt={saint.name} />

            <div className="portrait-caption">
              <strong>{saint.name}</strong>
              <span>1873 – 1897</span>
              <small>St. Thérèse of Lisieux • The Little Flower</small>
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow="Who is St. Thérèse?"
              title="A young saint with a great love for God"
              text={saint.summary}
            />

            <p className="tamil-text">
              {saint.tamilSummary}
            </p>

            <div className="saint-name-box">
              <strong>
                St. Thérèse of the Child Jesus and the Holy Face
              </strong>

              <span>
                புனித குழந்தை இயேசுவும் பரிசுத்த முகமும் உடைய தெரேசா
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Birth and Family */}
      <section className="section soft">
        <div className="container">
          <SectionTitle
            eyebrow="01 • Birth"
            title="Birth and Family"
            text="பிறப்பு மற்றும் குடும்பம்"
            center
          />

          <div className="bilingual-points">
            <div className="bilingual-point">
              <div className="point-number">01</div>

              <div>
                <h3>Birth • பிறப்பு</h3>

                <p>
                  <strong>English:</strong>{" "}
                  Thérèse Martin was born on 2 January 1873 in Alençon,
                  France.
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  தெரேசா மார்ட்டின் 2 ஜனவரி 1873 அன்று பிரான்சின்
                  அலென்சோன் நகரில் பிறந்தார்.
                </p>
              </div>
            </div>

            <div className="bilingual-point">
              <div className="point-number">02</div>

              <div>
                <h3>Her Parents • பெற்றோர்</h3>

                <p>
                  <strong>English:</strong>{" "}
                  Her parents were Louis Martin and Zélie Guérin Martin,
                  who were later canonized as saints.
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  அவரது பெற்றோர் லூயி மார்ட்டின் மற்றும் செலி குரேன்
                  மார்ட்டின் ஆவர். பின்னர் இருவரும் புனிதர்களாக
                  அறிவிக்கப்பட்டனர்.
                </p>
              </div>
            </div>

            <div className="bilingual-point">
              <div className="point-number">03</div>

              <div>
                <h3>Family Life • குடும்ப வாழ்க்கை</h3>

                <p>
                  <strong>English:</strong>{" "}
                  Thérèse grew up in a deeply Christian family and was
                  surrounded by prayer, love and faith.
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  தெரேசா ஆழமான கிறிஸ்தவ குடும்பத்தில் வளர்ந்தார். ஜெபம்,
                  அன்பு மற்றும் விசுவாசம் நிறைந்த சூழலில் அவரது குழந்தைப்
                  பருவம் அமைந்தது.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Childhood */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="02 • Childhood"
            title="Childhood and Spiritual Growth"
            text="குழந்தைப் பருவமும் ஆன்மீக வளர்ச்சியும்"
            center
          />

          <div className="bilingual-points">
            <div className="bilingual-point">
              <div className="point-number">01</div>

              <div>
                <h3>Loss of Her Mother • தாயை இழந்தது</h3>

                <p>
                  <strong>English:</strong>{" "}
                  When Thérèse was four years old, her mother died.
                  The family later moved from Alençon to Lisieux.
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  தெரேசாவுக்கு நான்கு வயதாக இருந்தபோது அவரது தாய்
                  காலமானார். பின்னர் குடும்பம் அலென்சோனிலிருந்து
                  லிசியூவிற்கு குடிபெயர்ந்தது.
                </p>
              </div>
            </div>

            <div className="bilingual-point">
              <div className="point-number">02</div>

              <div>
                <h3>Love for Mary • மரியாளின் மீது அன்பு</h3>

                <p>
                  <strong>English:</strong>{" "}
                  During a serious illness, Thérèse experienced what
                  she understood as a special grace through the smile
                  of the Virgin Mary.
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  கடுமையான நோயின் போது, கன்னி மரியாவின் புன்னகையின்
                  மூலம் ஒரு சிறப்பு அருளை பெற்றதாக தெரேசா உணர்ந்தார்.
                </p>
              </div>
            </div>

            <div className="bilingual-point">
              <div className="point-number">03</div>

              <div>
                <h3>Spiritual Conversion • ஆன்மீக மனமாற்றம்</h3>

                <p>
                  <strong>English:</strong>{" "}
                  At fourteen, Thérèse experienced a profound spiritual
                  conversion and began to mature greatly in her faith.
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  பதினான்கு வயதில் தெரேசா ஆழமான ஆன்மீக மனமாற்றத்தை
                  அனுபவித்து, விசுவாசத்தில் குறிப்பிடத்தக்க வளர்ச்சியை
                  அடைந்தார்.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carmelite Life */}
      <section className="section soft">
        <div className="container">
          <SectionTitle
            eyebrow="03 • Religious Life"
            title="Life in the Carmelite Convent"
            text="கார்மேல் துறவற வாழ்க்கை"
            center
          />

          <div className="bilingual-points">
            <div className="bilingual-point">
              <div className="point-number">01</div>

              <div>
                <h3>Entering Carmel • கார்மேலில் இணைதல்</h3>

                <p>
                  <strong>English:</strong>{" "}
                  At the age of fifteen, Thérèse entered the Carmelite
                  monastery at Lisieux.
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  பதினைந்து வயதில் தெரேசா லிசியூ கார்மேல் மடத்தில்
                  துறவற வாழ்க்கைக்காக இணைந்தார்.
                </p>
              </div>
            </div>

            <div className="bilingual-point">
              <div className="point-number">02</div>

              <div>
                <h3>Complete Dedication • முழு அர்ப்பணிப்பு</h3>

                <p>
                  <strong>English:</strong>{" "}
                  She dedicated herself completely to God through prayer,
                  obedience, humility and sacrifice.
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  ஜெபம், கீழ்ப்படிதல், தாழ்மை மற்றும் தியாகத்தின் மூலம்
                  தன்னை முழுமையாக இறைவனுக்கு அர்ப்பணித்தார்.
                </p>
              </div>
            </div>

            <div className="bilingual-point">
              <div className="point-number">03</div>

              <div>
                <h3>The Little Way • சிறிய வழி</h3>

                <p>
                  <strong>English:</strong>{" "}
                  Thérèse developed her “Little Way” — trusting in God's
                  mercy and offering small acts of love.
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  இறைவனின் இரக்கத்தின் மீது நம்பிக்கை வைத்து, சிறிய
                  அன்புச் செயல்களை அர்ப்பணிப்பதே அவரது “சிறிய வழி”
                  ஆனது.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spirituality */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="04 • Spirituality"
            title="The Spirituality of St. Thérèse"
            text="புனித தெரேசாவின் ஆன்மீகம்"
            center
          />

          <div className="cards four">
            {saint.teachings.map((teaching, index) => (
              <article className="card" key={teaching.title}>
                <span className="number">
                  0{index + 1}
                </span>

                <h3>{teaching.title}</h3>

                <p>
                  <strong>English:</strong>{" "}
                  {teaching.english}
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  {teaching.tamil}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Illness and Death */}
      <section className="section soft">
        <div className="container">
          <SectionTitle
            eyebrow="05 • Final Years"
            title="Illness, Faith and Death"
            text="நோய், விசுவாசம் மற்றும் இறப்பு"
            center
          />

          <div className="bilingual-points">
            <div className="bilingual-point">
              <div className="point-number">01</div>

              <div>
                <h3>Illness • நோய்</h3>

                <p>
                  <strong>English:</strong>{" "}
                  In her final years, Thérèse suffered from tuberculosis
                  and became seriously ill.
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  தனது இறுதி ஆண்டுகளில் தெரேசா காசநோயால் பாதிக்கப்பட்டு,
                  மிகவும் கடுமையான உடல்நலக் குறைவை அனுபவித்தார்.
                </p>
              </div>
            </div>

            <div className="bilingual-point">
              <div className="point-number">02</div>

              <div>
                <h3>Trust in God • இறைவன் மீது நம்பிக்கை</h3>

                <p>
                  <strong>English:</strong>{" "}
                  Even during suffering and spiritual trial, she continued
                  to place her trust in God's mercy.
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  துன்பத்திலும் ஆன்மீக சோதனையிலும் கூட, இறைவனின்
                  இரக்கத்தின் மீது தனது நம்பிக்கையை தொடர்ந்து வைத்திருந்தார்.
                </p>
              </div>
            </div>

            <div className="bilingual-point">
              <div className="point-number">03</div>

              <div>
                <h3>Death • இறப்பு</h3>

                <p>
                  <strong>English:</strong>{" "}
                  St. Thérèse died on 30 September 1897 at the age of
                  twenty-four in the Carmelite monastery at Lisieux.
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  புனித தெரேசா 30 செப்டம்பர் 1897 அன்று, தனது 24வது
                  வயதில், லிசியூ கார்மேல் மடத்தில் இறைவனில் நித்திரை
                  அடைந்தார்.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canonization */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="06 • Sainthood"
            title="From Blessed to Saint"
            text="அருளாளரிலிருந்து புனிதராக"
            center
          />

          <div className="saint-milestones">
            <article>
              <span>1923</span>

              <h3>Beatification • அருளாளர் பட்டம்</h3>

              <p>
                <strong>English:</strong>{" "}
                Thérèse was beatified on 29 April 1923 by Pope Pius XI.
              </p>

              <p className="tamil-text">
                <strong>தமிழ்:</strong>{" "}
                29 ஏப்ரல் 1923 அன்று திருத்தந்தை பதினொன்றாம் பயஸ்
                அவர்களால் தெரேசா அருளாளராக அறிவிக்கப்பட்டார்.
              </p>
            </article>

            <article>
              <span>1925</span>

              <h3>Canonization • புனிதர் பட்டம்</h3>

              <p>
                <strong>English:</strong>{" "}
                On 17 May 1925, Pope Pius XI canonized Thérèse as a saint
                of the Catholic Church in Rome.
              </p>

              <p className="tamil-text">
                <strong>தமிழ்:</strong>{" "}
                17 மே 1925 அன்று ரோமில் திருத்தந்தை பதினொன்றாம் பயஸ்
                அவர்களால் தெரேசா கத்தோலிக்க திருச்சபையின் புனிதராக
                அறிவிக்கப்பட்டார்.
              </p>
            </article>

            <article>
              <span>1997</span>

              <h3>Doctor of the Church • மறைவல்லுநர்</h3>

              <p>
                <strong>English:</strong>{" "}
                In 1997, Pope John Paul II declared St. Thérèse a Doctor
                of the Church.
              </p>

              <p className="tamil-text">
                <strong>தமிழ்:</strong>{" "}
                1997ஆம் ஆண்டு திருத்தந்தை இரண்டாம் ஜான் பால் அவர்கள்
                புனித தெரேசாவை திருச்சபையின் மறைவல்லுநராக அறிவித்தார்.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Complete Timeline */}
      <section className="section soft">
        <div className="container">
          <SectionTitle
            eyebrow="Complete Timeline • முழு காலவரிசை"
            title="The Journey of St. Thérèse"
            text="புனித தெரேசாவின் வாழ்க்கைப் பயணம்"
            center
          />

          <div className="saint-timeline">
            {saint.timeline.map((item, index) => (
              <div className="saint-timeline-item" key={item.year}>
                <div className="timeline-year">
                  {item.year}
                </div>

                <div className="timeline-dot" />

                <div className="timeline-content">
                  <h3>{item.title}</h3>

                  <h4>{item.tamilTitle}</h4>

                  <p>
                    <strong>English:</strong>{" "}
                    {item.english}
                  </p>

                  <p className="tamil-text">
                    <strong>தமிழ்:</strong>{" "}
                    {item.tamil}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="section saint-legacy">
        <div className="container">
          <SectionTitle
            eyebrow="Legacy • மரபு"
            title="Her message continues today"
            text="அவரது செய்தி இன்றும் நம்மை வழிநடத்துகிறது"
            center
          />

          <div className="legacy-message">
            <Cross size={32} />

            <h2>
              Love God in the little things.
            </h2>

            <h3>
              சிறிய செயல்களில் இறைவனை அன்பு செய்யுங்கள்.
            </h3>

            <p>
              St. Thérèse reminds us that every person can grow in holiness
              through love, humility, prayer and trust.
            </p>

            <p className="tamil-text">
              அன்பு, தாழ்மை, ஜெபம் மற்றும் நம்பிக்கையின் மூலம் ஒவ்வொருவரும்
              புனிதத்தன்மையில் வளர முடியும் என்பதை புனித தெரேசா நமக்கு
              நினைவூட்டுகிறார்.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Timeline({items}) {
  return <section className="section timeline-section soft"><div className="container"><SectionTitle eyebrow="Timeline" title="Milestones along the journey" center/><div className="timeline">{items.map(([year,text])=><div className="timeline-item" key={year}><div className="timeline-year">{year}</div><div className="timeline-dot"/><div className="timeline-text"><p>{text}</p></div></div>)}</div></div></section>;
}

function ChurchHistory() {
  return <>
    <PageHero eyebrow="Our story" title="Church History" text="A timeline of faith, community and service." image="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1800&q=85"/>
    <section className="section"><div className="container narrow"><SectionTitle eyebrow="From a small beginning" title="A heritage built by many hands" text="Every generation has added a chapter to our parish story. This template gives you space to replace the sample milestones below with your verified historical records."/><p>Our church began with a simple vision: to create a place where people could gather in prayer, celebrate the sacraments and serve the wider community. Over the years, the parish grew alongside the people it serves.</p></div></section>
    <Timeline items={churchTimeline}/>
    <section className="section"><div className="container split history-callout"><div><span className="eyebrow">Preserving memory</span><h2>History is more than dates.</h2><p>Photographs, documents, testimonies and family stories help future generations understand where the community came from.</p></div><img src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092?auto=format&fit=crop&w=1200&q=80" alt="Church interior"/></div></section>
  </>;
}

function FounderHistory() {
  const founder = founders[0];
  return <>
    <PageHero eyebrow="Our beginning" title="Founder History" text="Meet the person whose vision helped shape the community." image={founder.image}/>
    <section className="section"><div className="container detail-grid"><div className="portrait"><img src={founder.image} alt={founder.name}/><div className="portrait-caption"><strong>{founder.name}</strong><span>{founder.years}</span></div></div><div><SectionTitle eyebrow={founder.role} title={founder.name} text={founder.bio}/><p>Use this section to publish the founder's complete biography, education, pastoral appointments, community initiatives, photographs and archival references.</p><div className="info-list"><div><strong>Role</strong><span>{founder.role}</span></div><div><strong>Service</strong><span>{founder.years}</span></div><div><strong>Legacy</strong><span>Prayer • Education • Service</span></div></div></div></div></section>
    <section className="section soft"><div className="container"><SectionTitle eyebrow="Founder legacy" title="A vision that became a community" center/><div className="legacy-grid"><div><span>01</span><h3>Faith</h3><p>Creating a strong spiritual foundation for families.</p></div><div><span>02</span><h3>Education</h3><p>Encouraging learning and formation for young people.</p></div><div><span>03</span><h3>Service</h3><p>Building a culture of practical care for neighbours.</p></div></div></div></section>
  </>;
}

function FathersSisters() {
  const [query,setQuery] = useState("");
  const filtered = clergy.filter(p => `${p.name} ${p.role}`.toLowerCase().includes(query.toLowerCase()));
  return <>
    <PageHero eyebrow="Our community" title="Fathers & Sisters" text="The people who serve, guide and accompany our parish community." image="https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=1800&q=85"/>
    <section className="section"><div className="container"><div className="directory-head"><SectionTitle eyebrow="Community directory" title="Our fathers & sisters" text="A reusable directory layout for current and former clergy and religious sisters."/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by name or role…" aria-label="Search people"/></div><div className="directory-grid">{filtered.map(person=><PersonCard key={person.id} person={person}/>)}</div>{filtered.length===0&&<div className="empty">No matching person found.</div>}</div></section>
  </>;
}

function LocationSection() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${church.latitude},${church.longitude}`;
  return <section id="visit" className="location-section"><div className="container location-grid"><div><span className="eyebrow light">Visit us</span><h2>Come and be part of our community.</h2><p>{church.address}</p><div className="coords-large"><div><span>Latitude</span><strong>{church.latitude.toFixed(6)}°</strong></div><div><span>Longitude</span><strong>{church.longitude.toFixed(6)}°</strong></div></div><a className="button primary" href={mapUrl} target="_blank" rel="noreferrer">Open Location <MapPin size={17}/></a></div><div className="map-placeholder"><MapPin size={34}/><strong>Church Location</strong><span>{church.latitude.toFixed(6)}, {church.longitude.toFixed(6)}</span><a href={mapUrl} target="_blank" rel="noreferrer">View on Google Maps <ArrowRight size={15}/></a></div></div></section>;
}

function App() {
  return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/saint-history" element={<SaintHistory/>}/><Route path="/church-history" element={<ChurchHistory/>}/><Route path="/founder-history" element={<FounderHistory/>}/><Route path="/fathers-sisters" element={<FathersSisters/>}/><Route path="*" element={<Home/>}/></Routes></Layout>;
}

export default App;
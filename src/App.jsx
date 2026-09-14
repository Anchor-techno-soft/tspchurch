import React from "react";
import { useState } from "react";
import father1 from "./images/st-therese.jpg";
import FounderPic from "./images/fr-paul.jpeg";
import ChurchPic from "./images/tsp-church.jpeg";
import MartinSanthaKumar from "./images/Rev.Fr.D. Martin Santha Kumar.jpeg";
import IruthayaRaj from "./images/Rev.Fr.J. Iruthaya Raj.jpeg";
import DanialSarma from "./images/Rev.Fr.P. Danial Sarma.jpeg";
import LeoMariyaJoseph from "./images/Rev.Fr.P. Leo Mariya Joseph.jpeg";
import Jayanthi from "./images/Sr.A. Jayanthi, FSJ.jpeg";
import ReginaMary from "./images/Sr.A.Regina Mary.jpeg";
import AmirthamJuli from "./images/Sr.D. Amirtham Juli.jpeg";
import AvilaTheresa from "./images/Sr.D. Avila Theresa, FSJ.jpeg";
import LillyJacob from "./images/Sr.J.Lilly Jacob.jpeg";
import SophieJacob from "./images/Sr.J.Sophie Jacob.jpeg";
import JennateRani from "./images/Sr.M. Jennate Rani.jpeg";
import SophiaVasanthaKumari from "./images/Sr.M. Sophia Vasantha Kumari.jpeg";
import MariyaSarpirasatham from "./images/Sr.Mariya Sarpirasatham.jpeg";
import PushpaLatha from "./images/Sr.Pushpa Latha.jpeg";
import imagesProfile from "./images/images.jpg";
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone, Mail, ArrowRight, Cross, Clock, ChevronRight } from "lucide-react";
// import { church, saints, founders, clergy, churchTimeline } from "./data";
import {
  church,
  saints,
  founders,
  clergy,
  churchTimeline,
  parishFathers
} from "./data";


const navItems = [
  ["/", "Home"],
  ["/saint-history", "Saint History"],
  ["/church-history", "Church History"],
  ["/founder-history", "Founder History"],
  ["/fathers-sisters", "Fathers & Sisters"]
];

// ======================================================
// THERESAPURAM PARISH HISTORY
// Verified from the historical pages provided
// ======================================================

const theresapuramPriests = [
  {
    id: 1,
    name: "Fr. S. T. Paul",
    period: "Early Missionary Period",
    role: "Missionary Priest",
    contribution:
      "Fr. S. Paul developed the area where Theresapuram now stands. What was once a forest was gradually developed into a village of around 30 families, and a chapel was built there.",
    contributionTamil:
      "இன்று தேரேசாபுரம் அமைந்துள்ள பகுதியை அருட்தந்தை எஸ். டி. பால் அவர்கள் வளர்ச்சியடையச் செய்தார். முன்பு காடாக இருந்த இப்பகுதி படிப்படியாக சுமார் 30 குடும்பங்கள் வாழும் கிராமமாக வளர்ந்து, அங்கு ஒரு சிற்றாலயமும் கட்டப்பட்டது.",
    details: [
      "He was a great Indian missionary.",
      "He paid special attention to the spiritual and material development of the people.",
      "He helped establish the early Christian community at Theresapuram."
    ]
  },
  {
    id: 2,
    name: "Fr. V. C. Joseph",
    period: "After Fr. S. Paul",
    role: "Parish Priest",
    contribution:
      "After serving the people for many years, Fr. V. C. Joseph continued the pastoral work and strengthened the faith of the growing parish community.",
    contributionTamil:
      "அருட்தந்தை எஸ். டி. பால் அவர்களின் பணிக்குப் பிறகு, அருட்தந்தை வி. சி. ஜோசப் அவர்கள் மக்களுக்கு இறைபணியாற்றி, வளர்ந்து வந்த பங்கின் விசுவாச வாழ்க்கையை தொடர்ந்து வலுப்படுத்தினார்.",
    details: [
      "He served the people of Theresapuram for about four years.",
      "He continued the work of his predecessors."
    ]
  },
  {
    id: 3,
    name: "Fr. P. Vanathan",
    period: "28 May 1976",
    role: "Parish Priest",
    contribution:
      "Fr. P. Vanathan was installed as Parish Priest on 28 May 1976. He continued the pastoral work and aimed at the continued growth of the mission.",
    contributionTamil:
      "அருட்தந்தை பி. வனத்தான் அவர்கள் 28 மே 1976 அன்று பங்குத்தந்தையாக பொறுப்பேற்றார். முன்னோர்களின் பணியை தொடர்ந்து செய்து, பங்கின் வளர்ச்சியை நோக்கமாகக் கொண்டார்.",
    details: [
      "Installed as Parish Priest on 28 May 1976.",
      "Continued the pastoral work of his predecessors.",
      "Worked towards the growth of the mission.",
      "The historical record notes the need for the parish to be bifurcated as the needs of the people increased."
    ]
  }
];


// ======================================================
// DEVELOPMENTS / INSTITUTIONS OF THERESAPURAM PARISH
// ======================================================

const theresapuramDevelopments = [
  {
    title: "Parish Established",
    tamil: "பங்கு நிறுவப்பட்டது",
    year: "1958",
    description:
      "His Lordship David Marianayagam made Theresapuram a Parish in 1958.",
    tamilDescription:
      "ஆயர் டேவிட் மரியநாயகம் அவர்கள் 1958 ஆம் ஆண்டு தேரேசாபுரத்தை பங்காக நிறுவினார்."
  },
  {
    title: "Chapel and Village Development",
    tamil: "சிற்றாலயம் மற்றும் கிராம வளர்ச்சி",
    year: "Early Development",
    description:
      "Fr. S. Paul transformed the forest area into a growing village and built a chapel for the Catholic community.",
    tamilDescription:
      "அருட்தந்தை எஸ். டி. பால் அவர்கள் காடாக இருந்த பகுதியை வளர்ந்து வரும் கிராமமாக மாற்றி, கத்தோலிக்க மக்களுக்காக ஒரு சிற்றாலயத்தை கட்டினார்."
  },
  {
    title: "Primary School",
    tamil: "தொடக்கப்பள்ளி",
    year: "Parish Development",
    description:
      "A Primary School became one of the institutions functioning in Theresapuram.",
    tamilDescription:
      "தேரேசாபுரத்தில் செயல்பட்ட நிறுவனங்களில் ஒரு தொடக்கப்பள்ளியும் இடம்பெற்றது."
  },
  {
    title: "St. Teresa's Convent",
    tamil: "புனித தெரேசா கன்னியர் மடம்",
    year: "Parish Development",
    description:
      "St. Teresa's Convent became one of the important institutions serving the parish community.",
    tamilDescription:
      "பங்குச் சமூகத்திற்கு சேவை செய்த முக்கிய நிறுவனங்களில் புனித தெரேசா கன்னியர் மடமும் ஒன்றாக இருந்தது."
  },
  {
    title: "St. Anne's Home for the Aged",
    tamil: "புனித அன்னாள் முதியோர் இல்லம்",
    year: "Parish Development",
    description:
      "St. Anne's Home for the Aged was established as an institution serving elderly people.",
    tamilDescription:
      "முதியோருக்கு சேவை செய்யும் நிறுவனமாக புனித அன்னாள் முதியோர் இல்லம் செயல்பட்டது."
  },
  {
    title: "St. Anne's Dispensary",
    tamil: "புனித அன்னாள் மருத்துவமனை",
    year: "Parish Development",
    description:
      "St. Anne's Dispensary served the medical needs of the people.",
    tamilDescription:
      "மக்களின் மருத்துவத் தேவைகளை பூர்த்தி செய்ய புனித அன்னாள் மருத்துவமனை செயல்பட்டது."
  }
];


// ======================================================
// BISHOPS OF VELLORE DIOCESE
// Add/verify the complete historical succession here
// ======================================================

const velloreBishops = [
  {
    id: 1,
    name: "Bishop David Marianayagam",
    role: "Bishop of Vellore Diocese",
    contribution:
      "According to the Theresapuram parish history, Bishop David Marianayagam made Theresapuram a parish in 1958."
  },

  // Add the remaining verified bishops of Vellore Diocese here.
  // We should use the official Diocese records for their dates
  // and ministries rather than inventing historical information.
];


// ======================================================
// FATHERS & SISTERS BORN IN THERESAPURAM
// ======================================================

// ===============================
// FATHERS LIST
// ===============================

const theresapuramFathers = [
  {
    id: 1,
    image: IruthayaRaj,
    name: "Rev.Fr.J. Iruthaya Raj",
    congregation: "Vellore Diocese",
    ordinationDate: "28.05.1992",
    contact: "14.08.1963",
  },
  {
    id: 2,
    image: MartinSanthaKumar,
    name: "Rev.Fr.D. Martin Santha Kumar",
    congregation: "Vellore Diocese",
    ordinationDate: "14.05.2004",
    contact: "06.06.1976",
  },
  {
    id: 3,
    image: LeoMariyaJoseph,
    name: "Rev.Fr.P. Leo Mariya Joseph",
    congregation: "Vellore Diocese",
    ordinationDate: "24.04.2009",
    contact: "06.05.1981",
  },
  {
    id: 4,
    image: DanialSarma,
    name: "Rev.Fr.P. Danial Sarma",
    congregation: "Vellore Diocese",
    ordinationDate: "24.04.2017",
    contact: "11.08.1987",
  },
  {
    id: 5,
    image: imagesProfile,
    name: "Rev.Fr. Prabu Metha",
    congregation: "Congregation of the Blessed Sacrament",
    ordinationDate: "30.06.1979",
    contact: "12.07.2013",
  },
];


// ===============================
// SISTERS LIST
// ===============================

const theresapuramSisters = [
  {
    id: 1,
    image: SophieJacob,
    name: "Sr.J.Sophie Jacob",
    congregation: "Sisters of St.Josep of Cluny.",
    ordinationDate: "28.01.1968",
    contact: "28.12.1947",
  },
  {
    id: 2,
    image: LillyJacob,
    name: "Sr.J.Lilly  Jacob",
    congregation: "St.Ann's",
    ordinationDate: "01.05.1999",
    contact: "14.05.1977",
  },
  {
    id: 3,
    image: SophiaVasanthaKumari,
    name: "Sr.M. Sophia Vasantha Kumari",
    congregation: "Sisters of St.Josep of Cluny.",
    ordinationDate: "26.05.1998",
    contact: "25.04.1978",
  },
  {
    id: 4,
    image: ReginaMary,
    name: "Sr.A.Regina Mary",
    congregation: "Seva Missionary Sister of Mary",
    ordinationDate: "29.04.1996",
    contact: "24.12.1966",
  },
  {
    id: 5,
    image: Jayanthi,
    name: "Sr.A. Jayanthi, FSJ",
    congregation: "Franciscan Sisters of St. Joseph (FSJ)",
    ordinationDate: "23.04.2003",
    contact: "23.08.1983",
  },
{
    id: 6,
    image: MariyaSarpirasatham,
    name: "Sr.Mariya Sarpirasatham",
    congregation: "Sisters of St.Francis of Assisi.",
    ordinationDate: "10.05.1987",
    contact: "01.10.1965",
  },{
    id: 7,
    image: AvilaTheresa,
    name: "Sr.D. Avila Theresa, FSJ",
    congregation: "Franciscan Sisters of St. Joseph (FSJ)",
    ordinationDate: "23.04.2003",
    contact: "01.10.1982",
  },
  {
    id: 8,
    image: JennateRani,
    name: "Sr.M. Jennate Rani",
    congregation: "Cluny.",
    ordinationDate: "",
    contact: "29.06.1983",
  },{
    id: 8,
    image: imagesProfile,
    name: "Sr.X. John of Ark",
    congregation: "Franciscan Sisters of St. Joseph (FSJ)",
    ordinationDate: "04.05..1999",
    contact: "27.05.1980",
  },{
    id: 9,
    image: AmirthamJuli,
    name: "Sr.D. Amirtham Juli",
    congregation: "Society Sisters of St.Anne, Madavaram (SSAM)",
    ordinationDate: "02.05.2010",
    contact: "10.11.1989",
  },{
    id: 10,
    image: PushpaLatha,
    name: "Sr.Pushpa Latha",
    congregation: "SCB",
    ordinationDate: "05.05.2009",
    contact: "05.05.1988",
  },
  
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
            {/* <Link className="nav-cta" to="/#visit" onClick={() => setOpen(false)}>Visit Us <ArrowRight size={16}/></Link> */}
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
              image={ChurchPic}
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

// function ChurchHistory() {
//   return (
//     <>
//       <PageHero
//         eyebrow="Our Story • எங்கள் வரலாறு"
//         title="Theresapuram Parish History"
//         text="A journey of faith, missionary service, community growth and pastoral dedication."
//         image={ChurchPic}
//       />

//       {/* =====================================================
//           HISTORICAL INTRODUCTION
//       ===================================================== */}

//       <section className="section">
//         <div className="container narrow">
//           <SectionTitle
//             eyebrow="The Beginning • தொடக்கம்"
//             title="From a forest to a parish community"
//             text="காட்டுப்பகுதியிலிருந்து ஒரு பங்குச் சமூகமாக"
//             center
//           />

//           <div className="history-story">
//             <p>
//               The place where Theresapuram is situated today was once a
//               forest. A great Indian missionary, Fr. S. Paul, developed
//               the area into a village and built a chapel for the growing
//               Catholic community.
//             </p>

//             <p className="tamil-text">
//               இன்று தேரேசாபுரம் அமைந்துள்ள பகுதி ஒரு காலத்தில்
//               காடாக இருந்தது. சிறந்த இந்திய மறைபணியாளர் அருட்தந்தை
//               எஸ். பால் அவர்கள் இப்பகுதியை ஒரு கிராமமாக வளர்ச்சியடையச்
//               செய்து, வளர்ந்து வந்த கத்தோலிக்க மக்களுக்காக ஒரு
//               சிற்றாலயத்தையும் கட்டினார்.
//             </p>

//             <p>
//               His successors continued to give attention to the spiritual
//               and material development of the village. Observing its
//               steady and rapid growth, Bishop David Marianayagam made
//               Theresapuram a Parish in 1958.
//             </p>

//             <p className="tamil-text">
//               அவரது பின்வந்தவர்கள் கிராமத்தின் ஆன்மீக மற்றும் பொருளாதார
//               வளர்ச்சிக்கு தொடர்ந்து கவனம் செலுத்தினர். கிராமத்தின்
//               நிலையான மற்றும் வேகமான வளர்ச்சியை கருத்தில் கொண்டு,
//               ஆயர் டேவிட் மரியநாயகம் அவர்கள் 1958 ஆம் ஆண்டு
//               தேரேசாபுரத்தை பங்காக நிறுவினார்.
//             </p>
//           </div>
//         </div>
//       </section>


//       {/* =====================================================
//           FR S PAUL
//       ===================================================== */}

//       <section className="section soft">
//         <div className="container detail-grid">
//           <div className="history-photo-card">
//             <div className="history-photo-placeholder">
//               {/* <Cross size={42} /> */}
//               <img src={FounderPic} alt="FounderPic"/><br/>
//               <span>Fr. S. Paul</span><br />
//               <small>Missionary Priest</small>
//             </div>
//           </div>

//           <div>
//             <SectionTitle
//               eyebrow="Missionary Pioneer • மறைபணியின் முன்னோடி"
//               title="Rev. Fr. S. Paul"
//               text="The missionary who helped lay the foundation of Theresapuram."
//             />

//             <div className="info-list">
//               <div>
//                 <strong>Born</strong>
//                 <span>24 October 1882</span>
//               </div>

//               <div>
//                 <strong>Birthplace</strong>
//                 <span>Chetpet</span>
//               </div>

//               <div>
//                 <strong>Baptized</strong>
//                 <span>2 November 1882</span>
//               </div>

//               <div>
//                 <strong>Tonsure</strong>
//                 <span>16 October 1905</span>
//               </div>

//               <div>
//                 <strong>Minor Orders</strong>
//                 <span>18 October 1906</span>
//               </div>

//               <div>
//                 <strong>Sub-Deacon</strong>
//                 <span>15 October 1907</span>
//               </div>

//               <div>
//                 <strong>Deacon</strong>
//                 <span>19 October 1908</span>
//               </div>

//               <div>
//                 <strong>Ordained Priest</strong>
//                 <span>21 October 1909</span>
//               </div>

//               <div>
//                 <strong>Died</strong>
//                 <span>22 September 1969</span>
//               </div>

//               <div>
//                 <strong>Buried</strong>
//                 <span>23 September 1969 near the Cathedral</span>
//               </div>
//             </div>

//             <p>
//               Following the example of Fr. Darras, Fr. S. Paul spent much
//               of his life looking after poor new Christians. His missionary
//               service helped develop communities and strengthen Catholic
//               life in several places.
//             </p>

//             <p className="tamil-text">
//               அருட்தந்தை தார்ராஸ் அவர்களின் முன்மாதிரியைப் பின்பற்றி,
//               அருட்தந்தை எஸ். பால் அவர்கள் ஏழை மற்றும் புதிய கிறிஸ்தவ
//               மக்களின் நலனில் அதிக அக்கறை கொண்டிருந்தார். அவரது
//               மறைபணி பல இடங்களில் கிறிஸ்தவ சமூகங்களின் வளர்ச்சிக்கும்
//               கத்தோலிக்க விசுவாச வாழ்க்கையின் வலிமைக்கும் உதவியது.
//             </p>
//           </div>
//         </div>
//       </section>


//       {/* =====================================================
//           PARISH DEVELOPMENTS
//       ===================================================== */}

//       <section className="section">
//         <div className="container">
//           <SectionTitle
//             eyebrow="Parish Development • பங்கு வளர்ச்சி"
//             title="Institutions and developments"
//             text="The parish grew spiritually, socially and educationally through several institutions."
//             center
//           />

//           <div className="cards four">
//             {theresapuramDevelopments.map((item, index) => (
//               <article className="card" key={item.title}>
//                 <span className="number">
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 <h3>{item.title}</h3>

//                 <h4>{item.tamil}</h4>

//                 <span className="eyebrow">
//                   {item.year}
//                 </span>

//                 <p>
//                   <strong>English:</strong>{" "}
//                   {item.description}
//                 </p>

//                 <p className="tamil-text">
//                   <strong>தமிழ்:</strong>{" "}
//                   {item.tamilDescription}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* =====================================================
//           PARISH PRIESTS
//       ===================================================== */}

//       <section className="section soft">
//         <div className="container">
//           <SectionTitle
//             eyebrow="Parish Priests • பங்குத்தந்தையர்கள்"
//             title="Priests who served Theresapuram"
//             text="The priests who carried forward the pastoral mission of the parish."
//             center
//           />

//           <div className="clergy-history-list">
//             {theresapuramPriests.map((priest, index) => (
//               <article
//                 className="clergy-history-card"
//                 key={priest.id}
//               >
//                 <div className="clergy-history-number">
//                   {String(index + 1).padStart(2, "0")}
//                 </div>

//                 <div className="clergy-history-content">
//                   <span className="eyebrow">
//                     {priest.period}
//                   </span>

//                   <h3>{priest.name}</h3>

//                   <h4>{priest.role}</h4>

//                   <p>
//                     <strong>English:</strong>{" "}
//                     {priest.contribution}
//                   </p>

//                   <p className="tamil-text">
//                     <strong>தமிழ்:</strong>{" "}
//                     {priest.contributionTamil}
//                   </p>

//                   <ul>
//                     {priest.details.map(detail => (
//                       <li key={detail}>{detail}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* =====================================================
//           BISHOPS
//       ===================================================== */}

//       {/* <section className="section">
//         <div className="container">
//           <SectionTitle
//             eyebrow="Diocese of Vellore • வேலூர் மறைமாவட்டம்"
//             title="Bishops who served the Diocese of Vellore"
//             text="A historical record of the bishops connected with the growth of the Diocese and its parishes."
//             center
//           />

//           <div className="bishop-grid">
//             {velloreBishops.map((bishop, index) => (
//               <article className="bishop-card" key={bishop.id}>
//                 <span className="number">
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 <h3>{bishop.name}</h3>

//                 <span className="bishop-role">
//                   {bishop.role}
//                 </span>

//                 <p>{bishop.contribution}</p>
//               </article>
//             ))}
//           </div>

//           <div className="history-note">
//             <Cross size={24} />

//             <div>
//               <h3>Historical record</h3>

//               <p>
//                 The complete succession of Bishops of the Diocese of
//                 Vellore should be added from the official diocesan
//                 historical records so that every name and period is
//                 accurately represented.
//               </p>

//               <p className="tamil-text">
//                 வேலூர் மறைமாவட்டத்தின் அனைத்து ஆயர்களின் பெயர்கள் மற்றும்
//                 பணிக்காலங்கள் அதிகாரப்பூர்வ மறைமாவட்ட வரலாற்றுப்
//                 பதிவுகளிலிருந்து சரிபார்க்கப்பட்டு இப்பக்கத்தில்
//                 சேர்க்கப்பட வேண்டும்.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section> */}


//       {/* =====================================================
//           LEGACY
//       ===================================================== */}

//       <section className="section soft">
//         <div className="container">
//           <SectionTitle
//             eyebrow="Our Legacy • எங்கள் மரபு"
//             title="A parish built through faith and service"
//             text="விசுவாசத்தாலும் சேவையாலும் கட்டியெழுப்பப்பட்ட பங்கு"
//             center
//           />

//           <div className="legacy-grid">
//             <div>
//               <span>01</span>
//               <h3>Faith</h3>
//               <p>
//                 Building a strong Catholic community through prayer,
//                 pastoral care and spiritual formation.
//               </p>
//               <p className="tamil-text">
//                 ஜெபம், ஆன்மீக பராமரிப்பு மற்றும் விசுவாச வளர்ச்சியின்
//                 மூலம் வலுவான கத்தோலிக்க சமூகத்தை உருவாக்குதல்.
//               </p>
//             </div>

//             <div>
//               <span>02</span>
//               <h3>Education</h3>
//               <p>
//                 Supporting children and young people through education
//                 and formation.
//               </p>
//               <p className="tamil-text">
//                 கல்வி மற்றும் நல்லொழுக்க வளர்ச்சியின் மூலம் குழந்தைகள்
//                 மற்றும் இளைஞர்களை முன்னேற்றுதல்.
//               </p>
//             </div>

//             <div>
//               <span>03</span>
//               <h3>Service</h3>
//               <p>
//                 Serving the elderly, the poor and the wider community.
//               </p>
//               <p className="tamil-text">
//                 முதியோர், ஏழைகள் மற்றும் பரந்த சமூகத்திற்கு சேவை செய்தல்.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

function ChurchHistory() {
  return (
    <>
      <PageHero
        eyebrow="Our Story • எங்கள் வரலாறு"
        title="Church History"
        text="A journey of faith, service and generations of parish life."
        image={ChurchPic}
      />

      {/* Parish Introduction */}
      <section className="section">
        <div className="container narrow">
          <SectionTitle
            eyebrow="From a small beginning • ஒரு சிறிய தொடக்கத்திலிருந்து"
            title="A heritage built by many hands"
            text="பலரின் அர்ப்பணிப்பால் உருவான பாரம்பரியம்"
          />

          <p>
            Our parish has grown through the dedication, prayer and service
            of many priests, religious people and parishioners. Each
            generation has contributed to the spiritual and social growth
            of Theresapuram Parish.
          </p>

          <p className="tamil-text">
            பல அருட்தந்தையர்கள், துறவியர்கள் மற்றும் பங்கு மக்களின்
            அர்ப்பணிப்பு, ஜெபம் மற்றும் சேவையின் மூலம் எங்கள் பங்கு
            வளர்ச்சியடைந்துள்ளது. ஒவ்வொரு தலைமுறையும் தேரேசாபுரம் பங்கின்
            ஆன்மீக மற்றும் சமூக வளர்ச்சிக்கு தங்களது பங்களிப்பை
            வழங்கியுள்ளது.
          </p>
        </div>
      </section>

      {/* Existing Timeline */}
      <Timeline items={churchTimeline} />

      {/* Fathers Section */}
      <section className="section soft parish-fathers-section">
        <div className="container">

          <SectionTitle
            eyebrow="Parish Priests • பங்குத்தந்தையர்கள்"
            title="Fathers Who Served in Theresapuram Parish"
            text="தேரேசாபுரம் பங்கில் பணியாற்றிய அருட்தந்தையர்கள்"
            center
          />

          <div className="parish-fathers-list">
            {parishFathers.map((father, index) => (
              <article
                className="parish-father-row"
                key={father.id}
              >

                {/* Tamil Card */}
                <div className="parish-father-card tamil-card">

                  <span className="father-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="father-card-content">

                    <div className="father-year">
                      {father.year}
                    </div>

                    <h3>
                      {father.tamilName}
                    </h3>

                    {father.tamilWork && (
                      <p>
                        {father.tamilWork}
                      </p>
                    )}

                  </div>
                </div>

                {/* English Card */}
                <div className="parish-father-card english-card">

                  <span className="father-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="father-card-content">

                    <div className="father-year">
                      {father.year}
                    </div>

                    <h3>
                      {father.name}
                    </h3>

                    {father.work && (
                      <p>
                        {father.work}
                      </p>
                    )}

                  </div>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* History Closing Section */}
      <section className="section">
        <div className="container split history-callout">

          <div>
            <span className="eyebrow">
              Preserving our memory • நமது நினைவுகளைப் பாதுகாத்தல்
            </span>

            <h2>
              History is more than dates.
            </h2>

            <h3 className="tamil-heading">
              வரலாறு என்பது தேதிகள் மட்டுமல்ல.
            </h3>

            <p>
              The history of Theresapuram Parish is carried through the
              people who prayed, served, taught, guided and built the
              community throughout the years.
            </p>

            <p className="tamil-text">
              தேரேசாபுரம் பங்கின் வரலாறு என்பது ஆண்டுகள் மற்றும் தேதிகள்
              மட்டுமல்ல. பல ஆண்டுகளாக இங்கு ஜெபித்தவர்கள், பணியாற்றியவர்கள்,
              கற்பித்தவர்கள், வழிநடத்தியவர்கள் மற்றும் சமூகத்தை உருவாக்கிய
              மக்களின் வாழ்க்கையிலும் சேவையிலும் அது தொடர்கிறது.
            </p>
          </div>

          <img
            src={ChurchPic}
            alt="Church interior"
          />

        </div>
      </section>
    </>
  );
}

function FounderHistory() {
  const founder = founders[0];

  return (
    <>
      <PageHero
        eyebrow="Founder History • நிறுவனர் வரலாறு"
        title={`${founder.name} •
         ${founder.tamilName}`}
        text="The missionary priest who played an important role in the development of Theresapuram."
        image={founder.image}
      />

      {/* Introduction */}
      <section className="section">
        <div className="container detail-grid">
          <div className="portrait">
            <img src={founder.image} alt={founder.name} />

            <div className="portrait-caption">
              <strong>{founder.name}</strong>
              <span>{founder.years}</span>
              <small>
                {founder.role}
                <br />
                {founder.tamilRole}
              </small>
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow="Founder • நிறுவனர்"
              title={`${founder.name} • ${founder.tamilName}`}
              text={founder.bio.english}
            />

            <p className="tamil-text">
              <strong>தமிழ்:</strong>{" "}
              {founder.bio.tamil}
            </p>

            <div className="saint-name-box">
              <strong>
                {founder.role}
              </strong>

              <span>
                {founder.tamilRole}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Early Life */}
      <section className="section soft">
        <div className="container">
          <SectionTitle
            eyebrow="01 • Early Life • ஆரம்ப வாழ்க்கை"
            title="Birth & Family"
            text="பிறப்பு மற்றும் குடும்பம்"
            center
          />

          <div className="bilingual-points">
            {founder.earlyLife.map((item, index) => (
              <div
                className="bilingual-point"
                key={item.title}
              >
                <div className="point-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3>{item.title}</h3>

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

      {/* Priesthood */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="02 • Priesthood • குருத்துவம்"
            title="Journey to Priesthood"
            text="குருத்துவத்திற்கான பயணம்"
            center
          />

          <div className="saint-milestones">
            {founder.formation.map((item, index) => (
              <article key={item.title}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>
                  <strong>{item.date}</strong>
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  {item.tamilDate}
                </p>
              </article>
            ))}
          </div>

          {/* Ordination */}
          <div className="bilingual-points" style={{ marginTop: "40px" }}>
            <div className="bilingual-point">
              <div className="point-number">06</div>

              <div>
                <h3>
                  Priestly Ordination • குருத்துவ அருட்பொழிவு
                </h3>

                <p>
                  <strong>English:</strong>{" "}
                  {founder.ordination.english}
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  {founder.ordination.tamil}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theresapuram */}
      <section className="section soft">
        <div className="container">
          <SectionTitle
            eyebrow="03 • Theresapuram • தேரேசாபுரம்"
            title="His Contribution to Theresapuram"
            text="தேரேசாபுரத்திற்கான அவரது பணி"
            center
          />

          <div className="bilingual-points">
            <div className="bilingual-point">
              <div className="point-number">01</div>

              <div>
                <h3>
                  Theresapuram Before Development •
                  வளர்ச்சிக்கு முன் தேரேசாபுரம்
                </h3>

                <p>
                  <strong>English:</strong>{" "}
                  {founder.theresapuram.introduction.english}
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  {founder.theresapuram.introduction.tamil}
                </p>
              </div>
            </div>

            {founder.theresapuram.developments.map(
              (item, index) => (
                <div
                  className="bilingual-point"
                  key={item.title}
                >
                  <div className="point-number">
                    {String(index + 2).padStart(2, "0")}
                  </div>

                  <div>
                    <h3>{item.title}</h3>

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
              )
            )}
          </div>
        </div>
      </section>

      {/* Ministry */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="04 • Ministry • மறைப்பணி"
            title="Places of Ministry"
            text="அவர் பணியாற்றிய இடங்கள்"
            center
          />

          <div className="saint-timeline">
            {founder.ministry.map((item) => (
              <div
                className="saint-timeline-item"
                key={`${item.period}-${item.place}`}
              >
                <div className="timeline-year">
                  {item.period}
                </div>

                <div className="timeline-dot" />

                <div className="timeline-content">
                  <h3>
                    {item.place} • {item.tamilPlace}
                  </h3>

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

      {/* Final Years */}
      <section className="section soft">
        <div className="container">
          <SectionTitle
            eyebrow="05 • Final Years • இறுதி ஆண்டுகள்"
            title="Final Years & Death"
            text="இறுதி ஆண்டுகள் மற்றும் இறப்பு"
            center
          />

          <div className="bilingual-points">
            <div className="bilingual-point">
              <div className="point-number">01</div>

              <div>
                <h3>
                  Death • இறப்பு
                </h3>

                <p>
                  <strong>English:</strong>{" "}
                  {founder.finalYears.english}
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  {founder.finalYears.tamil}
                </p>
              </div>
            </div>

            <div className="bilingual-point">
              <div className="point-number">02</div>

              <div>
                <h3>
                  Burial • அடக்கம்
                </h3>

                <p>
                  <strong>English:</strong>{" "}
                  {founder.burial.english}
                </p>

                <p className="tamil-text">
                  <strong>தமிழ்:</strong>{" "}
                  {founder.burial.tamil}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="section saint-legacy">
        <div className="container">
          <SectionTitle
            eyebrow="Legacy • மரபு"
            title="A Missionary Legacy"
            text="ஒரு மறைப்பணியாளரின் மரபு"
            center
          />

          <div className="legacy-message">
            <Cross size={32} />

            <h2>
              Faith built through service.
            </h2>

            <h3>
              சேவையின் மூலம் கட்டியெழுப்பப்பட்ட விசுவாசம்.
            </h3>

            <p>
              {/* <strong>English:</strong>{" "} */}
              {founder.legacy.english}
            </p>

            <p className="tamil-text">
              {/* <strong>தமிழ்:</strong>{" "} */}
              {founder.legacy.tamil}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}


function FathersSisters() {
  const [query, setQuery] = useState("");

  // Search Fathers
  const filteredFathers = theresapuramFathers.filter((person) =>
    `${person.name} ${person.type} ${person.congregation} ${person.currentMinistry || ""}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  // Search Sisters
  const filteredSisters = theresapuramSisters.filter((person) =>
    `${person.name} ${person.type} ${person.congregation} ${person.currentMinistry || ""}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <>
      <PageHero
        eyebrow="Our Vocation • எங்கள் அழைப்பு"
        title="Fathers & Sisters"
        text="Fathers and sisters born in Theresapuram who continue to serve the Church."
        image={ChurchPic}
      />

      <section className="section vocation-section">
        <div className="container">

          <SectionTitle
            eyebrow="Theresapuram Vocations"
            title="Fathers & Sisters born in Theresapuram"
            text="தேரேசாபுரத்தில் பிறந்து திருச்சபைக்கு அர்ப்பணிப்புடன் பணியாற்றும் அருட்தந்தையர்கள் மற்றும் அருட்சகோதரிகள்."
            center
          />

          {/* ============================= */}
          {/* SEARCH HEADER */}
          {/* ============================= */}

          <div className="directory-head">

            <div className="directory-heading">
              <span className="eyebrow">
                Vocation Directory
              </span>

              <h3>
                Fathers & Sisters
              </h3>

              <p>
                Search the fathers and sisters who were born in
                Theresapuram.
              </p>
            </div>

            <div className="directory-search">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, congregation or ministry…"
                aria-label="Search fathers and sisters"
              />
            </div>

          </div>


          {/* ===================================== */}
          {/* FATHERS SECTION */}
          {/* ===================================== */}

          <div className="vocation-category">

            <div className="vocation-category-header">

              <div>
                <span className="eyebrow">
                  Clergy • அருட்தந்தையர்கள்
                </span>

                <h2>
                  Fathers
                </h2>

                <p>
                  Fathers born in Theresapuram who serve the Church.
                </p>
              </div>

              {/* <div className="vocation-count">
                {filteredFathers.length} Fathers
              </div> */}

            </div>


            {filteredFathers.length > 0 ? (

              <div className="vocation-grid">

                {filteredFathers.map((person) => (

                  <article
                    className="vocation-card"
                    key={`father-${person.id}`}
                  >

                    {/* Image */}
                    <div className="vocation-image">

                      {person.image ? (

                        <img
                          src={person.image}
                          alt={person.name}
                        />

                      ) : (

                        <div className="vocation-image-placeholder">
                          <Cross size={32} />
                        </div>

                      )}

                    </div>


                    {/* Content */}
                    <div className="vocation-card-content">

                      <span className="eyebrow">
                        {person.type}
                      </span>

                      <h3>
                        {person.name}
                      </h3>


                      <div className="vocation-details">

                        <div className="vocation-detail">

                          <strong>
                            Congregation
                          </strong>

                          <span>
                            {person.congregation}
                          </span>

                        </div>


                        <div className="vocation-detail">

                          <strong>
                            Born
                          </strong>

                          <span>
                            {person.contact}
                          </span>

                        </div>


                        <div className="vocation-detail">

                          <strong>
                            Ordination
                          </strong>

                          <span>
                            {person.ordinationDate}
                          </span>

                        </div>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            ) : (

              <div className="vocation-empty">

                <div className="vocation-empty-icon">
                  <Cross size={30} />
                </div>

                <h3>
                  No Father records found
                </h3>

                <p>
                  No father matches your search.
                </p>

              </div>

            )}

          </div>


          {/* ===================================== */}
          {/* SISTERS SECTION */}
          {/* ===================================== */}

          <div className="vocation-category sisters-category">

            <div className="vocation-category-header">

              <div>
                <span className="eyebrow">
                  Religious Sisters • அருட்சகோதரிகள்
                </span>

                <h2>
                  Sisters
                </h2>

                <p>
                  Sisters born in Theresapuram who serve the Church
                  through their religious vocation.
                </p>
              </div>

              {/* <div className="vocation-count">
                {filteredSisters.length} Sisters
              </div> */}

            </div>


            {filteredSisters.length > 0 ? (

              <div className="vocation-grid">

                {filteredSisters.map((person) => (

                  <article
                    className="vocation-card"
                    key={`sister-${person.id}`}
                  >

                    {/* Image */}
                    <div className="vocation-image">

                      {person.image ? (

                        <img
                          src={person.image}
                          alt={person.name}
                        />

                      ) : (

                        <div className="vocation-image-placeholder">
                          <Cross size={32} />
                        </div>

                      )}

                    </div>


                    {/* Content */}
                    <div className="vocation-card-content">

                      <span className="eyebrow">
                        {person.type}
                      </span>

                      <h3>
                        {person.name}
                      </h3>


                      <div className="vocation-details">

                        <div className="vocation-detail">

                          <strong>
                            Congregation
                          </strong>

                          <span>
                            {person.congregation}
                          </span>

                        </div>


                        <div className="vocation-detail">

                          <strong>
                            Born
                          </strong>

                          <span>
                            {person.contact}
                          </span>

                        </div>


                        <div className="vocation-detail">

                          <strong>
                            Profession / Ordination
                          </strong>

                          <span>
                            {person.ordinationDate}
                          </span>

                        </div>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            ) : (

              <div className="vocation-empty">

                <div className="vocation-empty-icon">
                  <Cross size={30} />
                </div>

                <h3>
                  No Sister records found
                </h3>

                <p>
                  No sister matches your search.
                </p>

                <p className="tamil-text">
                  தேரேசாபுரத்தில் பிறந்த அருட்சகோதரிகளின்
                  பதிவுகள் இங்கே சேர்க்கப்படும்.
                </p>

              </div>

            )}

          </div>

        </div>
      </section>
    </>
  );
}


function LocationSection() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${church.latitude},${church.longitude}`;
  return <section id="visit" className="location-section"><div className="container location-grid"><div><span className="eyebrow light">Visit us</span><h2>Come and be part of our community.</h2><p>{church.address}</p><div className="coords-large"><div><span>Latitude</span><strong>{church.latitude.toFixed(6)}°</strong></div><div><span>Longitude</span><strong>{church.longitude.toFixed(6)}°</strong></div></div><a className="button primary" href={mapUrl} target="_blank" rel="noreferrer">Open Location <MapPin size={17}/></a></div><div className="map-placeholder"><MapPin size={34}/><strong>Church Location</strong><span>{church.latitude.toFixed(6)}, {church.longitude.toFixed(6)}</span><a href={mapUrl} target="_blank" rel="noreferrer">View on Google Maps <ArrowRight size={15}/></a></div></div></section>;
}

function App() {
  return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/saint-history" element={<SaintHistory/>}/><Route path="/church-history" element={<ChurchHistory/>}/><Route path="/founder-history" element={<FounderHistory/>}/><Route path="/fathers-sisters" element={<FathersSisters/>}/><Route path="*" element={<Home/>}/></Routes></Layout>;
}

export default App;
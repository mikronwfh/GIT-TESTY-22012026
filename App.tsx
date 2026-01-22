
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  Menu,
  X,
  Rocket,
  BookOpen,
  Smartphone,
  ChevronDown,
  Sparkles,
  Target,
  Instagram,
  Mail,
  CheckCircle2,
  Users
} from 'lucide-react';

// --- Sub-components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
    if (!isExternal && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'O mnie', href: 'https://www.instagram.com/p/DLCrOLOI-Ds/', external: true },
    { name: 'Oferta', href: 'https://www.instagram.com/paniodzdrowia/', external: true },
    { name: 'Kontakt', href: '#kontakt', external: false },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Branding - Inactive */}
        <div className="text-xl md:text-2xl font-black text-slate-800 tracking-tighter uppercase cursor-default select-none">
          KARINA <span className="brand-teal">TARGOSZ</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={(e) => handleLinkClick(e, link.href, link.external)}
              className="text-xs font-bold text-slate-500 hover:text-[#3EB9A7] transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          {/* Współpraca - Inactive */}
          <div className="bg-brand-teal text-white px-7 py-3 rounded-full font-bold text-[10px] shadow-lg shadow-teal-500/20 tracking-widest uppercase cursor-default opacity-90 select-none">
            Współpraca
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-800">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl p-8 flex flex-col space-y-6 animate-fade-in-up">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={(e) => handleLinkClick(e, link.href, link.external)}
              className="text-xl font-black text-slate-900 border-b border-teal-50 pb-2"
            >
              {link.name}
            </a>
          ))}
          <div className="bg-teal-50 text-teal-700 px-6 py-4 rounded-2xl font-bold text-center uppercase tracking-widest text-xs pointer-events-none">
            Współpraca
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-52 md:pb-40 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-teal-50 rounded-full blur-[120px] opacity-70 translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-teal-100/50 text-teal-700 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-10 border border-teal-200">
            <Sparkles size={14} className="animate-pulse" />
            <span>Wiedza oparta na dowodach</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
            Ekspert <br />
            <span className="brand-teal underline decoration-teal-100 decoration-8 underline-offset-4">Zdrowia.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Nazywam się Karina Targosz. Projektuję rzetelną opiekę dietetyczną i rozwiązania wellbeing oparte na <span className="text-teal-600 font-bold">Evidence Based Medicine</span>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="https://www.instagram.com/paniodzdrowia/" target="_blank" rel="noopener noreferrer" className="btn-primary text-white px-10 py-5 rounded-full font-bold text-xs tracking-widest uppercase flex items-center justify-center">
              POZNAJ OFERTĘ <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#kontakt" onClick={(e) => {
              e.preventDefault();
              document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
            }} className="bg-white border-2 border-teal-100 hover:border-teal-300 text-teal-700 px-10 py-5 rounded-full font-bold text-xs tracking-widest uppercase flex items-center justify-center transition-all">
              NAPISZ DO MNIE
            </a>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-6 bg-teal-400/10 rounded-[80px] blur-2xl group-hover:bg-teal-400/20 transition-all duration-700"></div>
            <div className="relative z-10 rounded-[70px] overflow-hidden shadow-2xl w-full max-w-[460px] aspect-[4/5] bg-teal-50 border-[12px] border-white transform hover:scale-[1.02] transition-transform duration-700">
               <img 
                 src="https://drive.google.com/thumbnail?id=1EUZhbpalzfO1HI_xOsBwKwLM-jcpk_mJ&sz=w1200" 
                 alt="Karina Targosz" 
                 className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000"
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop";
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutBrief = () => {
  return (
    <section className="py-32 bg-teal-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-teal-600 font-bold tracking-[0.4em] uppercase text-xs block mb-4">Misja i wartości</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 tracking-tighter">Dlaczego EBM?</h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
              W świecie pełnym szumu informacyjnego, stawiam na <span className="brand-teal font-bold">fakty</span>. Jako dietetyk kliniczny i menadżer jakości żywności, dostarczam rozwiązania, które działają, bo są poparte nauką.
            </p>
            <div className="space-y-4 mb-10">
               {[
                 "Opieka dietetyczna w nowoczesnej aplikacji",
                 "Diagnoza oparta na aktualnych wytycznych",
                 "Indywidualizm bez sztywnych zakazów"
               ].map((item, i) => (
                 <div key={i} className="flex items-center space-x-3 text-slate-700 font-medium">
                   <CheckCircle2 className="brand-teal" size={20} />
                   <span>{item}</span>
                 </div>
               ))}
            </div>
            <a href="https://www.instagram.com/p/DLCrOLOI-Ds/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-black brand-teal tracking-widest uppercase hover:gap-3 transition-all">
              POZNAJ MOJĄ HISTORIĘ <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-brand-teal p-8 rounded-[40px] text-white flex flex-col justify-end min-h-[220px]">
              <Target size={32} className="mb-auto" />
              <div className="text-3xl font-black">100%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Faktów Naukowych</div>
            </div>
            <div className="bg-white p-8 rounded-[40px] border border-teal-100 flex flex-col justify-end min-h-[220px]">
              <Users size={32} className="mb-auto brand-teal" />
              <div className="text-3xl font-black text-slate-900">Pasja</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Do pomagania</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Opieka Dietetyczna + App",
      description: "Indywidualne podejście, stałe wsparcie w aplikacji i jadłospisy dopasowane do Twojego stylu życia.",
      icon: <Smartphone size={28} />,
      bg: "service-card"
    },
    {
      title: "Pakiety Edukacyjne",
      description: "Kompleksowe materiały dla firm i działów HR, które realnie dbają o wellbeing swoich zespołów.",
      icon: <BookOpen size={28} />,
      bg: "service-card"
    },
    {
      title: "Mentoring EBM",
      description: "Dla profesjonalistów z branży fitness i health, którzy chcą opierać swoją praktykę na dowodach.",
      icon: <Rocket size={28} />,
      bg: "service-card"
    },
    {
      title: "Produkty Online",
      description: "Gotowe narzędzia, e-booki i mini-kursy, które pozwolą Ci samodzielnie zadbać o Twoje zdrowie.",
      icon: <CheckCircle2 size={28} />,
      bg: "service-card"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <span className="text-teal-600 font-bold tracking-[0.4em] uppercase text-xs block mb-4">Współpraca</span>
        <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Wybierz swój pakiet</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
          Wszystkie moje usługi łączą <span className="brand-teal font-semibold">zielone światło dla zdrowia</span> i rzetelną wiedzę naukową.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, idx) => (
          <div key={idx} className={`${s.bg} p-10 rounded-[50px] flex flex-col items-center text-center group`}>
            <div className="w-20 h-20 rounded-[30px] bg-white shadow-xl shadow-teal-500/10 flex items-center justify-center mb-10 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
               {s.icon}
            </div>
            <h3 className="text-2xl font-black mb-6 text-slate-900 leading-tight">{s.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-10">{s.description}</p>
            <a 
              href="https://www.instagram.com/paniodzdrowia/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-auto inline-flex items-center text-[10px] font-black brand-teal tracking-[0.3em] uppercase group-hover:translate-x-2 transition-transform"
            >
              SZCZEGÓŁY <ArrowRight size={14} className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="kontakt" className="bg-slate-950 pt-32 pb-12 scroll-mt-24 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-teal-500 font-bold tracking-[0.4em] uppercase text-xs block mb-6">Kontakt</span>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter">Zacznijmy projekt <br /><span className="text-teal-400">Zdrowie.</span></h2>
            <div className="space-y-8">
               <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-1">E-mail</div>
                    <div className="text-white font-medium text-lg">karina@paniodzdrowia.pl</div>
                  </div>
               </div>
               <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase text-slate-500 tracking-widest mb-1">Instagram</div>
                    <div className="text-white font-medium text-lg">@paniodzdrowia</div>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-14 rounded-[60px] shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Imię</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-3xl p-5 text-slate-700 focus:ring-2 focus:ring-[#3EB9A7] outline-none" placeholder="Imię..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Email</label>
                  <input type="email" className="w-full bg-slate-50 border-none rounded-3xl p-5 text-slate-700 focus:ring-2 focus:ring-[#3EB9A7] outline-none" placeholder="Twoje e-mail..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Interesuje mnie</label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border-none rounded-3xl p-5 text-slate-700 focus:ring-2 focus:ring-[#3EB9A7] outline-none appearance-none cursor-pointer">
                    <option>Opieka dietetyczna</option>
                    <option>Współpraca biznesowa</option>
                    <option>Produkty online</option>
                    <option>Inne</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Wiadomość</label>
                <textarea rows={4} className="w-full bg-slate-50 border-none rounded-3xl p-5 text-slate-700 focus:ring-2 focus:ring-[#3EB9A7] outline-none resize-none" placeholder="W czym mogę pomóc?"></textarea>
              </div>
              <button className="w-full btn-primary text-white font-black py-6 rounded-3xl tracking-[0.3em] uppercase text-xs">
                WYŚLIJ WIADOMOŚĆ
              </button>
            </form>
          </div>
        </div>

        <div className="mt-40 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-600 text-[10px] font-bold uppercase tracking-widest">
           <div className="mb-4 md:mb-0">© 2026 Karina Targosz – Pani Od Zdrowia</div>
           <div className="flex space-x-10">
             <span className="hover:text-teal-400 transition-colors cursor-pointer">Polityka prywatności</span>
             <span className="hover:text-teal-400 transition-colors cursor-pointer">Regulamin</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutBrief />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export const languages = {
  en: "English",
  id: "Bahasa Indonesia",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const ui = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.products": "Products & Services",
    "nav.experience": "Experience & Certificates",
    "nav.contact": "Contact Us",
    "nav.language": "Language",

    // Hero
    "hero.badge": "Industrial Excellence",
    "hero.title": "End-to-End Industrial EPCI & Engineering Solutions",
    "hero.desc":
      "From concept design and manufacturing to site installation, commissioning, and operator training. Delivering robust structural integrity and unwavering professional competence.",
    "hero.cta.primary": "Explore Our Solutions",
    "hero.cta.secondary": "View Project Experience",

    // Introduction
    "intro.heading": "Introduction",
    "intro.p1":
      "PT Promatcon Tepatguna is a steel fabrication company established in 1990. PT Promatcon Tepatguna is an EPC (Engineering, Procurement, Construction) company that supplies and services Process & Piping Equipment, Gas Compressors, and TCP (Turbine Control Panels), as well as Retrofits, for the onshore and offshore oil & gas industries; renewable energy (geothermal) operating in Indonesia.",
    "intro.p2":
      "PT Promatcon Tepatguna also provides design and manufacturing services, including mechanical calculations, engineering drawings, fabrication, final inspection, and installation of pressure vessels in accordance with international standards and specific specifications based on the American Society of Mechanical Engineers (ASME) Boiler and Pressure Vessel Code Section VIII Div. 1.",
    "intro.p3":
      'We have ISO 9001:2015 certified and hold the ASME "U" and "R" stamps. All our work follows a quality management system to ensure timely delivery, clear documentation, and long-term reliability. Our main principle is To provide products and services of high quality that fulfill the customers needs as well as to obtain customer satisfaction" by continuously innovating and working efficiently.',
    "intro.card1.title": "Process Guarantees",
    "intro.card1.desc":
      "Rigorous simulation and testing to validate output parameters before site deployment.",
    "intro.card2.title": "Mechanical Integrity",
    "intro.card2.desc":
      "Adherence to highest global standards for material selection and fabrication quality.",

    // Footer
    "footer.tagline":
      "Delivering end-to-end industrial EPCI and engineering solutions\nwith a commitment to structural integrity and professional competence.",
    "footer.rights": "All rights reserved.",

    // About
    "about.title": "About Us",
    "about.subtitle":
      "A leading multinational company specializing in Engineering, Procurement, Construction and Installation (EPCI).",
    "about.beginning.title": "The Beginning",
    "about.beginning.desc":
      "Established since 1990, starting only as Promatcon trading company, with main core in the sale of control equipment for pressure vessels, plates, pipes and fittings and valves.",
    "about.evolution.title": "The Evolution",
    "about.evolution.desc":
      "Presently, Promatcon has become a leading multinational company specializing in Engineering, Procurement Construction and Instalation EPCI.",
    "about.teams.title": "Our Specialized Teams",
    "about.teams.badge": "Core Function",
    "about.team.construction": "Construction Team",
    "about.team.engineering": "Engineering Team",
    "about.team.fabrication": "Fabrication Team",
    "about.team.procurement": "Procurement Team",
    "about.operations.title": "Operational Focus",
    "about.operations.subtitle":
      "Specialized capabilities in Oil and Gas and Petrochemical equipments across the entire value chain.",
    "about.upstream.title": "Up Stream",
    "about.upstream.sub": "Exploration & Production",
    "about.midstream.title": "Mid Stream",
    "about.midstream.sub": "Transport & Storage",
    "about.downstream.title": "Down Stream",
    "about.downstream.sub": "Processing & Refining",
    "about.org.title": "Organizational Structure",

    // Vision Mission
    "vm.vision.title": "Vision",
    "vm.vision.desc":
      "To become a leading company in providing support and services to major players in the oil and gas & renewable energy (geothermal) industries in Indonesia.",
    "vm.mission.title": "Mission",
    "vm.mission.1":
      "The company designs, develops, supplies and supports the oil, gas & renewable energy (geothermal) businesses in Indonesia.",
    "vm.mission.2":
      "Meet the highest performance standards set by customers to fulfill the quality of work required to provide customer satisfaction.",
    "vm.mission.3":
      "We promote Quality, Health, Safety, Environment and Reliability on-time delivery and delivery within budget as the highest value in our operations.",

    // Products & Services
    "products.title": "Our Solutions & Products",
    "products.subtitle":
      "Precision engineering and advanced systems tailored for complex industrial challenges.",

    // Experience
    "experience.title": "Experience & Certificates",
    "experience.subtitle":
      "A comprehensive record of our engineering and logistical project deliveries across major industrial sectors.",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle":
      "We are here to support your engineering and logistical needs.",
    "contact.locations": "Our Locations",
    "contact.head": "Head Office",
    "contact.correspondence": "Correspondence",
    "contact.workshop": "Workshop",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.website": "Website",
    "contact.keycontacts": "Key Contacts",
  },

  id: {
    // Navbar
    "nav.home": "Beranda",
    "nav.about": "Tentang Kami",
    "nav.products": "Produk & Layanan",
    "nav.experience": "Pengalaman & Sertifikat",
    "nav.contact": "Hubungi Kami",
    "nav.language": "Bahasa",

    // Hero
    "hero.badge": "Keunggulan Industri",
    "hero.title": "Solusi EPCI & Engineering Industri End-to-End",
    "hero.desc":
      "Dari desain konsep dan manufaktur hingga instalasi lapangan, komisioning, dan pelatihan operator. Memberikan integritas struktural yang kuat dan kompetensi profesional yang tak tergoyahkan.",
    "hero.cta.primary": "Jelajahi Solusi Kami",
    "hero.cta.secondary": "Lihat Pengalaman Proyek",

    // Introduction
    "intro.heading": "Pendahuluan",
    "intro.p1":
      "PT Promatcon Tepatguna adalah perusahaan fabrikasi baja yang didirikan pada tahun 1990. PT Promatcon Tepatguna adalah perusahaan EPC (Engineering, Procurement, Construction) yang memasok dan melayani Peralatan Proses & Perpipaan, Kompresor Gas, dan Panel Kontrol Turbin (TCP), serta Retrofit, untuk industri minyak & gas onshore dan offshore; energi terbarukan (panas bumi) yang beroperasi di Indonesia.",
    "intro.p2":
      "PT Promatcon Tepatguna juga menyediakan layanan desain dan manufaktur, termasuk perhitungan mekanikal, gambar teknik, fabrikasi, inspeksi akhir, dan instalasi bejana tekan sesuai dengan standar internasional dan spesifikasi khusus berdasarkan American Society of Mechanical Engineers (ASME) Boiler and Pressure Vessel Code Section VIII Div. 1.",
    "intro.p3":
      'Kami telah bersertifikat ISO 9001:2015 dan memegang cap "U" dan "R" dari ASME. Semua pekerjaan kami mengikuti sistem manajemen mutu untuk memastikan pengiriman tepat waktu, dokumentasi yang jelas, dan keandalan jangka panjang. Prinsip utama kami adalah "Memberikan produk dan layanan berkualitas tinggi yang memenuhi kebutuhan pelanggan serta memperoleh kepuasan pelanggan" dengan terus berinovasi dan bekerja secara efisien.',
    "intro.card1.title": "Jaminan Proses",
    "intro.card1.desc":
      "Simulasi dan pengujian ketat untuk memvalidasi parameter output sebelum penerapan di lapangan.",
    "intro.card2.title": "Integritas Mekanikal",
    "intro.card2.desc":
      "Kepatuhan terhadap standar global tertinggi untuk pemilihan material dan kualitas fabrikasi.",

    // Footer
    "footer.tagline":
      "Memberikan solusi EPCI industri dan rekayasa end-to-end\ndengan komitmen terhadap integritas struktural dan kompetensi profesional.",
    "footer.rights": "Hak cipta dilindungi.",

    // About
    "about.title": "Tentang Kami",
    "about.subtitle":
      "Perusahaan multinasional terkemuka yang mengkhususkan diri dalam Engineering, Procurement, Construction dan Installation (EPCI).",
    "about.beginning.title": "Awal Mula",
    "about.beginning.desc":
      "Berdiri sejak 1990, dimulai hanya sebagai perusahaan perdagangan Promatcon, dengan inti utama penjualan peralatan kontrol untuk bejana tekan, pelat, pipa, fitting, dan katup.",
    "about.evolution.title": "Perkembangan",
    "about.evolution.desc":
      "Saat ini, Promatcon telah menjadi perusahaan multinasional terkemuka yang mengkhususkan diri dalam Engineering, Procurement, Construction dan Installation (EPCI).",
    "about.teams.title": "Tim Spesialis Kami",
    "about.teams.badge": "Fungsi Inti",
    "about.team.construction": "Tim Konstruksi",
    "about.team.engineering": "Tim Engineering",
    "about.team.fabrication": "Tim Fabrikasi",
    "about.team.procurement": "Tim Pengadaan",
    "about.operations.title": "Fokus Operasional",
    "about.operations.subtitle":
      "Kemampuan khusus dalam peralatan Minyak, Gas, dan Petrokimia di seluruh rantai nilai.",
    "about.upstream.title": "Hulu",
    "about.upstream.sub": "Eksplorasi & Produksi",
    "about.midstream.title": "Tengah",
    "about.midstream.sub": "Transportasi & Penyimpanan",
    "about.downstream.title": "Hilir",
    "about.downstream.sub": "Pengolahan & Pemurnian",
    "about.org.title": "Struktur Organisasi",

    // Vision Mission
    "vm.vision.title": "Visi",
    "vm.vision.desc":
      "Menjadi perusahaan terkemuka dalam memberikan dukungan dan layanan kepada pemain utama di industri minyak dan gas & energi terbarukan (panas bumi) di Indonesia.",
    "vm.mission.title": "Misi",
    "vm.mission.1":
      "Perusahaan merancang, mengembangkan, memasok, dan mendukung bisnis minyak, gas & energi terbarukan (panas bumi) di Indonesia.",
    "vm.mission.2":
      "Memenuhi standar kinerja tertinggi yang ditetapkan pelanggan untuk memenuhi kualitas pekerjaan yang diperlukan guna memberikan kepuasan pelanggan.",
    "vm.mission.3":
      "Kami mempromosikan Kualitas, Kesehatan, Keselamatan, Lingkungan, dan Keandalan pengiriman tepat waktu dan pengiriman sesuai anggaran sebagai nilai tertinggi dalam operasi kami.",

    // Products & Services
    "products.title": "Solusi & Produk Kami",
    "products.subtitle":
      "Rekayasa presisi dan sistem canggih yang disesuaikan untuk tantangan industri yang kompleks.",

    // Experience
    "experience.title": "Pengalaman & Sertifikat",
    "experience.subtitle":
      "Rekam jejak komprehensif pengiriman proyek engineering dan logistik kami di berbagai sektor industri utama.",

    // Contact
    "contact.title": "Hubungi Kami",
    "contact.subtitle":
      "Kami siap mendukung kebutuhan engineering dan logistik Anda.",
    "contact.locations": "Lokasi Kami",
    "contact.head": "Kantor Pusat",
    "contact.correspondence": "Korespondensi",
    "contact.workshop": "Workshop",
    "contact.phone": "Telepon",
    "contact.email": "Email",
    "contact.website": "Situs Web",
    "contact.keycontacts": "Kontak Utama",
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

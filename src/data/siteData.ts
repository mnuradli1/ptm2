// ============================================================
// SITE DATA - Semua konten placeholder terpusat di sini
// Ganti data di file ini saja ketika data asli sudah siap
// ============================================================

// --- Site Config ---
export const siteConfig = {
  companyName: "PT Persada Teknologi Mandiri",
  shortName: "Persadatek",
  tagline: "Mitra Terpercaya Solusi Teknologi Informasi",
  description:
    "Perusahaan IT Procurement & System Integrator yang melayani sektor pemerintah, BUMN, dan swasta dengan solusi teknologi end-to-end.",
  url: "https://persadatek.com",
  phone: "+6221-5555-7890",
  whatsapp: "6281234567890",
  email: "info@persadatek.com",
  address: {
    street: "Jl. Jend. Sudirman Kav. 52-53",
    city: "Jakarta Selatan",
    province: "DKI Jakarta",
    postalCode: "12190",
    country: "Indonesia",
  },
  socialMedia: {
    linkedin: "https://linkedin.com/company/persadatek",
    instagram: "https://instagram.com/persadatek",
    facebook: "https://facebook.com/persadatek",
  },
  operatingHours: "Senin - Jumat, 08:00 - 17:00 WIB",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2904!2d106.8105!3d-6.2271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMzcuNiJTIDEwNsKwNDgnMzcuOCJF!5e0!3m2!1sid!2sid!4v1600000000000",
};

// --- Navigation ---
export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navigationItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang" },
  {
    label: "Layanan",
    href: "/layanan",
    children: [
      { label: "IT Procurement", href: "/layanan/it-procurement" },
      { label: "System Integration", href: "/layanan/system-integration" },
      { label: "Managed Services", href: "/layanan/managed-services" },
      { label: "Cloud Solutions", href: "/layanan/cloud-solutions" },
      { label: "Cybersecurity", href: "/layanan/cybersecurity" },
      { label: "IT Consulting", href: "/layanan/it-consulting" },
    ],
  },
  {
    label: "Solusi",
    href: "/solusi",
    children: [
      { label: "Solusi Pemerintahan", href: "/solusi/pemerintahan" },
      { label: "Solusi Enterprise", href: "/solusi/enterprise" },
      { label: "Data Center & Infrastruktur", href: "/solusi/data-center" },
      { label: "Network & Security", href: "/solusi/network-security" },
    ],
  },
  { label: "Partner", href: "/partner" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Sertifikasi", href: "/sertifikasi" },
  { label: "Blog", href: "/blog" },
  { label: "Karir", href: "/karir" },
  { label: "Kontak", href: "/kontak" },
];

// --- Stats ---
export const stats = [
  { value: 150, suffix: "+", label: "Proyek Selesai" },
  { value: 80, suffix: "+", label: "Klien Terlayani" },
  { value: 10, suffix: "+", label: "Tahun Pengalaman" },
  { value: 25, suffix: "+", label: "Engineer Bersertifikat" },
];

// --- Services ---
export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  image: string;
  fullDescription: string;
  capabilities: string[];
}

export const services: Service[] = [
  {
    slug: "it-procurement",
    title: "IT Procurement",
    shortDescription:
      "Pengadaan hardware dan software IT dari vendor resmi dengan harga kompetitif.",
    icon: "ShoppingCart",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    fullDescription:
      "Layanan pengadaan perangkat IT end-to-end mencakup server, storage, networking, end-user computing, hingga lisensi software enterprise. Terdaftar di e-Katalog LKPP untuk memudahkan proses pengadaan pemerintah.",
    capabilities: [
      "Pengadaan server, storage, dan networking equipment",
      "Pengadaan PC, laptop, workstation, printer, dan perangkat end-user",
      "Lisensi software (OS, Office, Database, Security, Enterprise)",
      "Terdaftar di e-Katalog V6 LKPP",
      "Proses end-to-end: konsultasi, pengadaan, delivery, instalasi, garansi",
      "Produk bersertifikasi TKDN",
    ],
  },
  {
    slug: "system-integration",
    title: "System Integration",
    shortDescription:
      "Desain, implementasi, dan integrasi solusi IT end-to-end untuk bisnis Anda.",
    icon: "Cpu",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    fullDescription:
      "Layanan integrasi sistem yang mencakup desain arsitektur, implementasi, konfigurasi, dan komisioning infrastruktur IT. Kami memastikan seluruh komponen bekerja sebagai satu kesatuan yang optimal.",
    capabilities: [
      "Desain arsitektur infrastruktur IT",
      "Network design dan implementation",
      "Server dan storage deployment",
      "Virtualization (VMware, Hyper-V)",
      "Data center build dan modernization",
      "Migrasi dan upgrade sistem",
    ],
  },
  {
    slug: "managed-services",
    title: "Managed Services",
    shortDescription:
      "Pengelolaan infrastruktur IT berkelanjutan dengan SLA terjamin.",
    icon: "Settings",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    fullDescription:
      "Layanan pengelolaan infrastruktur IT secara berkelanjutan dengan kontrak berbasis SLA. Tim engineer bersertifikat kami memastikan sistem Anda berjalan optimal 24/7.",
    capabilities: [
      "IT infrastructure management",
      "Network monitoring dan management 24/7",
      "Server dan storage management",
      "Helpdesk dan technical support berbasis SLA",
      "Backup dan disaster recovery",
      "Patch management dan update",
    ],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    shortDescription:
      "Solusi cloud computing untuk transformasi digital yang aman dan skalabel.",
    icon: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    fullDescription:
      "Layanan cloud computing mulai dari assessment, migrasi, hingga pengelolaan lingkungan cloud. Kami membantu organisasi Anda beralih ke cloud dengan aman dan efisien.",
    capabilities: [
      "Cloud readiness assessment",
      "Cloud migration planning dan execution",
      "Hybrid cloud implementation",
      "Cloud infrastructure management",
      "Cloud security dan compliance",
      "Multi-cloud strategy dan optimization",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    shortDescription:
      "Perlindungan menyeluruh terhadap ancaman siber dan kepatuhan regulasi.",
    icon: "Shield",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    fullDescription:
      "Solusi keamanan siber end-to-end untuk melindungi aset digital organisasi Anda. Mencakup audit keamanan, implementasi solusi, monitoring, dan kepatuhan terhadap UU PDP.",
    capabilities: [
      "Security assessment dan audit",
      "Firewall dan network security",
      "Endpoint protection",
      "SIEM dan Security Operations Center (SOC)",
      "Kepatuhan UU Perlindungan Data Pribadi (PDP)",
      "Security awareness training",
    ],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    shortDescription:
      "Konsultasi strategis untuk perencanaan dan transformasi digital organisasi.",
    icon: "Lightbulb",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    fullDescription:
      "Layanan konsultasi IT strategis untuk membantu organisasi merencanakan dan melaksanakan transformasi digital. Pendekatan berbasis standar internasional dan best practices.",
    capabilities: [
      "IT master plan development",
      "Digital transformation roadmap",
      "Asesmen SPBE / Pemerintah Digital",
      "IT governance framework",
      "Enterprise architecture design",
      "Technology evaluation dan selection",
    ],
  },
];

// --- Solutions ---
export interface Solution {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  image: string;
  fullDescription: string;
  features: string[];
}

export const solutions: Solution[] = [
  {
    slug: "pemerintahan",
    title: "Solusi Pemerintahan",
    shortDescription:
      "Solusi teknologi untuk mendukung SPBE dan transformasi digital pemerintah.",
    icon: "Building",
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=800&q=80",
    fullDescription:
      "Solusi komprehensif untuk mendukung implementasi Sistem Pemerintahan Berbasis Elektronik (SPBE) dan Pemerintah Digital (Pemdi). Kami membantu instansi pemerintah dalam perencanaan, pengadaan, dan implementasi infrastruktur TIK.",
    features: [
      "Implementasi SPBE dan Pemerintah Digital",
      "Pengadaan IT melalui e-Katalog V6 LKPP",
      "Pembangunan dan modernisasi data center pemerintah",
      "Integrasi dengan INA Digital",
      "Kepatuhan regulasi TKDN dan UU PDP",
      "Konsultasi IT master plan pemerintah daerah",
    ],
  },
  {
    slug: "enterprise",
    title: "Solusi Enterprise",
    shortDescription:
      "Infrastruktur IT enterprise untuk mendukung pertumbuhan bisnis.",
    icon: "Briefcase",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    fullDescription:
      "Solusi infrastruktur IT skala enterprise yang dirancang untuk mendukung operasional bisnis, meningkatkan efisiensi, dan memastikan kelangsungan usaha. Cocok untuk BUMN, perbankan, manufaktur, dan korporasi.",
    features: [
      "Infrastruktur ERP dan enterprise application",
      "Digital workplace solution",
      "Business continuity dan disaster recovery",
      "Managed IT services dengan SLA enterprise",
      "Endpoint management skala besar",
      "IT asset management",
    ],
  },
  {
    slug: "data-center",
    title: "Data Center & Infrastruktur",
    shortDescription:
      "Desain, pembangunan, dan modernisasi data center berstandar internasional.",
    icon: "Server",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    fullDescription:
      "Layanan end-to-end untuk data center mulai dari perencanaan, desain, pembangunan, hingga operasional. Mengacu pada standar internasional untuk memastikan keandalan dan efisiensi.",
    features: [
      "Data center design dan assessment",
      "Pembangunan data center baru (greenfield)",
      "Modernisasi dan upgrade data center existing",
      "Sistem pendingin (cooling) dan kelistrikan (UPS)",
      "Structured cabling dan raised floor",
      "Monitoring dan management 24/7",
    ],
  },
  {
    slug: "network-security",
    title: "Network & Security",
    shortDescription:
      "Solusi jaringan dan keamanan untuk melindungi infrastruktur digital.",
    icon: "Network",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    fullDescription:
      "Solusi jaringan dan keamanan terintegrasi untuk memastikan konektivitas yang handal dan perlindungan menyeluruh terhadap ancaman siber.",
    features: [
      "LAN, WAN, dan SD-WAN design & implementation",
      "Wireless network enterprise",
      "Firewall dan next-gen security appliance",
      "Zero Trust Architecture implementation",
      "Endpoint protection dan EDR",
      "Network monitoring dan threat detection",
    ],
  },
];

// --- Partners ---
export interface Partner {
  name: string;
  category: string;
  level: string;
  color: string;
  logo: string;
}

export const partners: Partner[] = [
  { name: "Cisco", category: "Networking", level: "Select Partner", color: "#049fd9", logo: "/logos/cisco.svg" },
  { name: "Dell Technologies", category: "Server & Computing", level: "Authorized Partner", color: "#007DB8", logo: "/logos/dell.svg" },
  { name: "HPE", category: "Server & Computing", level: "Silver Partner", color: "#01A982", logo: "/logos/hpe.svg" },
  { name: "Microsoft", category: "Software", level: "Solutions Partner", color: "#00A4EF", logo: "/logos/microsoft.svg" },
  { name: "Lenovo", category: "Server & Computing", level: "Authorized Partner", color: "#E2231A", logo: "/logos/lenovo.svg" },
  { name: "Fortinet", category: "Security", level: "Advanced Partner", color: "#EE3124", logo: "/logos/fortinet.svg" },
  { name: "VMware", category: "Cloud", level: "Partner Connect", color: "#696566", logo: "/logos/vmware.svg" },
  { name: "AWS", category: "Cloud", level: "Select Tier", color: "#FF9900", logo: "/logos/aws.svg" },
  { name: "Palo Alto Networks", category: "Security", level: "Authorized Partner", color: "#FA582D", logo: "/logos/paloaltonetworks.svg" },
  { name: "Juniper Networks", category: "Networking", level: "Authorized Partner", color: "#84B135", logo: "/logos/junipernetworks.svg" },
  { name: "APC by Schneider", category: "Power & Cooling", level: "Elite Partner", color: "#3DCD58", logo: "/logos/schneiderelectric.svg" },
  { name: "Vertiv", category: "Power & Cooling", level: "Authorized Partner", color: "#CF202F", logo: "/logos/vertiv.svg" },
];

export const partnerCategories = [
  "Server & Computing",
  "Networking",
  "Cloud",
  "Software",
  "Security",
  "Power & Cooling",
];

// --- Portfolio ---
export interface PortfolioProject {
  title: string;
  client: string;
  category: "pemerintah" | "bumn" | "swasta";
  description: string;
  services: string[];
  year: number;
  image: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Modernisasi Data Center Kementerian",
    client: "Kementerian Komunikasi dan Digital",
    category: "pemerintah",
    description:
      "Modernisasi infrastruktur data center termasuk pengadaan server, storage, dan sistem pendingin berstandar Tier III.",
    services: ["IT Procurement", "System Integration", "Data Center"],
    year: 2025,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Implementasi Network Security",
    client: "Pemerintah Provinsi Jawa Barat",
    category: "pemerintah",
    description:
      "Implementasi firewall next-gen dan sistem monitoring keamanan jaringan untuk seluruh OPD.",
    services: ["Cybersecurity", "System Integration"],
    year: 2025,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Pengadaan IT Infrastructure",
    client: "Pemerintah Kota Surabaya",
    category: "pemerintah",
    description:
      "Pengadaan dan instalasi perangkat jaringan, server, dan end-user computing untuk mendukung program Smart City.",
    services: ["IT Procurement", "System Integration"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Cloud Migration Enterprise",
    client: "PT Pelabuhan Indonesia",
    category: "bumn",
    description:
      "Migrasi aplikasi bisnis kritikal ke lingkungan hybrid cloud dengan zero downtime.",
    services: ["Cloud Solutions", "System Integration"],
    year: 2025,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Managed Services Data Center",
    client: "PT Bank Rakyat Indonesia",
    category: "bumn",
    description:
      "Pengelolaan infrastruktur data center termasuk monitoring 24/7, maintenance, dan disaster recovery.",
    services: ["Managed Services", "Data Center"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Pengadaan Perangkat Jaringan",
    client: "PT Pertamina",
    category: "bumn",
    description:
      "Pengadaan switch, router, dan access point untuk seluruh kantor cabang di wilayah Sumatera.",
    services: ["IT Procurement"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "IT Master Plan",
    client: "PT Telkom Indonesia",
    category: "bumn",
    description:
      "Penyusunan IT master plan dan roadmap transformasi digital untuk unit bisnis baru.",
    services: ["IT Consulting"],
    year: 2025,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Cybersecurity Assessment",
    client: "Bank Mega",
    category: "swasta",
    description:
      "Security assessment komprehensif, penetration testing, dan implementasi solusi SIEM.",
    services: ["Cybersecurity"],
    year: 2025,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Infrastruktur Jaringan Kampus",
    client: "Universitas Indonesia",
    category: "swasta",
    description:
      "Desain dan implementasi infrastruktur jaringan kampus termasuk Wi-Fi 6 untuk 50+ gedung.",
    services: ["System Integration", "IT Procurement"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Managed IT Services",
    client: "PT Astra International",
    category: "swasta",
    description:
      "Layanan managed IT services termasuk helpdesk, server management, dan backup untuk kantor pusat.",
    services: ["Managed Services"],
    year: 2025,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Server Virtualization",
    client: "RS Pondok Indah",
    category: "swasta",
    description:
      "Implementasi virtualisasi server dengan VMware untuk konsolidasi 40+ server fisik.",
    services: ["System Integration", "Cloud Solutions"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Endpoint Security Deployment",
    client: "PT Gudang Garam",
    category: "swasta",
    description:
      "Deployment endpoint protection untuk 5.000+ perangkat di seluruh lokasi pabrik dan kantor.",
    services: ["Cybersecurity", "Managed Services"],
    year: 2024,
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80",
  },
];

// --- Certifications ---
export interface Certification {
  name: string;
  number: string;
  scope: string;
  type: "iso" | "registration" | "membership";
}

export const certifications: Certification[] = [
  {
    name: "ISO 9001:2015",
    number: "QMS-XXXXX",
    scope: "Sistem Manajemen Mutu untuk Pengadaan dan Layanan IT",
    type: "iso",
  },
  {
    name: "ISO 27001:2022",
    number: "ISMS-XXXXX",
    scope: "Sistem Manajemen Keamanan Informasi",
    type: "iso",
  },
  {
    name: "Terdaftar di LKPP / LPSE",
    number: "REG-XXXXX",
    scope: "Penyedia Barang/Jasa Pemerintah",
    type: "registration",
  },
  {
    name: "e-Katalog V6",
    number: "EKAT-XXXXX",
    scope: "Penyedia Produk IT di e-Katalog LKPP",
    type: "registration",
  },
  {
    name: "SIKaP LKPP",
    number: "SIKAP-XXXXX",
    scope: "Sistem Informasi Kinerja Penyedia LKPP",
    type: "registration",
  },
  {
    name: "Sertifikat TKDN",
    number: "TKDN-XXXXX",
    scope: "Tingkat Komponen Dalam Negeri untuk Produk IT",
    type: "registration",
  },
  {
    name: "APTIKNAS",
    number: "APT-XXXXX",
    scope: "Anggota Asosiasi Pengusaha TIK Nasional",
    type: "membership",
  },
  {
    name: "PaDi UMKM",
    number: "PADI-XXXXX",
    scope: "Terdaftar di Portal Pengadaan BUMN",
    type: "registration",
  },
];

// --- Team ---
export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ahmad Rizaldi",
    title: "Direktur Utama",
    bio: "Berpengalaman 15+ tahun di industri IT, mantan VP Technology di perusahaan multinasional.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Siti Nurhaliza",
    title: "Direktur Operasional",
    bio: "Ahli manajemen proyek IT dengan sertifikasi PMP dan pengalaman mengelola 100+ proyek.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Budi Santoso",
    title: "Direktur Teknis",
    bio: "CCIE dan VCAP certified, spesialis infrastruktur data center dan cloud computing.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Diana Putri",
    title: "Head of Sales",
    bio: "10+ tahun pengalaman di penjualan solusi IT enterprise untuk sektor pemerintah dan BUMN.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Reza Pratama",
    title: "Head of Engineering",
    bio: "Memimpin tim 25+ engineer bersertifikat vendor dengan fokus pada implementasi berkualitas tinggi.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
];

// --- Testimonials ---
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Persadatek membantu kami memodernisasi data center dengan proses yang smooth dan tanpa downtime. Tim mereka sangat profesional dan responsif.",
    name: "Dr. Ir. Hendra Wijaya",
    title: "Kepala Dinas Kominfo",
    company: "Pemerintah Provinsi Jawa Barat",
  },
  {
    quote:
      "Pengadaan perangkat IT melalui Persadatek sangat mudah dan transparan. Harga kompetitif dengan dukungan purna jual yang excellent.",
    name: "Ir. Bambang Suryadi",
    title: "VP IT Infrastructure",
    company: "PT Pelabuhan Indonesia",
  },
  {
    quote:
      "Layanan managed services dari Persadatek membantu kami mengurangi downtime hingga 95%. Respon time mereka sangat cepat.",
    name: "Andi Prasetyo, M.Kom",
    title: "IT Manager",
    company: "Bank Mega",
  },
  {
    quote:
      "Konsultasi IT master plan dari Persadatek memberikan kami roadmap yang jelas untuk transformasi digital. Sangat merekomendasikan.",
    name: "Dewi Kusuma, S.T.",
    title: "Direktur TI",
    company: "PT Astra International",
  },
];

// --- Blog Posts ---
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
  date: string;
  category: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tren-teknologi-2026",
    title: "10 Tren Teknologi yang Akan Mendominasi 2026",
    excerpt:
      "Dari AI-Augmented Procurement hingga Zero Trust Architecture, inilah tren teknologi yang perlu diperhatikan organisasi di Indonesia.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    content: `<p>Tahun 2026 membawa perubahan besar dalam lanskap teknologi di Indonesia. Berikut adalah 10 tren utama yang perlu diperhatikan:</p>
<h3>1. AI-Augmented Procurement</h3>
<p>Lebih dari 70% proses transformasi digital akan di-augmentasi AI pada 2026. Dalam pengadaan, AI membantu analisis vendor, prediksi harga, dan otomasi proses approval.</p>
<h3>2. E-Katalog V6 LKPP</h3>
<p>Sistem e-Katalog generasi terbaru yang terintegrasi dengan SAKTI dan SIPD menjadi standar wajib untuk pengadaan pemerintah.</p>
<h3>3. Zero Trust Architecture</h3>
<p>Pendekatan keamanan "never trust, always verify" menjadi standar baru menggantikan model perimeter tradisional.</p>
<p>Persadatek siap membantu organisasi Anda mengadopsi teknologi-teknologi terbaru ini. Hubungi kami untuk konsultasi gratis.</p>`,
    date: "2026-02-15",
    category: "Tren Teknologi",
    author: "Tim Persadatek",
  },
  {
    slug: "panduan-pengadaan-it-pemerintah",
    title: "Panduan Lengkap Pengadaan IT Pemerintah 2026",
    excerpt:
      "Memahami Perpres 46/2025 dan mekanisme e-Katalog V6 untuk pengadaan IT yang efisien dan sesuai regulasi.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    content: `<p>Pengadaan IT di sektor pemerintah memiliki regulasi yang terus diperbarui. Artikel ini membahas panduan terkini berdasarkan Perpres 46/2025.</p>
<h3>Mekanisme Pengadaan</h3>
<p>Terdapat beberapa metode pengadaan yang dapat digunakan: E-Purchasing via e-Katalog V6, Tender/Seleksi, Penunjukan Langsung, Pengadaan Langsung, dan Tender Cepat.</p>
<h3>Syarat Penyedia</h3>
<p>Penyedia barang/jasa IT harus terdaftar di SIKaP LKPP, memiliki NIB, NPWP, dan idealnya memiliki sertifikasi ISO 9001:2015.</p>
<p>Persadatek telah terdaftar di LKPP dan e-Katalog V6, siap menjadi mitra pengadaan IT pemerintah Anda.</p>`,
    date: "2026-02-01",
    category: "Regulasi",
    author: "Tim Persadatek",
  },
  {
    slug: "keamanan-siber-indonesia-2026",
    title: "Tantangan Keamanan Siber di Indonesia: Apa yang Perlu Diketahui",
    excerpt:
      "Indonesia mendeteksi 133,4 juta serangan siber di semester pertama 2025. Bagaimana organisasi harus merespons?",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    content: `<p>Ancaman siber di Indonesia terus meningkat dengan signifikan. Data menunjukkan 133,4 juta serangan siber terdeteksi di semester pertama 2025 saja.</p>
<h3>Ancaman Utama</h3>
<p>Ransomware tetap menjadi ancaman terbesar, kini diperkuat oleh AI. Selain itu, phishing, DDoS, dan insider threats juga meningkat.</p>
<h3>UU PDP Berlaku Penuh</h3>
<p>Sejak Oktober 2024, UU Perlindungan Data Pribadi berlaku penuh. Organisasi wajib memiliki kebijakan data protection dan data protection officer.</p>
<p>Persadatek menyediakan solusi cybersecurity end-to-end termasuk audit keamanan, implementasi SIEM, dan konsultasi kepatuhan UU PDP.</p>`,
    date: "2026-01-20",
    category: "Cybersecurity",
    author: "Tim Persadatek",
  },
  {
    slug: "memilih-cloud-provider",
    title: "Tips Memilih Cloud Provider yang Tepat untuk Bisnis Anda",
    excerpt:
      "Public cloud, private cloud, atau hybrid? Panduan memilih solusi cloud yang sesuai kebutuhan organisasi.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    content: `<p>Migrasi ke cloud bukan lagi pilihan tapi kebutuhan. Namun memilih provider dan model yang tepat memerlukan pertimbangan matang.</p>
<h3>Public vs Private vs Hybrid</h3>
<p>Setiap model memiliki kelebihan dan kekurangan. Public cloud cocok untuk startup, private cloud untuk data sensitif, dan hybrid cloud untuk fleksibilitas.</p>
<h3>Faktor Pertimbangan</h3>
<p>Keamanan, compliance, biaya, skalabilitas, dan lokasi data center adalah faktor utama yang perlu dipertimbangkan.</p>
<p>Tim Persadatek dapat membantu Anda melakukan cloud readiness assessment dan merancang strategi migrasi cloud yang optimal.</p>`,
    date: "2026-01-10",
    category: "Cloud",
    author: "Tim Persadatek",
  },
  {
    slug: "transformasi-digital-pemerintah-2026",
    title: "RIPDN 2025-2045: Era Baru Pemerintah Digital Indonesia",
    excerpt:
      "Rencana Induk Pemerintah Digital Nasional resmi diluncurkan. Apa dampaknya bagi pengadaan IT?",
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=800&q=80",
    content: `<p>Februari 2026, pemerintah meluncurkan Rencana Induk Pemerintah Digital Nasional (RIPDN) 2025-2045 yang menjadi panduan transformasi digital selama 20 tahun ke depan.</p>
<h3>Transformasi SPBE ke Pemdi</h3>
<p>Sistem Pemerintahan Berbasis Elektronik (SPBE) bertransformasi menjadi Pemerintah Digital (Pemdi) dengan fokus pada dampak dan kepuasan pengguna.</p>
<h3>INA Digital</h3>
<p>GovTech superapp INA Digital akan mengintegrasikan 27.000 aplikasi pemerintah menjadi platform terpadu.</p>
<p>Persadatek siap mendukung instansi pemerintah dalam implementasi RIPDN melalui layanan konsultasi dan integrasi sistem.</p>`,
    date: "2026-01-05",
    category: "Pemerintah Digital",
    author: "Tim Persadatek",
  },
  {
    slug: "pentingnya-tkdn-pengadaan",
    title: "Pentingnya TKDN dalam Pengadaan IT Pemerintah",
    excerpt:
      "Memahami ketentuan TKDN dan dampaknya bagi penyedia dan pembeli produk IT di Indonesia.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
    content: `<p>Tingkat Komponen Dalam Negeri (TKDN) menjadi faktor krusial dalam pengadaan IT pemerintah sejak diberlakukannya regulasi terbaru.</p>
<h3>Ketentuan TKDN</h3>
<p>Produk dalam negeri wajib digunakan jika TKDN + BMP minimal 40%. Produk harus memiliki TKDN paling sedikit 25%.</p>
<h3>Manfaat TKDN</h3>
<p>Produk dengan TKDN mendapatkan preferensi harga dalam proses tender, memberikan keunggulan kompetitif bagi penyedia.</p>
<p>Persadatek menyediakan produk IT bersertifikasi TKDN untuk membantu instansi pemerintah memenuhi ketentuan pengadaan.</p>`,
    date: "2025-12-20",
    category: "Regulasi",
    author: "Tim Persadatek",
  },
];

// --- Job Listings ---
export interface JobListing {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export const jobListings: JobListing[] = [
  {
    title: "Network Engineer",
    department: "Engineering",
    location: "Jakarta",
    type: "Full-time",
    description:
      "Merancang, mengimplementasikan, dan mengelola infrastruktur jaringan klien. Bekerja dengan teknologi Cisco, Juniper, dan Fortinet.",
    requirements: [
      "S1 Teknik Informatika / Teknik Komputer",
      "Pengalaman minimal 3 tahun di bidang networking",
      "Sertifikasi CCNA/CCNP (wajib)",
      "Familiar dengan firewall Fortinet/Palo Alto",
      "Bersedia bekerja di luar jam kerja jika diperlukan",
    ],
  },
  {
    title: "System Engineer",
    department: "Engineering",
    location: "Jakarta",
    type: "Full-time",
    description:
      "Mengimplementasikan dan mengelola infrastruktur server, storage, dan virtualisasi untuk proyek klien.",
    requirements: [
      "S1 Teknik Informatika / Sistem Informasi",
      "Pengalaman minimal 3 tahun di bidang server/storage",
      "Familiar dengan VMware vSphere, Microsoft Hyper-V",
      "Pengalaman dengan server Dell, HPE, atau Lenovo",
      "Sertifikasi VCP atau MCSA menjadi nilai tambah",
    ],
  },
  {
    title: "Sales Executive - IT Solutions",
    department: "Sales",
    location: "Jakarta",
    type: "Full-time",
    description:
      "Mengembangkan bisnis baru dan mengelola hubungan klien untuk penjualan solusi IT di sektor pemerintah dan enterprise.",
    requirements: [
      "S1 segala jurusan, lebih disukai Teknik/Bisnis",
      "Pengalaman minimal 2 tahun di penjualan IT",
      "Memiliki jaringan di sektor pemerintah/BUMN menjadi nilai tambah",
      "Familiar dengan proses pengadaan pemerintah (LKPP/LPSE)",
      "Memiliki kendaraan pribadi dan SIM A",
    ],
  },
  {
    title: "Project Manager",
    department: "Project Management",
    location: "Jakarta",
    type: "Full-time",
    description:
      "Mengelola proyek implementasi IT dari planning hingga delivery dengan memastikan kualitas, timeline, dan budget terpenuhi.",
    requirements: [
      "S1 Teknik Informatika / Manajemen",
      "Pengalaman minimal 5 tahun sebagai PM di proyek IT",
      "Sertifikasi PMP atau Prince2 menjadi nilai tambah",
      "Pengalaman mengelola proyek pemerintah/BUMN",
      "Kemampuan komunikasi dan leadership yang baik",
    ],
  },
];

// --- Company Info ---
export const companyInfo = {
  founded: 2015,
  legalName: "PT Persada Teknologi Mandiri",
  nib: "1234567890123",
  npwp: "01.234.567.8-012.000",
  vision:
    "Menjadi mitra teknologi informasi terpercaya dan terdepan di Indonesia yang mendorong transformasi digital di sektor pemerintah, BUMN, dan swasta.",
  mission: [
    "Menyediakan solusi teknologi informasi end-to-end yang berkualitas dan kompetitif.",
    "Membangun kemitraan strategis dengan vendor teknologi global terkemuka.",
    "Mengutamakan kepuasan pelanggan melalui layanan profesional dan dukungan purna jual terbaik.",
    "Berkontribusi pada percepatan transformasi digital Indonesia.",
    "Mengembangkan SDM yang kompeten dan bersertifikat internasional.",
  ],
  values: [
    {
      title: "Integritas",
      description: "Menjalankan bisnis dengan kejujuran, transparansi, dan etika profesional.",
    },
    {
      title: "Inovasi",
      description: "Terus berinovasi mengikuti perkembangan teknologi untuk solusi terbaik.",
    },
    {
      title: "Kolaborasi",
      description: "Membangun kemitraan yang saling menguntungkan dengan klien dan partner.",
    },
    {
      title: "Keunggulan Layanan",
      description: "Memberikan layanan terbaik dengan standar internasional dan SLA terjamin.",
    },
    {
      title: "Keberlanjutan",
      description: "Bertumbuh secara berkelanjutan dan bertanggung jawab terhadap lingkungan.",
    },
  ],
  milestones: [
    { year: 2015, event: "Pendirian PT Persada Teknologi Mandiri" },
    { year: 2016, event: "Kemitraan pertama dengan vendor teknologi global" },
    { year: 2018, event: "Sertifikasi ISO 9001:2015" },
    { year: 2019, event: "Terdaftar di LKPP sebagai penyedia barang/jasa pemerintah" },
    { year: 2020, event: "Ekspansi layanan Managed Services dan Cloud Solutions" },
    { year: 2022, event: "Sertifikasi ISO 27001:2022" },
    { year: 2024, event: "Pencapaian 100+ proyek di sektor pemerintah dan BUMN" },
    { year: 2025, event: "Terdaftar di e-Katalog V6 LKPP" },
  ],
};

// --- Why Choose Us ---
export const whyChooseUs = [
  {
    title: "Solusi End-to-End",
    description: "Dari konsultasi, pengadaan, implementasi, hingga pemeliharaan dalam satu mitra.",
  },
  {
    title: "Terdaftar di LKPP",
    description: "Terdaftar resmi di LKPP, LPSE, dan e-Katalog V6 untuk pengadaan pemerintah.",
  },
  {
    title: "Partner Vendor Resmi",
    description: "Authorized partner dari Cisco, Dell, HPE, Microsoft, dan vendor global lainnya.",
  },
  {
    title: "Dukungan 24/7",
    description: "Tim support bersertifikat siap membantu 24 jam sehari, 7 hari seminggu.",
  },
];

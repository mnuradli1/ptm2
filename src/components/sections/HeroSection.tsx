import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/siteData";

const particles = [
  { left: "5%",  delay: "0s",   size: 4,  far: false },
  { left: "10%", delay: "2.3s", size: 8,  far: true  },
  { left: "16%", delay: "1.1s", size: 5,  far: false },
  { left: "22%", delay: "3.4s", size: 10, far: false },
  { left: "28%", delay: "0.5s", size: 6,  far: true  },
  { left: "34%", delay: "4.2s", size: 4,  far: false },
  { left: "39%", delay: "1.8s", size: 12, far: false },
  { left: "45%", delay: "5.1s", size: 7,  far: true  },
  { left: "50%", delay: "2.6s", size: 5,  far: false },
  { left: "56%", delay: "0.9s", size: 9,  far: false },
  { left: "62%", delay: "3.7s", size: 6,  far: true  },
  { left: "67%", delay: "1.4s", size: 11, far: false },
  { left: "73%", delay: "4.8s", size: 4,  far: false },
  { left: "78%", delay: "2.0s", size: 8,  far: true  },
  { left: "83%", delay: "0.3s", size: 5,  far: false },
  { left: "88%", delay: "3.2s", size: 10, far: false },
  { left: "93%", delay: "1.6s", size: 6,  far: true  },
  { left: "97%", delay: "4.5s", size: 7,  far: false },
];

export default function HeroSection() {
  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Halo Persadatek, saya ingin konsultasi mengenai solusi IT."
  )}`;

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 overflow-hidden">
      {/* Ember radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 110%, rgba(234,88,12,0.55) 0%, transparent 55%), radial-gradient(ellipse at 80% 100%, rgba(251,191,36,0.25) 0%, transparent 50%)",
        }}
      />

      {/* Flickering ember blobs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl animate-ember-flicker" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500 rounded-full blur-3xl animate-ember-flicker"
          style={{ animationDelay: "1.2s" }}
        />
      </div>

      {/* Volcanic mountain silhouette */}
      <svg
        className="absolute bottom-0 left-0 w-full h-28 sm:h-32 pointer-events-none"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,200 L0,150 L120,90 L200,130 L320,60 L420,110 L540,40 L660,100 L780,30 L900,80 L1020,50 L1140,110 L1260,70 L1380,120 L1440,90 L1440,200 Z"
          fill="rgba(20, 4, 4, 0.85)"
        />
      </svg>

      {/* Animated SVG flames at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-32 sm:h-36 pointer-events-none overflow-hidden">
        {/* Back flame layer */}
        <svg
          className="absolute bottom-0 inset-x-0 w-full h-full animate-flame-dance"
          style={{ animationDelay: "0s" }}
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="flameBack" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%"  stopColor="rgba(220, 38, 38, 0.85)" />
              <stop offset="50%" stopColor="rgba(234, 88, 12, 0.55)" />
              <stop offset="100%" stopColor="rgba(251, 191, 36, 0)" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q60,120 120,150 T240,130 Q300,80 360,140 T480,120 Q540,70 600,130 T720,110 Q780,60 840,125 T960,115 Q1020,75 1080,135 T1200,120 Q1260,80 1320,140 T1440,135 L1440,200 Z"
            fill="url(#flameBack)"
          />
        </svg>

        {/* Mid flame layer */}
        <svg
          className="absolute bottom-0 inset-x-0 w-full h-[85%] animate-flame-dance"
          style={{ animationDelay: "0.6s" }}
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="flameMid" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%"  stopColor="rgba(234, 88, 12, 0.95)" />
              <stop offset="60%" stopColor="rgba(251, 146, 60, 0.6)" />
              <stop offset="100%" stopColor="rgba(254, 215, 170, 0)" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q40,140 90,160 T180,140 Q240,90 300,150 T420,130 Q480,80 540,145 T660,125 Q720,75 780,140 T900,120 Q960,80 1020,145 T1140,130 Q1200,85 1260,150 T1380,140 L1440,150 L1440,200 Z"
            fill="url(#flameMid)"
          />
        </svg>

        {/* Front flame layer (brightest) */}
        <svg
          className="absolute bottom-0 inset-x-0 w-full h-[60%] animate-flame-dance"
          style={{ animationDelay: "1.2s" }}
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="flameFront" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%"   stopColor="rgba(251, 191, 36, 1)" />
              <stop offset="50%"  stopColor="rgba(254, 215, 170, 0.7)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q70,170 140,180 T280,170 Q340,140 400,175 T540,165 Q600,135 660,175 T800,165 Q860,140 920,175 T1060,170 Q1120,140 1180,175 T1320,170 Q1380,150 1440,175 L1440,200 Z"
            fill="url(#flameFront)"
          />
        </svg>
      </div>

      {/* Rising ember particles (dense field) */}
      <div className="absolute inset-x-0 bottom-0 h-full pointer-events-none">
        {particles.map((e, i) => (
          <div
            key={i}
            className={`absolute bottom-0 rounded-full bg-secondary-400 blur-sm ${
              e.far ? "animate-ember-rise-far" : "animate-ember-rise"
            }`}
            style={{
              left: e.left,
              width: `${e.size}px`,
              height: `${e.size}px`,
              animationDelay: e.delay,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-primary-100 mb-6 border border-white/10">
              IT Procurement & System Integrator
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight">
              <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,191,36,0.4)]">
                {siteConfig.tagline}
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-100 leading-relaxed">
              Solusi teknologi informasi end-to-end untuk sektor pemerintah, BUMN, dan swasta.
              Dari pengadaan, implementasi, hingga pemeliharaan.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={waUrl} variant="whatsapp" size="lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konsultasi Gratis
              </Button>
              <Button href="/layanan" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-700">
                Lihat Layanan
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=700&q=80"
                alt="Server room dengan red lighting"
                className="rounded-2xl shadow-[0_0_60px_rgba(220,38,38,0.4)] w-full h-auto"
              />
              {/* Ember tint overlay on image */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(220,38,38,0.15), rgba(234,88,12,0.1))",
                }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">150+ Proyek</p>
                    <p className="text-xs text-slate-500">Berhasil diselesaikan</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">ISO Certified</p>
                    <p className="text-xs text-slate-500">9001 & 27001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

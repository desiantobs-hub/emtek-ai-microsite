import { useEffect } from 'react'

/* ─── Scroll-entrance reveal ─── */
function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-up').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ─── Decorative sparkle star ─── */
function Star({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`inline-block fill-green-500 ${className}`}
      aria-hidden="true"
    >
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>
  )
}

/* ─── Top badge (outline pill) ─── */
function TopBadge() {
  return (
    <div className="flex justify-center mb-5">
      <span className="inline-flex items-center border-2 border-navy-900 text-navy-900 text-[11px] font-extrabold px-5 py-1.5 rounded-full tracking-[0.18em] uppercase bg-white">
        Emtek AI Initiative
      </span>
    </div>
  )
}

/* ─── Large decorative circle (top-right) ─── */
function DecoCircle({ className = '' }) {
  return (
    <div
      className={`absolute rounded-full bg-[#E8DFD0] pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}

/* ─── City buildings silhouette (sides) ─── */
function CityLeft() {
  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-start gap-1 pointer-events-none opacity-30" aria-hidden="true">
      <div className="w-10 h-20 bg-[#C8BEAE] rounded-t-sm ml-0" style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)' }} />
      <div className="w-8 h-14 bg-[#C8BEAE] rounded-t-sm ml-1" />
    </div>
  )
}
function CityRight() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-end gap-1 pointer-events-none opacity-30" aria-hidden="true">
      <div className="w-10 h-16 bg-[#C8BEAE] rounded-t-sm mr-0" />
      <div className="w-8 h-20 bg-[#C8BEAE] rounded-t-sm mr-1" />
    </div>
  )
}

/* ─── Navy curved footer bar (bottom of sections) ─── */
function NavyFooterBar() {
  return (
    <div className="relative w-full mt-6 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* wave curve */}
      <svg viewBox="0 0 390 80" xmlns="http://www.w3.org/2000/svg" className="w-full block">
        <path d="M0,80 L0,40 Q195,0 390,40 L390,80 Z" fill="#0F1E52" />
      </svg>
      {/* red arc accent */}
      <div className="absolute bottom-0 right-0 w-24 h-16">
        <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M100,70 Q40,0 0,30" stroke="#C41230" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      {/* dot grid in footer dark area */}
      <div className="absolute bottom-0 left-4 flex gap-1 flex-wrap w-20 h-10 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-white opacity-20" />
        ))}
      </div>
    </div>
  )
}

/* ─── Metric card (horizontal: icon left, text right) ─── */
function MetricCard({ icon, iconBg, headline, value, valueSub, valueColor = 'text-green-600', sub, delay = '' }) {
  return (
    <div className={`fade-up ${delay} bg-white rounded-2xl border-2 border-navy-900 flex items-center gap-4 px-4 py-4`}>
      <div className={`shrink-0 w-12 h-12 rounded-full ${iconBg} flex items-center justify-center text-white text-xl font-black`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-navy-900 text-sm font-black leading-snug">{headline}</p>
        {value && (
          <p className={`${valueColor} text-2xl font-black leading-none mt-0.5`}>
            {value}
            {valueSub && <span className="text-navy-900 text-sm font-bold ml-2">{valueSub}</span>}
          </p>
        )}
        {sub && <p className="text-gray-500 text-xs mt-0.5 leading-snug">{sub}</p>}
      </div>
    </div>
  )
}

/* ─── Episode card (stacked on mobile, side-by-side on sm+) ─── */
function EpisodeCard({ image, label, title, description, url, delay = '' }) {
  return (
    <div className={`fade-up ${delay} rounded-2xl border-2 border-navy-900 bg-white/80 p-4 shadow-sm`}>
      <div className="grid gap-4 sm:grid-cols-[44%_1fr] sm:items-center">
        {/* Landscape thumbnail — 16:9, object-contain, cream bg */}
        <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#F7F0E6]">
          <img
            src={image}
            alt={`New Keluarga Somat — ${title} episode thumbnail`}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
        {/* Text + button */}
        <div>
          <p className="text-red-600 text-xs font-extrabold tracking-widest uppercase mb-0.5">{label}</p>
          <h3 className="text-navy-900 text-xl font-black leading-tight mb-1">{title}</h3>
          <p className="text-slate-500 text-xs leading-snug mb-4">{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-btn inline-flex w-full items-center justify-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-3 rounded-full text-sm sm:w-auto"
          >
            <PlayIcon /> Watch on Vidio
          </a>
        </div>
      </div>
    </div>
  )
}

/* ─── Brand card (horizontal: logo left, text+button right, colored border) ─── */
function BrandCard({ logo, logoAlt, title, description, url, borderColor = 'border-navy-900', titleColor = 'text-navy-900', delay = '' }) {
  return (
    <div className={`fade-up ${delay} bg-white rounded-2xl border-2 ${borderColor} flex items-center gap-4 px-4 py-5`}>
      <div className="shrink-0 w-24 h-16 flex items-center justify-center">
        <img src={logo} alt={logoAlt} className="max-w-full max-h-full object-contain" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className={`${titleColor} text-base font-black mb-0.5`}>{title}</h3>
        <p className="text-gray-500 text-xs mb-3 leading-snug">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="watch-btn inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-full text-xs"
        >
          <PlayIcon /> Watch on Vidio
        </a>
        <p className="text-gray-400 text-[10px] mt-1.5 break-all">{url.replace('https://', '')}</p>
      </div>
    </div>
  )
}

/* ─── Connect card (horizontal: icon circle left, text right) ─── */
function ConnectCard({ iconBg, icon, title, sub, delay = '' }) {
  return (
    <div className={`fade-up ${delay} bg-white rounded-2xl border-2 border-navy-900 flex items-center gap-4 px-4 py-4`}>
      <div className={`shrink-0 w-12 h-12 rounded-full ${iconBg} flex items-center justify-center text-white text-xl`}>
        {icon}
      </div>
      <div>
        <p className="text-navy-900 text-sm font-black leading-snug">{title}</p>
        <p className="text-gray-500 text-xs mt-0.5 leading-snug">{sub}</p>
      </div>
    </div>
  )
}

/* ─── Small play icon ─── */
function PlayIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <path d="M2 1.5l9 4.5-9 4.5V1.5z" />
    </svg>
  )
}

/* ─── Section wrapper (cream bg, max-width, padding) ─── */
function Section({ id, children, className = '', ariaLabel }) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative px-5 py-12 bg-cream overflow-hidden ${className}`}
    >
      <div className="max-w-[420px] mx-auto">{children}</div>
    </section>
  )
}

/* ════════════════════════════════════════
   APP
════════════════════════════════════════ */
export default function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-cream font-sans overflow-x-hidden">

      {/* ══════════════════════════════
          1. HERO
      ══════════════════════════════ */}
      <Section id="hero" ariaLabel="Hero — What Happens When Local IP Meets AI?">

        {/* Large decorative beige circle top-right */}
        <DecoCircle className="w-36 h-36 -top-10 -right-16 opacity-80" />

        {/* Dot grid top-left */}
        <div className="dot-grid absolute top-8 left-2 w-24 h-24 opacity-50 pointer-events-none" aria-hidden="true" />

        {/* Top badge */}
        <TopBadge />

        {/* Headline */}
        <div className="fade-up text-center mb-5">
          <h1 className="text-[2.5rem] leading-[1.1] font-black tracking-tight">
            <span className="text-navy-900">What Happens</span><br />
            <span className="text-red-600">When Local IP</span><br />
            <span className="text-navy-900">Meets AI?</span>
          </h1>
        </div>

        {/* Subtext */}
        <p className="fade-up fade-up-delay-1 text-center text-navy-900 text-sm leading-relaxed max-w-xs mx-auto mb-7 font-medium">
          A teaser companion to how Emtek is exploring a new way to produce, scale, and reimagine Indonesian animation.
        </p>

        {/* NKS Logo */}
        <div className="fade-up fade-up-delay-2 mx-auto mt-2 mb-1 flex w-full justify-center relative">
          {/* Sparkle decorations */}
          <Star className="absolute -left-2 top-12 w-4 h-4" />
          <Star className="absolute right-6 top-4 w-3 h-3" />
          {/* City silhouette left/right */}
          <div className="absolute left-0 bottom-0 opacity-25 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 50 80" width="50" height="80" fill="#A89880">
              <rect x="5"  y="30" width="14" height="50" rx="1"/>
              <rect x="22" y="45" width="10" height="35" rx="1"/>
              <rect x="0"  y="50" width="8"  height="30" rx="1"/>
            </svg>
          </div>
          <div className="absolute right-0 bottom-0 opacity-25 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 50 80" width="50" height="80" fill="#A89880">
              <rect x="30" y="35" width="14" height="45" rx="1"/>
              <rect x="18" y="50" width="10" height="30" rx="1"/>
              <rect x="42" y="45" width="8"  height="35" rx="1"/>
            </svg>
          </div>
          <img
            src="/assets/nks-logo.png"
            alt="New Keluarga Somat animated series — a 3D animated family from the show"
            className="mx-auto h-auto w-[280px] max-w-[82vw] object-contain drop-shadow-xl sm:w-[340px] md:w-[400px]"
          />
        </div>

        {/* Callout card */}
        <div className="fade-up fade-up-delay-3 bg-white rounded-2xl border border-gray-200 shadow-md px-4 py-4 flex items-center gap-3 mt-4">
          <div className="shrink-0 w-11 h-11 rounded-full bg-green-500 flex items-center justify-center">
            <Star className="w-5 h-5 fill-white" />
          </div>
          <div>
            <p className="text-navy-900 text-sm font-bold leading-snug">
              A glimpse into the story behind the AI-assisted production journey.
            </p>
            <p className="text-red-600 font-extrabold text-sm mt-0.5">Watch us and get curious!</p>
          </div>
        </div>

        <NavyFooterBar />
      </Section>

      {/* ══════════════════════════════
          2. PERFORMANCE
      ══════════════════════════════ */}
      <Section id="performance" ariaLabel="Performance — A Local IP That Performed">

        <DecoCircle className="w-28 h-28 -top-8 -right-12 opacity-70" />
        <div className="dot-grid absolute top-6 left-0 w-20 h-20 opacity-40 pointer-events-none" aria-hidden="true" />

        <TopBadge />

        {/* NKS logo small */}
        <div className="mx-auto mt-2 mb-6 flex justify-center">
          <img
            src="/assets/nks-logo.png"
            alt="New Keluarga Somat logo"
            className="mx-auto h-auto w-[130px] max-w-[40vw] object-contain sm:w-[150px] md:w-[170px]"
          />
        </div>

        <div className="fade-up text-center mb-6">
          <h2 className="text-[2.2rem] font-black leading-tight tracking-tight">
            <span className="text-navy-900">A Local IP</span><br />
            <span className="text-red-600">That Performed</span>
          </h2>
          <p className="text-navy-900 text-sm mt-2 leading-relaxed font-medium">
            New Keluarga Somat showed strong audience traction during Ramadan 2026.
          </p>
          <Star className="w-4 h-4 mt-2 mx-auto" />
        </div>

        <div className="flex flex-col gap-3">
          <MetricCard
            icon={<Star className="w-5 h-5 fill-white" />}
            iconBg="bg-red-600"
            headline="#1 Local Animated Program"
            value="during Ramadan 2026"
            valueColor="text-navy-900"
            delay="fade-up-delay-1"
          />
          <MetricCard
            icon={<span className="text-base">📺</span>}
            iconBg="bg-navy-900"
            headline="Prime Time Performance"
            value="+74%"
            valueSub="Audience Share"
            sub="vs Ramadan 2025"
            delay="fade-up-delay-2"
          />
          <MetricCard
            icon={<span className="text-base">🌙</span>}
            iconBg="bg-navy-900"
            headline="Sahur Time Performance"
            value="+93%"
            valueSub="Audience Share"
            sub="vs Ramadan 2025"
            delay="fade-up-delay-3"
          />
          <MetricCard
            icon={<span className="text-sm font-black">182</span>}
            iconBg="bg-teal-500"
            headline="182 Minutes On-Air"
            value={null}
            sub="26 episodes × 7 minutes · produced within 4 months"
            delay="fade-up-delay-4"
          />
        </div>

        {/* Bottom callout — dark navy + yellow border */}
        <div className="fade-up mt-5 bg-navy-900 border-2 border-yellow-400 rounded-2xl px-5 py-4 text-center">
          <p className="text-white text-sm font-bold leading-relaxed">
            The bigger story is not only the performance. It is how the production model was built differently.
          </p>
        </div>

        <NavyFooterBar />
      </Section>

      {/* ══════════════════════════════
          3. CONTENT SHOWCASE
      ══════════════════════════════ */}
      <Section id="showcase" ariaLabel="Content Showcase — Watch the IP in Action">

        <DecoCircle className="w-24 h-24 -top-6 -right-10 opacity-70" />
        <div className="dot-grid absolute top-6 left-2 w-20 h-20 opacity-40 pointer-events-none" aria-hidden="true" />

        <TopBadge />

        {/* NKS logo */}
        <div className="mx-auto mt-2 mb-6 flex justify-center">
          <img
            src="/assets/nks-logo.png"
            alt="New Keluarga Somat logo"
            className="mx-auto h-auto w-[130px] max-w-[40vw] object-contain sm:w-[150px] md:w-[170px]"
          />
        </div>

        <div className="fade-up text-center mb-6">
          <h2 className="text-[2.2rem] font-black leading-tight tracking-tight">
            <span className="text-navy-900">Watch the IP</span><br />
            <span className="text-red-600">in Action</span>
          </h2>
          <div className="flex justify-center items-center gap-4 mt-2">
            <Star className="w-3 h-3" />
            <p className="text-navy-900 text-sm font-medium">
              Explore selected episodes from New Keluarga Somat before the session begins.
            </p>
            <Star className="w-3 h-3" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <EpisodeCard
            image="/assets/ep16-penyamaran.webp"
            label="Episode 16"
            title="Penyamaran"
            description="A selected episode from the AI-assisted animation journey."
            url="https://www.vidio.com/watch/9250683-ep-16-penyamaran"
            delay="fade-up-delay-1"
          />
          <EpisodeCard
            image="/assets/ep20-pasar-malam.webp"
            label="Episode 20"
            title="Pasar Malam"
            description="A selected episode from the AI-assisted animation journey."
            url="https://www.vidio.com/watch/9310611-ep-20-pasar-malam"
            delay="fade-up-delay-2"
          />
        </div>

        <NavyFooterBar />
      </Section>

      {/* ══════════════════════════════
          4. VIDIOGEN
      ══════════════════════════════ */}
      <Section id="vidiogen" ariaLabel="VidioGen — Behind the Workflow">

        <DecoCircle className="w-24 h-24 -top-6 -right-10 opacity-70" />

        <TopBadge />

        <div className="fade-up text-left mb-5">
          <h2 className="text-[2.2rem] font-black leading-tight tracking-tight">
            <span className="text-navy-900">Behind the Workflow:</span><br />
            <span className="text-red-600">VidioGen</span>
          </h2>
          <p className="text-navy-900 text-sm mt-3 leading-relaxed font-medium">
            A glimpse into Emtek's internal AI video creation platform supporting the production journey behind New Keluarga Somat.
          </p>
        </div>

        {/* VidioGen screenshot */}
        <div className="fade-up fade-up-delay-1 rounded-2xl overflow-hidden shadow-xl border border-gray-200 mb-5">
          <img
            src="/assets/vidiogen-screenshot.png"
            alt="VidioGen platform interface — AI video creation tool showing storyboard and shot management"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Callout card */}
        <div className="fade-up fade-up-delay-2 bg-white rounded-2xl border border-gray-200 shadow-sm px-4 py-4 flex items-center gap-3 mb-5">
          <div className="shrink-0 w-11 h-11 rounded-full bg-red-600 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" aria-hidden="true">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
          </div>
          <p className="text-navy-900 text-sm font-medium leading-snug">
            Technology and creative teams work together from the beginning — turning ideas into production-ready content faster.
          </p>
        </div>

        {/* CTA button */}
        <div className="fade-up fade-up-delay-3 text-center">
          <a
            href="https://www.vidio.com/watch/9403925-vidiogen-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="watch-btn-navy inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3.5 rounded-full text-sm shadow-lg w-full justify-center"
          >
            <PlayIcon /> Watch VidioGen Demo on Vidio
          </a>
          <p className="text-gray-400 text-[11px] mt-2">vidio.com/watch/9403925-vidiogen-demo</p>
        </div>

        <NavyFooterBar />
      </Section>

      {/* ══════════════════════════════
          5. BRAND BUILT-IN
      ══════════════════════════════ */}
      <Section id="brand" ariaLabel="Brand Built-In — Reimagined brand integration">

        <DecoCircle className="w-28 h-28 -top-8 -right-12 opacity-70" />
        <div className="dot-grid absolute top-6 left-0 w-20 h-20 opacity-40 pointer-events-none" aria-hidden="true" />

        <TopBadge />

        <div className="fade-up text-left mb-6">
          <h2 className="text-[2.2rem] font-black leading-tight tracking-tight">
            <span className="text-navy-900">Brand Built-In,</span><br />
            <span className="text-red-600">Reimagined</span>
          </h2>
          <p className="text-navy-900 text-sm mt-3 leading-relaxed font-medium">
            AI opens new ways to make brand integration faster, more imaginative, and naturally part of the story.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-5">
          <BrandCard
            logo="/assets/kapal-api-logo.png"
            logoAlt="Kapal Api coffee brand logo — Jelas lebih enak"
            title="Kapal Api"
            titleColor="text-red-600"
            description="Kapal Api built-in showcase"
            url="https://www.vidio.com/watch/9404013-kapal-api-delbis-built-in-new-keluarga-somat"
            borderColor="border-red-600"
            delay="fade-up-delay-1"
          />
          <BrandCard
            logo="/assets/indofood-logo.png"
            logoAlt="Indofood brand logo"
            title="Indofood"
            titleColor="text-navy-900"
            description="Indofood built-in showcase"
            url="https://www.vidio.com/watch/9404012-indofood-sarimi-built-in-new-keluarga-somat"
            borderColor="border-navy-900"
            delay="fade-up-delay-2"
          />
        </div>

        {/* Bottom callout — dark navy + yellow border */}
        <div className="fade-up fade-up-delay-3 bg-navy-900 border-2 border-yellow-400 rounded-2xl px-5 py-4 text-center">
          <p className="text-white text-base font-black">Not just placement.</p>
          <p className="text-yellow-400 text-sm font-bold mt-0.5">Story-driven brand moments.</p>
        </div>

        <NavyFooterBar />
      </Section>

      {/* ══════════════════════════════
          6. LET'S CONNECT
      ══════════════════════════════ */}
      <Section id="connect" ariaLabel="Let's Connect — Collaboration opportunities">

        <DecoCircle className="w-28 h-28 -top-8 -right-12 opacity-70" />
        <div className="dot-grid absolute top-6 left-0 w-20 h-20 opacity-40 pointer-events-none" aria-hidden="true" />

        <TopBadge />

        {/* NKS logo center */}
        <div className="mx-auto mt-2 mb-6 flex justify-center">
          <img src="/assets/nks-logo.png" alt="New Keluarga Somat logo" className="mx-auto h-auto w-[130px] max-w-[40vw] object-contain sm:w-[150px] md:w-[170px]" />
        </div>

        <div className="fade-up text-center mb-6 relative">
          <Star className="absolute left-4 top-8 w-4 h-4" />
          <Star className="absolute right-4 top-4 w-3 h-3" />
          <div className="dot-grid absolute left-0 top-0 w-16 h-16 opacity-40 pointer-events-none" aria-hidden="true" />
          <h2 className="text-[2.4rem] font-black leading-tight tracking-tight relative z-10">
            <span className="text-navy-900">Let's</span><br />
            <span className="text-red-600">Connect!</span>
          </h2>
          <p className="text-navy-900 text-sm mt-2 leading-relaxed font-medium">
            Interested in how AI can open new creative and business opportunities for local IP?
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-5">
          <ConnectCard
            iconBg="bg-red-600"
            icon={
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
            }
            title="Explore collaboration opportunities"
            sub="Built-in, IP development, or AI-assisted content workflows."
            delay="fade-up-delay-1"
          />
          <ConnectCard
            iconBg="bg-green-500"
            icon={<Star className="w-5 h-5 fill-white" />}
            title="Talk to us after the session"
            sub="Let's discuss how local stories can scale with AI."
            delay="fade-up-delay-2"
          />
        </div>

        {/* Closing callout — dark navy + yellow border */}
        <div className="fade-up fade-up-delay-3 bg-navy-900 border-2 border-yellow-400 rounded-2xl px-5 py-5 text-center">
          <p className="text-white text-sm font-bold leading-relaxed">
            The future of local IP is more imaginative, more scalable, and more open to collaboration.
          </p>
        </div>

        <NavyFooterBar />
      </Section>

      {/* ══════════════════════════════
          FOOTER (navy solid)
      ══════════════════════════════ */}
      <footer className="bg-navy-900 text-center px-5 py-6" role="contentinfo">
        <img
          src="/assets/nks-logo.png"
          alt="New Keluarga Somat"
          className="w-14 h-14 object-contain mx-auto mb-3 rounded-xl"
        />
        <p className="text-navy-200 text-xs">Emtek AI Initiative · 2026</p>
        <p className="text-navy-200/50 text-[10px] mt-1">New Keluarga Somat — AI-assisted local animation</p>
        {/* dot grid decoration */}
        <div className="flex flex-wrap gap-1 justify-center mt-4 opacity-20" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white" />
          ))}
        </div>
      </footer>

    </div>
  )
}

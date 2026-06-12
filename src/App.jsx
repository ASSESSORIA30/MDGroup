import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Nav from './components/Nav'
import Reveal from './components/Reveal'
import Counter from './components/Counter'
import { STATS, BRANDS, PROCESS, PILLARS, PROJECTS } from './data'

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const op = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="top" ref={ref} className="relative h-screen min-h-[680px] overflow-hidden">
      <motion.video
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] object-cover"
        autoPlay muted loop playsInline
        poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
      >
        <source src="https://cdn.coverr.co/videos/coverr-modern-architecture-3633/1080p.mp4" type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />

      <motion.div style={{ opacity: op }} className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="eyebrow mb-6">
          Construcción industrializada · Sostenible · Premium
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-light text-5xl sm:text-6xl lg:text-8xl leading-[0.98] max-w-4xl"
        >
          Construimos el futuro de la vivienda.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="mt-8 text-lg lg:text-xl text-mist max-w-xl font-light">
          Un grupo. Tres marcas. Una visión: redefinir la forma de vivir.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }} className="mt-11 flex flex-col sm:flex-row gap-4">
          <a href="#grupo" className="px-8 py-4 bg-bone text-ink rounded-full text-sm font-medium hover:bg-bronze transition-colors text-center">Descubrir el Grupo</a>
          <a href="#contacto" className="px-8 py-4 border border-white/25 rounded-full text-sm hover:border-bronze hover:text-bronze transition-colors text-center">Solicitar información</a>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mist/60 text-xs tracking-ultra uppercase">Scroll</div>
    </section>
  )
}

function About() {
  return (
    <section id="grupo" className="max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-40">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal><p className="eyebrow mb-5">01 — Quiénes somos</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-light text-4xl lg:text-5xl leading-tight">Un grupo construido sobre la precisión.</h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-mist font-light leading-relaxed">
          <Reveal delay={0.15}>
            <p>ModularDom Group reúne tres marcas con un propósito común: llevar la construcción industrializada a su máxima expresión. Diseñamos, fabricamos y entregamos viviendas que combinan tecnología, sostenibilidad y una arquitectura que perdura.</p>
          </Reveal>
          <Reveal delay={0.25}>
            <p>Nuestro modelo une la solidez de un grupo consolidado con la agilidad de la industria: procesos escalables, control de calidad integral y un diseño que no admite concesiones. Cada proyecto es una promesa de confianza cumplida.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Brands() {
  return (
    <section id="marcas" className="py-28 lg:py-40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal><p className="eyebrow mb-5">02 — Nuestras marcas</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display font-light text-4xl lg:text-6xl leading-tight max-w-2xl mb-20">Tres marcas. Tres formas de habitar.</h2>
        </Reveal>
        <div className="space-y-8">
          {BRANDS.map((b, i) => (
            <Reveal key={b.id} delay={i * 0.05}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/8" style={{ background: b.surface }}>
                <div className="grid md:grid-cols-2 items-stretch">
                  <div className="overflow-hidden h-64 md:h-[26rem] order-1 md:order-none" style={{ order: i % 2 ? 2 : 0 }}>
                    <img src={b.img} alt={b.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  </div>
                  <div className="p-9 lg:p-14 flex flex-col justify-center">
                    <p className="text-xs tracking-ultra uppercase mb-4" style={{ color: b.accent }}>{b.tag}</p>
                    <h3 className="font-display font-light text-4xl lg:text-5xl mb-5">{b.name}</h3>
                    <p className="text-mist font-light leading-relaxed mb-8 max-w-md">{b.desc}</p>
                    <a href="#contacto" className="inline-flex items-center gap-3 text-sm font-medium w-fit group/cta" style={{ color: b.accent }}>
                      {b.cta}
                      <span className="transition-transform group-hover/cta:translate-x-1.5">→</span>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Model() {
  return (
    <section id="modelo" className="py-28 lg:py-40 border-t border-white/5 bg-graphite/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal><p className="eyebrow mb-5">03 — Nuestro modelo</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display font-light text-4xl lg:text-6xl leading-tight max-w-2xl mb-20">Un ecosistema integrado, de la idea a la entrega.</h2>
        </Reveal>
        <div className="grid md:grid-cols-5 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {PROCESS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="bg-ink">
              <div className="p-8 h-full flex flex-col min-h-[15rem] hover:bg-graphite transition-colors">
                <span className="font-display text-bronze text-3xl mb-6">{s.n}</span>
                <h3 className="text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-mist font-light leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pillars() {
  return (
    <section className="py-28 lg:py-40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal><p className="eyebrow mb-5">04 — Por qué ModularDom Group</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display font-light text-4xl lg:text-6xl leading-tight max-w-2xl mb-20">Siete razones para construir con nosotros.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <div className="border-t border-white/10 pt-6">
                <h3 className="font-display text-2xl font-light mb-3">{p.title}</h3>
                <p className="text-mist font-light leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="py-24 lg:py-32 border-t border-white/5 bg-graphite/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="text-center lg:text-left">
            <div className="font-display font-light text-5xl lg:text-7xl text-bone"><Counter value={s.value} suffix={s.suffix} /></div>
            <p className="mt-3 text-sm tracking-wider uppercase text-mist">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="proyectos" className="py-28 lg:py-40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal><p className="eyebrow mb-5">05 — Proyectos destacados</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display font-light text-4xl lg:text-6xl leading-tight max-w-2xl mb-20">Obra construida, no renderizada.</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1}>
              <figure className={`group relative overflow-hidden rounded-2xl ${i % 3 === 0 ? 'md:aspect-[16/11]' : 'md:aspect-[16/12]'}`}>
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                <figcaption className="absolute bottom-0 p-8">
                  <p className="text-xs tracking-ultra uppercase text-bronze mb-2">{p.place}</p>
                  <h3 className="font-display text-2xl lg:text-3xl font-light">{p.title}</h3>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Future() {
  return (
    <section className="relative py-32 lg:py-48 border-t border-white/5 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" loading="lazy" />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <Reveal><p className="eyebrow mb-6">06 — El futuro de la construcción</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-6xl leading-[1.1]">
            La industrialización no es una tendencia. Es la forma en que se construirán las próximas generaciones de viviendas.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-lg text-mist font-light max-w-2xl mx-auto">
            Tecnología, sostenibilidad y arquitectura eficiente convergen en un modelo que reduce plazos, residuos y consumo sin renunciar al diseño.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contacto" className="py-28 lg:py-40 border-t border-white/5 bg-graphite/40">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <Reveal><p className="eyebrow mb-5 text-center">07 — Contacto</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display font-light text-4xl lg:text-5xl text-center mb-4">Hablemos de su proyecto.</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-center text-mist font-light mb-12">Cuéntenos qué necesita y nuestro equipo le responderá personalmente.</p>
        </Reveal>
        <Reveal delay={0.2}>
          <form action="https://formspree.io/f/your-id" method="POST" className="bg-ink/60 backdrop-blur-xl border border-white/8 rounded-2xl p-8 lg:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nombre" name="nombre" type="text" />
              <Field label="Teléfono" name="telefono" type="tel" />
            </div>
            <Field label="Email" name="email" type="email" />
            <div>
              <label className="block text-xs tracking-wider uppercase text-mist mb-2">Mensaje</label>
              <textarea name="mensaje" rows="4" className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-bone focus:border-bronze focus:outline-none transition-colors resize-none" />
            </div>
            <button type="submit" className="w-full py-4 bg-bronze text-ink rounded-full font-medium hover:bg-champagne transition-colors">Solicitar información</button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, name, type }) {
  return (
    <div>
      <label className="block text-xs tracking-wider uppercase text-mist mb-2">{label}</label>
      <input type={type} name={name} className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-bone focus:border-bronze focus:outline-none transition-colors" />
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/8 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden><path d="M8 22V10l8 6 8-6v12" fill="none" stroke="#B79268" strokeWidth="1.6"/></svg>
              <span className="font-display text-lg">ModularDom <span className="text-bronze">Group</span></span>
            </div>
            <p className="text-mist font-light max-w-sm">Construcción industrializada y sostenible. Un grupo, tres marcas, una visión.</p>
          </div>
          <div>
            <p className="text-xs tracking-ultra uppercase text-bronze mb-4">Marcas</p>
            <ul className="space-y-2 text-mist font-light">
              <li><a href="#marcas" className="hover:text-bone">ModularDom</a></li>
              <li><a href="#marcas" className="hover:text-bone">Ekohus Habitat</a></li>
              <li><a href="#marcas" className="hover:text-bone">Velaris</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-ultra uppercase text-bronze mb-4">Grupo</p>
            <ul className="space-y-2 text-mist font-light">
              <li><a href="#grupo" className="hover:text-bone">Quiénes somos</a></li>
              <li><a href="#proyectos" className="hover:text-bone">Proyectos</a></li>
              <li><a href="#contacto" className="hover:text-bone">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="hairline mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-mist/70">
          <p>© {new Date().getFullYear()} ModularDom Group. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-bone">LinkedIn</a>
            <a href="#" className="hover:text-bone">Instagram</a>
            <a href="#" className="hover:text-bone">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Brands />
        <Model />
        <Pillars />
        <Stats />
        <Projects />
        <Future />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

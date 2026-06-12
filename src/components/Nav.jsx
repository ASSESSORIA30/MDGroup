import { useEffect, useState } from 'react'

const LINKS = [
  ['Grupo', 'grupo'],
  ['Marcas', 'marcas'],
  ['Modelo', 'modelo'],
  ['Proyectos', 'proyectos'],
  ['Contacto', 'contacto'],
]

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40)
    window.addEventListener('scroll', on)
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${solid ? 'bg-ink/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img src="/logo-group-nav.png" alt="ModularDom Group" className="h-11 lg:h-12 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-9">
          {LINKS.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-sm text-mist hover:text-bone transition-colors">{label}</a>
          ))}
          <a href="#contacto" className="text-sm px-5 py-2.5 border border-bronze/50 text-bone rounded-full hover:bg-bronze hover:text-ink transition-all">Solicitar información</a>
        </div>
        <button className="md:hidden text-bone" onClick={() => setOpen(!open)} aria-label="Menú">
          <div className="space-y-1.5">
            <span className="block w-6 h-px bg-bone" /><span className="block w-6 h-px bg-bone" /><span className="block w-4 h-px bg-bone" />
          </div>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-ink/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {LINKS.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-mist hover:text-bone">{label}</a>
          ))}
        </div>
      )}
    </header>
  )
}

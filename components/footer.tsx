import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Soluciones Industriales</h3>
            <p className="text-primary-foreground/80 text-pretty">
              Líderes en productos industriales de alta calidad con más de 20 años de experiencia en el mercado nacional
              e internacional.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80">+56 2 2345 6789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80">contacto@soluciones.cl</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span className="text-primary-foreground/80">Santiago, Chile</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Venta de Equipos</li>
              <li>Mantenimiento Industrial</li>
              <li>Consultoría Técnica</li>
              <li>Soporte 24/7</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">© 2024 Soluciones Industriales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export function TrustSection() {
  const clients = ["CODELCO", "ENAMI", "ARAUCO", "CMPC", "ANTOFAGASTA MINERALS", "COLBÚN"]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Confían en Nosotros</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Empresas líderes de la industria nacional confían en nuestros productos y servicios.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
            >
              <span className="text-sm font-semibold text-muted-foreground text-center">{client}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">20+</div>
              <div className="text-muted-foreground">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfacción del Cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

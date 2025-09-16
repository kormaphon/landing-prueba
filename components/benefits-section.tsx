import { Card, CardContent } from "@/components/ui/card"
import { Cog, Shield, Zap, Users, Award, Truck } from "lucide-react"

const benefits = [
  {
    icon: Cog,
    title: "Tecnología Avanzada",
    description: "Productos con la última tecnología industrial para máxima eficiencia y rendimiento.",
  },
  {
    icon: Shield,
    title: "Calidad Garantizada",
    description: "Certificaciones internacionales y garantía extendida en todos nuestros productos.",
  },
  {
    icon: Zap,
    title: "Eficiencia Energética",
    description: "Soluciones que optimizan el consumo energético y reducen costos operativos.",
  },
  {
    icon: Users,
    title: "Soporte Técnico 24/7",
    description: "Equipo de expertos disponible para asistencia técnica y mantenimiento.",
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "Más de 20 años de experiencia sirviendo a la industria nacional e internacional.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Logística optimizada para entregas puntuales en todo el territorio nacional.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">¿Por Qué Elegirnos?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos ventajas competitivas que marcan la diferencia en tu operación industrial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-pretty">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

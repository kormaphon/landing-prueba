"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, Send, CheckCircle } from "lucide-react"

interface FormData {
  fullName: string
  company: string
  email: string
  phone: string
  product: string
  quantity: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  product?: string
  quantity?: string
}

const products = [
  "Motores Industriales",
  "Bombas Centrífugas",
  "Compresores de Aire",
  "Válvulas de Control",
  "Sistemas de Automatización",
  "Equipos de Soldadura",
  "Herramientas Neumáticas",
  "Sistemas de Filtración",
]

export function QuoteSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [quote, setQuote] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "El nombre completo es obligatorio"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Formato de email inválido"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es obligatorio"
    } else if (!/^\d{9,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "El teléfono debe tener al menos 9 dígitos"
    }

    if (!formData.product) {
      newErrors.product = "Debe seleccionar un producto"
    }

    if (!formData.quantity.trim()) {
      newErrors.quantity = "La cantidad es obligatoria"
    } else if (isNaN(Number(formData.quantity)) || Number(formData.quantity) <= 0) {
      newErrors.quantity = "La cantidad debe ser un número positivo"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculateQuote = async () => {
    if (!validateForm()) return

    setIsCalculating(true)

    // Simulate calculation delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simple quote calculation based on product and quantity
    const basePrice = products.indexOf(formData.product) * 1000 + 5000
    const quantity = Number(formData.quantity)
    const calculatedQuote = basePrice * quantity * (0.8 + Math.random() * 0.4) // Add some randomness

    setQuote(Math.round(calculatedQuote))
    setIsCalculating(false)
  }

  const submitQuote = async () => {
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section id="quote-section" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">¡Solicitud Enviada con Éxito!</h3>
              <p className="text-muted-foreground">
                Hemos recibido tu solicitud de cotización. Nuestro equipo se pondrá en contacto contigo en las próximas
                24 horas para confirmar los detalles y enviarte la cotización final.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="quote-section" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Solicita tu Cotización</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Completa el formulario y obtén una cotización personalizada para tus necesidades industriales.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Formulario de Cotización
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nombre Completo *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className={errors.fullName ? "border-destructive" : ""}
                  />
                  {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="product">Producto *</Label>
                  <Select value={formData.product} onValueChange={(value) => handleInputChange("product", value)}>
                    <SelectTrigger className={errors.product ? "border-destructive" : ""}>
                      <SelectValue placeholder="Selecciona un producto" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((product) => (
                        <SelectItem key={product} value={product}>
                          {product}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.product && <p className="text-sm text-destructive">{errors.product}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Cantidad *</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange("quantity", e.target.value)}
                    className={errors.quantity ? "border-destructive" : ""}
                  />
                  {errors.quantity && <p className="text-sm text-destructive">{errors.quantity}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje Adicional</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Describe cualquier requerimiento especial o información adicional..."
                />
              </div>

              <Button onClick={calculateQuote} disabled={isCalculating} className="w-full" size="lg">
                {isCalculating ? "Calculando..." : "Calcular Cotización"}
              </Button>

              {quote && (
                <div className="mt-6 p-6 bg-secondary/10 rounded-lg text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Tu cotización aproximada es:</h3>
                  <p className="text-4xl font-bold text-secondary mb-4">${quote.toLocaleString("es-CL")}</p>
                  <Button onClick={submitQuote} size="lg" className="bg-secondary hover:bg-secondary/90">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Cotización
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Bot,
  CheckCircle,
  MessageCircle,
  Clock,
  Users,
  TrendingUp,
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function GetSDRPage() {
  const [activeDemo, setActiveDemo] = useState(false)

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Atendimento 24/7",
      description: "Seu SDR de IA nunca dorme, garantindo que nenhum lead seja perdido",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Aumento de 300% nas Vendas",
      description: "Clientes relatam crescimento médio de 300% em conversões",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Qualificação Inteligente",
      description: "IA identifica e prioriza leads com maior potencial de conversão",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Setup em 24h",
      description: "Implementação rápida com suporte completo da nossa equipe",
    },
  ]

  const features = [
    "Conversas naturais e humanizadas",
    "Integração completa com WhatsApp Business",
    "Qualificação automática de leads",
    "Follow-up inteligente e personalizado",
    "Relatórios detalhados de performance",
    "Integração com CRM existente",
    "Suporte multilíngue",
    "Analytics avançados de conversão",
  ]

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechStart",
      text: "O Get SDR revolucionou nossa operação de vendas. Aumentamos 250% as conversões em apenas 2 meses!",
    },
    {
      name: "Ana Costa",
      company: "Digital Solutions",
      text: "Impressionante como a IA consegue qualificar leads melhor que nossa equipe humana. ROI incrível!",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B1426]">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">GetBrain</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#beneficios" className="text-slate-300 hover:text-white transition-colors">
                Benefícios
              </a>
              <a href="#funcionalidades" className="text-slate-300 hover:text-white transition-colors">
                Funcionalidades
              </a>
              <a href="#depoimentos" className="text-slate-300 hover:text-white transition-colors">
                Depoimentos
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-blue-600 hover:border-blue-600 bg-transparent"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Fale Conosco
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                Agendar Demo
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 mb-6">
                <Bot className="mr-2 h-4 w-4" />
                Agente de IA para Vendas
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                GET SDR
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Seu SDR de IA que nunca para
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Automatize sua prospecção com um agente de IA que trabalha 24/7, qualifica leads inteligentemente e
                aumenta suas vendas em até 300%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Quero Comprar
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-slate-300">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Setup em 24h</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Suporte 24/7</span>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">GET SDR em Ação</CardTitle>
                      <CardDescription className="text-slate-300">Conversando com um lead</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg rounded-bl-none max-w-xs">
                    GET SDR: Olá! Vi que você visitou nossa página sobre soluções de automação. Posso ajudar com alguma
                    dúvida específica?
                  </div>
                  <div className="bg-slate-700 text-white p-3 rounded-lg rounded-br-none max-w-xs ml-auto">
                    Lead: Sim, estou interessado em automatizar nosso processo de vendas.
                  </div>
                  <div className="bg-blue-600 text-white p-3 rounded-lg rounded-bl-none max-w-md">
                    GET SDR: Perfeito! Para sua empresa de 50+ funcionários, nossa solução pode aumentar sua
                    produtividade em até 300%. Que tal agendar uma demo de 15 minutos?
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Lead qualificado automaticamente</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-400">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>Resposta em 2 segundos</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Por que escolher o Get SDR?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Revolucione sua operação de vendas com inteligência artificial de ponta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <CardTitle className="text-white">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Funcionalidades Avançadas</h2>
              <p className="text-xl text-slate-300 mb-8">
                Tudo que você precisa para automatizar e otimizar seu processo de vendas
              </p>
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-8">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Resultados Comprovados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">300%</div>
                    <div className="text-slate-300">Aumento médio em conversões</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                    <div className="text-slate-300">Atendimento ininterrupto</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
                    <div className="text-slate-300">Taxa de satisfação dos clientes</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-slate-300">Resultados reais de empresas que transformaram suas vendas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6">
                  <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-slate-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Pronto para revolucionar suas vendas?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já aumentaram suas vendas com GET SDR. Setup em 24h e suporte completo
            incluído.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 font-semibold">
              <MessageCircle className="mr-2 h-5 w-5" />
              Quero Comprar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-600 hover:border-blue-600 px-8 py-3 bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Agendar Demonstração
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-8 mt-8 text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>Consultoria gratuita</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>Setup personalizado</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>Suporte especializado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#142544] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">GetBrain</span>
              </div>
              <p className="text-slate-300 mb-4">Transformando empresas através da inteligência artificial</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Soluções</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/solucoes" className="text-slate-300 hover:text-white transition-colors">
                    Get Assistant
                  </Link>
                </li>
                <li>
                  <Link href="/solucoes" className="text-slate-300 hover:text-white transition-colors">
                    Get Files
                  </Link>
                </li>
                <li>
                  <Link href="/get-sdr" className="text-slate-300 hover:text-white transition-colors">
                    Get SDR
                  </Link>
                </li>
                <li>
                  <Link href="/solucoes" className="text-slate-300 hover:text-white transition-colors">
                    Get Group
                  </Link>
                </li>
                <li>
                  <Link href="/solucoes" className="text-slate-300 hover:text-white transition-colors">
                    Get Build
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                    Políticas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                    Termos de uso
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-300">
                  <Phone className="w-4 h-4 mr-2" />
                  (21) 99016-8793
                </li>
                <li className="flex items-center text-slate-300">
                  <Mail className="w-4 h-4 mr-2" />
                  contato@getbrain.com.br
                </li>
                <li className="flex items-center text-slate-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  Rio de Janeiro, RJ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

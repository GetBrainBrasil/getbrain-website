"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  UsersRound,
  Bot,
  Wrench,
  Brain,
  CheckCircle,
  Zap,
  Clock,
  TrendingUp,
  MessageCircle,
  FileText,
  Phone,
  Mail,
  MapPin,
  Instagram,
  User,
} from "lucide-react"
import Link from "next/link"

export default function SolucoesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const solutions = [
    {
      title: "Get Assistant",
      subtitle: "Assistente IA Personalizado",
      description: "Assistente de IA personalizado integrado à sua plataforma para suporte e automação inteligente.",
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      features: [
        "Interface conversacional natural",
        "Integração com múltiplas plataformas",
        "Aprendizado contínuo",
        "Personalização completa",
        "Multilíngue",
        "Analytics avançados",
      ],
      benefits: [
        "Melhore a experiência do cliente",
        "Reduza custos operacionais",
        "Disponibilidade 24/7",
        "Escalabilidade infinita",
      ],
      pricing: "R$ 87,90/mês",
      badge: "Mais Popular",
    },
    {
      title: "Get Files",
      subtitle: "Processamento Inteligente de Documentos",
      description: "IA avançada para extrair, processar e organizar informações de documentos automaticamente.",
      icon: <FileText className="w-12 h-12 text-blue-500" />,
      features: [
        "Extração automática de dados",
        "Suporte a múltiplos formatos",
        "OCR de alta precisão",
        "Classificação inteligente",
        "Integração com sistemas",
        "Processamento em lote",
      ],
      benefits: [
        "Elimine trabalho manual repetitivo",
        "Aumente a precisão dos dados",
        "Acelere o processamento de documentos",
        "Reduza erros humanos",
      ],
      pricing: "R$ 49,97/mês",
    },
    {
      title: "Get SDR",
      subtitle: "IA de Vendas para WhatsApp",
      description: "IA de atendimento especializada para WhatsApp que converte leads e automatiza vendas 24/7.",
      icon: <Bot className="w-12 h-12 text-blue-500" />,
      features: [
        "Atendimento 24/7 automatizado",
        "Qualificação inteligente de leads",
        "Follow-up automático",
        "Integração com CRM",
        "Scripts personalizáveis",
        "Analytics de conversão",
      ],
      benefits: [
        "Aumente as vendas em até 300%",
        "Reduza tempo de resposta para segundos",
        "Qualifique leads automaticamente",
        "Libere sua equipe para vendas complexas",
      ],
      pricing: "R$ 199,97/mês",
      badge: "ROI Garantido",
    },
    {
      title: "Get Group",
      subtitle: "Resumos Inteligentes de Grupos",
      description:
        "IA inteligente para resumir automaticamente conversas de grupos do WhatsApp, destacando pontos importantes.",
      icon: <UsersRound className="w-12 h-12 text-blue-500" />,
      features: [
        "Resumos automáticos diários",
        "Identificação de tópicos principais",
        "Destaque de decisões importantes",
        "Filtros personalizáveis",
        "Notificações inteligentes",
        "Histórico de resumos",
      ],
      benefits: [
        "Mantenha-se atualizado sem ler tudo",
        "Identifique rapidamente informações relevantes",
        "Melhore a produtividade da equipe",
        "Nunca perca decisões importantes",
      ],
      pricing: "R$ 4,97/semana",
    },
    {
      title: "Get Build",
      subtitle: "Desenvolvimento Sob Demanda",
      description:
        "Criação sob demanda de soluções de IA personalizadas para suas necessidades específicas de negócio.",
      icon: <Wrench className="w-12 h-12 text-blue-500" />,
      features: [
        "Desenvolvimento personalizado",
        "Consultoria especializada",
        "Integração com sistemas existentes",
        "Treinamento da equipe",
        "Suporte técnico dedicado",
        "Atualizações contínuas",
      ],
      benefits: [
        "Solução 100% adequada ao seu negócio",
        "Vantagem competitiva única",
        "Escalabilidade garantida",
        "Suporte especializado contínuo",
      ],
      pricing: "Reunião para decidir",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-[#142544]/95 backdrop-blur-sm border-b border-slate-700" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <img src="/images/logogetbrain.svg" alt="GetBrain Logo" className="h-10 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-4">
              <Link href="/#vantagens" className="hover:text-blue-400 transition-colors cursor-pointer">
                Por que a Get Brain?
              </Link>
              <Link href="/solucoes" className="hover:text-blue-400 transition-colors text-blue-400">
                Soluções
              </Link>
              <Link href="/#processo" className="hover:text-blue-400 transition-colors cursor-pointer">
                Processo
              </Link>
              <Link href="/#contato" className="hover:text-blue-400 transition-colors cursor-pointer">
                Contato
              </Link>
            </nav>

            <div className="flex items-center gap-3">
                <a href="https://wa.me/5521990168793" target="_blank" rel="noopener noreferrer">
                <Button variant="default">
                    Agendar Diagnóstico
                </Button>
                </a>
                <a href="/dashboard">
                <Button variant="outline">
                    <User className="w-4 h-4" />
                    Área dos Clientes
                </Button>
                </a>
            </div>
          </div>
          
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#142544] border-t border-slate-600">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link href="/#vantagens" className="hover:text-blue-400 transition-colors text-left">
                Por que a Get Brain?
              </Link>
              <Link href="/solucoes" className="hover:text-blue-400 transition-colors text-blue-400 text-left">
                Soluções
              </Link>
              <Link href="/#processo" className="hover:text-blue-400 transition-colors text-left">
                Processo
              </Link>
              <Link href="/#contato" className="hover:text-blue-400 transition-colors text-left">
                Contato
              </Link>
              <a href="https://wa.me/5521990168793" target="_blank" rel="noopener noreferrer">
                <Button variant="default" className="w-full">Agendar Diagnóstico</Button>
              </a>
               <a href="/dashboard">
                <Button className="w-full" variant="outline">Área dos Clientes</Button>
              </a>
            </nav>
          </div>
        )}
      </header>

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-600/20 text-blue-400 border-blue-600/30">Soluções Completas</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Todas as nossas <span className="text-blue-400">Soluções de IA</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Descubra como cada uma das nossas soluções pode transformar diferentes aspectos do seu negócio
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-12">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      {solution.icon}
                       <div className="ml-4">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-2xl font-bold text-white">{solution.title}</h2>
                          {solution.badge && (
                             <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">{solution.badge}</Badge>
                          )}
                        </div>
                         <h3 className="text-lg text-blue-400 mb-3">{solution.subtitle}</h3>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 text-lg">{solution.description}</p>

                    <div className="mb-6">
                       <h4 className="text-lg font-semibold mb-4 text-white">Principais Benefícios:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-slate-300">
                             <TrendingUp className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                         ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                         <span className="text-2xl font-bold text-blue-400">{solution.pricing}</span>
                      </div>
                      
                      {solution.title === "Get SDR" ? (
                        <Link href="/get-sdr">
                          <Button variant="default">Quero saber mais</Button>
                        </Link>
                      ) : (
                        <a href="https://wa.me/5521990168793" target="_blank" rel="noopener noreferrer">
                          <Button variant="default">Quero saber mais</Button>
                        </a>
                      )}
                      
                    </div>
                  </div>

                  <div className="bg-slate-700/50 p-8">
                    <h4 className="text-lg font-semibold mb-6 text-white">Funcionalidades:</h4>
                    <div className="grid gap-4">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                           <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-4 bg-slate-800 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                         <span className="font-semibold text-white">Implementação Rápida</span>
                      </div>
                      <p className="text-sm text-slate-300">Setup em até 48h com suporte completo</p>
                    </div>
                  </div>
                 </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
             Pronto para começar sua <span className="text-blue-400">transformação digital?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Fale com nossos especialistas e descubra qual solução é ideal para seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5521990168793" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="default">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
            </a>
            <a href="https://wa.me/5521990168793" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
              >
                <Clock className="w-5 h-5 mr-2" />
                 Agendar Demonstração
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#142544] border-t border-slate-700 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/images/logogetbrain.svg" alt="GetBrain Logo" className="h-8 w-auto mb-4" />
              <p className="text-slate-300 mb-4">Transformando empresas através da inteligência artificial</p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/getbrainbrasil/" target="_blank" rel="noopener noreferrer">
                   <Instagram className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Soluções</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Get Assistant
                  </a>
                </li>
                 <li>
                  <a href="#" className="hover:text-blue-400">
                    Get Files
                  </a>
                </li>
                <li>
                  <Link href="/get-sdr" className="hover:text-blue-400">
                    Get SDR
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Get Group
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Get Build
                  </a>
                </li>
              </ul>
            </div>

            <div>
               <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Políticas
                   </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Termos de uso
                  </a>
                 </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-slate-300">
                <div className="flex items-center">
                   <Phone className="w-4 h-4 mr-2" />
                  <span>(21) 99016-8793</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                   <span>contato@getbrain.com.br</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Rio de Janeiro, RJ</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2025 GetBrain. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
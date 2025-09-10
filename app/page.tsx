"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Brain,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Mic,
  UsersRound,
  Bot,
  Wrench,
  User,
  MessageCircle,
  Clock,
} from "lucide-react"

export default function GetBrainLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMenuOpen(false) // Fecha o menu mobile após clicar
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const solutions = [
  {
    title: "Get Assistant",
    description: "Assistente de IA personalizado integrado à sua plataforma para suporte e automação inteligente.",
    icon: <Brain className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Get Files",
    description: "IA avançada para transcrever automaticamente áudios de WhatsApp com alta precisão e velocidade.",
    icon: <Mic className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Get SDR",
    description: "IA de atendimento especializada para WhatsApp que converte leads e automatiza vendas 24/7.",
    icon: <Bot className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Get Group",
    description: "IA inteligente para resumir automaticamente conversas de grupos do WhatsApp, destacando pontos importantes.",
    icon: <UsersRound className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Get Build",
    description: "Criação sob demanda de soluções de IA personalizadas para suas necessidades específicas de negócio.",
    icon: <Wrench className="w-8 h-8 text-blue-500" />,
  },
];
 const differentials = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "IA de Ponta",
      description: "Utilizamos as mais avançadas tecnologias de inteligência artificial do mercado.",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Equipe Especializada",
      description: "Time de experts em IA, machine learning e desenvolvimento de soluções corporativas.",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-500" />,
      title: "Resultados Comprovados",
      description: "Mais de 100 empresas já transformaram seus negócios com nossas soluções.",
    },
  ]

  const processSteps = [
    {
      title: "Diagnóstico e Planejamento",
      description:
        "Analisamos suas necessidades específicas e definimos os objetivos do seu agente de IA personalizado.",
      details: [
        "Análise detalhada dos processos atuais",
        "Identificação de oportunidades de melhoria",
        "Definição de KPIs e métricas de sucesso",
      ],
    },
    {
      title: "Desenvolvimento e Treinamento",
      description: "Desenvolvemos e treinamos seu agente de IA com dados relevantes para sua empresa e setor.",
      details: [
        "Desenvolvimento de algoritmos personalizados",
        "Treinamento com dados específicos do seu negócio",
        "Testes rigorosos de qualidade e performance",
      ],
    },
    {
      title: "Implementação e Otimização",
      description:
        "Implementamos a solução em seu ambiente e realizamos otimizações contínuas para máxima performance.",
      details: [
        "Implementação gradual e segura",
        "Monitoramento contínuo de performance",
        "Otimizações baseadas em feedback real",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#142544]/95 backdrop-blur-sm border-b border-slate-700' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <img src="/images/logogetbrain.svg" alt="GetBrain Logo" className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-4">
              <button onClick={() => scrollToSection("vantagens")} className="hover:text-blue-400 transition-colors cursor-pointer">
                Por que a Get Brain?
              </button>
              <button onClick={() => scrollToSection("solucoes")} className="hover:text-blue-400 transition-colors cursor-pointer">
                Soluções
              </button>
              <button onClick={() => scrollToSection("processo")} className="hover:text-blue-400 transition-colors cursor-pointer">
                Processo
              </button>
              <button onClick={() => scrollToSection("contato")} className="hover:text-blue-400 transition-colors cursor-pointer">
                Contato
              </button>
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
              <button
                onClick={() => scrollToSection("vantagens")}
                className="hover:text-blue-400 transition-colors text-left"
              >
                Por que a Get Brain?
              </button>
              <button
                onClick={() => scrollToSection("solucoes")}
                className="hover:text-blue-400 transition-colors text-left"
              >
                Soluções
              </button>
              <button
                onClick={() => scrollToSection("processo")}
                className="hover:text-blue-400 transition-colors text-left"
              >
                Processo
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="hover:text-blue-400 transition-colors text-left"
              >
                Contato
              </button>
              
              <a href="https://wa.me/5521990168793" target="_blank" rel="noopener noreferrer">
                <Button variant="default" className="w-full">
                  Agendar Diagnóstico
                </Button>
              </a>
              <a href="/dashboard">
                <Button variant="outline" className="w-full">
                  <User className="w-4 h-4" />
                  Área dos Clientes
                </Button>
              </a>
            </nav>
          </div>
        )}
      </header>

      <section className="pt-24 pb-8 px-4 relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
             <img src="/images/hero-background.png" alt="IA e Tecnologia" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
            <Badge className="mb-6 bg-blue-600/20 text-blue-400 border-blue-600/30">Tecnologia de IA de Ponta</Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforme sua empresa
            <br />
            com <span className="text-blue-400">agentes de IA</span>
            <br />
            customizados
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Automatize processos, aumente a produtividade e reduza custos com agentes de IA projetados especificamente
            para o seu negócio.
            </p>

            <a href="/solucoes">
            <Button size="lg" variant="default">
                Conhecer nossas soluções
                <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            </a>

             <div className="mt-12 flex items-center justify-center space-x-8 text-slate-400">
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>+100 empresas já utilizam nossos agentes de IA</span>
            </div>
            </div>
         </div>
        </section>

      <section id="chat" className="py-8 px-4 relative bg-cover bg-center bg-fixed min-h-[70vh]" style={{ backgroundImage: 'url(/images/chat-background.jpg)' }}>
        <div className="absolute inset-0 bg-slate-900/70 z-0"></div>
        <div className="container mx-auto max-w-3xl relative z-10">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fale com Get Assistant</h2>
            <p className="text-xl text-slate-300">Converse com nosso assistente de IA especializado em soluções inteligentes e automações.</p>
            </div>

            <div className="bg-[#142544] rounded-lg shadow-xl overflow-hidden border border-slate-700">
            <div className="bg-blue-600 px-6 py-4 flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">Get Assistant IA</h3>
            </div>

            <div className="p-6 h-80 overflow-y-auto flex flex-col space-y-4">
                <div className="flex">
                 <div className="bg-slate-700 rounded-lg p-3 max-w-xs text-slate-200">
                    <p>Olá! Eu sou Get Assistant, sua assistente de IA. Como posso ajudar você hoje?</p>
                    <span className="text-xs text-slate-400 block text-right mt-1">17:14</span>
                </div>
                </div>
            </div>

            <div className="bg-slate-800 p-4 border-t border-slate-700">
                 <div className="flex items-center bg-slate-700 rounded-lg px-3 py-2">
                <input
                    type="text"
                    placeholder="Envie uma mensagem para Get Assistant..."
                    className="flex-grow bg-transparent text-white placeholder-slate-400 focus:outline-none"
                />
                <button className="ml-3 text-slate-400 hover:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 3 3 9-3 9 19-9Z"/>
                     <path d="M6 12h16"/>
                    </svg>
                </button>
                </div>
                <p className="text-xs text-slate-500 mt-2 text-center">© 2025 | O Agente de IA da GetBrain pode cometer erros.
 Considere verificar informações importantes.</p>
            </div>
            </div>
        </div>
        </section>

      <section id="solucoes" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Soluções</h2>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Descubra como nossa tecnologia pode revolucionar diferentes áreas do seu negócio
            </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {solutions.map((solution, index) => (
                 <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-colors">
                <CardHeader>
                    <div className="mb-4">{solution.icon}</div>
                    <CardTitle className="text-white">{solution.title}</CardTitle>
                </CardHeader>
                 <CardContent>
                    <CardDescription className="text-slate-300">{solution.description}</CardDescription>
                </CardContent>
                </Card>
            ))}
            </div>

            <div className="text-center">
             <a href="/solucoes">
                <Button variant="outline">
                  Conheça todas as nossas soluções
                </Button>
            </a>
            </div>
        </div>
        </section>

      <section id="vantagens" className="py-16 px-4">
        <div className="container mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que a Get Brain?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Por que escolher a GetBrain para transformar seu negócio
            </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
                 <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">{differential.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{differential.title}</h3>
                <p className="text-slate-300">{differential.description}</p>
                </div>
            ))}
             </div>
        </div>
        </section>

      <section id="processo" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Processo</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                 Entenda como transformamos suas necessidades em soluções de IA eficazes
            </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {processSteps.map((step, index) => (
                <div key={index} className="relative">
                 <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6 border-4 border-slate-800 shadow-lg">
                    {index === 0 && <Mic className="w-8 h-8 text-white" />}
                    {index === 1 && <UsersRound className="w-8 h-8 text-white" />}
                     {index === 2 && <Bot className="w-8 h-8 text-white" />}
                    </div>

                    <div className="max-w-xs">
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                     <p className="text-slate-300 text-sm leading-relaxed mb-4">{step.description}</p>
                    <div className="p-4 bg-slate-700/50 rounded-lg border border-blue-500/30">
                        <ul className="space-y-2 text-left">
                        {step.details.map((detail, detailIndex) => (
                           <li key={detailIndex} className="flex items-start text-slate-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                            {detail}
                           </li>
                        ))}
                        </ul>
                    </div>
                 </div>
                </div>

                {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 transform translate-x-10 z-0"></div>
                )}
                 </div>
            ))}
            </div>
        </div>
        </section>

      <section id="contato" className="py-16 px-4 bg-slate-800/50">
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
              <Button size="lg" variant="outline">
                <Clock className="w-5 h-5 mr-2" />
                 Agendar Demonstração
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Substituído */}
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
                {/* ======================= LINK DO FOOTER AJUSTADO ======================= */}
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
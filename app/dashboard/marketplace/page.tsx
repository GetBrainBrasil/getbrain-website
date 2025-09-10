"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, FileText, Bot, Brain, UsersRound, Wrench, CheckCircle, Star, ArrowRight, Mic } from "lucide-react"

type Product = {
  id: string;
  name: string;
  slug: string;
  icon: React.ReactElement;
  description: string;
  price: string;
  category: string;
  features: string[];
  rating: number;
  reviews: number;
  popular: boolean;
  status: string | null;
};

export default function MarketplacePage() {
  const [category, setCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const products: Product[] = [
    {
      id: "prod_1",
      name: "Get Assistant",
      slug: "get-assistant",
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      description: "Assistente de IA personalizado integrado à sua plataforma para suporte e automação inteligente.",
      price: "R$ 87,90/mês",
      category: "assistants",
      features: [
        "Interface conversacional natural",
        "Integração com múltiplas plataformas",
        "Aprendizado contínuo",
        "Personalização completa",
      ],
      rating: 4.8,
      reviews: 124,
      popular: true,
      status: "Ativo",
    },
    {
      id: "prod_2",
      name: "Get Files",
      slug: "get-files",
      icon: <FileText className="w-12 h-12 text-blue-500" />,
      description: "IA avançada para extrair, processar e organizar informações de documentos automaticamente.",
      price: "R$ 49,97/mês",
      category: "productivity",
      features: [
        "Extração automática de dados",
        "Suporte a múltiplos formatos",
        "OCR de alta precisão",
        "Classificação inteligente",
      ],
      rating: 4.6,
      reviews: 87,
      popular: false,
      status: "Ativo",
    },
    {
      id: "prod_3",
      name: "Get SDR",
      slug: "get-sdr",
      icon: <Bot className="w-12 h-12 text-blue-500" />,
      description: "IA de atendimento especializada para WhatsApp que converte leads e automatiza vendas 24/7.",
      price: "R$ 199,97/mês",
      category: "sales",
      features: [
        "Atendimento 24/7 automatizado",
        "Qualificação inteligente de leads",
        "Follow-up automático",
        "Integração com CRM",
      ],
      rating: 4.9,
      reviews: 156,
      popular: true,
      status: null,
    },
    {
      id: "prod_4",
      name: "Get Group",
      slug: "get-group",
      icon: <UsersRound className="w-12 h-12 text-blue-500" />,
      description: "IA inteligente para resumir automaticamente conversas de grupos do WhatsApp.",
      price: "R$ 4,97/semana",
      category: "communication",
      features: [
        "Resumos automáticos diários",
        "Identificação de tópicos principais",
        "Destaque de decisões importantes",
        "Filtros personalizáveis",
      ],
      rating: 4.5,
      reviews: 92,
      popular: false,
      status: null,
    },
    {
      id: "prod_5",
      name: "Get Build",
      slug: "get-build",
      icon: <Wrench className="w-12 h-12 text-blue-500" />,
      description:
        "Criação sob demanda de soluções de IA personalizadas para suas necessidades específicas de negócio.",
      price: "Reunião para decidir",
      category: "custom",
      features: [
        "Desenvolvimento personalizado",
        "Consultoria especializada",
        "Integração com sistemas existentes",
        "Treinamento da equipe",
      ],
      rating: 4.7,
      reviews: 45,
      popular: false,
      status: null,
    },
    {
      id: "prod_6",
      name: "Get Audio",
      slug: "get-audio",
      icon: <Mic className="w-12 h-12 text-blue-500" />,
      description: "IA avançada para transcrever automaticamente áudios de WhatsApp com alta precisão e velocidade.",
      price: "R$ 39,90/mês",
      category: "productivity",
      features: [
        "Transcrição em tempo real",
        "Suporte a múltiplos idiomas",
        "Precisão de 98%+",
        "Integração direta com WhatsApp",
      ],
      rating: 4.4,
      reviews: 78,
      popular: false,
      status: null,
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "all" || product.category === category
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-8">
      {/* Header e Filtros */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Marketplace</h1>
          <p className="text-slate-300">Descubra e adquira soluções de IA para seu negócio</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Buscar produtos..."
              className="pl-10 bg-slate-800 border-slate-700 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <Tabs defaultValue="all" value={category} onValueChange={setCategory} className="w-full md:w-auto">
          <TabsList className="bg-slate-800 w-full md:w-auto grid grid-cols-3 md:flex">
            <TabsTrigger value="all" className="text-slate-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Todos
            </TabsTrigger>
            <TabsTrigger value="productivity" className="text-slate-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Produtividade
            </TabsTrigger>
            <TabsTrigger value="assistants" className="text-slate-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Assistentes
            </TabsTrigger>
            <TabsTrigger value="sales" className="text-slate-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Vendas
            </TabsTrigger>
            <TabsTrigger value="communication" className="text-slate-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Comunicação
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Grid de Produtos */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="bg-slate-800 border-slate-700 overflow-hidden flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-700 rounded-lg">{product.icon}</div>
                <div className="flex flex-col gap-2 min-h-[60px] justify-start">
                  {product.popular && (
                    <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                      <Star className="mr-1 h-3 w-3" />
                      Popular
                    </Badge>
                  )}
                  {product.status && (
                    <Badge className="bg-green-600/20 text-green-400 border-green-600/30">{product.status}</Badge>
                  )}
                 </div>
              </div>
              <CardTitle className="text-white text-lg">{product.name}</CardTitle>
              <CardDescription className="text-slate-300 leading-relaxed">{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <div className="text-lg font-bold text-blue-400">{product.price}</div>
              <div>
                <h4 className="text-sm font-medium mb-3 text-white">Principais recursos:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-slate-300">
                      <CheckCircle className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                       <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
             <CardFooter className="border-t border-slate-700 pt-4">
              {product.status ? (
                <Link href="/dashboard/assinaturas" className="w-full">
                  <Button variant="outline" className="w-full">
                    Gerenciar Assinatura
                  </Button>
                </Link>
              ) : (
                <>
                  {product.slug === 'get-sdr' ? (
                    <Link href={`/get-sdr`} className="w-full">
                      <Button variant="default" className="w-full">
                        Ver Detalhes
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  ) : (
                    <a href="https://wa.me/5521990168793" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="default" className="w-full">
                        Ver Detalhes
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, Legend, LabelList, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  TrendingUp,
  Users,
  Clock,
  Calendar,
  Download,
  FileText,
  Bot,
  Brain,
  UsersRound,
  ChevronRight,
} from "lucide-react"

// Função para gerar dados do gráfico
const generateChartData = (days: number) => {
  const data = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    data.push({
      name: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
      assistant: Math.floor(Math.random() * 30) + 50,
      files: Math.floor(Math.random() * 40) + 10,
    });
  }
  return data;
};

export default function Dashboard() {
  const [period, setPeriod] = useState("d7")
  const [product, setProduct] = useState("all")

  const chartData = useMemo(() => {
    const days = period === 'd7' ? 7 : period === 'd14' ? 14 : 30;
    return generateChartData(days);
  }, [period]);

  const chartConfig = {
    assistant: { label: "Get Assistant", color: "hsl(221, 83%, 53%)" },
    files: { label: "Get Files", color: "hsl(142, 71%, 47%)" },
  };

  const activeProducts = [
    { name: "Get Assistant", icon: <Brain className="w-8 h-8 text-blue-500" />, status: "Ativo", price: "R$ 87,90/mês", nextBilling: "15/07/2025" },
    { name: "Get Files", icon: <FileText className="w-8 h-8 text-blue-500" />, status: "Ativo", price: "R$ 49,97/mês", nextBilling: "15/07/2025" },
  ]

  const recommendedProducts = [
    { name: "Get SDR", slug: "get-sdr", icon: <Bot className="w-8 h-8 text-blue-500" />, description: "IA de atendimento especializada para WhatsApp que converte leads e automatiza vendas 24/7.", price: "R$ 199,97/mês" },
    { name: "Get Group", slug: "get-group", icon: <UsersRound className="w-8 h-8 text-blue-500" />, description: "IA inteligente para resumir automaticamente conversas de grupos do WhatsApp.", price: "R$ 4,97/semana" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-300">Bem-vindo de volta, Daniel!</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <Button variant="default">
            <Download className="mr-2 h-4 w-4" />
            Exportar Relatório
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-slate-800 border-slate-700 flex flex-col">
          <CardHeader className="pb-3"><CardTitle className="text-sm font-medium text-slate-300">Uso Total</CardTitle></CardHeader>
          <CardContent className="flex flex-col justify-between flex-grow">
            <div>
              <div className="text-3xl font-bold text-white">78%</div>
              <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden mt-4"><div className="bg-blue-500 h-full rounded-full" style={{ width: "78%" }}></div></div>
            </div>
            <div className="flex items-end mt-4"><Badge className="bg-green-600/20 text-green-400 border-green-600/30"><TrendingUp className="mr-1 h-3 w-3" />+12%</Badge></div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700 flex flex-col">
          <CardHeader className="pb-3"><CardTitle className="text-sm font-medium text-slate-300">Produtos Ativos</CardTitle></CardHeader>
          <CardContent className="flex flex-col justify-between flex-grow">
            <div>
              <div className="text-3xl font-bold text-white">2</div>
              <div className="text-sm text-slate-300">5 produtos disponíveis no total</div>
            </div>
            <div className="flex items-end mt-4"><Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30"><Users className="mr-1 h-3 w-3" />Básico</Badge></div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700 flex flex-col">
          <CardHeader className="pb-3"><CardTitle className="text-sm font-medium text-slate-300">Próxima Cobrança</CardTitle></CardHeader>
          <CardContent className="flex flex-col justify-between flex-grow">
            <div>
              <div className="text-3xl font-bold text-white">R$ 137,87</div>
              <div className="text-sm text-slate-300">15/07/2025</div>
            </div>
            <div className="flex items-end mt-4"><Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30"><Clock className="mr-1 h-3 w-3" />Em 15 dias</Badge></div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700 flex flex-col">
          <CardHeader className="pb-3"><CardTitle className="text-sm font-medium text-slate-300">Economia Mensal</CardTitle></CardHeader>
          <CardContent className="flex flex-col justify-between flex-grow">
            <div>
              <div className="text-3xl font-bold text-white">R$ 450,00</div>
              <div className="text-sm text-slate-300">Comparado a soluções tradicionais</div>
            </div>
            <div className="flex items-end mt-4"><Badge className="bg-green-600/20 text-green-400 border-green-600/30"><TrendingUp className="mr-1 h-3 w-3" />+32%</Badge></div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div>
              <CardTitle className="text-white">Análise de Uso</CardTitle>
              <CardDescription className="text-slate-300">Monitoramento de uso ao longo do tempo</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
              <Select value={product} onValueChange={setProduct}>
                <SelectTrigger className="w-full sm:w-[180px] bg-slate-700/50 border-slate-700 text-white">
                  <SelectValue placeholder="Selecionar produto" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                  <SelectItem value="all">Todos os produtos</SelectItem>
                  <SelectItem value="assistant">Get Assistant</SelectItem>
                  <SelectItem value="files">Get Files</SelectItem>
                </SelectContent>
              </Select>
              <Select value={period} onValueChange={setPeriod}>
                <SelectTrigger className="w-full sm:w-[180px] bg-slate-700/50 border-slate-700 text-white">
                  <SelectValue placeholder="Selecionar período" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                  <SelectItem value="d7">Últimos 7 dias</SelectItem>
                  <SelectItem value="d14">Últimos 14 dias</SelectItem>
                  <SelectItem value="d30">Últimos 30 dias</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {product === 'all' && (
            <div className="flex justify-start mt-4">
              <div className="flex items-center gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: chartConfig.assistant.color }} />
                  {chartConfig.assistant.label}
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: chartConfig.files.color }} />
                  {chartConfig.files.label}
                </div>
              </div>
            </div>
          )}
        </CardHeader>
        <CardContent className="h-96 pt-6">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" strokeOpacity={0.2} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={10} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                {(product === 'all' || product === 'assistant') && (
                  <Bar dataKey="assistant" name={chartConfig.assistant.label} fill={chartConfig.assistant.color} radius={4}>
                    <LabelList position="top" offset={8} className="fill-muted-foreground" fontSize={12} formatter={(value: number) => `${value > 0 ? `${value}%` : ''}`} />
                  </Bar>
                )}
                {(product === 'all' || product === 'files') && (
                  <Bar dataKey="files" name={chartConfig.files.label} fill={chartConfig.files.color} radius={4}>
                    <LabelList position="top" offset={8} className="fill-muted-foreground" fontSize={12} formatter={(value: number) => `${value > 0 ? `${value}%` : ''}`} />
                  </Bar>
                )}
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-slate-800 border-slate-700 flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-white">Produtos Ativos</CardTitle>
            <CardDescription className="text-slate-300">Gerencie suas assinaturas atuais</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-between flex-grow">
            <div className="space-y-6">
              {activeProducts.map((product, index) => (<div key={index} className="space-y-3"><div className="flex items-start space-x-4"><div className="p-2 bg-slate-700 rounded-lg flex-shrink-0">{product.icon}</div><div className="flex-1 min-w-0"><div className="flex items-center space-x-2 mb-2"><h3 className="font-medium text-white">{product.name}</h3><Badge className="bg-green-600/20 text-green-400 border-green-600/30 text-xs">{product.status}</Badge></div><div className="text-sm text-slate-300 mb-1">{product.price}</div></div></div><div className="pl-16"><div className="flex items-center justify-between text-sm"><span className="text-slate-300">Próxima cobrança</span><div className="flex items-center text-slate-300"><Calendar className="mr-1 h-3 w-3 text-slate-400" /><span>{product.nextBilling}</span></div></div></div></div>))}
            </div>
            <Link href="/dashboard/assinaturas"><Button className="w-full mt-6" variant="default">Gerenciar Assinaturas<ChevronRight className="ml-2 h-4 w-4" /></Button></Link>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700 flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-white">Produtos Recomendados</CardTitle>
            <CardDescription className="text-slate-300">Com base no seu perfil de uso</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-between flex-grow">
            <div className="space-y-6">
              {recommendedProducts.map((product, index) => (<div key={index} className="space-y-3"><div className="flex items-start space-x-4"><div className="p-2 bg-slate-700 rounded-lg flex-shrink-0">{product.icon}</div><div className="flex-1 min-w-0"><div className="flex items-center justify-between mb-2"><h3 className="font-medium text-white">{product.name}</h3><span className="font-medium text-blue-400 text-sm">{product.price}</span></div><p className="text-sm text-slate-300 leading-relaxed">{product.description}</p></div></div><div className="pl-16"><Link href={`/${product.slug}`}><Button size="sm" variant="default">Ver Detalhes</Button></Link></div></div>))}
            </div>
            <Link href="/dashboard/marketplace"><Button className="w-full mt-6" variant="default">Ver Todos os Produtos<ChevronRight className="ml-2 h-4 w-4" /></Button></Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
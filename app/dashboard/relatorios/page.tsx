"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, TrendingUp, TrendingDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, Legend, LabelList, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

type Metric = {
  name: string;
  current: string | number;
  previous: string | number;
  change: number;
  trend: "up" | "down";
};

// Função para gerar dados com datas reais
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


export default function RelatoriosPage() {
  const [period, setPeriod] = useState("d7")
  const [product, setProduct] = useState("all")

  const productMetrics: { [key: string]: Metric[] } = {
    all: [
      { name: "Consultas de IA", current: 1245, previous: 980, change: 27, trend: "up" },
      { name: "Documentos Processados", current: 387, previous: 412, change: 6, trend: "down" },
      { name: "Tempo Economizado", current: "42h", previous: "35h", change: 20, trend: "up" },
      { name: "ROI Estimado", current: "R$ 4.500", previous: "R$ 3.800", change: 18, trend: "up" },
    ],
    assistant: [
      { name: "Consultas de IA", current: 850, previous: 700, change: 21, trend: "up" },
      { name: "Resoluções", current: 680, previous: 650, change: 4, trend: "up" },
      { name: "Tempo de Resposta Médio", current: "3s", previous: "5s", change: 40, trend: "up" },
      { name: "Satisfação do Cliente", current: "92%", previous: "88%", change: 4, trend: "up" },
    ],
    files: [
      { name: "Documentos Processados", current: 387, previous: 412, change: 6, trend: "down" },
      { name: "Páginas Analisadas", current: 1024, previous: 900, change: 13, trend: "up" },
      { name: "Precisão de Extração", current: "98.7%", previous: "98.2%", change: 0.5, trend: "up" },
      { name: "Tempo por Documento", current: "12s", previous: "18s", change: 33, trend: "up" },
    ],
  };

  const currentMetrics = productMetrics[product] || productMetrics.all;
  
  const chartData = useMemo(() => {
    const days = period === 'd7' ? 7 : period === 'd14' ? 14 : 30;
    return generateChartData(days);
  }, [period]);

  const chartConfig = {
    assistant: { label: "Get Assistant", color: "hsl(221, 83%, 53%)" },
    files: { label: "Get Files", color: "hsl(142, 71%, 47%)" },
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Relatórios e Análises</h1>
          <p className="text-slate-300">Insights detalhados sobre o uso dos seus produtos</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Button variant="default">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {currentMetrics.map((metric, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700 flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-300">{metric.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between flex-grow">
              <div>
                <div className="text-3xl font-bold text-white">{metric.current}</div>
                <div className="text-sm text-slate-300">vs. período anterior</div>
              </div>
              <div className="flex items-end mt-4">
                <Badge className={`${metric.trend === "up" ? "bg-green-600/20 text-green-400 border-green-600/30" : "bg-red-600/20 text-red-400 border-red-600/30"}`}>
                  {metric.trend === "up" ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
                  {metric.change}%
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
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
                    <BarChart
                        data={chartData}
                        margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid vertical={false} strokeDasharray="3 3" strokeOpacity={0.2} />
                        <XAxis
                          dataKey="name"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={10}
                          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                        />
                        <Tooltip
                          cursor={false}
                          content={<ChartTooltipContent indicator="dot" />}
                        />
                        
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
    </div>
  )
}
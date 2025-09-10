"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  CreditCard,
  Download,
  FileText,
  Brain,
  CheckCircle,
  Clock,
  ChevronDown,
  ChevronUp,
  Edit,
  Trash,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Assinaturas() {
  const [openSubscription, setOpenSubscription] = useState<string | null>(null)

  const subscriptions = [
    {
      id: "sub_1",
      name: "Get Assistant",
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      status: "Ativo",
      price: "R$ 87,90/mês",
      nextBilling: "15/07/2025",
      startDate: "15/06/2025",
      usage: 78,
      features: [
        "Interface conversacional natural",
        "Integração com múltiplas plataformas",
        "Aprendizado contínuo",
        "Personalização completa",
        "Multilíngue",
        "Analytics avançados",
      ],
      invoices: [{ id: "inv_1", date: "15/06/2025", amount: "R$ 87,90", status: "Pago" }],
    },
    {
      id: "sub_2",
      name: "Get Files",
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      status: "Ativo",
      price: "R$ 49,97/mês",
      nextBilling: "15/07/2025",
      startDate: "15/06/2025",
      usage: 45,
      features: [
        "Extração automática de dados",
        "Suporte a múltiplos formatos",
        "OCR de alta precisão",
        "Classificação inteligente",
        "Integração com sistemas",
        "Processamento em lote",
      ],
      invoices: [{ id: "inv_2", date: "15/06/2025", amount: "R$ 49,97", status: "Pago" }],
    },
  ]

  const toggleSubscription = (id: string) => {
    if (openSubscription === id) {
      setOpenSubscription(null)
    } else {
      setOpenSubscription(id)
    }
  }

  return (
    <div className="space-y-8">
      {/* ======================= CABEÇALHO AJUSTADO AQUI ======================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Gerenciar Assinaturas</h1>
          <p className="text-slate-300">Visualize e gerencie seus produtos ativos</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button variant="default">
            <Download className="mr-2 h-4 w-4" />
            Histórico de Faturas
          </Button>
        </div>
      </div>

      {/* Resumo de assinaturas */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Resumo de Assinaturas</CardTitle>
          <CardDescription className="text-slate-300">Visão geral dos seus produtos ativos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
             <div className="p-4 bg-slate-700/50 rounded-lg">
              <div className="text-sm text-slate-300">Total Mensal</div>
              <div className="text-2xl font-bold mt-1 text-white">R$ 137,87</div>
              <div className="text-sm text-slate-300 mt-2">Próxima cobrança em 15/07/2025</div>
            </div>

            <div className="p-4 bg-slate-700/50 rounded-lg">
               <div className="text-sm text-slate-300">Produtos Ativos</div>
              <div className="text-2xl font-bold mt-1 text-white">2</div>
              <div className="text-sm text-slate-300 mt-2">De 5 produtos disponíveis</div>
            </div>

            <div className="p-4 bg-slate-700/50 rounded-lg">
              <div className="text-sm text-slate-300">Status de Pagamento</div>
               <div className="flex items-center mt-1">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-lg font-medium text-white">Em dia</span>
              </div>
              <div className="text-sm text-slate-300 mt-2">Último pagamento em 15/06/2025</div>
            </div>
           </div>
        </CardContent>
      </Card>
      
      <h2 className="text-2xl font-bold text-white pt-4">Meus Produtos</h2>
      
      {/* Lista compacta de produtos ativos */}
      <div className="space-y-4">
        {subscriptions.map((product) => (
          <div key={product.id} className="flex items-center justify-between p-4 bg-slate-800 border border-slate-700 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-slate-700 rounded-lg flex-shrink-0">{product.icon}</div>
               <div className="flex-1">
                <div className="flex items-center space-x-3 mb-1">
                  <h3 className="font-medium text-white">{product.name}</h3>
                </div>
                <div className="flex items-center space-x-3">
                   <Badge className="bg-green-600/20 text-green-400 border-green-600/30">{product.status}</Badge>
                  <span className="text-sm text-slate-300">{product.price}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-300">Próxima cobrança</div>
              <div className="flex items-center text-slate-300">
                <Calendar className="mr-1 h-3 w-3 text-slate-400" />
                <span>{product.nextBilling}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white pt-4">Detalhes das Assinaturas</h2>

      {/* Lista de assinaturas com dropdown */}
      <div className="space-y-6">
        {subscriptions.map((subscription) => (
          <Card key={subscription.id} className="bg-slate-800 border-slate-700">
            <CardHeader 
              className="pb-0 cursor-pointer hover:bg-slate-700/50 transition-colors"
              onClick={() => toggleSubscription(subscription.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                   <div className="mr-4 p-2 bg-slate-700 rounded-lg">{subscription.icon}</div>
                  <div>
                    <CardTitle className="text-white">{subscription.name}</CardTitle>
                    <div className="flex items-center mt-1">
                       <Badge className="mr-2 bg-green-600/20 text-green-400 border-green-600/30">
                        {subscription.status}
                      </Badge>
                      <span className="text-slate-300">{subscription.price}</span>
                    </div>
                   </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-white"
                >
                  {openSubscription === subscription.id ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </div>
            </CardHeader>

            {openSubscription === subscription.id && (
              <>
                <CardContent className="pt-6">
                   <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-medium mb-4 text-white">Detalhes da Assinatura</h3>
                      <div className="space-y-3">
                         <div className="flex justify-between">
                          <span className="text-slate-300">Data de início:</span>
                          <span className="text-white">{subscription.startDate}</span>
                        </div>
                         <div className="flex justify-between">
                          <span className="text-slate-300">Próxima cobrança:</span>
                          <span className="text-white">{subscription.nextBilling}</span>
                        </div>
                         <div className="flex justify-between">
                          <span className="text-slate-300">Valor mensal:</span>
                          <span className="text-white">{subscription.price}</span>
                         </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Uso atual:</span>
                          <span className="text-white">{subscription.usage}%</span>
                       </div>
                      </div>

                      <h3 className="text-lg font-medium mt-6 mb-4 text-white">Recursos Incluídos</h3>
                      <ul className="space-y-2">
                         {subscription.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                           </li>
                        ))}
                      </ul>
                    </div>

                     <div>
                      <h3 className="text-lg font-medium mb-4 text-white">Histórico de Faturas</h3>
                      <Table>
                        <TableHeader>
                           <TableRow className="border-slate-700">
                            <TableHead className="text-slate-300">Data</TableHead>
                            <TableHead className="text-slate-300">Valor</TableHead>
                            <TableHead className="text-slate-300">Status</TableHead>
                             <TableHead className="text-right text-slate-300">Ação</TableHead>
                          </TableRow>
                        </TableHeader>
                         <TableBody>
                          {subscription.invoices.map((invoice) => (
                            <TableRow key={invoice.id} className="border-slate-700">
                              <TableCell className="text-white">{invoice.date}</TableCell>
                               <TableCell className="text-white">{invoice.amount}</TableCell>
                              <TableCell>
                                <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                                   {invoice.status}
                                </Badge>
                              </TableCell>
                               <TableCell className="text-right">
                                <Button variant="ghost" size="sm" className="h-8 text-slate-400 hover:text-white">
                                  <Download className="h-4 w-4" />
                                 </Button>
                              </TableCell>
                            </TableRow>
                           ))}
                        </TableBody>
                      </Table>

                      <div className="mt-6 space-y-4">
                        <h3 className="text-lg font-medium text-white">Próxima Fatura</h3>
                        <div className="p-4 border border-slate-700 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                               <Calendar className="h-4 w-4 text-slate-400 mr-2" />
                              <span className="text-white">{subscription.nextBilling}</span>
                            </div>
                             <span className="text-white">{subscription.price}</span>
                          </div>
                          <div className="flex items-center text-sm text-slate-300">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>Será cobrado automaticamente</span>
                          </div>
                        </div>
                       </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="border-t border-slate-700 pt-6 flex flex-wrap gap-3">
                  <Button variant="default">
                    <Edit className="mr-2 h-4 w-4" />
                    Alterar Plano
                  </Button>
                  
                  <Button variant="outline">
                    <Clock className="mr-2 h-4 w-4" />
                    Pausar Assinatura
                   </Button>
                  
                  <Button
                    variant="destructive"
                    className="bg-transparent border border-red-500 text-red-500 hover:bg-red-600 hover:text-white"
                  >
                     <Trash className="mr-2 h-4 w-4" />
                    Cancelar Assinatura
                  </Button>
                </CardFooter>
              </>
            )}
          </Card>
         ))}
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Perguntas Frequentes</CardTitle>
          <CardDescription className="text-slate-300">Dúvidas comuns sobre assinaturas</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-slate-700">
              <AccordionTrigger className="text-left text-white hover:text-blue-400">
                Como funciona o ciclo de cobrança?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                As cobranças são realizadas mensalmente na mesma data da contratação inicial. Você receberá um e-mail de
                lembrete 3 dias antes de cada cobrança.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-slate-700">
              <AccordionTrigger className="text-left text-white hover:text-blue-400">
                Como posso cancelar uma assinatura?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Você pode cancelar qualquer assinatura a qualquer momento através do botão "Cancelar Assinatura" nos
                detalhes do produto. O acesso permanecerá ativo até o final do período já pago.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-slate-700">
              <AccordionTrigger className="text-left text-white hover:text-blue-400">
                Posso mudar de plano durante a assinatura?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As diferenças de valor serão
                calculadas proporcionalmente ao tempo restante do ciclo atual.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
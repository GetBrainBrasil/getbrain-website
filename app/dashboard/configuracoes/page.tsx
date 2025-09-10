"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, CreditCard, Bell, Shield, Eye, EyeOff } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast" // Importe o hook do toast

export default function ConfiguracoesPage() {
  // Hook para disparar as notificações
  const { toast } = useToast()

  // Estado para controlar a visibilidade das senhas
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Funções para exibir toasts de sucesso
  const showSuccessToast = (message: string) => {
    toast({
      title: "Sucesso!",
      description: message,
      className: "bg-green-600 text-white border-green-700",
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Configurações</h1>
        <p className="text-slate-300">Gerencie sua conta e preferências</p>
      </div>

      <Tabs defaultValue="perfil" className="w-full">
        {/* ESTILO DAS ABAS CORRIGIDO */}
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 md:w-auto md:max-w-xl bg-slate-800 text-slate-300">
          <TabsTrigger value="perfil" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"><User className="mr-2 h-4 w-4" />Perfil</TabsTrigger>
          <TabsTrigger value="cobranca" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"><CreditCard className="mr-2 h-4 w-4" />Cobrança</TabsTrigger>
          <TabsTrigger value="notificacoes" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"><Bell className="mr-2 h-4 w-4" />Notificações</TabsTrigger>
          <TabsTrigger value="seguranca" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"><Shield className="mr-2 h-4 w-4" />Segurança</TabsTrigger>
        </TabsList>

        {/* Aba de Perfil */}
        <TabsContent value="perfil">
          <Card className="bg-slate-800 border-slate-700 mt-6">
            <CardHeader>
              <CardTitle className="text-white">Informações Pessoais</CardTitle>
              <CardDescription className="text-slate-300">Atualize suas informações pessoais e foto de perfil</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="h-24 w-24 rounded-full bg-slate-700 flex items-center justify-center">
                  <User className="h-12 w-12 text-slate-400" />
                </div>
                <div>
                  <Button variant="outline">Alterar Foto</Button>
                  <p className="text-xs text-slate-400 mt-2">JPG, GIF ou PNG. Máximo 1MB.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* ESTILO DOS INPUTS CORRIGIDO */}
                <Input defaultValue="Daniel" placeholder="Nome" className="bg-slate-700/50 border-slate-700 text-white" />
                <Input defaultValue="Henrique" placeholder="Sobrenome" className="bg-slate-700/50 border-slate-700 text-white" />
                <Input defaultValue="daniel@getbrain.com.br" placeholder="E-mail" type="email" className="bg-slate-700/50 border-slate-700 text-white" />
                <Input defaultValue="(21) 99016-8793" placeholder="Telefone" className="bg-slate-700/50 border-slate-700 text-white" />
              </div>
              <div className="flex justify-start">
                <Button variant="default" onClick={() => showSuccessToast("Suas informações de perfil foram salvas.")}>Salvar Alterações</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Cobrança */}
        <TabsContent value="cobranca">
          <Card className="bg-slate-800 border-slate-700 mt-6">
            <CardHeader>
              <CardTitle className="text-white">Informações de Cobrança</CardTitle>
              <CardDescription className="text-slate-300">Gerencie seu método de pagamento e veja seu histórico</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-white mb-2">Método de Pagamento</h3>
                <div className="p-4 border border-slate-700 rounded-lg flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-8 w-8 text-slate-400" />
                    <div>
                      <p className="text-white">Mastercard terminando em **** 4242</p>
                      <p className="text-xs text-slate-400">Expira em 12/2028</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Alterar</Button>
                </div>
              </div>
               <div>
                <h3 className="font-semibold text-white mb-2">Endereço de Cobrança</h3>
                 <div className="p-4 border border-slate-700 rounded-lg">
                   <p className="text-white">Rua Exemplo, 123, Rio de Janeiro, RJ</p>
                   <p className="text-xs text-slate-400">Brasil, 22221-010</p>
                 </div>
              </div>
              <div className="flex justify-start">
                <Button variant="default" onClick={() => showSuccessToast("Suas informações de cobrança foram salvas.")}>Salvar Alterações</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba de Notificações */}
        <TabsContent value="notificacoes">
          <Card className="bg-slate-800 border-slate-700 mt-6">
            <CardHeader>
              <CardTitle className="text-white">Preferências de Notificação</CardTitle>
              <CardDescription className="text-slate-300">Escolha como você quer ser comunicado</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                <div>
                  <Label htmlFor="product-updates" className="font-medium text-white">Novidades sobre Produtos</Label>
                  <p className="text-sm text-slate-400">Receba e-mails sobre novos recursos e atualizações.</p>
                </div>
                {/* ESTILO DOS TOGGLES CORRIGIDO */}
                <Switch id="product-updates" defaultChecked className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-slate-700" />
              </div>
              <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                <div>
                  <Label htmlFor="billing-updates" className="font-medium text-white">Alertas de Cobrança</Label>
                  <p className="text-sm text-slate-400">Receba e-mails sobre faturas e pagamentos.</p>
                </div>
                <Switch id="billing-updates" defaultChecked className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-slate-700" />
              </div>
              <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                <div>
                  <Label htmlFor="security-updates" className="font-medium text-white">Alertas de Segurança</Label>
                  <p className="text-sm text-slate-400">Seja notificado sobre atividades suspeitas na sua conta.</p>
                </div>
                <Switch id="security-updates" className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-slate-700" />
              </div>
              <div className="flex justify-start">
                <Button variant="default" onClick={() => showSuccessToast("Suas preferências foram salvas.")}>Salvar Preferências</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Aba de Segurança */}
        <TabsContent value="seguranca">
          <Card className="bg-slate-800 border-slate-700 mt-6">
            <CardHeader>
              <CardTitle className="text-white">Segurança da Conta</CardTitle>
              <CardDescription className="text-slate-300">Altere sua senha e gerencie a segurança da sua conta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="current-password" className="font-semibold text-white">Senha Atual</Label>
                  <div className="relative">
                    <Input id="current-password" type={showCurrentPassword ? "text" : "password"} placeholder="••••••••" defaultValue="teste123" className="bg-slate-700/50 border-slate-700 text-white" />
                    <Button variant="ghost" size="icon" className="absolute top-1/2 right-2 -translate-y-1/2 h-7 w-7 text-slate-400 hover:text-white" onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
                      {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password" className="font-semibold text-white">Nova Senha</Label>
                  <div className="relative">
                    <Input id="new-password" type={showNewPassword ? "text" : "password"} placeholder="Digite sua nova senha" className="bg-slate-700/50 border-slate-700 text-white" />
                    <Button variant="ghost" size="icon" className="absolute top-1/2 right-2 -translate-y-1/2 h-7 w-7 text-slate-400 hover:text-white" onClick={() => setShowNewPassword(!showNewPassword)}>
                      {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="font-semibold text-white">Confirmar Nova Senha</Label>
                  <div className="relative">
                    <Input id="confirm-password" type={showConfirmPassword ? "text" : "password"} placeholder="Confirme sua nova senha" className="bg-slate-700/50 border-slate-700 text-white" />
                    <Button variant="ghost" size="icon" className="absolute top-1/2 right-2 -translate-y-1/2 h-7 w-7 text-slate-400 hover:text-white" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="flex justify-start">
                    <Button variant="default" onClick={() => showSuccessToast("Sua senha foi alterada com sucesso.")}>Alterar Senha</Button>
                </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
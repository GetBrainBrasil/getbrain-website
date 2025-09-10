"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  LayoutDashboard,
  CreditCard,
  ShoppingCart,
  BarChart3,
  Settings,
  LogOut,
  ChevronDown,
  Bell,
  User,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Toaster } from "@/components/ui/toaster" // <-- 1. IMPORTAÇÃO ADICIONADA

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Assinaturas", href: "/dashboard/assinaturas", icon: CreditCard },
    { name: "Marketplace", href: "/dashboard/marketplace", icon: ShoppingCart },
    { name: "Relatórios", href: "/dashboard/relatorios", icon: BarChart3 },
    { name: "Configurações", href: "/dashboard/configuracoes", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="bg-[#142544] border-b border-slate-700">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-8">
              <img src="/images/logogetbrain.svg" alt="GetBrain Logo" className="h-8 w-auto" />
            </Link>
            <button
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative hover:bg-slate-700">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-slate-800 border-slate-700 text-white">
                <DropdownMenuLabel>Notificações</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-slate-700" />
                <DropdownMenuItem className="flex flex-col items-start py-3 cursor-pointer focus:bg-slate-700">
                  <p className="font-medium">Fatura disponível</p>
                  <p className="text-sm text-slate-400">Sua fatura de Maio está disponível para pagamento</p>
                  <p className="text-xs text-slate-500 mt-1">Há 2 horas</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 hover:bg-slate-700">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/images/avatar-placeholder.svg" alt="User Avatar" />
                    <AvatarFallback className="bg-slate-700">
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline-block">Daniel Henrique</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-slate-800 border-slate-700 text-white">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-slate-700" />
                
                {/* ======================= LINKS CORRIGIDOS ======================= */}
                <Link href="/dashboard/configuracoes">
                  <DropdownMenuItem className="cursor-pointer focus:bg-slate-700">
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/dashboard/configuracoes">
                  <DropdownMenuItem className="cursor-pointer focus:bg-slate-700">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configurações</span>
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator className="bg-slate-700" />
                <DropdownMenuItem className="cursor-pointer text-red-400 hover:text-red-300 focus:bg-red-950/50">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="flex">
        <aside className="hidden md:flex flex-col w-64 bg-slate-800 border-r border-slate-700 min-h-[calc(100vh-64px)] p-4">
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive =
                item.href === "/dashboard"
                  ? pathname === item.href
                  : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                    isActive
                      ? "bg-blue-600/20 text-blue-400 border-l-4 border-blue-500"
                      : "hover:bg-slate-700/50 text-slate-300"
                  }`}
                >
                  <item.icon className={`mr-3 h-5 w-5 ${isActive ? "text-blue-400" : "text-slate-400"}`} />
                  {item.name}
                </Link>
              )
            })}
          </nav>
          <div className="mt-auto pt-4 border-t border-slate-700">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-950/50"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Sair
            </Button>
          </div>
        </aside>
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
      <Toaster /> {/* <-- 2. COMPONENTE ADICIONADO */}
    </div>
  )
}
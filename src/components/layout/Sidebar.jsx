import { NavLink } from "react-router-dom"
import { LayoutDashboard, AlertTriangle, Activity, Settings, Shield } from "lucide-react"
import { cn } from "../../lib/utils"

const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: AlertTriangle, label: "Incidents", href: "/incidents" },
    { icon: Activity, label: "Monitoring", href: "/monitoring" },
    { icon: Settings, label: "Settings", href: "/settings" },
]

export function Sidebar() {
    return (
        <div className="flex h-screen w-64 flex-col border-r bg-card">
            <div className="flex h-14 items-center border-b px-6">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                <span className="text-lg font-bold tracking-tight">Aegis</span>
            </div>
            <nav className="flex-1 space-y-1 p-4">
                {navItems.map((item) => (
                    <NavLink
                        key={item.href}
                        to={item.href}
                        className={({ isActive }) =>
                            cn(
                                "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                            )
                        }
                    >
                        <item.icon className="mr-3 h-4 w-4" />
                        {item.label}
                    </NavLink>
                ))}
            </nav>
            <div className="border-t p-4">
                <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10" />
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Admin User</p>
                        <p className="text-xs text-muted-foreground">admin@aegis.ai</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

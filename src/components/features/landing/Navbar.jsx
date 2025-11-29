import { Link } from "react-router-dom"
import { Shield } from "lucide-react"
import { Button } from "../../common/Button"

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold tracking-tight">Aegis</span>
                </div>
                <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <a href="#product" className="transition-colors hover:text-primary">Product</a>
                    <a href="#use-cases" className="transition-colors hover:text-primary">Use Cases</a>
                    <Link to="/dashboard" className="transition-colors hover:text-primary">Login</Link>
                    <Button size="sm">Request Demo</Button>
                </div>
            </div>
        </nav>
    )
}

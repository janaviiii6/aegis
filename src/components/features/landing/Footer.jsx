import { Shield } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t py-12 bg-background">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <Shield className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold tracking-tight">Aegis</span>
                </div>
                <div className="text-sm text-muted-foreground">
                    © 2024 Aegis Defense Systems. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

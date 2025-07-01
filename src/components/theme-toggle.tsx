"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
    const { setTheme } = useTheme()

    const handleThemeChange = React.useCallback((theme: string) => {
        setTheme(theme)
    }, [setTheme])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="touch-manipulation select-none"
                    aria-label="Toggle theme"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[8rem]">
                <DropdownMenuItem
                    onClick={() => handleThemeChange("light")}
                    className="cursor-pointer touch-manipulation"
                >
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => handleThemeChange("dark")}
                    className="cursor-pointer touch-manipulation"
                >
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => handleThemeChange("system")}
                    className="cursor-pointer touch-manipulation"
                >
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Over the dark hero (not scrolled, menu closed) use light text; once
    // scrolled onto the white background, switch to dark text.
    const onDark = !scrolled && !open;

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50 transition-colors duration-300 md:px-4 md:pt-0",
                scrolled || open
                    ? "border-b border-border bg-background/90 text-foreground backdrop-blur-md md:mx-4 md:mt-4 md:rounded-full md:border"
                    : "border-b border-transparent text-background md:pt-4",
            )}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
                <Link href="/" className="group flex items-center gap-2">
                    <span
                        className={cn(
                            "flex h-8 w-8 items-center justify-center rounded-full",
                            onDark
                                ? "bg-background text-foreground"
                                : "bg-foreground text-background",
                        )}
                    >
                        <span className="font-heading text-sm font-black leading-none">
                            U
                        </span>
                    </span>
                    <span className="font-heading text-lg font-extrabold uppercase leading-none tracking-tight">
                        Universal
                        <span
                            className={
                                onDark
                                    ? "text-background/60"
                                    : "text-muted-foreground"
                            }
                        >
                            {" "}
                            Drywall
                        </span>
                    </span>
                </Link>

                <nav className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) => {
                        const active =
                            item.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors hover:bg-muted/60",
                                    active
                                        ? "bg-muted/60 opacity-100"
                                        : "opacity-60 hover:opacity-100",
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <Link
                    href="/contact"
                    className={cn(
                        "hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-80 md:inline-flex md:shadow-sm",
                        onDark
                            ? "bg-background text-foreground"
                            : "bg-foreground text-background",
                    )}
                >
                    Start a Project
                    <ArrowUpRight className="h-4 w-4" />
                </Link>

                <button
                    type="button"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background/20 md:hidden"
                >
                    {open ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {open && (
                <div className="border-t border-border bg-background shadow-2xl md:hidden md:rounded-b-[2rem]">
                    <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
                        {navItems.map((item) => {
                            const active =
                                item.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(item.href);
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "rounded-2xl py-4 pl-4 font-heading text-2xl font-bold uppercase tracking-tight transition-colors",
                                        active
                                            ? "bg-secondary text-foreground"
                                            : "text-muted-foreground",
                                    )}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <Link
                            href="/contact"
                            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-4 text-sm font-semibold uppercase tracking-wide text-background shadow-sm"
                        >
                            Start a Project
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

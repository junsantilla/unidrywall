import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const columns = [
    {
        title: "Navigation",
        links: [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Services",
        links: [
            { label: "Drywall Systems", href: "/services" },
            { label: "Healthcare Construction", href: "/services" },
            { label: "EIFS Cladding", href: "/services" },
            { label: "Impact Systems", href: "/services" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "Since 1971", href: "/about" },
            { label: "EIFS Construction, Inc.", href: "/about" },
            { label: "Safety", href: "/about" },
            { label: "Get a Quote", href: "/contact" },
        ],
    },
];

export function SiteFooter() {
    return (
        <footer className="bg-foreground text-background md:mx-4 md:mb-4 md:rounded-[2rem]">
            <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
                    <div className="max-w-sm">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground">
                                <span className="font-heading text-sm font-black leading-none">
                                    U
                                </span>
                            </span>
                            <span className="font-heading text-lg font-extrabold uppercase leading-none tracking-tight">
                                Universal Drywall
                            </span>
                        </Link>
                        <p className="mt-6 text-pretty leading-relaxed text-background/60">
                            Drywall and plastering experts since 1971.
                            Innovators and leaders in EIFS construction through
                            our affiliate, EIFS Construction, Inc.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-2 border-b border-background/30 pb-1 font-heading text-sm font-semibold uppercase tracking-wide transition-colors hover:border-background"
                        >
                            Build with us
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
                        {columns.map((col) => (
                            <div key={col.title}>
                                <h3 className="font-mono text-xs uppercase tracking-widest text-background/40">
                                    {col.title}
                                </h3>
                                <ul className="mt-5 space-y-3">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-background/70 transition-colors hover:text-background"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-4 border-t border-background/15 pt-8 text-sm text-background/50 md:flex-row md:items-center md:justify-between">
                    <p>
                        &copy; {new Date().getFullYear()} Universal Drywall. All
                        rights reserved.
                    </p>
                    <p className="font-mono text-xs uppercase tracking-widest">
                        Drywall &middot; Plastering &middot; EIFS &middot;
                        Impact Systems
                    </p>
                </div>
            </div>
        </footer>
    );
}

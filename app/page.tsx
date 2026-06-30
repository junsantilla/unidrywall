import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const services = [
    {
        no: "01",
        title: "Drywall Systems",
        desc: "Precision metal framing, drywall, and acoustic assemblies engineered for performance and built to exacting commercial standards.",
    },
    {
        no: "02",
        title: "Healthcare Construction",
        desc: "Specialized wall systems for hospitals and medical facilities — infection-control ready, durable, and code-compliant.",
    },
    {
        no: "03",
        title: "EIFS Cladding",
        desc: "Exterior Insulation Finish Systems for new construction, repair, and re-cladding through our affiliate EIFS Construction, Inc.",
    },
    {
        no: "04",
        title: "Impact Systems",
        desc: "Hurricane Large Missile Impact Systems for the ultimate protection from debris, wind, and water intrusion.",
    },
];

const stats = [
    { value: "1971", label: "Founded as drywall & plastering experts" },
    { value: "50+", label: "Years of construction craftsmanship" },
    { value: "EIFS", label: "Innovators since the mid-1990s" },
    { value: "100%", label: "Commitment to safety & quality" },
];

export default function HomePage() {
    return (
        <main>
            {/* Hero */}
            <section className="relative flex min-h-screen items-end overflow-hidden bg-foreground text-background md:mx-4 md:mt-4 md:rounded-[2rem]">
                <Image
                    src="/images/hero-drywall.png"
                    alt="Healthcare facility interior under construction with drywall partitions"
                    fill
                    priority
                    className="object-cover opacity-40"
                />
                {/* removed background gradient overlay */}
                <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 md:px-8 md:pb-24">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-background/70">
                        Drywall &middot; Plastering &middot; EIFS &middot; Since
                        1971
                    </p>
                    <h1 className="mt-6 max-w-5xl text-balance font-heading text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
                        Building healthcare. Cladding the future.
                    </h1>
                    <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-background/70">
                        Universal Drywall delivers expert drywall construction
                        specializing in healthcare systems — paired with
                        industry-leading EIFS and impact-resistant exterior
                        systems.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-4 font-heading text-sm font-bold uppercase tracking-wide text-foreground shadow-sm transition-opacity hover:opacity-90"
                        >
                            Start a Project
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 px-7 py-4 font-heading text-sm font-bold uppercase tracking-wide transition-colors hover:bg-background/10"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro statement */}
            <section className="border-b border-border">
                <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-12 md:px-8 md:py-28">
                    <div className="md:col-span-4">
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                            (Who we are)
                        </p>
                    </div>
                    <div className="md:col-span-8">
                        <h2 className="text-balance font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                            From drywall and plastering experts in 1971 to
                            innovators and leaders in EIFS construction — we
                            build the systems that protect what matters.
                        </h2>
                        <Link
                            href="/about"
                            className="mt-10 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 font-heading text-sm font-semibold uppercase tracking-wide transition-colors hover:border-foreground"
                        >
                            Our Story
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="border-b border-border">
                <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <h2 className="text-balance font-heading text-4xl font-black uppercase tracking-tight sm:text-5xl">
                            What we do
                        </h2>
                        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
                            Four disciplines, one standard of excellence. Every
                            system is engineered for safety, durability, and
                            performance.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border shadow-sm sm:grid-cols-2">
                        {services.map((s) => (
                            <div
                                key={s.no}
                                className="group flex flex-col bg-background p-8 transition-colors hover:bg-secondary md:p-10"
                            >
                                <span className="font-mono text-sm text-muted-foreground">
                                    {s.no}
                                </span>
                                <h3 className="mt-8 font-heading text-2xl font-bold uppercase tracking-tight">
                                    {s.title}
                                </h3>
                                <p className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                                    {s.desc}
                                </p>
                                <Link
                                    href="/services"
                                    className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide"
                                >
                                    Learn more
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-foreground text-background">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-4 md:px-8 md:py-8 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-[2rem] bg-foreground p-8 shadow-sm md:p-12"
                        >
                            <p className="font-heading text-5xl font-black tracking-tight md:text-6xl">
                                {stat.value}
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-background/60">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* EIFS feature split */}
            <section className="border-b border-border py-16 md:py-24">
                <div className="mx-auto grid max-w-7xl items-stretch gap-0 overflow-hidden rounded-[2rem] border border-border md:grid-cols-2">
                    <div className="relative min-h-[320px] md:min-h-full">
                        <Image
                            src="/images/eifs-facade.png"
                            alt="Modern commercial building exterior with EIFS cladding"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="px-4 py-16 md:px-12 md:py-24">
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                            (Affiliate) EIFS Construction, Inc.
                        </p>
                        <h2 className="mt-6 text-balance font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                            Exterior Insulation Finish Systems built to endure
                        </h2>
                        <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                            Our affiliate company specializes in EIFS for new
                            construction as well as repair and re-cladding. We
                            also install Hurricane Large Missile Impact Systems
                            for the ultimate safety of your building from
                            debris, wind, and water.
                        </p>
                        <ul className="mt-8 space-y-3">
                            {[
                                "New construction EIFS",
                                "Repair & re-cladding",
                                "Hurricane impact-rated systems",
                                "Water & weather protection",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 border-b border-border pb-3 text-sm font-medium"
                                >
                                    <span className="font-mono text-muted-foreground">
                                        —
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/services"
                            className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-background shadow-sm transition-opacity hover:opacity-90"
                        >
                            View EIFS Services
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
                <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
                    <h2 className="max-w-2xl text-balance font-heading text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
                        Let&apos;s build something that lasts.
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-5 font-heading text-base font-bold uppercase tracking-wide text-background shadow-sm transition-opacity hover:opacity-90"
                    >
                        Get in touch
                        <ArrowUpRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

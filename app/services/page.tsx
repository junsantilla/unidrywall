import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
    title: "Services — Universal Drywall",
    description:
        "Drywall systems, healthcare construction, EIFS cladding, and Hurricane Large Missile Impact Systems. Explore the full range of services from Universal Drywall and EIFS Construction, Inc.",
};

const services = [
    {
        no: "01",
        title: "Drywall Systems",
        desc: "Commercial metal framing, drywall, taping, and acoustic assemblies engineered for performance and built to exacting standards.",
        points: [
            "Metal stud framing",
            "Gypsum board installation",
            "Acoustic & fire-rated assemblies",
            "Level-5 finishing",
        ],
    },
    {
        no: "02",
        title: "Healthcare Construction",
        desc: "Specialized wall systems for hospitals and medical facilities — designed for infection control, durability, and strict code compliance.",
        points: [
            "Infection-control assemblies",
            "Impact-resistant wall systems",
            "Lead-lined & shielded walls",
            "Cleanroom-ready partitions",
        ],
    },
    {
        no: "03",
        title: "EIFS Cladding",
        desc: "Through affiliate EIFS Construction, Inc., we deliver Exterior Insulation Finish Systems for new construction as well as repair and re-cladding.",
        points: [
            "New construction EIFS",
            "Repair & restoration",
            "Re-cladding & retrofits",
            "Decorative finishes & profiles",
        ],
    },
    {
        no: "04",
        title: "Impact Systems",
        desc: "Hurricane Large Missile Impact Systems for the ultimate safety of your building from debris, wind, and water intrusion.",
        points: [
            "Large missile impact rating",
            "Wind & debris protection",
            "Water-resistive barriers",
            "Code-compliant assemblies",
        ],
    },
];

const process = [
    {
        step: "01",
        title: "Consult",
        desc: "We review your plans, specs, and goals to scope the right systems for your build.",
    },
    {
        step: "02",
        title: "Engineer",
        desc: "Detailed assemblies and submittals tailored for performance, code, and safety.",
    },
    {
        step: "03",
        title: "Build",
        desc: "Skilled crews execute with precision, on schedule and to specification.",
    },
    {
        step: "04",
        title: "Deliver",
        desc: "Final inspection, finishing, and a system built to endure for decades.",
    },
];

export default function ServicesPage() {
    return (
        <main>
            <PageHero
                eyebrow="(Services) What we build"
                title="Systems engineered for safety & scale"
                description="From interior drywall for healthcare facilities to impact-rated exterior cladding, we deliver complete wall systems backed by 50+ years of expertise."
            />

            {/* Services list */}
            <section className="border-b border-border">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    {services.map((s) => (
                        <div
                            key={s.no}
                            className="grid gap-8 border-b border-border py-14 last:border-b-0 md:grid-cols-12 md:py-20"
                        >
                            <div className="md:col-span-1">
                                <span className="font-mono text-sm text-muted-foreground">
                                    {s.no}
                                </span>
                            </div>
                            <div className="md:col-span-5">
                                <h2 className="text-balance font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                                    {s.title}
                                </h2>
                                <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                                    {s.desc}
                                </p>
                            </div>
                            <div className="md:col-span-6">
                                <ul className="grid gap-3 sm:grid-cols-2">
                                    {s.points.map((p) => (
                                        <li
                                            key={p}
                                            className="flex items-center gap-3 rounded-full border border-border bg-background px-5 py-4 text-sm font-medium shadow-sm"
                                        >
                                            <span className="font-mono text-muted-foreground">
                                                —
                                            </span>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Feature image band */}
            <section className="relative overflow-hidden bg-foreground text-background md:mx-4 md:rounded-[2rem]">
                <Image
                    src="/images/hospital-exterior.png"
                    alt="Modern hospital building exterior"
                    fill
                    className="object-cover opacity-30"
                />
                <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
                    <h2 className="max-w-3xl text-balance font-heading text-3xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
                        One partner for interior and exterior wall systems
                    </h2>
                    <p className="mt-6 max-w-xl text-pretty leading-relaxed text-background/70">
                        Universal Drywall and EIFS Construction, Inc. cover the
                        full envelope — from healthcare interiors to
                        hurricane-rated facades.
                    </p>
                </div>
            </section>

            {/* Process */}
            <section className="border-b border-border">
                <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <h2 className="text-balance font-heading text-4xl font-black uppercase tracking-tight sm:text-5xl">
                            How we work
                        </h2>
                        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
                            A proven process that keeps projects on time, on
                            budget, and to spec.
                        </p>
                    </div>
                    <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {process.map((p) => (
                            <div
                                key={p.step}
                                className="rounded-[2rem] border border-border bg-background p-8 shadow-sm md:p-10"
                            >
                                <span className="font-mono text-sm text-muted-foreground">
                                    {p.step}
                                </span>
                                <h3 className="mt-8 font-heading text-xl font-bold uppercase tracking-tight">
                                    {p.title}
                                </h3>
                                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
                <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
                    <h2 className="max-w-2xl text-balance font-heading text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
                        Have a project in mind?
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-5 font-heading text-base font-bold uppercase tracking-wide text-background shadow-sm transition-opacity hover:opacity-90"
                    >
                        Request a quote
                        <ArrowUpRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
    title: "About — Universal Drywall",
    description:
        "Since 1971, Universal Drywall has grown from drywall and plastering experts to innovators and leaders in EIFS construction. Learn about our story, values, and affiliate EIFS Construction, Inc.",
};

const timeline = [
    {
        year: "1971",
        title: "The foundation",
        desc: "Universal Drywall is established as drywall and plastering experts, setting a standard for craftsmanship.",
    },
    {
        year: "1980s",
        title: "Commercial growth",
        desc: "Expansion into large-scale commercial and institutional construction across the region.",
    },
    {
        year: "Mid-1990s",
        title: "EIFS innovation",
        desc: "We become innovators and leaders in Exterior Insulation Finish Systems construction.",
    },
    {
        year: "Today",
        title: "Healthcare & resilience",
        desc: "Specializing in healthcare systems and hurricane impact-rated exteriors through EIFS Construction, Inc.",
    },
];

const values = [
    {
        title: "Craftsmanship",
        desc: "Five decades of hands-on expertise in every wall, finish, and system we deliver.",
    },
    {
        title: "Safety First",
        desc: "From impact-rated systems to infection-control assemblies, safety drives every decision.",
    },
    {
        title: "Innovation",
        desc: "We pioneered EIFS construction and continue to adopt the systems that define the industry.",
    },
    {
        title: "Reliability",
        desc: "Trusted by builders and owners for on-time, code-compliant, performance-driven work.",
    },
];

export default function AboutPage() {
    return (
        <main>
            <PageHero
                eyebrow="(About) Since 1971"
                title="Half a century of building expertise"
                description="What began as drywall and plastering craftsmanship has become a leader in healthcare construction and EIFS systems — backed by a relentless commitment to safety and quality."
            />

            {/* Statement + image */}
            <section className="border-b border-border">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-8 md:py-28">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                            (Our story)
                        </p>
                        <h2 className="mt-6 text-balance font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                            Drywall experts turned EIFS innovators
                        </h2>
                        <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
                            <p>
                                Since 1971, Universal Drywall has built a
                                reputation as drywall and plastering experts.
                                Over five decades we refined our craft, grew our
                                teams, and earned the trust of builders across
                                the region.
                            </p>
                            <p>
                                In the mid-1990s we became innovators and
                                leaders in EIFS construction. Today, our
                                affiliate company EIFS Construction, Inc.
                                specializes in Exterior Insulation Finish
                                Systems for new construction as well as repair
                                and re-cladding.
                            </p>
                            <p>
                                We also install Hurricane Large Missile Impact
                                Systems for the ultimate safety of your building
                                from debris, wind, and water.
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
                        <Image
                            src="/images/craftsman.png"
                            alt="Skilled craftsman finishing a drywall surface"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="border-b border-border">
                <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
                    <h2 className="text-balance font-heading text-4xl font-black uppercase tracking-tight sm:text-5xl">
                        Our timeline
                    </h2>
                    <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {timeline.map((item) => (
                            <div
                                key={item.year}
                                className="rounded-[2rem] border border-border bg-background p-8 shadow-sm md:p-10"
                            >
                                <p className="font-heading text-3xl font-black tracking-tight">
                                    {item.year}
                                </p>
                                <h3 className="mt-6 font-heading text-lg font-bold uppercase tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="border-b border-border">
                <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <h2 className="text-balance font-heading text-4xl font-black uppercase tracking-tight sm:text-5xl">
                            What we stand for
                        </h2>
                        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
                            The principles that have guided every project since
                            1971.
                        </p>
                    </div>
                    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((v, i) => (
                            <div
                                key={v.title}
                                className="rounded-[2rem] border border-border bg-background p-8 shadow-sm md:p-10"
                            >
                                <span className="font-mono text-sm text-muted-foreground">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h3 className="mt-8 font-heading text-xl font-bold uppercase tracking-tight">
                                    {v.title}
                                </h3>
                                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                                    {v.desc}
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
                        Decades of trust. Ready for your project.
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-5 font-heading text-base font-bold uppercase tracking-wide text-background shadow-sm transition-opacity hover:opacity-90"
                    >
                        Work with us
                        <ArrowUpRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

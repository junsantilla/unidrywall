import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
    title: "Contact — Universal Drywall",
    description:
        "Get in touch with Universal Drywall and EIFS Construction, Inc. to discuss drywall, healthcare construction, EIFS, and impact-rated systems for your next project.",
};

const details = [
    {
        icon: Phone,
        label: "Phone",
        value: "(555) 019-1971",
        href: "tel:+15550191971",
    },
    {
        icon: Mail,
        label: "Email",
        value: "projects@universaldrywall.com",
        href: "mailto:projects@universaldrywall.com",
    },
    {
        icon: MapPin,
        label: "Office",
        value: "1971 Builders Way, Suite 100",
        href: undefined,
    },
    {
        icon: Clock,
        label: "Hours",
        value: "Mon–Fri, 7:00am – 5:00pm",
        href: undefined,
    },
];

export default function ContactPage() {
    return (
        <main>
            <PageHero
                eyebrow="(Contact) Let's talk"
                title="Start your next project"
                description="Tell us about your build. Whether it's healthcare interiors, EIFS cladding, or impact-rated systems, our team is ready to help."
            />

            <section>
                <div className="mx-auto grid max-w-7xl gap-0 md:grid-cols-12">
                    {/* Details */}
                    <div className="border-b border-border px-4 py-14 md:col-span-5 md:border-b-0 md:border-r md:px-8 md:py-20 lg:col-span-4">
                        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight">
                            Get in touch
                        </h2>
                        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                            Reach out directly or send us the details of your
                            project and we&apos;ll respond promptly.
                        </p>

                        <ul className="mt-10 space-y-4">
                            {details.map((d) => {
                                const Icon = d.icon;
                                const content = (
                                    <div className="flex items-start gap-4 rounded-[1.5rem] border border-border bg-background p-4 shadow-sm">
                                        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-foreground text-background">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                        <div>
                                            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                                {d.label}
                                            </p>
                                            <p className="mt-1 font-medium">
                                                {d.value}
                                            </p>
                                        </div>
                                    </div>
                                );
                                return (
                                    <li key={d.label}>
                                        {d.href ? (
                                            <a
                                                href={d.href}
                                                className="block transition-transform hover:-translate-y-0.5"
                                            >
                                                {content}
                                            </a>
                                        ) : (
                                            content
                                        )}
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-10 rounded-[2rem] border border-border bg-secondary p-6 shadow-sm">
                            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                Affiliate
                            </p>
                            <p className="mt-2 font-heading text-lg font-bold uppercase tracking-tight">
                                EIFS Construction, Inc.
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                Exterior Insulation Finish Systems, re-cladding,
                                and Hurricane Large Missile Impact Systems.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="px-4 py-14 md:col-span-7 md:px-8 md:py-20 lg:col-span-8">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}

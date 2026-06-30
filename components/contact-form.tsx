"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const services = [
    "Drywall Systems",
    "Healthcare Construction",
    "EIFS Cladding",
    "Impact Systems",
    "Other / Not sure",
];

export function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [service, setService] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="flex flex-col items-start justify-center rounded-[2rem] border border-border bg-secondary p-10 shadow-sm md:p-14">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
                    <Check className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-bold uppercase tracking-tight">
                    Message received
                </h3>
                <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
                    Thanks for reaching out to Universal Drywall. A member of
                    our team will get back to you shortly to discuss your
                    project.
                </p>
                <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-heading text-sm font-semibold uppercase tracking-wide text-background transition-opacity hover:opacity-90"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full name" htmlFor="name">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-colors focus:border-foreground"
                    />
                </Field>
                <Field label="Company" htmlFor="company">
                    <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Company name"
                        className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-colors focus:border-foreground"
                    />
                </Field>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Email" htmlFor="email">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-colors focus:border-foreground"
                    />
                </Field>
                <Field label="Phone" htmlFor="phone">
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(000) 000-0000"
                        className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-colors focus:border-foreground"
                    />
                </Field>
            </div>

            <Field label="Service of interest" htmlFor="service">
                <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                        <button
                            key={s}
                            type="button"
                            onClick={() => setService(s)}
                            className={
                                "rounded-full border px-4 py-2 text-sm font-medium transition-colors " +
                                (service === s
                                    ? "border-foreground bg-foreground text-background"
                                    : "border-border bg-background text-muted-foreground hover:border-foreground hover:text-foreground")
                            }
                        >
                            {s}
                        </button>
                    ))}
                </div>
                <input type="hidden" name="service" value={service} />
            </Field>

            <Field label="Project details" htmlFor="message">
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project, location, and timeline."
                    className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-colors focus:border-foreground"
                />
            </Field>

            <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 font-heading text-sm font-bold uppercase tracking-wide text-background shadow-sm transition-opacity hover:opacity-90"
            >
                Send message
                <ArrowUpRight className="h-4 w-4" />
            </button>
        </form>
    );
}

function Field({
    label,
    htmlFor,
    children,
}: {
    label: string;
    htmlFor: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-3">
            <label
                htmlFor={htmlFor}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
            >
                {label}
            </label>
            {children}
        </div>
    );
}

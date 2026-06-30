interface PageHeroProps {
    eyebrow: string;
    title: string;
    description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
    return (
        <section className="overflow-hidden border-b border-border bg-foreground text-background md:mx-4 md:mt-4 md:rounded-[2rem] md:border md:border-b-0">
            <div className="mx-auto max-w-7xl px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-44">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-background/60">
                    {eyebrow}
                </p>
                <h1 className="mt-6 max-w-4xl text-balance font-heading text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-7xl">
                    {title}
                </h1>
                {description && (
                    <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-background/70">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}

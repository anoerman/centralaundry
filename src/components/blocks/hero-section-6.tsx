import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, SendHorizonal } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
    return (
        <section className="overflow-hidden">
            <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-20">
                <div className="lg:flex lg:items-center lg:gap-12">
                    <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                        <Link
                            href="/packages"
                            className="rounded-lg mx-auto flex w-fit items-center gap-2 border p-1 pr-3 lg:ml-0">
                            <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">New</span>
                            <span className="text-sm">Turnkey business packages available</span>
                            <span className="bg-(--color-border) block h-4 w-px"></span>

                            <ArrowRight className="size-4" />
                        </Link>

                        <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl">Laundry Machines &amp; Business Packages</h1>
                        <p className="mt-8">Commercial washers, dryers, and finishing equipment, plus turnkey setups to launch or scale your laundry business.</p>

                        <div>
                            <form
                                action=""
                                className="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto">
                                <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[1rem] border pr-1 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                                    <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                                    <input
                                        placeholder="Your email address"
                                        className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                                        type="email"
                                    />

                                    <div className="md:pr-1.5 lg:pr-0">
                                        <Button aria-label="submit">
                                            <span className="hidden md:block">Get a Quote</span>
                                            <SendHorizonal
                                                className="relative mx-auto size-5 md:hidden"
                                                strokeWidth={2}
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </form>

                            <ul className="list-inside list-disc space-y-2">
                                <li>Commercial-grade washers &amp; dryers</li>
                                <li>Full setup, installation &amp; staff training</li>
                                <li>Ongoing maintenance support</li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative z-10 mx-auto mt-12 aspect-square w-full max-w-md rounded-3xl bg-gray-100 lg:mt-0 lg:w-1/2" />
                </div>
            </div>
        </section>
    )
}

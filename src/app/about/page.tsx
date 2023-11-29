import Image from "next/image";
import { Metadata } from "next";

import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import Workplaces from "@/app/about/components/Workplaces";
import ConnectLinks from "@/components/ConnectLinks";
import WorkExperienceDisplay from "@/app/about/components/WorkExperienceDisplay";

export const metadata: Metadata = {
    title: "About | Bastian Pedersen",
    description:
        "I am a full-stack software engineer who basically just enjoys creating things.",
};

export default function About() {
    return (
        <div className="flex flex-col gap-16 md:gap-24">
            <div>
                <h1 className="animate-in text-3xl font-bold tracking-tight">
                    About Me
                </h1>
                <p
                    className="text-secondary animate-in"
                    style={{ "--index": 1 } as React.CSSProperties}
                >
                    Just a quick glimpse.
                </p>
            </div>
            <div
                className="flex flex-col gap-16 animate-in md:gap-24"
                style={{ "--index": 3 } as React.CSSProperties}
            >
                <Section heading="About" headingAlignment="left">
                    <div className="flex flex-col gap-6">
                        <p>Hello world, I&apos;m Bastian T. Pedersen!</p>

                        <p>
                            I have a passion for robust and performant code, and I am always looking for ways to
                            incorporate this passion into my engineering work.
                        </p>
                        <p>
                            In addition to coding, I enjoy exercising, taking long walks, and playing chess.
                            I take pride in everything I do, and I thoroughly enjoy the process of making something from scratch.
                        </p>
                    </div>
                </Section>

                <Section heading="Connect" headingAlignment="left">
                    <div className="flex flex-col w-full gap-8">
                        <p>
                            Have a question or just want to chat? Feel free to{" "}
                            <Link href="mailto:contact@b-r.io" >
                                email me.
                            </Link>
                        </p>
                        <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 animated-list">
                            {ConnectLinks.map((link) => (
                                <li className="transition-opacity col-span-1" key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="transition-opacity no-underline w-full border rounded-lg p-4 border-primary inline-grid"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-xl">{link.icon}</span>
                                            {link.label}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="w-5 h-5 ml-auto text-secondary"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Section>

                <Section heading="Work" headingAlignment="left">
                    <div className="flex flex-col w-full gap-8">
                        <WorkExperienceDisplay />
                        <p>
                            I started my career by working as a development intern.
                        </p>
                        <Workplaces items={workplaces} />
                    </div>
                </Section>
            </div>
        </div>
    );
}

const workplaces = [
    {
        title: "Development Intern",
        company: "ABAX",
        time: "May 2021 -",
        imageSrc: "https://media.licdn.com/dms/image/D4D0BAQH5pp0d8mHAlA/company-logo_200_200/0/1699605462210/abax_logo?e=1709164800&v=beta&t=YWDIX8u3NXQ2VyVFBFudcOdLin3T99mwdvhI1-gLNsk",
        link: "https://www.abax.com/en-gb",
    },
    {
        title: "Greveskogen VGS",
        company: "",
        time: "August 2021 - June 2024",
        imageSrc: "https://www.vtfk.no/globalassets/skoler/horten-vgs/forsideblokker-og-bannere/logo-horten-vgs-rgb.svg",
        link: "https://www.vtfk.no/skoler/greveskogen-vgs/",
    },
    {
        title: "Horten VGS",
        company: "Informasjonsteknologi og medieproduksjon",
        time: "August 2020 - June 2021",
        imageSrc: "https://www.vtfk.no/globalassets/skoler/horten-vgs/forsideblokker-og-bannere/logo-horten-vgs-rgb.svg",
        link: "https://www.vtfk.no/skoler/horten-vgs/",
    },
];

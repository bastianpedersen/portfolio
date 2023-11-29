import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Halo from "@/components/ui/Halo";

export const metadata: Metadata = {
    title: "Projects | Bastian Pedersen",
    description:
        "Here are some of the projects I've worked on.",
};

const projects = [
    {
        url: "https://play.google.com/store/apps/details?id=com.basse.scootbatt",
        time: "2020 -",
        title: "Scootbatt",
        image: "https://play-lh.googleusercontent.com/rEWEExVM234Unxtf6chcyAOVQoCYcvKOaUT8wZvLo0iYGDUFjlL4h97z20nmzaNHhcA=w240-h480-rw",
        description: "This is my own app. The app allows users to connect to their electric scooter, and get realtime information such as battery/cell voltages, battery temperature and other relevant information."
    },
    {
        url: "https://play.google.com/store/apps/details?id=sh.cfw.utility",
        time: "2020 -",
        title: "ScooterHacking Utility",
        image: "https://play-lh.googleusercontent.com/bhQerPVpaOLoICD_YUmAAFg_WB0Pv_4EjX5p94STSWrdtkZTLt8IePvjAkUG51MGhg=w240-h480-rw",
        description: "The goal of the app is to allow people to create and flash custom firmwares onto their E-scooter, in order to achieve more personalization and control. In 2023 we reached over 500 000 downloads and still counting."
    }
]

export default function Blog() {
    return (
        <div className="max-w-[700px] mx-auto">
            <div className="flex flex-col gap-16 md:gap-24 ">
                <div className="flex flex-col gap-8">
                    <div>
                        <h1 className="animate-in text-3xl font-bold tracking-tight">
                            Projects
                        </h1>
                        <p
                            className="text-secondary animate-in"
                            style={{ "--index": 1 } as React.CSSProperties}
                        >
                            Here are some of the projects I&apos;ve worked on.
                        </p>
                    </div>
                </div>
                <ul
                    className="animate-in flex flex-col animated-list"
                    style={{ "--index": 3 } as React.CSSProperties}
                >
                    {projects.map((project, i) => (
                        <li
                            key={i}
                            className={clsx(
                                "py-6 flex flex-col md:flex-row gap-4 md:gap-6 transition-opacity first:pt-0 last:pb-0"
                            )}
                        >
                            <a
                                href={project.url}
                                className="w-full md:w-2/5 aspect-video bg-tertiary rounded-lg border border-secondary overflow-clip select-none"
                            >
                                <Halo strength={10}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="w-full h-full"
                                    />
                                </Halo>
                            </a>
                            <div className="w-full md:w-3/5 space-y-2">
                                <div>
                                    <a
                                        href={project.url}
                                        className="text-primary font-medium hover:underline"
                                    >
                                        {project.title}
                                    </a>
                                    <time className="text-secondary"> · {project.time}</time>
                                </div>

                                <p className="line-clamp-6 text-tertiary">
                                    {project.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

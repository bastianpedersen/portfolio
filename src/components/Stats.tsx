"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import clsx from "clsx";

import {FaDownload, FaCode } from "react-icons/fa";
import Image from "next/image";

export default function Stats() {
    const { theme } = useTheme();

    return (
        <ul
            className={clsx(
                "space-y-2 animated-list",
                theme === "terminal" ? "font-mono tracking-tight" : ""
            )}
        >
            <li className="transition-opacity flex gap-3 items-center">
                <a className="flex gap-3 items-center" href={"https://play.google.com/store/apps/details?id=com.basse.scootbatt"}>
                    <Image
                        src="https://play-lh.googleusercontent.com/rEWEExVM234Unxtf6chcyAOVQoCYcvKOaUT8wZvLo0iYGDUFjlL4h97z20nmzaNHhcA=w240-h480-rw"
                        alt="ScooterHacking logo"
                        className="rounded-full"
                        width={20}
                        height={20}
                    />
                    <div>
                        <span>Creator of Scootbatt</span>
                    </div>
                </a>
            </li>

            <li className="transition-opacity">
                <a className="flex gap-3 items-center" href={"https://scooterhacking.org"}>
                    <Image src="https://utility.cfw.sh/sh.png" alt="ScooterHacking logo" width={16} height={16}/>
                    <div>
                        <span>Developer at ScooterHacking</span>
                    </div>
                </a>
            </li>


            <li className="transition-opacity">
                <span className="flex gap-3 capitalize items-center">
                    <FaDownload className="text-md"/>
                    <div>
                        <span>500 000+ app downloads</span>
                    </div>
                </span>
            </li>

        </ul>
    );
}

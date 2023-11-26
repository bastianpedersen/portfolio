import Image from 'next/image'
import {ArrowUpRightIcon} from "@heroicons/react/20/solid";
import Link from "../components/ui/Link";
import Avatar from "../../public/avatar.png";
import Stats from "@/components/Stats";

export default function Home() {
  return (
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex animate-in flex-col gap-8">
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
              Bastian T. Pedersen
            </h1>
            <p className="animate-in text-secondary">
              I write code and play chess.
            </p>
          </div>
          <div className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center">
            <Image
                src={Avatar}
                width={85}
                height={85}
                alt="avatar"
                className="rounded-full bg-secondary"
            />
            <Stats />
          </div>
          <p className="max-w-lg animate-in text-primary">
            Hi, I&apos;m Bastian, a fullstack software engineer who loves building cool
            things with code. In addition to coding, I also make YouTube videos,
            where I focus on tech, creative vlogs, and personal development.
          </p>
          <ul className="animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6">
            <li className="transition-opacity">
              <Link href="mailto:bastian.tangedal@gmail.com" className="flex items-center gap-2 no-underline">
                <ArrowUpRightIcon className="h-5 w-5" />
                <span>Email me</span>
              </Link>
            </li>
            <li className="transition-opacity">
              <Link href="/links" className="flex items-center gap-2 no-underline">
                <ArrowUpRightIcon className="h-5 w-5" />
                <span>More ways to connect</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
  );
}

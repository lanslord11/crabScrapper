import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function Logo({
  fontSize = "text-2xl",
  iconSize = 30,
}: {
  fontSize?: string;
  iconSize?: number;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "text-2xl font-extrabold flex items-center gap-2",
        fontSize
      )}
    >
      <div className="rounded-xl bg-gradient-to-r from-white-500 to-white-600 p-1">
      <Image alt="logo" src="/crabLogo.png" width={iconSize} height={iconSize} />
        {/* <SquareDashedMousePointer size={iconSize} className="stroke-white" /> */}
      </div>
      <div>
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Crab
        </span>
        <span className="text-stone-700 dark:text-stone-300">Crawler</span>
      </div>
    </Link>
  );
}

export default Logo;

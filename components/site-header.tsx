import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function SiteHeader() {
  return (
    <header className=" bg-background sticky top-0  z-40 w-full border-b align-middle ">
      <div className="grid grid-flow-col justify-stretch  ml-10
      mt-7 pb-{-6} h-14 sm:justify-between sm:space-x-0  ">

        <MainNav items={siteConfig.mainNav}  />

        {/* <div></div> */}

        <div className="flex flex-1 items-center justify-end space-x-2 align-top " >
          {/* <div></div> */}
          {/* <nav className="flex items-center space-x-1"> */}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
            <Avatar className="rounded shadow-black hover:cursor-pointer h-9">
              <AvatarImage src="https://github.com/regnna.png"
              alt="User"
              className="hover:scale-120 duration-150"

              // target="_blank"
              // rel="noreferrer"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                  
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
        {/* </div> */}
{/* <div></div> */}
<div className="pl-10 -right-58"><ThemeToggle /></div>
</div>
          {/* </nav> */}
      </div>
    </header>
  )
}

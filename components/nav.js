import DarkMode from "./dark-mode"

import { IoLogoTwitter, IoLogoGithub, IoLogoJavascript, IoLogoTwitch } from 'react-icons/io5'

export default function Nav() {
  return (
    <nav className="pl-8 pr-4 pt-2 items-center justify-center flex">
      <div className="w-full -mb-px flex items-center justify-center md:justify-start"></div>
      <div className="flex-no-shrink flex items-center justify-center">
        <div className="flex items-center justify-center">
        <a href="https://github.com/kanbaru" target="_blank" className="pt-2 pr-2 transition duration-300 ease-in-out fill-current outline-none shadow-none"><span className="sr-only">GitHub</span>
          <IoLogoGithub size="1.5em" />
        </a>
        <a href="https://twitter.com/emmaischic" target="_blank" className="pt-2 pl-2 pr-2 transition duration-300 ease-in-out fill-current outline-none shadow-none"><span className="sr-only">Twitter</span>
          <IoLogoTwitter size="1.5em" />
        </a>
        <a href="https://twitch.com/emmaic" target="_blank" className="pt-2 pl-2 pr-3 transition duration-300 ease-in-out fill-current outline-none shadow-none "><span className="sr-only">Twitter</span>
          <IoLogoTwitch size="1.5em" />
        </a>
        </div>
        <div className="pt-2">
        <DarkMode /></div>
      </div>
    </nav>
  )
}

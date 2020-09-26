import DarkMode from "./dark-mode"

export default function Nav() {
  return (
    <nav className="pl-8 pr-4 pt-2 items-center justify-center flex">
      <div className="w-full -mb-px flex items-center justify-center md:justify-start"></div>
      <div className="flex-no-shrink flex">
        <a href="https://github.com/kanbaru" className="pt-2 pr-1 transition duration-300 ease-in-out fill-current outline-none shadow-none"><span className="sr-only">GitHub</span>
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="https://twitter.com/emmaischic" className="pt-2 pl-2 pr-3 border-r-2 border-black dark:border-gray-500 transition duration-300 ease-in-out fill-current outline-none shadow-none "><span className="sr-only">Twitter</span>
        <ion-icon name="logo-twitter"></ion-icon></a>
        <DarkMode />
      </div>
    </nav>
  )
}
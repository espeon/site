import Nav from '../components/nav'
import Footer from '../components/footer'
import Flower from '../components/flower'

export default function Index({ serverinfo }) {
  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-gray-300 w-full flex flex-col h-screen justify-between transition duration-300 ease-in-out dark:transition dark:duration-300 dark:ease-in-out">
        <Nav />
        <div className="px-4 fade-in">
          <div className="lg:max-w-6xl lg:mx-auto">
            <div className="lg:flex lg:flex-wrap mt-32">
              <div className="lg:w-1/2 text-left lg:pt-24">
                <h1
                  className="font-bold text-3xl md:text-5xl leading-tight mb-4"
                >
                  hey, i'm emma!
                  </h1>

                <p className="dark:text-indigo-200 text-indigo-900 mb-8">
                  welcome to my corner of the internet!<br />
              i do random things mainly with JavaScript and Rust.<br />
              my socials are all in the top left, if you want to check them out.
                  </p>
                <h2 className="font-medium text-2xl mb-2">projects</h2>
                <section className="bg-gray-300 dark:bg-gray-900 p-4 mb-2 rounded-lg">
                  <a href="https://github.com/iriie/maki" className="flex">
                    <div className="font-light">iriie/</div>maki
                </a>
                  <p>
                    a simple small Discord bot i originally made as a test, but it's expanded into many other things.
                </p>
                </section>
                <section className="bg-gray-300 dark:bg-gray-900 p-4 mb-2 rounded-lg">
                  <a href="https://github.com/kanbaru/redir" className="flex">
                    <div className="font-light">kanbaru/</div>redir
                </a>
                  <p>
                    a super simple link shortener designed around serverless products, to be deployed on Vercel.
                </p>
                </section>
                <section className="bg-gray-300 dark:bg-gray-900 p-4 mb-2 rounded-lg">
                  <a href="https://github.com/kanbaru/untitled-game" className="flex">
                    <div className="font-light">kanbaru/</div>untitled-game
                </a>
                  <p>
                    a game i'm working on in (some of) my spare time. it's supposed to play similarly to the game Celeste.
                </p>
                </section>
                
              </div>
              <div className="md:w-1/2 relative invisible lg:visible dark:hidden mt-12">
              <Flower />
              </div>
            </div>
          </div>
        </div>
        <Footer url={serverinfo.url} region={serverinfo.region} className="static bottom-0 h-32 min-h-full" />
      </div>

    </>
  )
}

Index.getInitialProps = async (context) => {
  console.log("Region:", process.env.VERCEL_REGION)
  let region = process.env.AWS_REGION
  if (process.env.NOW_REGION) region = process.env.NOW_REGION
  if (process.env.VERCEL_REGION) region = process.env.VERCEL_REGION
  if (region == undefined) region = "dev1"
  return {
    serverinfo: { url: process.env.SITE, region: region }
  }
}
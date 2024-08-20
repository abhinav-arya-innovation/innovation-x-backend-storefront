import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { size } from "lodash"
import { Eagle_Lake } from "next/font/google"






const eagle_Lake= Eagle_Lake({
  subsets:['latin'],
  weight:['400'],
  style:'normal',
  display:"fallback",
  })



   

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle" style={{
      backgroundImage: `url('//ptal.in/cdn/shop/files/Group_1073715221.webp?v=1702448728&amp;width=2400')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
    }}>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6"style={{
      backgroundImage: `url('../../../../../public/Background_Img.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
    }}>
        <span>
          <Heading
            level="h1"
            className={eagle_Lake.className}
          >
            Tadkaa Karigari Ka 
          </Heading>
          <Heading
            level="h3"
            className={eagle_Lake.className}
          >
          Powered by tadkakarigari
          </Heading>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary">
            View on GitHub
            <Github />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero

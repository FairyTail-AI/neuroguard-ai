import {Container} from "@/components/container";
import {Screenshot} from "@/components/screenshot";
import {Particles} from "@/components/magicui/particles";
import {Gradient} from "@/components/gradient";

export function ScreenshotSection() {
  return (
    <>
      <img
        alt=""
        src="/screenshots/brain-xray.png"
        className="sm:hidden w-full rounded-3xl shadow-2xl"
      />

      <div className="hidden sm:block relative overflow-hidden rounded-4xl py-32">
        <Particles
          className="absolute inset-0 z-5 animate-fade-in"
          quantity={100}
        />
        <Gradient isDark className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset">
          <div className='invisible md:visible absolute bottom-3 right-2 z-20 bg-black w-40 h-18'/>
        </Gradient>

        <Container className="pb-24 relative z-20">
          <div className="relative">
            <img
              alt=""
              src="/screenshots/hippocampus-vedicemcux.png"
              className="hidden sm:flex absolute z-10 -left-[60px] md:-left-[30px] top-[150px] w-[308px] scale-[0.6] md:scale-[1.248]"
            />
            <img
              alt=""
              src="/screenshots/cerebral-cortex.png"
              className="hidden sm:flex absolute z-10 -right-[80px] md:left-1/2 md:-translate-x-1/2 md:right-auto -top-[50px] w-[197px] scale-[0.9] md:scale-[1.248]"
            />
            <img
              alt=""
              src="/screenshots/venticules-medial-temporal-lbe.png"
              className="hidden sm:flex absolute z-10 -right-[50px] top-[150px] w-[405px] scale-[1.248]"
            />
            <Screenshot
              width={600}
              height={400}
              src="/screenshots/brain-xray.png"
              className="mt-16 h-[36rem] sm:h-auto sm:w-[58rem] mx-auto"
            />
          </div>
        </Container>
      </div>
    </>
  )
}

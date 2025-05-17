import {Container} from "@/components/container";
import {Heading} from "@/components/text";
import {Screenshot} from "@/components/screenshot";

export function ScreenshotSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          {/*<span className="text-teal-500">*/}
          {/*  NeuroGuard:*/}
          {/*</span>*/}
          {/*{" "}*/}
          A New Era in Brain Diagnostics
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/brain-xray.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

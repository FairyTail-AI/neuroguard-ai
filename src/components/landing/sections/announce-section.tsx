import {Heading, Lead} from "@/components/text";
import {Container} from "@/components/container";

export function AnnounceSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl mx-auto text-center">
          <span className="text-teal-500">
            NeuroGuard
          </span>
          <br />
          A New Era in Brain Diagnostics
        </Heading>
        <Lead className="mt-6 max-w-3xl mx-auto text-center">
          At the intersection of neuroscience and technology, NeuroGuard empowers early detection of neurodegenerative diseases through intelligent imaging and data-driven insight—redefining how we see, measure, and protect the human brain.
        </Lead>
      </Container>
    </div>
  )
}
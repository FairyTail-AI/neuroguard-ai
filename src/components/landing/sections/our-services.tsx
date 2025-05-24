import {Container} from "@/components/container";
import {Heading, Lead, Subheading} from "@/components/text";
import {BentoCard} from "@/components/bento-card";

export function OurServices() {
  return (
    <Container className="mx-2 mt-2 rounded-4xl pt-32">
      <Subheading>
        Empowering early detection and personalized neurological care with cutting-edge AI solutions.
      </Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Our Services
      </Heading>
      <Lead className="mt-6 max-w-3xl text-gray-200/90">
        NeuroGuard analyzes MRI scans and complex brainwave data (EEG) to detect early signs of cognitive decline with 98% prediction accuracy and unmatched speed — just 2 minutes per analysis.
      </Lead>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Track"
          title="Brain Volumetry"
          description="Our system provides precise measurements of brain volume changes, accessible from any device with cloud storage. Monitor neurodegenerative diseases with accuracy that traditional methods can't match."
          // graphic={
          //   <div className="h-80 bg-[url(/screenshots/brain.png)] bg-[left_0_top_-112px] bg-no-repeat bg-cover" />
          // }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Accuracy"
          title="Brain Segmentation"
          description="Our automated system identifies and labels brain regions in MRI scans with unmatched precision. Detect structural abnormalities before they become clinically apparent and gain insights others can't see."
          // graphic={
          //   <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          // }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Early Detection"
          description="Our AI algorithms identify neurodegenerative disease markers up to 8 years before clinical symptoms appear. Provide intervention when it matters most, transforming patient outcomes with predictive intelligence."
          // graphic={
          //   <div className="flex size-full pt-10 pl-10">
          //     <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
          //   </div>
          // }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Compatabilty"
          title="Radiology Integration"
          description="Seamlessly combine MRI, CT, and PET scan data in a single interface designed for clinical efficiency. Eliminate workflow bottlenecks and access comprehensive analysis without switching between systems."
          // graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="AI Analysis"
          description="Our deep learning algorithms process thousands of data points conventional radiologists might miss. Identify subtle patterns with clinical significance and receive alerts about critical findings automatically."
          // graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

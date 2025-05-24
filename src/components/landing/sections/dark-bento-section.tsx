import {Container} from "@/components/container";
import {Heading, Lead} from "@/components/text";
import {BentoCard} from "@/components/bento-card";
import {LogoTimeline} from "@/components/logo-timeline";
import {LinkedAvatars} from "@/components/linked-avatars";

export function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Our Benefits
        </Heading>
        <Lead className="mt-6 max-w-3xl text-gray-200/90">
          NeuroGuard analyzes MRI scans and complex brainwave data (EEG) to detect early signs of cognitive decline with 98% prediction accuracy and unmatched speed — just 2 minutes per analysis.
        </Lead>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            eyebrow="Accuracy"
            title="98% Clinically-Validated Accuracy"
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow="Integration"
            title="Easy Integration into clinical workflows"
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            eyebrow="Customizable"
            title="Custom Reports for individual clinical needs"
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            eyebrow="Detailed brain mapping"
            title="High-resolution structure analysis"
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
          <BentoCard
            eyebrow="Detailed brain mapping"
            title="2 minutes to results available"
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow="MRI & EEG"
            title="MRI and EEG multi-modal integration"
            fade={['top']}
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            eyebrow="Accessibility"
            title="Cloud-based and scalable solution"
            fade={['top']}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

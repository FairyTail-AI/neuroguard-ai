import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import {Particles} from "@/components/magicui/particles";
import {HyperText} from "@/components/magicui/hyper-text";
import Spline from '@splinetool/react-spline/next';
import {OurServices} from "@/components/landing/sections/our-services";
import {cn} from "@/lib/utils";
import {Partners} from "@/components/landing/sections/partners";
import {ScreenshotSection} from "@/components/landing/sections/screenshot-section";
import {ShimmerButton} from "@/components/magicui/shimmer-button";

export const metadata: Metadata = {
  description:
    'NeuroGuard AI helps you to detect brain decease before symptoms appear.',
}

function Hero() {
  return (
    <div className="relative">
      <div className='invisible md:visible absolute inset-y-0 right-0 z-10 animate-fade-in'>
        <Spline
          className="w-[50%] md:w-full"
          scene="https://prod.spline.design/AX9deDCXrVqvrJng/scene.splinecode"
        />
      </div>
      <Particles
        className="absolute inset-0 z-5 animate-fade-in"
        quantity={100}
      />
      <Gradient isDark className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset">
        <div className='invisible md:visible absolute bottom-3 right-2 z-20 bg-black w-40 h-18'/>
      </Gradient>
      <Container className="relative z-20">

        <Navbar
          color='white'
          banner={
            <Link
              href="/blog/neuroguard-ai-joins-nvidia-inception-program"
              className="flex items-center gap-1 rounded-full bg-teal-700/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-teal-700/30"
            >
              NeuroGuard AI Joins NVIDIA Inception Program
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          {/*<h1*/}
          {/*  className="text-balance bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center font-heading text-[40px] font-bold leading-tight tracking-[-0.02em] text-transparent drop-shadow-sm duration-300 ease-linear [word-spacing:theme(spacing.1)] dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900 md:text-7xl md:leading-[5rem]">Quick*/}
          {/*  Starter Template for your Next project*/}
          {/*</h1>*/}
          <h1
            className={cn(
              "font-display text-4xl/[0.9] font-medium tracking-tight text-balance text-gray-100 sm:text-8xl/[0.8] md:text-9xl/[0.8]",
              "text-balance"
              // "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text"
            )}>
            AI-powered
            {" "}
            {/*<HyperText as='span'*/}
            {/*           className="font-display text-6xl/[0.9] font-medium tracking-tight text-teal-400 sm:text-8xl/[0.8] md:text-9xl/[0.8]">*/}
            {/*  detection*/}
            {/*</HyperText>*/}
            <span className="text-teal-400">
              detection
            </span>
            {" "}
            {/*<span className="text-6xl/[0.9]">*/}
            {/*  of early neurodegeneration.*/}
            {/*</span>*/}
            of early neurodegeneration.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-200/75 sm:text-2xl/8">
            Transforming neurology with clinically-validated, cloud-based AI software that detects brain atrophy
            {' '}
            <span className="text-teal-500">
              before symptoms appear.
            </span>
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <ShimmerButton href="#contacts">
              Request Demo
            </ShimmerButton>
          </div>
        </div>

      </Container>
    </div>
  )
}



export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Partners />

      <main>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <ScreenshotSection />
          <OurServices />
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}

'use client'

import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure, { type RectReadOnly } from 'react-use-measure'
import { Container } from './container'
import { Link } from './link'
import {Heading, Lead, Subheading} from './text'
import {cn} from "@/lib/utils";

const MRI_BASED_REPORTS = [
  {
    img: '',
    name: '',
    title: 'Cognitive Health Scan',
    quote:
      'Detect early signs of dementia and cognitive decline with region-specific analysis.',
  },
  {
    img: '',
    name: '',
    title: 'Brain Atrophy Monitor',
    quote:
      'Track structural brain changes over time to manage neurodegeneration.',
  },
  {
    img: '',
    name: '',
    title: 'Hippocampus Insight',
    quote:
      'Analyze hippocampal asymmetry and size changes, critical for memory and epilepsy diagnosis.',
  },
  {
    img: '',
    name: '',
    title: 'Traumatic Brain Injury Scan',
    quote:
      'Quantify structural damage post-trauma for faster recovery decisions.',
  },
  {
    img: '',
    name: '',
    title: 'Pediatric Brain Report',
    quote: 'Visualize developmental patterns in children, matched against age norms.',
  },
  {
    img: '',
    name: '',
    title: 'White Matter Analyzer',
    quote:
      'Measure white matter lesions and hyperintensities with automated scoring.',
  },
  {
    img: '',
    name: '',
    title: 'Custom Region Report',
    quote:
      'Select specific brain structures for personalized analysis.',
  },
  {
    img: '',
    name: '',
    title: 'Brain Morphometry Map',
    quote:
      'Comprehensive volumetric analysis across the entire brain.',
  },
]

const EEG_BASED_REPORTS = [
  {
    img: '',
    name: '',
    title: 'Seizure Detection',
    quote:
      'Real-time identification of seizure activity from EEG data.',
  },
  {
    img: '',
    name: '',
    title: 'Brain Hemorrhage Alert',
    quote:
      'Spot abnormal signals linked to hemorrhage risk — fast and non-invasive.',
  },
  {
    img: '',
    name: '',
    title: 'Inflammation Monitor',
    quote:
      'Detect EEG patterns associated with encephalitis and inflammation.',
  },
  {
    img: '',
    name: '',
    title: 'Cognitive EEG Insight',
    quote:
      'Monitor cognitive function through brainwave patterns.',
  },
  {
    img: '',
    name: '',
    title: 'Brain Health Tracker',
    quote:
      'Continuous EEG-based monitoring for personalized neurology care.',
  },
]

function TestimonialCard({
  name,
  title,
  img,
  children,
  bounds,
  scrollX,
  ...props
}: {
  img: string
  name: string
  title: string
  children: React.ReactNode
  bounds: RectReadOnly
  scrollX: MotionValue<number>
} & HTMLMotionProps<'div'>) {
  let ref = useRef<HTMLDivElement | null>(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className={cn(
        "relative flex aspect-9/12 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col overflow-hidden rounded-3xl sm:aspect-auto sm:w-96",
        "shadow-xs ring-1 ring-teal/5 shadow-xs"
      )}
    >
      {/*<img*/}
      {/*  alt=""*/}
      {/*  src={img}*/}
      {/*  className="absolute inset-x-0 top-0 aspect-square w-full object-cover"*/}
      {/*/>*/}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 rounded-3xl",
          // "bg-gray-700",
          "bg-gradient-to-tl from-black via-gray-900/90 to-black",
          // "bg-linear-to-t from-black from-[calc(7/16*100%)]",
          "ring-1 ring-gray-950/10 ring-inset sm:from-25%",
        )}
      />
      <figure className="relative p-10">
        <figcaption className="mb-6 border-b border-white/20 pb-6">
          {/*<p className="text-sm/6 font-medium text-white">{name}</p>*/}
          <p className="text-xl/6 font-medium">
            <span
              className="bg-linear-to-r from-teal-400 from-28% via-sky-400 via-70% to-teal-400 bg-clip-text text-transparent">
              {title}
            </span>
          </p>
        </figcaption>

        <blockquote>
          <p className="relative text-xl/7 text-white">
            {/*<span aria-hidden="true" className="absolute -translate-x-full">*/}
            {/*  “*/}
            {/*</span>*/}
            {children}
            {/*<span aria-hidden="true" className="absolute">*/}
            {/*  ”*/}
            {/*</span>*/}
          </p>
        </blockquote>

      </figure>
    </motion.div>
  )
}

function CallToAction() {
  return (
    <div>
      <p className="mt-4 max-w-sm text-sm/6 text-gray-600">
        NeuroGuard’s clinically-focused reports that provide accurate and detailed volumetric data for the clinical
        assessment of brain disorders:
      </p>
      <div className="mt-2">
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm/6 font-medium text-teal-600"
        >
          Get started
          <ArrowLongRightIcon className="size-5" />
        </Link>
      </div>
    </div>
  )
}

export function Testimonials() {
  let scrollRef = useRef<HTMLDivElement | null>(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth))
  })

  function scrollTo(index: number) {
    let gap = 32
    let width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth
    scrollRef.current!.scrollTo({ left: (width + gap) * index })
  }

  return (
    <div className="overflow-hidden py-32">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Subheading>All you need</Subheading>
          <Heading as="h3" className="mt-2">
            NeuroGuard reports.
          </Heading>

          <Lead className="mt-6 max-w-3xl">
            NeuroGuard’s clinically-focused reports that provide accurate and detailed volumetric data for the clinical
            assessment of brain disorders:
          </Lead>
          {/*<CallToAction />*/}
        </div>
      </Container>

      <Container>
        <Subheading as="h3" className="mt-24 sm:text-xl/5 text-gray-700">
          MRI-Based Reports
        </Subheading>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 px-(--scroll-padding)',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]',
        ])}
      >
        {MRI_BASED_REPORTS.map(({ img, name, title, quote }, testimonialIndex) => (
          <TestimonialCard
            key={testimonialIndex}
            name={name}
            title={title}
            img={img}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(testimonialIndex)}
          >
            {quote}
          </TestimonialCard>
        ))}
        <div className="w-2xl shrink-0 sm:w-[54rem]" />
      </div>
      <Container className="mt-16">
        <div className="flex justify-between">

          <div className="hidden sm:flex sm:gap-2">
            {MRI_BASED_REPORTS.map(({ name }, testimonialIndex) => (
              <Headless.Button
                key={testimonialIndex}
                onClick={() => scrollTo(testimonialIndex)}
                data-active={
                  activeIndex === testimonialIndex ? true : undefined
                }
                aria-label={`Scroll to testimonial from ${name}`}
                className={clsx(
                  'size-2.5 rounded-full border border-transparent bg-gray-300 transition',
                  'data-active:bg-gray-400 data-hover:bg-gray-400',
                  'forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4',
                )}
              />
            ))}
          </div>
        </div>
      </Container>

      <Container>
        <Subheading as="h3" className="mt-24 sm:text-xl/5 text-gray-700">
          EEG-Based Reports
        </Subheading>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 px-(--scroll-padding)',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]',
        ])}
      >
        {EEG_BASED_REPORTS.map(({ img, name, title, quote }, testimonialIndex) => (
          <TestimonialCard
            key={testimonialIndex}
            name={name}
            title={title}
            img={img}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(testimonialIndex)}
          >
            {quote}
          </TestimonialCard>
        ))}
        <div className="w-2xl shrink-0 sm:w-[54rem]" />
      </div>
      <Container className="mt-16">
        <div className="flex justify-between">

          <div className="hidden sm:flex sm:gap-2">
            {EEG_BASED_REPORTS.map(({ name }, testimonialIndex) => (
              <Headless.Button
                key={testimonialIndex}
                onClick={() => scrollTo(testimonialIndex)}
                data-active={
                  activeIndex === testimonialIndex ? true : undefined
                }
                aria-label={`Scroll to testimonial from ${name}`}
                className={clsx(
                  'size-2.5 rounded-full border border-transparent bg-gray-300 transition',
                  'data-active:bg-gray-400 data-hover:bg-gray-400',
                  'forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

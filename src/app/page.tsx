"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumSizeLargeTitles"
        background="none"
        cardStyle="glass-depth"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="West London Plumbers"
      button={{
        text: "Call Now",
        href: "tel:+447913620199",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="West London Plumbers"
      description="Professional, reliable plumbing services across West London. Expert diagnostics, transparent pricing, and 24/7 availability for all your plumbing needs."
      buttons={[
        {
          text: "Book Quote",
          href: "#contact",
        },
        {
          text: "Call Now",
          href: "tel:+447913620199",
        },
      ]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/elegant-bathtub-with-bath-elements_23-2148147452.jpg"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Trusted by West London"
      tag="Our Expertise"
      metrics={[
        {
          id: "1",
          value: "15+",
          description: "Years Experience",
        },
        {
          id: "2",
          value: "61+",
          description: "5-Star Reviews",
        },
        {
          id: "3",
          value: "24/7",
          description: "Emergency Support",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "s1",
          title: "Leak Repair",
          author: "Emergency",
          description: "Rapid response for all types of leaks and burst pipes.",
          tags: [
            "Urgent",
            "Reliable",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/prosthetist-man-making-prosthetic-leg-while-working-laboratory_627829-7187.jpg",
        },
        {
          id: "s2",
          title: "Boiler & Heating",
          author: "Maintenance",
          description: "Professional maintenance and prompt installation services.",
          tags: [
            "Heating",
            "Certified",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-skillful-technician-commissioned-outside-hvac-system-routine-maintenance-looking-refrigerant-issues-meticulous-mechanic-doing-air-conditioner-inspection-writing-data-tablet_482257-66265.jpg",
        },
        {
          id: "s3",
          title: "Drain Clearing",
          author: "Solution",
          description: "Expert drain cleaning and blockage removal using modern equipment.",
          tags: [
            "Drainage",
            "Clean",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/girl-s-hand-filling-cup-with-water_23-2147824128.jpg",
        },
      ]}
      title="Comprehensive Plumbing Services"
      description="From emergency repairs to full bathroom installations, our certified team handles every job with precision."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Gas Safe",
        "Chartered Institute of Plumbing",
        "WaterSafe",
        "TrustMark",
        "City & Guilds",
        "Checkatrade",
        "Which? Trusted Trader",
      ]}
      title="Industry Partners & Affiliations"
      description="Highly accredited and verified experts."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Integrity!",
          quote: "Patrick is an honest tradesperson with integrity. Will be my plumber for life.",
          name: "Yeen Chan",
          role: "Local Guide",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg",
        },
        {
          id: "2",
          title: "Fixed heating issue",
          quote: "Richard was quick and tidy in fixing the issue. Would recommended!",
          name: "Emma",
          role: "Client",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-her-kitchen_329181-20396.jpg",
        },
        {
          id: "3",
          title: "Professionalism",
          quote: "Diagnosed the problem immediately. He fixed everything in no time.",
          name: "James Law",
          role: "Client",
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-doctor-shaking-hands-with-her-female-patient-while-meeting-clinic-focus-is-happy-woman_637285-1785.jpg",
        },
        {
          id: "4",
          title: "Friendly and Fast",
          quote: "Fantastic service and very reasonable rates.",
          name: "Sarah Miller",
          role: "Client",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-thumbs-up-holding-laptop_23-2148308515.jpg",
        },
        {
          id: "5",
          title: "Highly Recommend",
          quote: "Great communication and professional results. Thank you!",
          name: "David W.",
          role: "Client",
          imageSrc: "http://img.b2bpic.net/free-photo/pleased-successful-female-administrator-office_273609-4124.jpg",
        },
      ]}
      title="Customer Reviews"
      description="See why residents in West London trust us with their plumbing."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you offer emergency services?",
          content: "Yes, we are available 24/7 for emergency plumbing needs in West London.",
        },
        {
          id: "f2",
          title: "Are your plumbers qualified?",
          content: "All our plumbers are fully certified and insured.",
        },
        {
          id: "f3",
          title: "How quickly can you respond?",
          content: "We aim to respond to emergencies within 1-2 hours.",
        },
      ]}
      title="Common Questions"
      description="Answers to the most frequent plumbing inquiries."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Get a Free Quote Today"
      description="Ready to fix your plumbing issue? Call us directly or fill out the form for a fast, free estimate."
      buttons={[
        {
          text: "Call Now",
          href: "tel:+447913620199",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="West London Plumbers"
      copyrightText="© 2025 West London Plumbers | All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

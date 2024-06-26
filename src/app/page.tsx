import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
export default function Home() {
  return (
    <Container>
      <Hero />
      <About />

      <Benefits data={benefitOne} sectionId="whyelixir" />
      <Benefits imgPos="right" data={benefitTwo} />

      <Services />

      {/* <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" /> */}

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials /> */}

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Get All the Answers Here
      </SectionTitle>
      <Faq />
      <Contact />
      {/* <Cta /> */}
    </Container>
  );
}

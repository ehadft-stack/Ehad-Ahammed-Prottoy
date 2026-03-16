import { PageTransition } from "@/components/ui/PageTransition";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We begin by understanding your brand, goals, target audience, and core message. This foundational phase ensures our creative direction aligns perfectly with your business objectives."
  },
  {
    num: "02",
    title: "Concept Development",
    desc: "Our creative team brainstorms and develops unique concepts. We present mood boards, storyboards, and scripts to visualize the narrative before a single frame is shot."
  },
  {
    num: "03",
    title: "Pre-Production",
    desc: "The logistics phase. We handle casting, location scouting, set design, scheduling, and assembling the perfect crew to bring the vision to life efficiently."
  },
  {
    num: "04",
    title: "Production",
    desc: "Lights, camera, action. Our experienced directors and cinematographers execute the plan using cinema-grade equipment to capture stunning, high-quality footage."
  },
  {
    num: "05",
    title: "Post-Production",
    desc: "Where the magic happens. Editing, color grading, sound design, and visual effects are meticulously applied to craft a cohesive and emotionally resonant final product."
  },
  {
    num: "06",
    title: "Delivery & Activation",
    desc: "We deliver the final assets in all required formats. We can also consult on distribution strategies to ensure your film reaches and impacts the right audience."
  }
];

export function Process() {
  return (
    <PageTransition>
      <section className="pt-40 pb-20 px-6 md:px-12 container mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">The Process</h1>
          <p className="text-xl text-text-secondary font-light">
            A meticulous, collaborative approach to cinematic storytelling. From blank page to final render.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0">
            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10 -translate-x-1/2" />
            
            <div className="space-y-20">
              {steps.map((step, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-21px] md:left-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center md:-translate-x-1/2 z-10">
                    <span className="text-xs font-bold text-primary">{step.num}</span>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{step.desc}</p>
                  </div>
                  
                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface text-center px-6">
        <h2 className="text-4xl font-serif mb-6">Ready to start the process?</h2>
        <p className="text-text-secondary mb-10 max-w-xl mx-auto">Let's discuss your vision and how we can bring it to life.</p>
        <Link to="/book">
          <Button size="lg">Book a Discovery Call</Button>
        </Link>
      </section>
    </PageTransition>
  );
}

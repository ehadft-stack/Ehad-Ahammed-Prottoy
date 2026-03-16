import { PageTransition } from "@/components/ui/PageTransition";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <PageTransition>
      <section className="pt-40 pb-20 px-6 md:px-12 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Get in Touch</h1>
            <p className="text-xl text-text-secondary font-light mb-12">
              Have a general inquiry or want to say hello? We'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Email</h4>
                <a href="mailto:hello@filmicprottoy.com" className="text-lg hover:text-primary transition-colors">hello@filmicprottoy.com</a>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Phone</h4>
                <a href="tel:+15551234567" className="text-lg hover:text-primary transition-colors">+1 (555) 123-4567</a>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Studio</h4>
                <p className="text-lg text-text-secondary">
                  123 Cinematic Blvd,<br />
                  Creative District, NY 10001
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface p-8 md:p-12 border border-white/5">
            <h3 className="text-2xl font-serif mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Name</label>
                  <input type="text" className="w-full bg-background border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Email</label>
                  <input type="email" className="w-full bg-background border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Subject</label>
                <input type="text" className="w-full bg-background border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-background border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"></textarea>
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

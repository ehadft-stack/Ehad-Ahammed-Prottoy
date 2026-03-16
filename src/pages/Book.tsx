import { PageTransition } from "@/components/ui/PageTransition";
import { Button } from "@/components/ui/Button";

export function Book() {
  return (
    <PageTransition>
      <section className="pt-40 pb-20 px-6 md:px-12 container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Start Your Project</h1>
          <p className="text-xl text-text-secondary font-light">
            Tell us about your vision. Fill out the brief below, and our creative team will get back to you within 24 hours to schedule a discovery call.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-surface p-8 md:p-16 border border-white/5">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            
            {/* Section 1 */}
            <div>
              <h3 className="text-2xl font-serif mb-6 border-b border-white/10 pb-4">1. Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Full Name *</label>
                  <input type="text" required className="w-full bg-background border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Email Address *</label>
                  <input type="email" required className="w-full bg-background border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Company / Brand</label>
                  <input type="text" className="w-full bg-background border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-background border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-2xl font-serif mb-6 border-b border-white/10 pb-4">2. Project Details</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-4">Project Type *</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Commercial", "Brand Film", "Social Media Ads", "Documentary", "Product Video", "Event Coverage", "Other"].map((type) => (
                      <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                        <input type="radio" name="projectType" className="form-radio text-primary bg-background border-white/20 focus:ring-primary focus:ring-offset-background" />
                        <span className="text-sm text-text-secondary group-hover:text-white transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Project Brief *</label>
                  <p className="text-xs text-white/30 mb-2">Describe your goals, target audience, and the core message you want to convey.</p>
                  <textarea required rows={6} className="w-full bg-background border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"></textarea>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-2xl font-serif mb-6 border-b border-white/10 pb-4">3. Budget & Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-4">Estimated Budget *</label>
                  <select required className="w-full bg-background border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none text-text-secondary">
                    <option value="" disabled selected>Select a range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 mb-4">Target Delivery Date</label>
                  <input type="date" className="w-full bg-background border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors text-text-secondary" />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button type="submit" size="lg" className="w-full md:w-auto">Submit Project Brief</Button>
              <p className="text-xs text-white/30 mt-4 text-center md:text-left">By submitting this form, you agree to our privacy policy.</p>
            </div>
          </form>
        </div>
      </section>
    </PageTransition>
  );
}

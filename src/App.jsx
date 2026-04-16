import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ArrowRight, CheckCircle2, 
  FileSpreadsheet, Landmark, Users, 
  Building2, PieChart, Calculator, 
  Briefcase, Plus, Minus, Linkedin, Mail, CheckCircle
} from 'lucide-react';

const BRAND_COPPER = '#c27a41';
const BRAND_COPPER_HOVER = '#a66533';

// ============================================================
// FORMSPREE: Live form submissions → sam@coyotesp.com
// ============================================================
const FORMSPREE_FORM_ID = "xyklkape";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookCall = () => {
    setFormStatus('idle');
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-[#c27a41] selection:text-white">
      {/* NAV BAR */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-800/50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <span className="text-white text-2xl font-bold tracking-tight">
                BrickLee
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollTo('services')} className="text-sm font-medium hover:text-white transition-colors">Services</button>
              <button onClick={() => scrollTo('pricing')} className="text-sm font-medium hover:text-white transition-colors">Pricing</button>
              <button onClick={() => scrollTo('about')} className="text-sm font-medium hover:text-white transition-colors">Why Us</button>
              <button onClick={() => scrollTo('faq')} className="text-sm font-medium hover:text-white transition-colors">FAQ</button>
              <button onClick={handleBookCall} className="bg-[#c27a41] hover:bg-[#a66533] text-white px-5 py-2.5 rounded-sm font-medium text-sm transition-all shadow-[0_0_15px_rgba(194,122,65,0.2)]">
                Book a Call
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#141414] border-b border-zinc-800 px-4 pt-2 pb-6 space-y-4 shadow-xl">
            <button onClick={() => scrollTo('services')} className="block w-full text-left py-2 text-base font-medium hover:text-white">Services</button>
            <button onClick={() => scrollTo('pricing')} className="block w-full text-left py-2 text-base font-medium hover:text-white">Pricing</button>
            <button onClick={() => scrollTo('about')} className="block w-full text-left py-2 text-base font-medium hover:text-white">Why Us</button>
            <button onClick={() => scrollTo('faq')} className="block w-full text-left py-2 text-base font-medium hover:text-white">FAQ</button>
            <button onClick={handleBookCall} className="w-full mt-4 bg-[#c27a41] text-white px-5 py-3 rounded-sm font-medium text-center">
              Book a Call
            </button>
          </div>
        )}
      </nav>

      {/* 1. HERO */}
      <section className="pt-40 md:pt-48 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <span style={{ color: BRAND_COPPER }} className="uppercase tracking-[0.2em] text-sm font-bold mb-8 block">
          Real Estate Bookkeeping
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
          Your portfolio grew.<br/>
          <span className="text-zinc-600 italic font-light">Your books didn't.</span>
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed">
          Institutional-grade bookkeeping for real estate investors and property managers. Built by a CPA who's managed institutional portfolios and owns rentals personally.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <button onClick={handleBookCall} className="group flex items-center gap-2 bg-[#c27a41] hover:bg-[#a66533] text-white px-8 py-4 rounded-sm font-semibold text-lg transition-all hover:scale-[1.02] active:scale-[0.98]">
            Book Your Free Portfolio Review
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          {/* Credential Strip */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 text-sm font-medium text-zinc-500">
            <div className="flex items-center gap-2">
              <span style={{ color: BRAND_COPPER }}>●</span> Licensed CPA
            </div>
            <div className="hidden lg:block text-zinc-800">•</div>
            <div className="flex items-center gap-2">
              <span style={{ color: BRAND_COPPER }}>●</span> Ex-PwC
            </div>
            <div className="hidden lg:block text-zinc-800">•</div>
            <div className="flex items-center gap-2">
              <span style={{ color: BRAND_COPPER }}>●</span> $65M+ Under Management
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE GAP */}
      <section className="py-24 md:py-32 bg-[#141414] px-4 sm:px-6 lg:px-8 border-y border-zinc-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <span style={{ color: BRAND_COPPER }} className="uppercase tracking-[0.2em] text-sm font-bold mb-6 block">
            Value We Provide
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
            Institutional quality.<br className="hidden md:block" /> Without institutional cost.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            Your portfolio has the same accounting complexity as operators ten times your size. You just don't have their back office or budget. <strong className="text-white font-medium">We are that back office.</strong>
          </p>
        </div>
      </section>

      {/* 3. THE PROBLEM */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeInSection>
          <div className="mb-16 md:mb-20 text-center">
            <span style={{ color: BRAND_COPPER }} className="uppercase tracking-[0.2em] text-sm font-bold mb-6 block">
              Why Most Bookkeeping Fails Investors
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Three ways your books are costing you money.
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Card 1 */}
          <FadeInSection delay={100} className="h-full">
            <div className="bg-[#141414] border border-zinc-800/80 p-8 lg:p-10 rounded-sm hover:border-[#c27a41]/50 transition-colors h-full">
              <div className="w-14 h-14 bg-[#c27a41]/10 rounded-sm flex items-center justify-center mb-8">
                <FileSpreadsheet style={{ color: BRAND_COPPER }} size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">The Spreadsheet Trap</h3>
              <p className="text-zinc-400 leading-relaxed">
                You started with a spreadsheet. It worked — until you added a second property, a second entity, and a property manager who sends statements in a format no one can reconcile. Tax season becomes a scramble to reconstruct twelve months of transactions from bank feeds and memory.
              </p>
            </div>
          </FadeInSection>

          {/* Card 2 */}
          <FadeInSection delay={200} className="h-full">
            <div className="bg-[#141414] border border-zinc-800/80 p-8 lg:p-10 rounded-sm hover:border-[#c27a41]/50 transition-colors h-full">
              <div className="w-14 h-14 bg-[#c27a41]/10 rounded-sm flex items-center justify-center mb-8">
                <Landmark style={{ color: BRAND_COPPER }} size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">The "Tax-First" CPA</h3>
              <p className="text-zinc-400 leading-relaxed">
                Your CPA likely does your day-to-day bookkeeping as a courtesy, but they don't actually want to do it. We do. Because it's our sole focus, you get institutional-grade accuracy and clear cash flow visibility all year long—not just at tax time.
              </p>
            </div>
          </FadeInSection>

          {/* Card 3 */}
          <FadeInSection delay={300} className="h-full">
            <div className="bg-[#141414] border border-zinc-800/80 p-8 lg:p-10 rounded-sm hover:border-[#c27a41]/50 transition-colors h-full">
              <div className="w-14 h-14 bg-[#c27a41]/10 rounded-sm flex items-center justify-center mb-8">
                <Users style={{ color: BRAND_COPPER }} size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">The Generalist Bookkeeper</h3>
              <p className="text-zinc-400 leading-relaxed">
                They're great with service businesses. They've never seen a trust account, an owner distribution waterfall, or an AppFolio owner statement. You're not paying them to do your books — you're paying them to learn real estate on your dime.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 4. WHY US / BUILT BY AN OPERATOR */}
      <section id="about" className="py-24 md:py-32 bg-[#141414] border-y border-zinc-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <span style={{ color: BRAND_COPPER }} className="uppercase tracking-[0.2em] text-sm font-bold mb-6 block">
                Why Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Built by operators,<br/>for operators.
              </h2>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <FadeInSection delay={100} className="h-full">
              <div className="bg-[#0a0a0a] border border-zinc-800/80 p-8 lg:p-12 rounded-sm hover:border-[#c27a41]/50 transition-all text-center md:text-left h-full">
                <div className="text-5xl md:text-6xl font-bold text-[#c27a41] mb-6">$2B+</div>
                <h3 className="text-white font-bold text-2xl mb-4">Multifamily Acquisitions Closed</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">Extensive transaction experience ensures we understand the complexities of scaling and structuring deals.</p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={200} className="h-full">
              <div className="bg-[#0a0a0a] border border-zinc-800/80 p-8 lg:p-12 rounded-sm hover:border-[#c27a41]/50 transition-all text-center md:text-left h-full">
                <div className="text-5xl md:text-6xl font-bold text-[#c27a41] mb-6">$65M+</div>
                <h3 className="text-white font-bold text-2xl mb-4">Active Portfolio Overseen</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">We actively manage the accounting and operations for a massive real estate portfolio. We practice what we preach.</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={300} className="h-full">
              <div className="bg-[#0a0a0a] border border-zinc-800/80 p-8 lg:p-12 rounded-sm hover:border-[#c27a41]/50 transition-all text-center md:text-left h-full">
                <div className="text-5xl md:text-6xl font-bold text-[#c27a41] mb-6">Big 4</div>
                <h3 className="text-white font-bold text-2xl mb-4">Accounting Rigor</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">PwC-trained precision brought directly to the sub-institutional market. No cutting corners.</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={400} className="h-full">
              <div className="bg-[#0a0a0a] border border-zinc-800/80 p-8 lg:p-12 rounded-sm hover:border-[#c27a41]/50 transition-all text-center md:text-left h-full">
                <div className="text-5xl md:text-6xl font-bold text-[#c27a41] mb-6">100%</div>
                <h3 className="text-white font-bold text-2xl mb-4">Operator Owned</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">We own rentals personally. We've felt the pain of bad bookkeeping, and we built the exact solution you need.</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 4.5 MEET THE FOUNDER */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <FadeInSection>
              <span style={{ color: BRAND_COPPER }} className="uppercase tracking-[0.2em] text-sm font-bold mb-6 block">
                Meet the Founder
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                I'm Sam Applegate. I built BrickLee for the operator who's ready for institutional books.
              </h2>
              <div className="text-lg text-zinc-400 leading-relaxed mb-10 space-y-6">
                <p>
                  I'm a CPA who spent five years at PwC and three years at Hamilton Zanze, a San Francisco-based multifamily owner operator, where I worked on over $2B in acquisitions. Today I serve as Director of Real Estate for a family office managing $65M+ in assets, and I personally own and operate rental properties. I spent a decade learning from the best and built BrickLee so operators without institutional scale can still have institutional books.
                </p>
                <p>
                  I built BrickLee because my own portfolio needed it. I couldn't find a bookkeeper who truly understood real estate. They've never closed an acquisition, negotiated a lease, managed a tenant turnover, or stared at a DSCR covenant wondering if this month's collections will cover it. They know debits and credits. They don't know the business those debits and credits are supposed to describe. So I built the back office I wished existed: institutional systems, priced for the operator who's too big for Stessa but too small for a full-time controller. Every system we run for clients, I run on my own portfolio first.
                </p>
              </div>

              {/* Credentials Row */}
              <div className="border-t border-zinc-800/80 pt-8">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-medium text-zinc-300">
                  <span className="flex items-center gap-2 text-white">
                    <CheckCircle2 size={16} style={{ color: BRAND_COPPER }} /> CPA (Active License)
                  </span>
                  <span className="hidden sm:inline text-zinc-700">•</span>
                  <span className="flex items-center gap-2 text-white">
                    <CheckCircle2 size={16} style={{ color: BRAND_COPPER }} /> PwC M&A, 5 Years
                  </span>
                  <span className="hidden sm:inline text-zinc-700">•</span>
                  <span className="flex items-center gap-2 text-white">
                    <CheckCircle2 size={16} style={{ color: BRAND_COPPER }} /> Hamilton Zanze Acquisitions, 3 Years
                  </span>
                  <span className="hidden lg:inline text-zinc-700">•</span>
                  <span className="flex items-center gap-2 text-white">
                    <CheckCircle2 size={16} style={{ color: BRAND_COPPER }} /> Director of RE, $65M+ Family Office
                  </span>
                  <span className="hidden sm:inline text-zinc-700">•</span>
                  <span className="flex items-center gap-2 text-white">
                    <CheckCircle2 size={16} style={{ color: BRAND_COPPER }} /> Owner/Operator, 8 Units
                  </span>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <FadeInSection delay={200}>
              <div className="relative max-w-md mx-auto lg:max-w-full">
                <img 
                  src="/Sam_Applegate_Headshot.jpg" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                  }}
                  alt="Sam Applegate, Founder of BrickLee" 
                  className="relative z-10 w-full h-auto aspect-[4/5] object-cover rounded-sm border border-zinc-800 shadow-2xl"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section id="services" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/30">
        <FadeInSection>
          <div className="mb-16 md:mb-20 md:text-center">
            <span style={{ color: BRAND_COPPER }} className="uppercase tracking-[0.2em] text-sm font-bold mb-6 block">
              What's Included
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Everything your portfolio needs.<br className="hidden md:block"/> Nothing it doesn't.
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Service 1 */}
          <FadeInSection delay={100} className="h-full">
            <div className="bg-[#141414] border border-zinc-800/80 p-8 lg:p-10 rounded-sm hover:border-zinc-700 transition-colors h-full">
              <Calculator style={{ color: BRAND_COPPER }} size={32} className="mb-8" />
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Core</div>
              <h3 className="text-xl font-bold text-white mb-4">Monthly Reconciliation & P&Ls</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Property-level and entity-level financial statements, bank reconciliation, and monthly close delivered by the 15th of each month.
              </p>
            </div>
          </FadeInSection>
          {/* Service 2 */}
          <FadeInSection delay={200} className="h-full">
            <div className="bg-[#141414] border border-zinc-800/80 p-8 lg:p-10 rounded-sm hover:border-zinc-700 transition-colors h-full">
              <Building2 style={{ color: BRAND_COPPER }} size={32} className="mb-8" />
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Core</div>
              <h3 className="text-xl font-bold text-white mb-4">Multi-Entity Accounting</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Separate books per LLC with consolidated portfolio views. Inter-entity transfers tracked properly. Asset protection stays intact.
              </p>
            </div>
          </FadeInSection>
          {/* Service 3 */}
          <FadeInSection delay={300} className="h-full">
            <div className="bg-[#141414] border border-zinc-800/80 p-8 lg:p-10 rounded-sm hover:border-zinc-700 transition-colors h-full">
              <FileSpreadsheet style={{ color: BRAND_COPPER }} size={32} className="mb-8" />
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Core</div>
              <h3 className="text-xl font-bold text-white mb-4">PM Software Integration</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We reconcile owner statements from AppFolio, Buildium, Rent Manager, or Rentvine with your entity-level QuickBooks.
              </p>
            </div>
          </FadeInSection>
          {/* Service 4 */}
          <FadeInSection delay={100} className="h-full">
            <div className="bg-[#141414] border border-zinc-800/80 p-8 lg:p-10 rounded-sm hover:border-zinc-700 transition-colors h-full">
              <PieChart style={{ color: BRAND_COPPER }} size={32} className="mb-8" />
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Tax</div>
              <h3 className="text-xl font-bold text-white mb-4">Tax-Ready Packages</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Schedule E financials, 1099 preparation and filing, depreciation schedules, cost segregation tracking, and 1031 exchange documentation.
              </p>
            </div>
          </FadeInSection>
          {/* Service 5 */}
          <FadeInSection delay={200} className="h-full">
            <div className="bg-[#141414] border border-zinc-800/80 p-8 lg:p-10 rounded-sm hover:border-zinc-700 transition-colors h-full">
              <Landmark style={{ color: BRAND_COPPER }} size={32} className="mb-8" />
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Advisory</div>
              <h3 className="text-xl font-bold text-white mb-4">Investor & Lender Reporting</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Capital account statements, distribution tracking, quarterly investor packages, and lender-ready financials formatted exactly how banks want them.
              </p>
            </div>
          </FadeInSection>
          {/* Service 6 */}
          <FadeInSection delay={300} className="h-full">
            <div className="bg-[#141414] border border-zinc-800/80 p-8 lg:p-10 rounded-sm hover:border-zinc-700 transition-colors h-full">
              <Briefcase style={{ color: BRAND_COPPER }} size={32} className="mb-8" />
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">PM Firms</div>
              <h3 className="text-xl font-bold text-white mb-4">Trust Accounting & Back-Office</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Trust account reconciliation, owner disbursement tracking, vendor 1099 management, and compliance-ready reporting across your full door count.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 6. PRICING */}
      <section id="pricing" className="py-24 md:py-32 bg-[#141414] px-4 sm:px-6 lg:px-8 border-y border-zinc-800/30">
        <div className="max-w-7xl mx-auto text-center mb-16 md:mb-20">
          <span style={{ color: BRAND_COPPER }} className="uppercase tracking-[0.2em] text-sm font-bold mb-6 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Institutional process. Sub-institutional price.
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Institutional accuracy at a fraction of what a controller would cost.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="py-6 pl-6 text-white font-bold text-lg w-1/4">Tier</th>
                  <th className="py-6 px-6 text-white font-bold text-lg w-1/5">Who It's For</th>
                  <th className="py-6 px-6 text-white font-bold text-lg w-auto">What's Included</th>
                  <th className="py-6 pr-6 text-right text-white font-bold text-lg w-1/6">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors">
                  <td className="py-10 pl-6">
                    <div className="font-bold text-white text-xl">Starter</div>
                  </td>
                  <td className="py-10 px-6 text-zinc-400">5–25 units</td>
                  <td className="py-10 px-6 text-zinc-400 text-sm">Monthly reconciliation, property-level P&L, up to 2 entities, Schedule E-ready reports</td>
                  <td className="py-10 pr-6 text-right font-medium text-white text-lg">$500<span className="text-sm text-zinc-500">/mo</span></td>
                </tr>
                <tr className="border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors">
                  <td className="py-10 pl-6">
                    <div className="font-bold text-white text-xl">Growth</div>
                  </td>
                  <td className="py-10 px-6 text-zinc-400">25–75 units</td>
                  <td className="py-10 px-6 text-zinc-400 text-sm">Everything in Starter + multi-entity reporting, bill pay integration, owner distribution tracking, quarterly review call, year-end CPA tax package</td>
                  <td className="py-10 pr-6 text-right font-medium text-white text-lg">$900<span className="text-sm text-zinc-500">/mo</span></td>
                </tr>
                <tr className="border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors">
                  <td className="py-10 pl-6">
                    <div className="font-bold text-white text-xl">Portfolio</div>
                  </td>
                  <td className="py-10 px-6 text-zinc-400">75–200 units</td>
                  <td className="py-10 px-6 text-zinc-400 text-sm">Everything in Growth + weekly reconciliation, 1031 exchange tracking, cash flow reporting, priority support</td>
                  <td className="py-10 pr-6 text-right font-medium text-white text-lg">$2,000<span className="text-sm text-zinc-500">/mo</span></td>
                </tr>
                <tr className="hover:bg-zinc-900/50 transition-colors">
                  <td className="py-10 pl-6">
                    <div className="font-bold text-white text-xl">PM Firm</div>
                  </td>
                  <td className="py-10 px-6 text-zinc-400">200+ units</td>
                  <td className="py-10 px-6 text-zinc-400 text-sm">Trust accounting support, owner statements, AppFolio/Buildium integration, bi-weekly review cadence, dedicated support team</td>
                  <td className="py-10 pr-6 text-right font-medium text-white text-lg">$3,000<span className="text-sm text-zinc-500">/mo</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards */}
          <div className="lg:hidden space-y-6">
            {[
              { name: 'Starter', units: '5–25 units', inc: 'Monthly reconciliation, property-level P&L, up to 2 entities, Schedule E-ready reports', price: '$500' },
              { name: 'Growth', units: '25–75 units', inc: 'Everything in Starter + multi-entity reporting, bill pay integration, owner distribution tracking, quarterly review call, year-end CPA tax package', price: '$900' },
              { name: 'Portfolio', units: '75–200 units', inc: 'Everything in Growth + weekly reconciliation, 1031 exchange tracking, cash flow reporting, priority support', price: '$2,000' },
              { name: 'PM Firm', units: '200+ units', inc: 'Trust accounting support, owner statements, AppFolio/Buildium integration, bi-weekly review cadence, dedicated support team', price: '$3,000' }
            ].map((tier, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-zinc-800 rounded-sm p-8 relative">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                    <p className="text-sm text-zinc-500 mt-2">{tier.units}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{tier.price}</div>
                    <div className="text-sm text-zinc-500">/month</div>
                  </div>
                </div>
                <div className="border-t border-zinc-800 pt-6 mt-6">
                  <p className="text-sm text-zinc-400 leading-relaxed">{tier.inc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20 text-center">
            <button onClick={handleBookCall} className="group inline-flex items-center gap-2 border border-[#c27a41] text-[#c27a41] hover:bg-[#c27a41] hover:text-white px-8 py-4 rounded-sm font-semibold transition-all">
              Book a Call to Find Your Tier
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="py-24 md:py-32 bg-[#141414] px-4 sm:px-6 lg:px-8 border-y border-zinc-800/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span style={{ color: BRAND_COPPER }} className="uppercase tracking-[0.2em] text-sm font-bold mb-6 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Questions we hear on every intro call.
            </h2>
          </div>

          <div className="space-y-4 md:space-y-6">
            {[
              {
                q: "What accounting software do you use?",
                a: "We work with a variety of bookkeeping platforms including QuickBooks Online, Yardi, and Buildium. We'll never lock you into a proprietary platform."
              },
              {
                q: "Do I need to switch property managers?",
                a: "No. We work with whatever PM software your manager uses — AppFolio, Buildium, Rent Manager, Rentvine, or even spreadsheets. We reconcile their output into your entity-level books."
              },
              {
                q: "My books are a disaster. Can you fix them?",
                a: "Yes. Most new clients need some level of cleanup before we can start monthly service. We'll scope the cleanup during your free portfolio review and quote it separately. Once we're caught up, you're on the monthly plan."
              },
              {
                q: "Will you replace my CPA?",
                a: "No — we make your CPA's life easier, which may reduce your bill by saving their time. We handle the day-to-day bookkeeping and deliver tax-ready financials so your CPA can focus on strategy, not data entry. Most CPAs love working with us because they get clean books without chasing you for receipts."
              },
              {
                q: "What's the minimum commitment?",
                a: "Month-to-month after a 3-month onboarding period. The first three months let us learn your portfolio and establish clean processes. After that, you stay because the books are good — not because of a contract."
              }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c27a41]/5 to-transparent rounded-full blur-3xl -z-10 w-[80%] mx-auto h-full"></div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Stop dreading tax season.<br/>
          Start knowing your <span className="italic font-light text-[#c27a41]">numbers.</span>
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
          Book a free 30-minute portfolio review. We'll audit your current books and give you a clear path forward — whether you hire us or not.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button onClick={handleBookCall} className="w-full sm:w-auto group flex justify-center items-center gap-2 bg-[#c27a41] hover:bg-[#a66533] text-white px-8 py-4 rounded-sm font-semibold transition-all">
            Book Your Free Review
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-[#050505] pt-24 md:pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <span className="text-white text-2xl font-bold tracking-tight mb-6 block">
                BrickLee
              </span>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-6">
                Institutional-grade bookkeeping for real estate investors and property managers. Built by an operator. Powered by obsessive accuracy.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Services</h4>
              <ul className="space-y-3">
                {['Monthly Bookkeeping', 'Multi-Entity Accounting', 'PM Firm Back-Office', 'Tax-Ready Packages', 'Book Cleanup'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-zinc-500 hover:text-[#c27a41] text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Connect</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center gap-2 text-zinc-500 hover:text-[#c27a41] text-sm transition-colors">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-zinc-500 hover:text-[#c27a41] text-sm transition-colors">
                    <Building2 size={18} /> BiggerPockets
                  </a>
                </li>
                <li>
                  <a href="mailto:sam@coyotesp.com" className="flex items-center gap-2 text-zinc-500 hover:text-[#c27a41] text-sm transition-colors">
                    <Mail size={18} /> sam@coyotesp.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
            <div>© 2026 BrickLee. All rights reserved.</div>
            <div>Real estate bookkeeping. Nothing else.</div>
          </div>
        </div>
      </footer>

      {/* CONTACT FORM MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity overflow-y-auto">
          <div className="bg-[#141414] border border-zinc-800 p-8 md:p-10 rounded-sm max-w-lg w-full relative shadow-2xl my-8">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-[#c27a41] transition-colors p-2"
            >
              <X size={24} />
            </button>
            
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-[#c27a41]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle style={{ color: BRAND_COPPER }} size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Inquiry Sent!</h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  Thanks for reaching out. Sam will be in touch within 24 hours to schedule your portfolio review.
                </p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-sm font-medium transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Request a Review</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Fill out the details below and we'll reach out within 24 hours to find a time that works for you.
                </p>
                
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        className="w-full bg-[#0a0a0a] border border-zinc-800 text-white rounded-sm p-3 focus:outline-none focus:border-[#c27a41] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        className="w-full bg-[#0a0a0a] border border-zinc-800 text-white rounded-sm p-3 focus:outline-none focus:border-[#c27a41] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        className="w-full bg-[#0a0a0a] border border-zinc-800 text-white rounded-sm p-3 focus:outline-none focus:border-[#c27a41] transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">Number of Units</label>
                      <select 
                        required
                        name="units"
                        defaultValue=""
                        className="w-full bg-[#0a0a0a] border border-zinc-800 text-white rounded-sm p-3 focus:outline-none focus:border-[#c27a41] transition-colors appearance-none"
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="1-5">1 - 5 units</option>
                        <option value="6-25">6 - 25 units</option>
                        <option value="26-75">26 - 75 units</option>
                        <option value="76-200">76 - 200 units</option>
                        <option value="200+">200+ units</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Types of Properties / Software Used</label>
                    <textarea 
                      required
                      name="details"
                      rows="3"
                      className="w-full bg-[#0a0a0a] border border-zinc-800 text-white rounded-sm p-3 focus:outline-none focus:border-[#c27a41] transition-colors resize-none"
                      placeholder="e.g. 10 Single Family homes using QuickBooks, or 50 Multifamily units on AppFolio..."
                    ></textarea>
                  </div>

                  {formStatus === 'error' && (
                    <div className="bg-red-950/40 border border-red-800/50 text-red-300 text-sm p-3 rounded-sm">
                      Something went wrong sending your inquiry. Please email sam@coyotesp.com directly.
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-[#c27a41] hover:bg-[#a66533] disabled:bg-zinc-800 disabled:text-zinc-500 text-white px-6 py-4 rounded-sm font-semibold transition-all mt-4"
                  >
                    {formStatus === 'submitting' ? 'Sending Inquiry...' : 'Submit Inquiry'}
                    {formStatus !== 'submitting' && <ArrowRight size={18} />}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Reusable FAQ Item Component
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-800 rounded-sm bg-[#0a0a0a] overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 md:p-8 text-left hover:bg-zinc-900/50 transition-colors focus:outline-none"
      >
        <span className="font-semibold text-white text-lg md:text-xl">{question}</span>
        <span className="text-[#c27a41] flex-shrink-0 ml-4">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8 text-zinc-400 leading-relaxed text-base md:text-lg">
          <div className="border-t border-zinc-800/50 pt-6 md:pt-8">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

// Scroll Animation Wrapper
function FadeInSection({ children, delay = 0, className = "" }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

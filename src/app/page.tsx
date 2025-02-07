import PageSection from '@/components/page-section'
import PricingCard from '@/components/pricing-card'
import pageSections from '@/data/pageSections'
import pricingPlans from '@/data/pricingPlans'

const Home = () => {
  return (
    <>
      {pageSections.map((section) => (
        <PageSection key={section.id} {...section} />
      ))}
      <section id="pricing" className="space-y-8 py-8 content-center lg:h-section">
        <h2 className="text-center text-3xl font-bold">Choose Your Plan</h2>
        <div className="flex flex-col gap-10 px-8 lg:flex-row lg:justify-center">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home

import { FaCheck } from 'react-icons/fa'
import { PricingPlan as Props } from '@/types'

const PricingCard = ({ heading, price, features }: Props) => {
  return (
    <article className="shadow-custom-shadow rounded space-y-5 p-8">
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="text-xl font-bold">${price} / month</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-4">
            <FaCheck color="#00cc00" />
            <p>{feature}</p>
          </li>
        ))}
      </ul>
      <button className="btn">Choose Plan</button>
    </article>
  )
}

export default PricingCard

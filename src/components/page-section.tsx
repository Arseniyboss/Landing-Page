import Image from 'next/image'
import { PageSection as Props } from '@/types'

const PageSection = ({ id, heading, description, buttonLabel, img }: Props) => {
  return (
    <section id={id} className="pageSection">
      <div className="space-y-5 max-w-lg">
        <h1 className="text-4xl font-bold">{heading}</h1>
        <p>{description}</p>
        <button className="btn">{buttonLabel}</button>
      </div>
      <Image src={img.src} alt="" width={img.width} height={img.height} priority />
    </section>
  )
}

export default PageSection

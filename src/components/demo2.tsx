import TiltCard from './tilt-card2'

export default function Demo() {
  return (
    <div className="flex items-center justify-center min-h-screen  ">
      <div className="flex items-center justify-center">
        <TiltCard
          imageUrl="https://docs.dialect.to/img/hero-banner%20(1).png"
          alt="Dialect first block"
          maxTilt={15}
        />
        {/* <TiltCard
          imageUrl="/placeholder.svg?height=400&width=600&text=Transparent+Background"
          alt="Transparent background example"
          maxTilt={15}
        /> */}
      </div>
    </div>
  )
}


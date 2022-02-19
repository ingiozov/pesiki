import React from 'react'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export default function Slider({ pet }) {
  const images = pet.images

  const properties = {
    autoplay: false,
  }

  const [opacities, setOpacities] = React.useState([])

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 500px)': {
        slides: {
          perView: 2,
          spacing: 5,
        },
      },
      '(min-width: 990px)': {
        slides: {
          perView: 3,
          spacing: 5,
        },
      },
    },
  })

  return (
    <div ref={sliderRef} className='keen-slider'>
      {images.map((src, idx) => (
        <div
          key={idx}
          className='keen-slider__slide'
          style={{ opacity: opacities[idx] }}
        >
          <img src={src.formats.small.url} />
        </div>
      ))}
    </div>
  )
}

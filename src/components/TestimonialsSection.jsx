import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John Bakker',
      company: 'TechStartup BV',
      role: 'CEO',
      quote: 'ClearBuildIT transformed our web platform in 6 weeks. Het resultaat was beter dan verwacht en ze waren erg responsief.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      id: 2,
      name: 'Maria Jansen',
      company: 'E-commerce Solutions',
      role: 'Product Manager',
      quote: 'De kwaliteit van code en communicatie is top-notch. Ze geven goede adviezen over best practices en scalability.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      id: 3,
      name: 'Peter de Vries',
      company: 'Digital Agency',
      role: 'Creative Director',
      quote: 'Onze SaaS-applicatie is nu productie-klaar en echt beeldschoon. Het team snapt design en development.',
      rating: 5,
      image: '👨‍💻'
    },
    {
      id: 4,
      name: 'Sophie Vermeulen',
      company: 'FinTech Netherlands',
      role: 'CTO',
      quote: 'Security en performance waren hun topprioriteit. We hebben een stabiele, snelle applicatie.',
      rating: 5,
      image: '👩‍💻'
    },
    {
      id: 5,
      name: 'Lars Hendriks',
      company: 'Logistics Corp',
      role: 'Operations Director',
      quote: 'Fantastische samenwerking. Ze hebben ons custom dashboard gebouwd dat echt ons bedrijf sneller maakt werken.',
      rating: 5,
      image: '👨‍💼'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Wat onze klanten zeggen
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Meer dan 50+ projecten succesvol afgeleverd. Lees wat bedrijven zeggen over samenwerking met ClearBuildIT.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-sm p-8 sm:p-10">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-amber-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{testimonial.image}</div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                        <p className="text-slate-600 text-sm">{testimonial.role} bij {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Vorige testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6 text-slate-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Volgende testimonial"
          >
            <ChevronRightIcon className="w-6 h-6 text-slate-900" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-green-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-slate-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <p className="text-slate-600">Projecten</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">4.9★</div>
            <p className="text-slate-600">Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <p className="text-slate-600">Tevreden klanten</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlatformComponent {
  title: string;
  description: string;
  image: string;
  link: string;
  isReversed?: boolean;
}

interface PlatformComponentsSectionProps {
  title?: string;
  description?: string;
  note?: string;
  components: PlatformComponent[];
}

export default function PlatformComponentsSection({
  title = "Platform Components",
  description = "Our comprehensive platform integrates multiple components to deliver a care continuum, emotional well-being, and development of inner resilience, while being part of the purpose of helping yourself while helping others.",
  note = "Note: Some platform features are currently in development.",
  components = []
}: PlatformComponentsSectionProps) {
  return (
    <div className="mx-auto max-w-7xl relative z-10">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-12 text-center mx-auto">
            <h2 className="font-bold font-serif mb-4 text-3xl md:text-4xl letter-spacing-[-1px] text-gray-800 leading-tight">{title}</h2>
            <div className="h-1 bg-gradient-to-r from-ilight-700 to-ilight-700 rounded-full w-20 mb-6 mx-auto"></div>
            <p className="text-ilight-700 max-w-3xl text-lg md:text-xl mx-auto">{description}</p>
            {note && <div className="mt-4 text-sm text-ilight-600">{note}</div>}
          </div>
        </motion.div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        {components.map((component, index) => (
          <div className="mb-20 md:mb-32\" key={component.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Image Container with Responsive Adjustments */}
              <div className="relative transition duration-700">
                <img 
                  src={component.image} 
                  alt={component.title} 
                  className="rounded-2xl min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] xl:max-h-[500px] object-cover h-full w-full shadow-lg"
                />
              </div>
              
              {/* Content Box with Responsive Positioning */}
              <div 
                className={`
                  relative z-[1] 
                  -mt-[80px] sm:-mt-[100px] md:-mt-[118px] 
                  ${component.isReversed 
                    ? 'mr-auto ml-4 sm:ml-5 rounded-tr-[20px] sm:rounded-tr-[40px] pr-4 sm:pr-5' 
                    : 'ml-auto mr-4 sm:mr-5 rounded-tl-[20px] sm:rounded-tl-[40px] pl-4 sm:pl-5'
                  } 
                  w-[85%] sm:w-[80%] md:w-[70%] lg:w-3/5 
                  bg-white shadow-xl
                `}
              >
                <div 
                  className={`
                    ${component.isReversed ? 'rounded-tr-xl sm:rounded-tr-2xl' : 'rounded-tl-xl sm:rounded-tl-2xl'} 
                    pt-4 sm:pt-5 md:pt-6 md:py-6 
                    px-4 sm:px-5 md:px-6
                  `}
                >
                  {/* Title with Responsive Typography - Using font-serif for consistency */}
                  <h3 className="pb-2 font-serif text-2xl sm:text-[28px] md:text-[32px] font-light leading-tight sm:leading-[40px] md:leading-[48px] text-ilight-600 md:pb-4 lg:pb-6 xl:text-[48px]">{component.title}</h3>
                  
                  {/* Description with Responsive Typography */}
                  <div className="text-sm sm:text-base font-light lg:text-lg xl:leading-[32px]">
                    <p className="text-black">{component.description}</p>
                  </div>
                  
                  {/* CTA Button with Responsive Spacing */}
                  <div className="flex gap-3 sm:gap-5 pt-4 sm:pt-5 md:pt-6">
                    <Link 
                      to={component.link}
                      className="px-4 sm:px-5 py-2 sm:py-[10px] text-sm sm:text-base flex justify-center items-center group space-x-2 sm:space-x-3 rounded-full transition duration-300 ease-in-out transform border border-ilight-600 text-white bg-ilight-600 hover:bg-transparent hover:text-ilight-700"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 sm:ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
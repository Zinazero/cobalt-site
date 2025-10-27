import Image from 'next/image';
import DemoButton from '@/components/ui/DemoButton';
import { Button } from '../components/ui/shadcn/button';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col lg:flex-row items-center space-y-10 py-10 overflow-hidden"
    >
      {/* Logo Image */}
      <div className="lg:hidden flex items-center h-40">
        <Image
          src="/images/cobalt-text-logo.svg"
          alt="Cobalt Software Solutions Logo"
          className="h-full"
          width={0}
          height={0}
        />
      </div>

      {/* Ghost Image */}
      <div className="hidden lg:block absolute right-25 w-3/5 rounded-lg overflow-hidden shadow-sm">
        <Image
          src="/images/cobalt-primary-view.png"
          alt="App preview"
          className="h-full w-full object-contain opacity-30"
          width={2559}
          height={1286}
          priority
          draggable={false}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-20 text-center lg:text-left relative z-10">
        <div className="max-w-2xl mx-auto lg:mx-0 bg-white rounded-lg overflow-hidden shadow-lg p-4">
          <h1 className="text-4xl font-bold text-dark mb-6">
            Empowering Ontario Businesses with <span className="text-cobalt">Tailored Software</span>
          </h1>
          <p className="text-grey mb-8">
            Custom productivity and data insights platforms designed to streamline your operations and unlock
            growth.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <DemoButton className="bg-cobalt hover:bg-cobalt-hover px-6 " />
            <Button asChild>
              <a
                href="#consulting"
                className={` !bg-white !text-cobalt border !border-cobalt px-6 py-3 rounded-md hover:!bg-cobalt-hover hover:!border-cobalt-hover hover:!text-white transition`}
              >
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

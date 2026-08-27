import {
  faCalendarDays,
  faChartSimple,
  faClipboardCheck,
  faMobileScreen,
  faPersonSwimming,
  faTachographDigital,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@/lib/utils';

export const Axis = () => {
  interface Feature {
    title: string;
    desc: string;
    icon: IconDefinition;
  }

  const featureArray: Feature[] = [
    {
      title: 'Scheduling Tools',
      desc: 'Manage staff, shifts and budgets with ease. Utilize preset shifts and weeks to save your company time and money.',
      icon: faCalendarDays,
    },
    {
      title: 'Analytics Dashboards',
      desc: 'Real-time insights into your operations and performance.',
      icon: faChartSimple,
    },
    {
      title: 'Facilities Schedules',
      desc: 'Live schedules for facilities ranging from pools and studios to boardrooms and event spaces.',
      icon: faPersonSwimming,
    },
    {
      title: 'Compliance Automation',
      desc: 'Ensure tasks and safety checks are always completed. Encourage productivity through gamification.',
      icon: faClipboardCheck,
    },
    {
      title: 'Functional Design',
      desc: 'Access all the most important information in one streamlined page, designed for quick insights and efficient decision-making.',
      icon: faTachographDigital,
    },
    {
      title: 'Mobile Layouts',
      desc: 'Seamlessly manage your business on the go with layouts optimized for mobile devices, ensuring staff and managers stay connected.',
      icon: faMobileScreen,
    },
  ];
  return (
    <>
      <div className="h-14 bg-linear-to-b from-light to-white" />
      <section id="cobalt-axis" className="min-h-screen bg-white py-32 px-6">
        <div className="max-w-450 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl text-cyan font-bold text-shadow-md">Axis</h2>
            <p className="text-grey mt-2">
              A modular platform tailored to <b>your</b> business.
            </p>
          </div>

          {/* Grid of feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featureArray.map(({ title, desc, icon }) => {
              return (
                <div
                  key={title}
                  className={cn(
                    'flex flex-col items-center p-8 rounded-xl transition-all duration-300',
                    'bg-gray-50 group',
                    'hover:bg-cyan hover:text-white hover:scale-105 hover:shadow-xl',
                  )}
                >
                  <div className="mb-6 text-cyan group-hover:text-white transition-all duration-300">
                    <FontAwesomeIcon icon={icon} className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{title}</h3>
                  <p className="text-center leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="h-14 bg-linear-to-t from-light to-white" />
    </>
  );
};

import { faCalendarCheck, faHexagonNodes, faPlus, faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Extension = () => {
  return (
    <section id="consulting" className="overflow-hidden text-dark bg-dark-bg">
      <div className="flex flex-col items-center py-32 w-2/3 mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center space-y-4 text-center mb-20">
          <h2 className="text-4xl text-cobalt">Tailor <span className="text-cyan">Axis</span> to <b>Your</b> Business</h2>
          <p className="text-2xl font-source text-grey">
            Have the core application modified and extended to work the way you want it to.
          </p>
        </div>

        {/* Main Split Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full">
          {/* Axis Core */}
          <div className="flex flex-col items-center space-y-4 p-8 rounded-2xl bg-white shadow-sm group hover:shadow-xl transition">
            <div className="w-40 h-40 bg-gradient-to-br from-cobalt to-cyan group-hover:from-cyan group-hover:to-cobalt transition rounded-xl flex items-center justify-center text-white font-bold text-3xl shadow-md">
              Axis
            </div>
            <p className="text-center font-semibold text-lg max-w-sm">The foundation of your operations.</p>
          </div>

          <div className="text-abyss w-10">
            <FontAwesomeIcon icon={faPlus} />
          </div>

          {/* Extensions (3 floating icons) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-3xl">
            {/* Client Portal */}
            <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition group">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center text-cobalt group-hover:text-cyan transition">
                <FontAwesomeIcon icon={faCalendarCheck} />
              </div>
              <h4 className="text-lg font-bold text-center">Booking Portals</h4>
              <p className="text-center text-sm text-grey">Self-service access for customers</p>
            </div>

            {/* Integrations */}
            <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition group">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center text-cobalt group-hover:text-cyan transition">
                <FontAwesomeIcon icon={faHexagonNodes} />
              </div>
              <h4 className="text-lg font-bold text-center">3rd-Party Integrations</h4>
              <p className="text-center text-sm text-grey">Connect with Salesforce, Stripe and more</p>
            </div>

            {/* Automation */}
            <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition md:col-span-2 lg:col-span-1 group">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center text-cobalt group-hover:text-cyan transition">
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <h4 className="text-lg font-bold text-center">Custom Automation</h4>
              <p className="text-center text-sm text-grey">Workflow triggers, data pipelines and AI</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center space-y-8">
          <p className="text-xl font-semibold">
            Whether it's a small extension, an integration or an entire new module, we've got you covered.
          </p>
          <button type="button" className="bg-cobalt hover:bg-cobalt-hover text-white text-xl py-6 px-12 rounded-full shadow-md transition transform hover:scale-105 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

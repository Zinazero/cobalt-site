export const Testimonials = () => {
  type Testimonial = {
    quote: string;
    name: string;
    title: string;
    location?: string;
  };

  const quoteArray: Testimonial[] = [
    {
      quote:
        'Working with Jacob to implement and tailor the Axis platform for our business was an exciting experience. He took the time to understand our needs and delivered a powerful solution that improved efficiency, provided tailored user experiences and gave managers valuable tools and analytics. His responsiveness and built-in feedback tools made the process smooth. I look forward to working with Cobalt again.',
      name: 'Michela Doran',
      title: 'Area Director',
      location: 'MOVATI Athletic',
    },
    {
      quote:
        'Axis has been a true game-changer. I can now complete monthly schedules in under 30 minutes, staff instantly see updates on mobile and our supervisor team saves hours every week thanks to automated snapshot generation. I can quickly assess and adjust staffing levels to stay within budget.',
      name: 'Ethan White',
      title: 'Experience Manager',
      location: 'MOVATI Athletic Guelph',
    },
    {
      quote:
        'Axis has made scheduling and daily zoning a breeze. Staff are more attentive, shift swaps are easier to track and task sign-offs not only boost accountability but create a fun sense of competition. It has significantly increased productivity across the team.',
      name: 'Tyler Greenough',
      title: 'Member Experience Supervisor',
      location: 'MOVATI Athletic Guelph',
    },
    {
      quote:
        'Axis brings clarity, structure and accountability to our daily work. It motivates our team to take pride and ownership, improves communication through shift offering and helps us deliver the premium experience MOVATI Athletic is known for.',
      name: 'Jack Van Dam',
      title: 'Member Experience Associate',
      location: 'MOVATI Athletic Guelph',
    },
  ];

  return (
    <>
      <div className="h-14 bg-linear-to-b from-light to-white" />
      <section id="testimonials" className="flex flex-col items-center py-30 bg-white px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-cobalt font-bold text-shadow-lg">Backed by Real-World Experience</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 mx-auto">
          {quoteArray.map(({ quote, name, title, location }, index) => {
            const isLastOdd = quoteArray.length % 2 === 1 && index === quoteArray.length - 1;
            return (
              <div
                key={name}
                className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between max-w-xl ${
                  isLastOdd ? 'col-span-2 justify-self-center mx-auto' : ''
                }`}
              >
                <p className="italic text-grey-dark! mb-4">{quote}</p>
                <div>
                  <p className="font-bold text-dark!">{name}</p>
                  <p className="text-sm">
                    {title}
                    {location ? `, ${location}` : ''}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="h-14 bg-linear-to-t from-light to-white" />
    </>
  );
};

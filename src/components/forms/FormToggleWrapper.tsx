'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { handleContactSubmit } from '@/lib/handleContactSubmit';
import { FormSubmitHandler } from '@/types';
import ContactForm from './ContactForm';
import DemoForm from './DemoForm';
import FormToggle from './FormToggle';
import { Thanks } from './Thanks';

const FormToggleWrapper = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit: FormSubmitHandler = async (e, type) => {
    setLoading(true);
    const success = await handleContactSubmit(e, type);
    setLoading(false);

    if (success) setFormSubmitted(true);
    return true;
  };

  return (
    <AnimatePresence mode="wait">
      {formSubmitted ? (
        <motion.div
          key="thanks"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Thanks onClick={() => setFormSubmitted(false)} />
        </motion.div>
      ) : (
        <motion.div
          key="forms"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl text-cobalt font-bold mb-4">Let’s Talk</h2>
          <p className="mb-6">We’d love to hear about your business and show you what Cobalt can do.</p>
          <FormToggle
            render={(isRequestDemo) => (
              <>
                <div className={isRequestDemo ? 'hidden' : 'block max-w-lg mx-auto'}>
                  <ContactForm onSubmit={handleSubmit} loading={loading} />
                </div>
                <div className={isRequestDemo ? 'block max-w-lg mx-auto' : 'hidden'}>
                  <DemoForm onSubmit={handleSubmit} loading={loading} />
                </div>
              </>
            )}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormToggleWrapper;

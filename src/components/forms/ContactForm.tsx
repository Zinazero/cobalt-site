import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../ui/shadcn/button';
import { Input } from '../ui/shadcn/input';
import { Textarea } from '../ui/shadcn/textarea';
import { FormProps } from './types';

const ContactForm = ({ onSubmit, loading }: FormProps) => {
  return (
    <form className="space-y-4" onSubmit={(e) => onSubmit(e, 'contact')}>
      {/* Name */}
      <Input type="text" name="Name" placeholder="Your Name" required />

      {/* Email */}
      <Input type="email" name="Email" placeholder="Email Address" required />

      {/* Message */}
      <Textarea name="Message" placeholder="How can we help?" rows={4} required />

      {/* Hidden honeypot for spam */}
      <input type="text" name="website" autoComplete="off" tabIndex={-1} style={{ display: 'none' }} />

      {/* Submit button */}
      <Button
        type="submit"
        className="w-full active:scale-95 bg-cobalt text-white py-3 px-6 rounded-xl hover:bg-cobalt-hover transition"
        disabled={loading}
      >
        {loading ? <FontAwesomeIcon icon={faSpinner} spin size="2x" /> : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;

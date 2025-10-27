import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../ui/shadcn/button';
import { Input } from '../ui/shadcn/input';
import { Textarea } from '../ui/shadcn/textarea';
import { FormProps } from './types';

const DemoForm = ({ onSubmit, loading }: FormProps) => {
  return (
    <form className="space-y-4" onSubmit={(e) => onSubmit(e, 'demo')}>
      {/* First Name */}
      <Input type="text" name="First Name" placeholder="First Name*" required />

      {/* Last Name */}
      <Input type="text" name="Last Name" placeholder="Last Name*" required />

      {/* Email */}
      <Input type="email" name="Email" placeholder="Email Address*" required />

      {/* Phone */}
      <Input type="tel" name="Phone" placeholder="Phone Number" />

      {/* Company Name */}
      <Input type="text" name="Company Name" placeholder="Company Name*" required />

      {/* Industry */}
      <Input type="text" name="Industry" placeholder="Industry" />

      {/* Message */}
      <Textarea name="Message" placeholder="Additional notes or questions" rows={4} />

      {/* Hidden honeypot for spam */}
      <input type="text" name="website" autoComplete="off" tabIndex={-1} style={{ display: 'none' }} />
      {/* Submit Button */}
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

export default DemoForm;

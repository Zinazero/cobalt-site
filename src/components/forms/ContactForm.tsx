import { Input } from '../ui/shadcn/input';
import { Textarea } from '../ui/shadcn/textarea';
import { Button } from '../ui/shadcn/button';

const ContactForm = () => {
  return (
    <form className="space-y-4">
      {/* Name */}
      <Input
        type="text"
        name="Name"
        placeholder="Your Name"
        required
      />

      {/* Email */}
      <Input
        type="email"
        name="Email"
        placeholder="Email Address"
        required
      />

      {/* Message */}
      <Textarea
        name="Message"
        placeholder="How can we help?"
        rows={4}
        required
      />

      {/* Hidden honeypot for spam */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        style={{ display: 'none' }}
      />

      {/* Submit button */}
      <Button
        type="submit"
        className="w-full active:scale-95 bg-cobalt text-white py-3 px-6 rounded-xl hover:bg-cobalt-hover transition"
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;

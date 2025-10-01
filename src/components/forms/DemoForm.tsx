import { Input } from '../ui/shadcn/input';
import { Textarea } from '../ui/shadcn/textarea';
import { Button } from '../ui/shadcn/button';

const DemoForm = () => {
  return (
    <form className="space-y-4">
      {/* First Name */}
      <Input
        type="text"
        name="First Name"
        placeholder="First Name*"
        required
      />

      {/* Last Name */}
      <Input
        type="text"
        name="Last Name"
        placeholder="Last Name*"
        required
      />

      {/* Email */}
      <Input
        type="email"
        name="Email"
        placeholder="Email Address*"
        required
      />

      {/* Phone */}
      <Input
        type="tel"
        name="Phone"
        placeholder="Phone Number"
      />

      {/* Company Name */}
      <Input
        type="text"
        name="Company Name"
        placeholder="Company Name*"
        required
      />

      {/* Industry */}
      <Input
        type="text"
        name="Industry"
        placeholder="Industry"
      />

      {/* Message */}
      <Textarea
        name="Message"
        placeholder="Additional notes or questions"
        rows={4}
      />

      {/* Hidden honeypot for spam */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        style={{ display: 'none' }}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full active:scale-95 bg-cobalt text-white py-3 px-6 rounded-xl hover:bg-cobalt-hover transition"
      >
        Send Message
      </Button>
    </form>
  );
};

export default DemoForm;

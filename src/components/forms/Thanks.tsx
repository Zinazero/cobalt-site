'use client';
import { Button } from '../ui/shadcn/button';

interface ThanksProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Thanks = ({ onClick }: ThanksProps) => (
  <>
    <h4 className="text-4xl font-semibold text-cobalt mb-2">Thanks for reaching out!</h4>
    <p className="!text-xl">We’ll be in touch shortly.</p>
    <Button
      onClick={onClick}
      className="bg-cobalt hover:bg-cobalt-hover active:scale-95 text-white mt-14 w-full max-w-70"
    >
      Return
    </Button>
  </>
);

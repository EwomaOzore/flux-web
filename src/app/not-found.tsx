import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="overline">404</p>
      <h1 className="mt-4 max-w-[16ch] font-display text-[40px] font-normal leading-[1.12] tracking-[-0.04em] text-ink sm:text-[56px]">
        This page isn’t on the timeline.
      </h1>
      <p className="mt-4 max-w-[36ch] text-[17px] text-ink-secondary">
        It isn’t here. The cushion still is — on your phone.
      </p>
      <Button href="/" className="mt-8">
        Back to Flux
      </Button>
    </div>
  );
}

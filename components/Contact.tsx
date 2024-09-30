import ShimmerButton from "./magicui/shimmer-button";
import SparklesText from "./ui/sparkles-text";

export default function Contact() {
  return (
    <div className="lg:w-6/12 sm:w-10-/12 flex flex-col items-center justify-center mb-10">
      <p>( Need an elevated solution? )</p>
      <SparklesText
        text="
        Let's Make it Happen
        "
        className="my-10 text-3xl lg:text-4xl"
      />
      <a
        href="mailto:jhonmichaelabbas0712@gmail.com?subject=Hire%20Me&body=Hi,%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
      >
        <ShimmerButton>Contact Me</ShimmerButton>
      </a>
    </div>
  );
}

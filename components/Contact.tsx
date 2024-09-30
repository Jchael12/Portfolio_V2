import ShimmerButton from "./magicui/shimmer-button";

export default function Contact() {
  return (
    <div className="w-6/12 flex flex-col items-center justify-center mb-10">
      <h1 className="font-bold text-4xl my-10 uppercase">Contact Me</h1>
      <a
        href="mailto:jhonmichaelabbas0712@gmail.com?subject=Hire%20Me&body=Hi,%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
      >
        <ShimmerButton>Hire Me</ShimmerButton>
      </a>
    </div>
  );
}

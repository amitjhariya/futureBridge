import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main>
      <div className="w-full min-h-screen text-center">
        <h1 className="text-2xl font-bold mt-8 "> Contact Us</h1>
        <ContactForm />
      </div>
    </main>
  );
}

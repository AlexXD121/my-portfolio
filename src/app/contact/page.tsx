import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pb-8">
      <Header />
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Me</h1>
        <div className="text-gray-300 space-y-6">
          <p>
            Welcome to my contact page! This is a placeholder for the Contact Me section.
          </p>
          <p>
            Here you will find ways to get in touch with me.
          </p>
        </div>
      </div>
    </main>
  );
}
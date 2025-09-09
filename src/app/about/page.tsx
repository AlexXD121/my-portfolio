import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pb-8">
      <Header />
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
        <div className="text-gray-300 space-y-6">
          <p>
            Welcome to my about page! This is a placeholder for the About Me section.
          </p>
          <p>
            Here you will find information about my background, skills, and experience.
          </p>
        </div>
      </div>
    </main>
  );
}
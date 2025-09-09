import Header from "@/components/Header";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-black pb-8">
      <Header />
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Blogs</h1>
        <div className="text-gray-300 space-y-6">
          <p>
            Welcome to my blogs page! This is a placeholder for the Blogs section.
          </p>
          <p>
            Here you will find my latest articles and thoughts.
          </p>
        </div>
      </div>
    </main>
  );
}
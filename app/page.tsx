export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">

      <div className="mx-auto max-w-5xl">

        <h1 className="mb-3 text-center text-3xl font-bold text-gray-800">
          Next.js Rendering Demo
        </h1>

        <p className="mb-8 text-center text-gray-600">
          Server-Side Rendering and Client-Side Rendering
        </p>

        <div className="grid gap-6 md:grid-cols-2">

          <a
            href="/ssr"
            className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
          >
            <h2 className="mb-2 text-xl font-bold text-lime-600">
              Server-Side Rendering
            </h2>

            <p className="text-gray-600">
              Data is fetched on the server before the page is sent to
              the browser.
            </p>
          </a>

          <a
            href="/csr"
            className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
          >
            <h2 className="mb-2 text-xl font-bold text-pink-500">
              Client-Side Rendering
            </h2>

            <p className="text-gray-600">
              Data is fetched in the browser after the page loads.
            </p>
          </a>

        </div>

      </div>

    </main>
  );
}
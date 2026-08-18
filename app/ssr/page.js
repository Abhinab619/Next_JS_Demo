import Link from "next/link";

async function getUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = await response.json();

  return users;
}

export default async function SSRPage() {
  const users = await getUsers();

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">

      <div className="mx-auto max-w-5xl">

        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          Server-Side Rendering
        </h1>

        <p className="mb-8 text-gray-600">
          The data was fetched on the server.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {users.map((user) => (
            <div
              key={user.id}
              className="rounded-xl bg-white p-5 shadow-md"
            >

              <h2 className="mb-2 text-xl font-bold text-green-900">
                {user.name}
              </h2>

              <p className="mb-1 text-gray-700">
                <strong>Email:</strong> {user.email}
              </p>

              <p className="text-gray-700">
                <strong>City:</strong> {user.address.city}
              </p>

            </div>
          ))}

        </div>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-gray-800 px-5 py-2 text-white"
        >
          Back to Home
        </Link>

      </div>

    </main>
  );
}
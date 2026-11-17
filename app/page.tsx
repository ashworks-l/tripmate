import Link from "next/link";

const destinations = [
  {
    name: "Santorini, Greece",
    detail: "Beautiful coastal escapes",
    emoji: "🇬🇷",
    background: "from-blue-200 via-sky-100 to-orange-100",
  },
  {
    name: "Kyoto, Japan",
    detail: "Culture and unforgettable moments",
    emoji: "🇯🇵",
    background: "from-pink-200 via-rose-100 to-orange-100",
  },
  {
    name: "Swiss Alps",
    detail: "Adventure in the mountains",
    emoji: "🇨🇭",
    background: "from-emerald-200 via-teal-100 to-blue-100",
  },
];

const features = [
  {
    number: "01",
    icon: "✈️",
    title: "Organize your trips",
    description:
      "Create trips, add destinations, and keep all your travel information in one place.",
  },
  {
    number: "02",
    icon: "📅",
    title: "Plan your activities",
    description: "Organize activities and keep track of everything you want to experience.",
  },
  {
    number: "03",
    icon: "🧳",
    title: "Keep everything together",
    description: "Access your travel plans and important details whenever you need them.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#24352e]">
      <header className="sticky top-0 z-50 border-b border-[#e9e8e2] bg-[#faf9f6]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            trip<span className="text-[#7b9b78]">mate.</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#65746a] md:flex">
            <Link href="#features" className="transition hover:text-[#7b9b78]">
              Features
            </Link>
            <Link href="#destinations" className="transition hover:text-[#7b9b78]">
              Destinations
            </Link>
            <Link href="#about" className="transition hover:text-[#7b9b78]">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-[#eeeee7] sm:block"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-[#526e57] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3f5944]"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#e9eee5] px-4 py-2 text-sm font-medium text-[#526e57]">
            <span>✦</span> Your journey starts here
          </span>

          <h1 className="max-w-xl text-5xl leading-tight font-bold tracking-tight md:text-7xl">
            Travel more.
            <br />
            Worry less.
            <br />
            <span className="text-[#7b9b78]">Enjoy every moment.</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-[#748078]">
            Your trips, destinations, and activities, all in one place. Make travel planning simple
            and focus on creating unforgettable memories.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/register"
              className="rounded-full bg-[#526e57] px-7 py-4 font-semibold text-white shadow-sm transition hover:-translate-y-1 hover:bg-[#3f5944]"
            >
              Start planning →
            </Link>
            <Link
              href="#features"
              className="rounded-full border border-[#d9ded5] px-7 py-4 font-semibold transition hover:bg-[#eeeee7]"
            >
              Explore features
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#faf9f6] bg-[#e9c8b5]">
                👩
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#faf9f6] bg-[#d7e2c9]">
                🧑
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#faf9f6] bg-[#ead7a9]">
                👨
              </span>
            </div>
            <p className="text-sm text-[#748078]">Plan your next adventure with ease.</p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -top-8 -right-5 h-36 w-36 rounded-full bg-[#e8d9b8] opacity-50 blur-3xl" />
          <div className="absolute -bottom-8 -left-5 h-36 w-36 rounded-full bg-[#b9d1b7] opacity-60 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-gradient-to-br from-[#c9e1e3] via-[#e8dfc6] to-[#d6e4cb] p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-[#526e57]">
                YOUR NEXT ADVENTURE
              </span>
              <span className="text-2xl">✦</span>
            </div>

            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <span className="text-9xl drop-shadow-sm">🏝️</span>
              <h2 className="mt-5 text-3xl font-bold text-[#344a40]">Somewhere beautiful.</h2>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#526e57]">
                Discover new places, plan exciting activities, and make every journey yours.
              </p>
            </div>

            <div className="rounded-2xl bg-white/85 p-4 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#89938b]">YOUR TRAVEL COMPANION</p>
                  <p className="mt-1 font-bold">Every trip, one place.</p>
                </div>
                <span className="text-3xl">🧭</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold tracking-widest text-[#7b9b78] uppercase">
                FIND YOUR INSPIRATION
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Where will you go next?</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#89938b]">
              Every great adventure begins with a destination and a little inspiration.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {destinations.map((destination) => (
              <article
                key={destination.name}
                className="group overflow-hidden rounded-3xl border border-[#eeeee8] bg-[#faf9f6] transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-52 items-center justify-center bg-gradient-to-br ${destination.background}`}
                >
                  <span className="text-8xl transition duration-300 group-hover:scale-110">
                    {destination.emoji}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <p className="mt-2 text-sm text-[#89938b]">{destination.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-widest text-[#7b9b78] uppercase">
              SIMPLE TRAVEL PLANNING
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Everything you need for your next trip.
            </h2>
            <p className="mt-4 leading-7 text-[#89938b]">
              Spend less time organizing and more time enjoying the journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-3xl border border-[#e9e8e2] bg-white p-8 transition hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{feature.icon}</span>
                  <span className="text-sm font-semibold text-[#aab5a7]">{feature.number}</span>
                </div>
                <h3 className="mt-7 text-xl font-bold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-[#89938b]">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#526e57] px-8 py-16 text-center text-white md:px-16">
          <span className="text-4xl">🌍</span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold md:text-5xl">
            Your next adventure is waiting.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/80">
            Start organizing your travel plans and turn your ideas into unforgettable experiences.
          </p>
          <Link
            href="/register"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#526e57] transition hover:bg-[#edf1e9]"
          >
            Plan your first trip →
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#e9e8e2] bg-white px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xl font-bold">
            trip<span className="text-[#7b9b78]">mate.</span>
          </p>
          <p className="text-sm text-[#89938b]">Making every journey easier. © 2026 TripMate.</p>
        </div>
      </footer>
    </main>
  );
}

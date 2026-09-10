export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B2E2A] text-[#F9F5EC]">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold tracking-tight">Renovate Africa</h1>
        <p className="mt-4 text-[#E8DDD0] max-w-xl">
          We help small businesses fix their shop so money does not spoil. Founded at 08:45 by Zeeter + Sunny.
        </p>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <img src="/founders/renovate-founders.jpg" alt="Founders" className="w-full rounded-[18px] object-cover aspect-[4/3]" />
          <div className="bg-[#F9F5EC] text-[#1E1E1E] rounded-[18px] p-6">
            <div className="flex items-center gap-3">
              <img src="/team/tunde-window.jpg" alt="Tunde" className="w-12 h-12 rounded-full object-cover aspect-square" />
              <div><div className="font-semibold">Tunde</div><div className="text-sm opacity-70">08:45 window</div></div>
            </div>
            <p className="mt-4 text-sm">Single image, no distortion.</p>
            <a href="#waitlist" className="mt-6 inline-flex bg-[#E2FF54] text-[#1E1E1E] px-6 py-3 rounded-full font-bold">Join Waitlist</a>
          </div>
        </div>
      </section>
    </main>
  );
}

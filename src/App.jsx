import man from "./images/image 67.png";
import mac from "./images/cmm-big@2x.png (1).png";
import laptop from "./images/coderunner@2x.png.png";
import meeting from "./images/meeter@2x.png.png";
import icon from "./images/icon-cmm.png.png";
import logo from "./images/Frame.png";
import group from "./images/Group.png"; 

function Icon({ d, className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}





function Button({ variant = "primary", children, className, ...rest }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition active:translate-y-[1px]";
  const styles =
    variant === "primary"
      ? "bg-white text-[#0f1016] hover:bg-white/90"
      : variant === "ghost"
      ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
      : "bg-[#1f2230] text-white hover:bg-[#262a3b]";

  return (
    <button className={[base, styles, className].join(" ")} {...rest}>
      {children}
    </button>
  );
}

function TopNav() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/5 bg-[#1f2026]/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="text-lg font-extrabold tracking-tight text-white">
        <img src={logo} alt="" />
          </span>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-2 text-sm font-medium text-white/70 md:flex">
            <a className="hover:text-white transition-colors px-2" href="#">
              How it works
            </a>
            <span className="text-white/30">•</span>
            <a className="hover:text-white transition-colors px-2" href="#">
              All apps
            </a>
            <span className="text-white/30">•</span>
            <a className="hover:text-white transition-colors px-2" href="#">
              Pricing
            </a>
            <span className="text-white/30">•</span>
            <a className="hover:text-white transition-colors px-2" href="#">
              For Teams
            </a>
            <span className="text-white/30">•</span>
            <a className="hover:text-white transition-colors px-2" href="#">
              Blog
            </a>
            <span className="text-white/30">•</span>
            <a className="hover:text-white transition-colors px-2" href="#">
              Podcast
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="hidden md:inline-flex border-white/20 bg-transparent font-medium text-white/80 transition-all hover:bg-white/5 hover:text-white"
            >
              Sign In
            </Button>

            <button className="inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10 transition-colors md:hidden">
              <svg
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-black blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-black blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="relative">
          <div className="absolute left-3 top-4 z-10 hidden h-20 w-20 rotate-[-12deg] rounded-lg border-2 border-white/20 bg-gradient-to-br from-[#f6c57a]/80 to-[#e6b56a]/80 backdrop-blur-sm md:block">
            <div className="flex h-full items-center justify-center p-2 text-center">
              <span className="text-[10px] font-bold uppercase tracking-tight text-[#0f1016]">
                boost your
                <br />
                productivity
              </span>
            </div>
          </div>

          <div className="absolute left-12 top-28 z-10 hidden h-20 w-20 rotate-[10deg] rounded-lg border-2 border-white/20 bg-gradient-to-br from-[#a9f0d7]/80 to-[#99e0c7]/80 backdrop-blur-sm md:block">
            <div className="flex h-full items-center justify-center p-2 text-center">
              <span className="text-[10px] font-bold uppercase tracking-tight text-[#0f1016]">
                thousands
                <br />
                of tasks
              </span>
            </div>
          </div>

          <div className="absolute left-0 top-44 z-10 hidden h-20 w-20 rotate-[6deg] rounded-lg border-2 border-white/20 bg-gradient-to-br from-[#a6d8ff]/80 to-[#96c8ef]/80 backdrop-blur-sm md:block">
            <div className="flex h-full items-center justify-center p-2 text-center">
              <span className="text-[10px] font-bold uppercase tracking-tight text-[#0f1016]">
                work
                <br />
                smarter
              </span>
            </div>
          </div>

          <div className="absolute right-10 top-6 z-10 hidden h-20 w-20 rotate-[10deg] rounded-lg border-2 border-white/20 bg-gradient-to-br from-[#ffd4e6]/80 to-[#efc4d6]/80 backdrop-blur-sm md:block">
            <div className="flex h-full items-center justify-center p-2 text-center">
              <span className="text-[10px] font-bold uppercase tracking-tight text-[#0f1016]">
                free trial
                <br />7 days
              </span>
            </div>
          </div>

          <div className="absolute right-2 top-32 z-10 hidden h-20 w-20 rotate-[-12deg] rounded-lg border-2 border-white/20 bg-gradient-to-br from-[#d6ceff]/80 to-[#c6beef]/80 backdrop-blur-sm md:block">
            <div className="flex h-full items-center justify-center p-2 text-center">
              <span className="text-[10px] font-bold uppercase tracking-tight text-[#0f1016]">
                your time
                <br />
                matters
              </span>
            </div>
          </div>

          <div className="absolute right-14 top-44 z-10 hidden h-20 w-20 rotate-[6deg] rounded-lg border-2 border-white/20 bg-gradient-to-br from-[#ffcaa8]/80 to-[#efba98]/80 backdrop-blur-sm md:block">
            <div className="flex h-full items-center justify-center p-2 text-center">
              <span className="text-[10px] font-bold uppercase tracking-tight text-[#0f1016]">
                new apps
                <br />
                monthly
              </span>
            </div>
          </div>

          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="mb-6 grid size-16 place-items-center rounded-2xl">
              <img src={group} alt="" />
            </div>

            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Dozens of apps.
              <br />
              One subscription.
              <br />
              <span className="text-white/90">$9.99</span>
            </h1>

            <p className="mt-4 max-w-2xl text-pretty text-lg leading-6 text-white/65 md:text-xl">
              Power up your workflow with Setapp, a smart way to get apps.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-center">
              <button className="rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] px-8 py-3 text-sm font-semibold text-white hover:opacity-90">
                Try free for 7 days
              </button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                  FIX WIFI
                </span>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                  PLAN YOUR DAY
                </span>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                  MANAGE YOUR MAC
                </span>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                  CODE EASIER
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatYouGet() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 md:py-16">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-6">
          <h2 className="text-xl font-extrabold tracking-tight text-white md:text-2xl">
            What you get on Setapp.
          </h2>
        </div>
        <p className="text-sm leading-6 text-white/60 md:col-span-6 md:text-right">
          With a single monthly subscription at $9.99, you get 240+ apps for
          your Mac.
        </p>
      </div>

      <div className="mt-8 grid gap-6">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#d48ab0] to-[#8b4c93] shadow-soft">
          <div className="p-5 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="grid size-11 place-items-center rounded-xl bg-white text-[#0f1016]">
                  <img src={icon} alt="" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-white">
                    Keep your Mac clean
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white/75">
                    Remove junk, scan for malware, wipe email attachments
                  </p>
                </div>
              </div>
            </div>

            <img src={mac} alt="" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#efe6d7] to-[#d8cebb] shadow-soft">
            <div className="p-5">
              <div className="h-80 w-full rounded-xl ">

                <div className="">
                  <img src={laptop} alt="" />
                </div>
              </div>
                <div className="mt-4 flex items-start gap-3">
                
                  <div>
                    <p className="text-sm font-extrabold text-[#0f1016]">
                      Write code
                    </p>
                    <p className="mt-1 text-xs font-semibold text-[#0f1016]/60">
                      Create applications in more than 25 languages
                    </p>
                  </div>
                </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#2f467a] to-[#243862] shadow-soft">
            <div className="p-5">
              <div className="h-40 w-full rounded-xl ">
                <div className="mt-4 flex items-start gap-3">
                 
                  <div>
                    <p className="text-sm font-extrabold text-white">
                      Join meetings in a click
                    </p>
                    <p className="mt-1 text-xs font-semibold text-white/70">
                      Quickly access links to your meetings from the menu bar
                    </p>
                  </div>
                </div>
                <img src={meeting} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pt-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-white/75 hover:text-white"
          >
            <span>View all superpowers</span>
            <span aria-hidden className="text-base">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function Journey() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-14 md:pb-16">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-6">
          <h2 className="text-xl font-extrabold tracking-tight text-white md:text-2xl">
            Your Setapp journey.
          </h2>
        </div>
        <p className="text-sm leading-6 text-white/60 md:col-span-6 md:text-right">
          Type in your task into Setapp Search and get instant app
          recommendations.
        </p>
      </div>

      <div className="mt-6 h-px w-full bg-white/10" />

      <div className="mt-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#6b4a64] shadow-soft">
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-black/15" />

          <div className="relative grid min-h-[260px] gap-6 p-6 md:grid-cols-12 md:p-8">
            <div className="md:col-span-6">
              <p className="mt-6 max-w-md text-sm font-semibold leading-6 text-white/80">
                Musicians like Jason use Setapp to push the limits of their
                creativity, dancing through tasks for more time to play.
              </p>
              <p className="mt-3 text-xs font-semibold text-white/55">
                Jason Shannon
              </p>

              <button className="absolute bottom-6 left-6 inline-flex size-12 items-center justify-center rounded-full bg-white/95 text-[#0f1016] shadow-soft md:bottom-8 md:left-8">
                <svg
                  viewBox="0 0 24 24"
                  className="ml-0.5 size-6"
                  fill="currentColor"
                >
                  <path d="M9 7l10 5-10 5V7z" />
                </svg>
              </button>
            </div>

            <div className="relative md:col-span-6">
              <div className="absolute right-4 top-4 flex items-center gap-2 md:right-6 md:top-6">
                <button className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/15">
                  <Icon className="size-5" d="M15 18l-6-6 6-6" />
                </button>
                <button className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/15">
                  <Icon className="size-5" d="M9 6l6 6-6 6" />
                </button>
              </div>

              <div className="h-full overflow-hidden rounded-2xl bg-white/5">
                <img
                  className="h-full w-full object-cover"
                  alt="member"
                  src={man}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {Array.from({ length: 5 }).map((_, idx) => (
            <span
              key={idx}
              className={[
                "size-1.5 rounded-full",
                idx === 2 ? "bg-white/80" : "bg-white/25",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-14 md:pb-16">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-6">
          <h2 className="text-xl font-extrabold tracking-tight text-white md:text-2xl">
            Setapp in your words.
          </h2>
        </div>
        <div className="flex flex-col items-start gap-3 md:col-span-6 md:items-end">
          <p className="max-w-sm text-sm leading-6 text-white/60 md:text-right">
            What you say about how Setapp powers you up.
          </p>
          <div className="flex items-center gap-2">
            {[
              { bg: "bg-[#3b5998]", label: "f" },
              { bg: "bg-[#1da1f2]", label: "t" },
              { bg: "bg-[#e1306c]", label: "ig" },
              { bg: "bg-[#ff0000]", label: "yt" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                className={[
                  "grid size-8 place-items-center rounded-full text-xs font-extrabold text-white shadow-soft",
                  s.bg,
                ].join(" ")}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          {
            bg: "bg-[#b7c8e8]",
            icon: "t",
            body: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
            name: "Arash Pourahmadi",
            meta: "@arashpourahmadi",
          },
          {
            bg: "bg-[#dcb28b]",
            icon: "ig",
            body: "My favorite from @setapp: Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
            name: "Mauricio Sanchez",
            meta: "@mauricios",
          },
          {
            bg: "bg-[#a9a4c8]",
            icon: "f",
            body: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
            name: "Meredith Sweet",
            meta: "facebook.com/meredith",
          },
        ].map((r) => (
          <div
            key={r.name}
            className={["rounded-2xl shadow-soft", r.bg].join(" ")}
          >
            <div className="p-6">
              <p className="text-sm font-semibold leading-6 text-[#0f1016]/85">
                {r.body}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-extrabold text-[#0f1016]">
                    {r.name}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-[#0f1016]/55">
                    {r.meta}
                  </p>
                </div>
                <span className="grid size-8 place-items-center rounded-full bg-white/35 text-xs font-extrabold text-[#0f1016]">
                  {r.icon}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: 5 }).map((_, idx) => (
          <span
            key={idx}
            className={[
              "size-1.5 rounded-full",
              idx === 1 ? "bg-white/80" : "bg-white/25",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}

function PricingCta() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-14 md:pb-16">
      <div className="rounded-2xl bg-[#f2f2f2] px-6 py-10 shadow-soft md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <div className="mt-1 grid size-10 place-items-center rounded-xl ">
            <img src={group} alt="" />
            </div>
            <div>
              <p className="text-base font-extrabold tracking-tight text-[#0f1016]">
                Superpowers starting $9.99/month.
              </p>
              <p className="mt-1 text-sm font-semibold text-[#0f1016]/70">
                Free for 7 days.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-md bg-[#0f1016] px-6 py-3 text-sm font-extrabold text-white hover:bg-[#171a25]">
              Get started now
            </button>
            <button className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-6 py-3 text-sm font-extrabold text-[#0f1016] hover:bg-black/5">
              More about Setapp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="border-t border-white/10 bg-[#1b1c22]">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <div className="grid size-9 place-items-center rounded-xl">
                  <img src={group} alt="" />
              </div>
              <span className="text-base font-extrabold tracking-tight text-white">
                Setapp
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
              A single subscription for a curated set of productivity and
              creativity apps.
            </p>

            <div className="mt-6">
              <p className="text-xs font-extrabold uppercase tracking-wider text-white/70">
                Subscribe
              </p>
              <div className="mt-3 flex items-center gap-2">
                <input
                  className="h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 text-sm font-semibold text-white/80 placeholder:text-white/35 focus:outline-none"
                  placeholder="Email address"
                />
                <button className="h-10 shrink-0 rounded-md bg-white px-4 text-sm font-extrabold text-[#0f1016] hover:bg-white/90">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:col-span-8 md:grid-cols-4">
            {[
              {
                title: "Product",
                links: ["Features", "Catalog", "Pricing", "Updates"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Press", "Partners"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact", "Status", "FAQ"],
              },
              {
                title: "Legal",
                links: ["Terms", "Privacy", "Cookies", "Licenses"],
              },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-xs font-extrabold uppercase tracking-wider text-white/70">
                  {col.title}
                </p>
                <div className="mt-3 space-y-2">
                  {col.links.map((l) => (
                    <a
                      key={l}
                      className="block text-sm font-semibold text-white/55 hover:text-white"
                      href="#"
                    >
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Setapp. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <select className="h-9 rounded-md border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/75">
              <option>English</option>
              <option>Deutsch</option>
              <option>Español</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#1f2026] text-white">
      <TopNav />
      <Hero />
      <WhatYouGet />
      <Journey />
      <Reviews />
      <PricingCta />
      <Footer />
    </div>
  );
}

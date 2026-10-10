import { useState } from "react";
import { FiArrowLeft, FiTrendingUp, FiHome, FiUsers, FiInfo, FiX } from "react-icons/fi";

const stats = [
{
value: "15,000+",
label: "راضي پېرودونکي",
icon: FiUsers,
},
{
value: "2,500+",
label: "فعال ملکیتونه",
icon: FiHome,
},
{
value: "98%",
label: "د معاملاتو بریالیتوب",
icon: FiTrendingUp,
},
];

export default function HeroSection() {
const [showDetails, setShowDetails] = useState(false);

const handleProperties = () => {
document.getElementById("properties")?.scrollIntoView({
behavior: "smooth",
});
};

return ( <section
   dir="rtl"
   className="mx-auto my-6 w-[94%] max-w-7xl overflow-hidden rounded-[28px] bg-slate-900 text-white shadow-xl"
 >
<div
className="relative min-h-\[520px]\ bg-cover bg-center"
style={{
backgroundImage:
"linear-gradient(90deg, rgba(8,18,32,.85), rgba(8,18,32,.55)), url('/images/property-hero.jpg')",
}}
> <div className="relative z-10 grid min-h-\[520px]\ items-center gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:p-14">

      {/* Right side: statistics */}
      <div className="order-2 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:order-1">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/15 bg-white/\[0.08] p-5 text-center shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover\:bg-white/\[0.\13]\"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/25 text-blue-400">
                <Icon size={23} />
              </div>

              <h3 className="text-2xl font-extrabold sm:text-3xl">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm text-slate-300">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Left side: heading and buttons */}
      <div className="order-1 text-right lg:order-2">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-2 text-sm text-blue-200">
          <FiHome />
          <span>ملکیت په اسانه پیدا کړئ</span>
        </div>

        <h1 className="text-3xl font-extrabold leading-relaxed sm:text-4xl xl:text-5xl">
          د خپل ځانګړي ملکیت
          <span className="text-blue-400"> د پلور لپاره </span>
          چمتو یاست؟
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
          خپل ملکیت په اسانه معرفي کړئ، له پېرودونکو سره اړیکه ونیسئ
          او د کورونو، اپارتمانونو او نورو ملکیتونو مناسب انتخابونه
          ومومئ.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleProperties}
            className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold transition hover:bg-blue-700"
          >
            ملکیتونه وګورئ
            <FiArrowLeft size={19} />
          </button>

          <button
            type="button"
            onClick={() => setShowDetails(true)}
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-4 font-bold transition hover:bg-white/15"
          >
            <FiInfo size={18} />
            نور معلومات
          </button>
        </div>
      </div>
    </div>

    {/* Details modal */}
    {showDetails && (
      <div
        className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/75 p-5 backdrop-blur-sm"
        onClick={() => setShowDetails(false)}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="details-title"
          className="w-full max-w-md rounded-2xl border border-white/15 bg-slate-900 p-6 shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between gap-4">
            <h2 id="details-title" className="text-xl font-bold">
              زموږ د ملکیتونو خدمتونه
            </h2>

            <button
              type="button"
              onClick={() => setShowDetails(false)}
              aria-label="بندول"
              className="rounded-lg p-2 hover:bg-white/10"
            >
              <FiX size={22} />
            </button>
          </div>

          <p className="mt-4 leading-8 text-slate-300">
            زموږ په وېبپاڼه کې د ملکیتونو معلومات وګورئ، مناسب ملکیت
            انتخاب کړئ او د معاملې لپاره له اړوند پلورونکي سره اړیکه
            ونیسئ.
          </p>

          <button
            type="button"
            onClick={() => setShowDetails(false)}
            className="mt-5 w-full rounded-xl bg-blue-600 px-5 py-3 font-bold hover:bg-blue-700"
          >
            سمه ده
          </button>
        </div>
      </div>
    )}
  </div>
</section>


);
}

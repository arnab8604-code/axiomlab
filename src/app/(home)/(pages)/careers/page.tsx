import CareerCard from "@/components/careers/career-card";
import { careers } from "@/temp-data/career/career";

const CareersPage = () => {
  return (
    <main className="bg-[#D8E6EE] pb-24">

      <div className="mx-auto max-w-7xl px-6">
        {/* Careers */}

        <section className="space-y-8">

          {careers.length > 0 ? (

            careers.map((career) => (

              <CareerCard
                key={career.id}
                career={career}
              />

            ))

          ) : (

            <div className="rounded-[35px] bg-white p-16 text-center shadow-xl">

              <h2 className="text-3xl font-bold text-slate-800">
                No Open Positions
              </h2>

              <p className="mt-4 text-slate-600">
                There are currently no vacancies available.
                Please check back again soon.
              </p>

            </div>

          )}

        </section>

      </div>

    </main>
  );
};

export default CareersPage;
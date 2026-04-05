import RecipeExplorer from '@/components/sections/recipe-explorer';
import SectionIntro from '@/components/ui/section-intro';

export default function RezeptePage() {
  return (
    <>
      <section className="pt-10 md:pt-14">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className="hero-shell rounded-[2.4rem] border border-line/60 px-6 py-10 shadow-float md:px-10 md:py-12">
            <SectionIntro
              eyebrow="Rezepte"
              title="Essen, das dir wirklich guttut und nicht nach Regelwerk schmeckt."
              description="Alltagstaugliche Rezepte, die satt machen und guttun. Ohne komplizierte Zutatenlisten, ohne Stress in der Küche."
            />
          </div>
        </div>
      </section>

      <RecipeExplorer />

      <section className="pb-10 pt-2 md:pb-16">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className="rounded-[2rem] border border-line/45 bg-sageDeep p-6 text-background shadow-panel md:p-9">
            <p className="eyebrow text-background/80 before:bg-background/50">Mehr entdecken</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.98] tracking-[-0.04em] text-goldAccent">
              Lust auf mehr? Im Magazin warten weitere Impulse.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-background/82">
              Kräuter, Schlaf, Routinen und kleine Veränderungen mit echter Wirkung. Ruhig
              geschrieben, ehrlich gemeint.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

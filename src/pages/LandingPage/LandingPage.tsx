import { LeadForm } from "../../features/form";
import FitnessImage from "../../assets/images/fitness.png";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#170F08] text-[#FFFFFF] flex flex-col justify-between">
      <main>
        <div className="flex flex-col md:flex-row items-center justify-end">
          <div className="flex flex-col items-center gap-[21px] p-5 lg:p-0 lg:mr-[3%]">
            <h1 className="font-bold font-sans text-center text-[2rem] sm:text-[48px] md:text-[2rem] xl:text-[48px] leading-[1.2] uppercase">
              Новая программа <br /> тренировок <br /> на 30 дней
            </h1>
            <p className="text-[1.5rem] sm:text-[36px] md:text-[1.5rem] xl:text-[36px] leading-[1.2] text-center">
              Достигай результата без <br /> диет и стресса
            </p>
            <LeadForm />
          </div>

          <div className="md:w-[51vw]">
            <img src={FitnessImage} alt="Fitness" className="w-full h-auto" />
          </div>
        </div>
      </main>
      <footer className="text-right p-2">© 2025 Моя компания</footer>
    </div>
  );
};

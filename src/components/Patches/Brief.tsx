import { ModPack } from "../../types";

interface Props {
  mod: ModPack;
}
const Brief = ({ mod }: Props) => {
  if (mod.id == "dynasty") {
    return (
      <>
        <div
          className={`
        w-[85svw] flex flex-col gap-4 items-center justify-between min-h-[20svh] mx-auto my-[30px] bg-black-background text-offwhite rounded-lg shadow-lg shadow-primary border-2 border-primary font-Poppins z-10
        lg:w-[70svw] lg:px-[5svw] lg:py-[5svh] lg:flex-row lg:items-start 
      `}
        >
          <ul className="flex flex-col justify-around min-h-[40svh] h-full list-['➦'] w-[80%] lg:w-full">
            <h2 className="text-4xl font-bold text-center mx-auto my-[2svh] text-primary">
              Features
            </h2>
            {mod.features.map((feature, index) => (
              <li
                key={`feature-${index}`}
                className="text-lg font-semibold text-center mx-auto my-[2svh] lg:my-1"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <h2 className="mb-10 mt-20 text-4xl font-Funnel text-primary/80 font-semibold">Arenas to Be Revealed Shortly</h2>
      </>
    );
  }

  return (
    <div
      className={`
        w-[85svw] flex flex-col gap-4 items-center justify-between min-h-[20svh] mx-auto my-[30px] bg-black-background text-offwhite rounded-lg shadow-lg shadow-primary border-2 border-primary font-Poppins z-10
        lg:w-[70svw] lg:px-[5svw] lg:py-[5svh] lg:flex-row lg:items-start 
      `}
    >
      <ul className="flex flex-col justify-around min-h-[40svh] h-full list-['➦'] w-[80%] lg:w-full">
        <h1 className="text-4xl font-bold text-center mx-auto my-[2svh] text-primary">
          Features
        </h1>
        {mod.features.map((feature, index) => (
          <li
            key={`feature-${index}`}
            className="text-lg font-semibold text-center mx-auto my-[2svh] lg:my-1"
          >
            {feature}
          </li>
        ))}

        <h1 className="text-4xl font-bold text-center mx-auto my-[2svh] text-primary">
          Limitations
        </h1>
        {mod.cons.map((limitation, index) => (
          <li
            key={`limitation-${index}`}
            className="text-lg font-semibold text-center mx-auto my-[2svh]"
          >
            {limitation}
          </li>
        ))}
      </ul>

      <div className="bg-primary rounded shadow shadow-primary w-[80%] h-1 lg:h-[80%] lg:min-h-[100svh] lg:w-1" />

      <ul className="flex flex-col justify-around min-h-[40svh] h-full list-['➦'] w-[80%] m-5">
        <h1 className="text-5xl font-semibold text-center mx-auto my-[2svh] text-primary">
          Arena
        </h1>
        <div className="">
          {mod.arena.map((item, index) => (
            <li
              key={`arena-${index}`}
              className="text-lg font-medium text-left "
            >
              {item}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Brief;

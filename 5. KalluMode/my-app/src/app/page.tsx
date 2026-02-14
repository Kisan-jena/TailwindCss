'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function page() {
  const { theme, setTheme } = useTheme();
  
  const Logos = [
    {
      name: 'ChatGPT (OpenAI)',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Mistral_AI_logo_%282025%E2%80%93%29.svg',
    },
    {
      name: 'OpenAI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Meta_Platforms_logo.svg/1920px-Meta_Platforms_logo.svg.png',
    },
    {
      name: 'Claude AI (Anthropic)',
      logo: './claude-color.svg',
    },
    {
      name: 'Perplexity AI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Google_Gemini_icon_2025.svg/1280px-Google_Gemini_icon_2025.svg.png',
    },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    // <div className="relative  h-full w-full flex items-center justify-center">
    //   <div className="relative z-10 h-80 w-60 bg-neutral-50 shadow-2xl border border-neutral-100 rounded-4xl overflow-clip">
    /* <div className="flex bg-blue-00 h-40 items-center gap-5 justify-center mask-r-from-50% mask-l-from-50% animate-pulse">
          {Logos.map((item, index) => (
            <div
              key={index}
              className="rounded-full  bg-neutral-300 flex items-center justify-center size-10"
            >
              <Image
                className="rounded-full "
                src={item.logo}
                alt={item.name}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div> */

    <div className="relative z- h-full w-full flex items-center dark:bg-black justify-center">
      <div className="relative z-10 h-80 w-60 bg-neutral-100 dark:bg-neutral-900 shadow-2xl border border-neutral-100 dark:border-neutral-800 rounded-xl overflow-clip">
        <div className="relative bg-amber-00 dark:bg-neutral-900 mask-r-from-50% mask-l-from-50% mask-b-from-50% mask-t-from-50% ">
          <Pattern />
          <div className="relative flex bg-blue-00 dark:bg-neutral-00 h-40 items-center gap-5 justify-center  animate-marquee">
            {Logos.map((item, index) => (
              <div
                key={index}
                className="rounded-full overflow-clip bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center size-10"
              >
                <Image
                  className="rounded-full "
                  src={item.logo}
                  alt={item.name}
                  width={20}
                  height={20}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <h2 className="font-bold text-neutral-600 dark:text-neutral-200 text-[8px]">
            These LLMs are getting out of hand
          </h2>
          <p className="text-neutral-400 dark:text-neutral-400 text-[8px] mt-1">
            I swear to god there&apos;s always another AI dropping and twitter
            goes crazy. It&apos;s all a myth guys. Like seriously, one day
            it&apos;s Claude, then GPT-4, then Gemini, then Claude 2, then GPT-4
            Turbo. When will it end? They&apos;re all just fancy
            autocomplete.It&apos;s all a myth guys. Like seriously.
          </p>
        </div>
        <button
          onClick={toggleTheme}
          className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 borde text-[10px] text-neutral-500 mt-2 ml-2 dark:hover:bg-neutral-950 hover:bg-neutral-200 cursor-pointer"
        >
          Switch me
        </button>
      </div>
    </div>
  );
}

const Pattern = () => {
  return (
    <div className="absolute inset-0 z-0 rounded-lg m-auto bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] bg-fixed pointer-events-none"></div>
  );
};

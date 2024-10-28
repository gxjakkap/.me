'use client'

import { useTheme } from "next-themes"

interface StackImageWithDarkProps {
    className: string,
    src: string,
    srcDark: string | null,
    alt: string
}

interface EachStackData {
    image: string,
    image_dark: string | null,
    name: string,
    xp: number
}

interface StackData {
    front: EachStackData[],
    back: EachStackData[],
    tools: EachStackData[]
}

type SkillCategory = 'front' | 'back' | 'tools'

export const StackImageWithDark = ({ className, src, srcDark, alt }: StackImageWithDarkProps) => {
    const { theme } = useTheme()
    if (theme === "dark" && srcDark) return <img className={className} src={srcDark} alt={alt} />
    else return <img className={className} src={src} alt={alt} />
}

const dataMap: { name: SkillCategory; displayName: string }[] = [{name: 'front', displayName: 'Frontend'}, {name: 'back', displayName: 'Backend'}, {name: 'tools', displayName: 'Tools / Other languages'}]

export const Skills = ({ data: stack }: { data: StackData }) => {
    return (
        <section className="flex flex-col gap-x-8 pb-28 font-inter xl:mt-48 xl:pb-48 scroll-mt-12" id="skills">
          <h2 className="font-inter font-medium text-3xl mt-4 text-center lg:text-left">
            Skills⚙️
          </h2>
          <div className="flex flex-col gap-y-8 mt-10">
              {
                dataMap.map(cur => (
                    <div key={cur.name} className="flex flex-col gap-y-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
                        <h3 className="text-2xl font-inter font-medium">{cur.displayName}</h3>
                        <div className="flex flex-wrap gap-y-8 gap-x-5 mx-auto lg:mx-0">
                            {stack[cur.name]?.map((ea) => (
                                <div key={ea.name} className="w-20 h-20 flex flex-col gap-y-2 lg:gap-y-1 rounded-2xl" suppressHydrationWarning>
                                    <StackImageWithDark className="w-14 h-14 mx-auto" src={ea.image} srcDark={ea.image_dark || null} alt={ea.name} />
                                    <p className="font-inter text-center">{ea.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
              }
          </div>
      </section>
    )
}
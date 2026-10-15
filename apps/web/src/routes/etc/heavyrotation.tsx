import { createFileRoute } from "@tanstack/react-router"
import { HeavyRotationList } from "../../components/heavyrotation/list"
import { PAGE_META } from "../../lib/meta"

export const Route = createFileRoute("/etc/heavyrotation")({
	head: () => ({ meta: PAGE_META["/etc/heavyrotation"] }),
	component: HeavyRotationPage,
})

function HeavyRotationPage() {
	return (
		<main className="mx-auto flex w-3/4 grow flex-col pt-4 lg:ml-[25%] lg:mr-0 lg:mt-14 lg:w-1/2 lg:pt-10">
			<h1 className="mt-8 text-center font-inter text-4xl font-medium lg:text-left lg:text-3xl">
				Jakka&apos;s heavy rotation🎶
			</h1>
			<div className="mt-5 flex flex-col gap-y-3">
				<p className="text-[#313638] dark:text-[#e0e0e0]">Period: 4w</p>
				<HeavyRotationList />
			</div>
		</main>
	)
}

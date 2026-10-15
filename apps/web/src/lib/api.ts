import { treaty } from "@elysiajs/eden"
import { env } from "@repo/env/web"
import type { App } from "api"

export const api = treaty<App>(`${env.VITE_API_BASE_URL}`)

// Eden returns { data, error } instead of throwing; TanStack Query needs a throw to enter error state
export async function unwrap<R extends { data: unknown; error: unknown }>(req: Promise<R>) {
	const { data, error } = await req
	if (error) throw error
	return data as Extract<R, { error: null }>["data"]
}

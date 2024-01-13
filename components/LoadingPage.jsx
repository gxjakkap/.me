import NavBar from "./NavBar"
import { TailSpin } from 'react-loader-spinner'

const LoadingPage = () => {
    return (
        <main className="flex h-screen w-full flex-col">
            <NavBar />
            <div className="flex flex-col gap-y-2 min-h-screen items-center justify-center bg-base-200">
                <TailSpin
                    height="100"
                    width="100"
                    ariaLabel="loading"
                    color="#2563eb"
                    radius="1"
                    visible={true}
                />
                <p className="text-center">Loading...</p>
            </div>
        </main>
    )
}

export default LoadingPage
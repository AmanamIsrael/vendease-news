import { FallbackProps } from "react-error-boundary"


const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    return (
        <div role="alert" className='text-white h-screen w-full grid place-content-center'>
            <div className="text-center grid gap-3">

                <p className="capitalize text-2xl">Something went wrong</p>
                <pre>{error.message} 😔</pre>
                <button type="button" className="bg-green p-2 text-black" onClick={resetErrorBoundary}>Try again</button>
            </div>

        </div>
    )
}

export default ErrorFallback
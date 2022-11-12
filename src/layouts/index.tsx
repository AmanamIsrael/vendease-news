import React from "react"


interface DefaultLayoutProps {
    children: React.ReactNode
}

const NewsLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default NewsLayout
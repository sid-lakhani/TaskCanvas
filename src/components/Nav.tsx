export default function Nav() {
    return (
        <div>
            <div className="flex justify-center items-center">
                <h1 className="text-white font-bold text-7xl">
                    Task<span className="text-gradient">Canvas</span>
                </h1>
            </div>
            <style>
                {`
                    .text-gradient {
                        background-image: var(--accent-gradient);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-size: 500%;
                        background-position: 10%;
                    }
                `}
            </style>
        </div>
    );
}

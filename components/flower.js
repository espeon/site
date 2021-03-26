import { useTheme } from 'next-themes'

const Flower = () => {
    const { theme, setTheme } = useTheme();
    const value = theme !== "light"
        return (
            <svg width="600px" height="700px" viewBox="0 0 600 700" className="hidden lg:block absolute right-auto inset-y-0 h-auto ">
                <defs>
                    <mask id="my-svg-mask2">
                        <polygon id="Oval" fill="#fff" points="600,0 100,0 0,900 600,900"></polygon>
                    </mask>
                </defs>
                    <image mask="url(#my-svg-mask2)" xlink="http://www.w3.org/1999/xlink" href="./dark-flower.webp" width="600" height="700"className={value?"show fade-in-longer dark-flower":"hidden"}></image>
                    <image mask="url(#my-svg-mask2)" xlink="http://www.w3.org/1999/xlink" href="./light-flower.webp" width="600" height="700" className={value?"hidden":"show fade-in-longer dark-flower"}></image>
            </svg>)

};

export default Flower;

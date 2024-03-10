import Image from "next/image"
import Right from './../../icons/right';


export default function Hero() {
    return (
        <section className="hero">
            <div className="py-12">
                <h1 className="text-4xl font-semibold tracking-wide mt-4">
                    Everything <br /> is better<br /> with a&nbsp;<span className="text-primary">Pizza</span>
                </h1>
                <p className="text-gray-500 my-4 text-sm">Pizza is the missing piece that makes every day complete , a simple yet delicious joy in life </p>
                <div className="flex gap-4 items-center text-sm">
                    <button className="flex items-center bg-primary text-white px-4 py-2 gap-2 rounded-full uppercase">
                        Order now
                        <Right />
                    </button>

                    <button className="flex gap-2 text-gray-600 font-semibold py-2">
                        Learn more
                        <Right />
                    </button>
                </div>
            </div>

            <div className="relative">
                <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} priority />
            </div>
        </section>
    )
}
import hero from '../../assets/videos/hero.mp4';
import { LinkPreview } from '../ui/link-preview';

export default function Video() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={hero} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative h-full w-full flex items-center justify-center">
                <h1 className="text-6xl md:text-7xl font-['Cherish'] text-white tracking-wider animate-pulse">
                    <LinkPreview
                        url="https://soundcloud.com/silentsorrowshadow"
                        isStatic={true}
                        imageSrc="https://i1.sndcdn.com/avatars-hO8ksexxvuOOtdZI-WyUv9Q-t500x500.jpg"
                        className="text-6xl md:text-7xl font-['Cherish'] text-white tracking-wider animate-pulse"
                    >
                        Dayan
                    </LinkPreview>
                </h1>
            </div>

        </section>
    );
}
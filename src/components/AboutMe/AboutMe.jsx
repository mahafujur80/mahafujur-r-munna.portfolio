
export default function AboutMe() {
    return (
        <section className="px-4 md:px-8 py-20 text-white">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT TEXT */}
                <div className="space-y-6">

                    <h2 className="text-3xl md:text-5xl font-bold">
                        About <span className="text-purple-400">Me</span>
                    </h2>

                    <p className="text-gray-400 leading-relaxed">
                        I started my programming journey with curiosity about how websites work.
                        Slowly I learned HTML, CSS, JavaScript, and now I build modern web apps using
                        React and Next.js.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        I enjoy building clean, responsive and interactive UI. I love solving problems,
                        learning new technologies and improving my development skills every day.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        Outside of programming, I enjoy exploring new tech ideas, watching football,
                        and sometimes designing UI concepts just for fun. I believe creativity and
                        consistency are the key to becoming a better developer.
                    </p>

                    {/* HIGHLIGHTS */}
                    <div className="grid grid-cols-2 gap-4 pt-4">

                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <h4 className="text-purple-400 font-semibold">Journey</h4>
                            <p className="text-sm text-gray-400">Self-taught Developer</p>
                        </div>

                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <h4 className="text-purple-400 font-semibold">Focus</h4>
                            <p className="text-sm text-gray-400">Frontend + UI Design</p>
                        </div>

                    </div>

                </div>

                {/* RIGHT IMAGE / CARD */}
                <div
                    
                    className="flex justify-center">
                    <div className="w-full max-w-sm p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

                        <h3 className="text-xl font-semibold mb-4 text-purple-400">
                            Developer Mindset
                        </h3>

                        <ul className="space-y-3 text-gray-300 text-sm">

                            <li>✔ Clean & reusable code</li>
                            <li>✔ Focus on UI/UX design</li>
                            <li>✔ Always learning new tech</li>
                            <li>✔ Problem solving mindset</li>

                        </ul>

                    </div>

                </div>

            </div>

        </section>
    )
}
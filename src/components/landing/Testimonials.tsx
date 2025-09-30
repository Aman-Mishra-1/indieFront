import Marquee from "react-fast-marquee";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    { name: "Aman Mishra", role: "Freelance Developer", text: "IndieConnect helped me connect with amazing clients and build a sustainable freelance career." },
    { name: "Shubham Sharma", role: "Graphic Designer", text: "A game-changer for freelancers! IndieConnect makes finding quality projects so much easier." },
    { name: "Joshua Thadi", role: "Marketing Expert", text: "The best platform to start freelancing—secure payments and great opportunities!" },
    { name: "Daniel Arulraj", role: "UI/UX Designer", text: "I love how IndieConnect simplifies freelancing. The experience has been seamless and rewarding." },
    { name: "Lucy", role: "Content Writer", text: "IndieConnect provides a fantastic platform for writers like me to showcase talent and find meaningful projects." }
];

const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
    return (
        <section className="w-full mx-auto overflow-hidden mt-20">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                What People Say About IndieConnect
            </h2>

            <div className="relative">
                {/* Left fade gradient */}
                <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none
                    bg-gradient-to-r from-white dark:from-gray-950 to-transparent" />

                {/* Marquee Section */}
                <Marquee speed={70} gradient={false} pauseOnHover={true} className="overflow-hidden">
                    {extendedTestimonials.map((testimonial, i) => (
                        <Card key={i} className="w-[280px] mx-3 p-6 shadow-md text-center flex-shrink-0 bg-white dark:bg-gray-950">
                            <CardContent>
                                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.text}"</p>
                                <h3 className="mt-3 font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </CardContent>
                        </Card>
                    ))}
                </Marquee>

                <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none
                    bg-gradient-to-l from-white dark:from-gray-950 to-transparent" />
            </div>
        </section>
    );
};

export default Testimonials;
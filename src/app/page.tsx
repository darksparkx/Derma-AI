"use client";
import UploadButton from "@/components/UploadButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<main className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
			{/* Hero Section */}
			<div className="bg-[url('bg.jpg')] h-screen  bg-no-repeat bg-cover w-screen flex flex-col justify-center items-center">
				<section className=" text-black text-center py-20 bg-gray-600 bg-opacity-70 p-20 rounded-sm">
					<h1 className="text-6xl font-bold mb-4">
						Welcome to Derma Wellness Clinic
					</h1>
					<p className="text-lg text-white">
						Your journey to radiant skin begins here.
					</p>
					<Button
						onClick={() => scrollToSection("services")}
						className="mt-6 bg-black text-white py-2 px-4 rounded-full inline-block hover:bg-blue-700 hover:text-white transition duration-300"
					>
						Explore Our Services
					</Button>
				</section>
			</div>

			{/* About Section */}
			<section className="bg-gray-200 py-16 text-center w-full min-h-[500px]">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold mb-8">About Us</h2>
					<p className="text-lg leading-relaxed">
						Welcome to Derma Wellness Clinic, where we blend
						science, art, and compassion to redefine skincare. Our
						mission is to empower you with the confidence that comes
						from healthy, radiant skin. Founded with a passion for
						dermatological excellence, our clinic is a haven for
						those seeking personalized and innovative skincare
						solutions. At the heart of our practice is a team of
						highly skilled and compassionate dermatologists who
						believe in the transformative power of skincare. Our
						approach goes beyond treating skin conditions; we focus
						on understanding the unique needs of your skin and
						curating tailored treatments that enhance your natural
						beauty. Whether you're dealing with acne, aging
						concerns, or simply want to maintain a glowing
						complexion, we've got you covered. What sets us apart is
						our commitment to staying at the forefront of
						dermatological advancements. Our practitioners
						continually update their skills and knowledge to bring
						you the latest and most effective skincare techniques.
						We leverage state-of-the-art technology and
						evidence-based practices to ensure optimal results. At
						Derma Wellness Clinic, we understand that each
						individual's skin is unique. That's why we prioritize
						open communication and collaboration with our clients.
						Your journey with us begins with a thorough
						consultation, where we listen to your concerns, assess
						your skin's needs, and develop a personalized treatment
						plan. Beyond clinical expertise, we foster a warm and
						welcoming environment. We want you to feel comfortable
						and confident throughout your skincare journey. Our
						dedicated staff is here to guide you, providing
						education, support, and a touch of luxury in every
						visit. Discover the joy of healthy, radiant skin with
						Derma Wellness Clinic. Your skin deserves the best, and
						we are here to deliver excellence in dermatological
						care.
					</p>
				</div>
			</section>

			{/* Services Section */}
			<section
				className="py-16 text-center"
				id="services"
			>
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold mb-8">Our Services</h2>
					<Link
						href="/consult"
						className="flex justify-center"
					>
						{/* Service Cards - You can repeat this for each service */}
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold mb-4">
								Free Dermatology Consultation
							</h3>
							<p className="text-gray-600">
								Get expert advice and personalized treatment
								plans tailored to your skin's needs.
							</p>
						</div>
						{/* Repeat the above div for other services */}
					</Link>
					<Link
						href="#services"
						className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-full inline-block hover:bg-blue-700 hover:text-white transition duration-300"
					>
						View All Services
					</Link>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="bg-gray-200 py-16 text-center">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold mb-8">
						What Our Clients Say
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Testimonial Cards - Repeat for each testimonial */}
						<div className="bg-white p-6 rounded-lg shadow-md">
							<p className="text-gray-600 italic">
								"The results exceeded my expectations. Thank
								you, Derma Wellness Clinic!"
							</p>
							<p className="text-gray-800 font-semibold mt-2">
								- Emily S.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<p className="text-gray-600 italic">
								"The skincare regimen recommended by Derma
								Wellness Clinic worked wonders for my sensitive
								skin. I've never felt more confident!"
							</p>
							<p className="text-gray-800 font-semibold mt-2">
								- Alex M.
							</p>
						</div>

						{/* Another Testimonial Card */}
						<div className="bg-white p-6 rounded-lg shadow-md">
							<p className="text-gray-600 italic">
								"I can't thank the team at Derma Wellness Clinic
								enough. Their attention to detail and genuine
								care made my dermatology experience exceptional.
								My skin has never looked better!"
							</p>
							<p className="text-gray-800 font-semibold mt-2">
								- Jessica R.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-16 text-center">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold mb-8">Contact Us</h2>
					<p className="text-lg leading-relaxed mb-8">
						Ready to transform your skin? Schedule an appointment
						with our experienced dermatologists today.
					</p>
					<Button
						onClick={() => scrollToSection("services")}
						className="bg-blue-500 text-white py-2 px-4 rounded-full inline-block hover:bg-blue-700 hover:text-white transition duration-300"
					>
						Book an Appointment
					</Button>
				</div>
			</section>
		</main>
	);
}

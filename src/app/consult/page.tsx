import UploadButton from "@/components/UploadButton";
import React from "react";

const page = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
			{/* Dermatology Consultation Section */}
			<section
				className="py-16 text-center"
				id="consult"
			>
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold mb-8">
						Dermatology Consultation
					</h2>
					<p className="text-lg leading-relaxed mb-8">
						Ready to take the first step towards healthier skin?
						Schedule a free immediate consultation by uploading a
						picture. Our advanced AI technology will analyze your
						skin and provide personalized recommendations. It's
						quick, easy, and the first step to a more radiant you.
					</p>

					<UploadButton />
				</div>
			</section>
		</div>
	);
};

export default page;

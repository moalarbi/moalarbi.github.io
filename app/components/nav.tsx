"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting)
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref} dir="rtl" lang="ar">
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/50 border-zinc-800"
				}`}
			>
				<div className="container flex flex-row items-center justify-between p-6 mx-auto">
					{/* روابط التنقل */}
					<div className="flex justify-between gap-8">
						<Link href="/" className="duration-200 text-zinc-400 hover:text-white">
							الرئيسية
						</Link>
						<Link href="/projects" className="duration-200 text-zinc-400 hover:text-white">
							أعمالي
						</Link>
						<Link href="/services" className="duration-200 text-zinc-400 hover:text-white">
							خدماتي
						</Link>
						<Link href="/contact" className="duration-200 text-zinc-400 hover:text-white">
							تواصل معي
						</Link>
					</div>

					{/* زر الرجوع للصفحة السابقة */}
					<Link href="/" className="duration-200 text-zinc-300 hover:text-white">
						<ArrowRight className="w-6 h-6" />
					</Link>
				</div>
			</div>
		</header>
	);
};

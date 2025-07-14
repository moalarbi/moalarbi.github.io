"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Brush, Lightbulb, ShoppingCart, Target } from "lucide-react";

const services = [
  {
    icon: <Brush size={20} />,
    label: "بناء الهوية البصرية",
    description: "تصميم شعارات وهوية متكاملة تعبر عن علامتك التجارية.",
  },
  {
    icon: <Lightbulb size={20} />,
    label: "استشارات تسويق إلكتروني",
    description: "تحليل وتوجيه استراتيجي لزيادة المبيعات والوصول.",
  },
  {
    icon: <ShoppingCart size={20} />,
    label: "تطوير المتاجر الإلكترونية",
    description: "إنشاء متاجر احترافية باستخدام أحدث التقنيات.",
  },
  {
    icon: <Target size={20} />,
    label: "إدارة حملات إعلانية",
    description: "إعداد وإدارة الحملات الرقمية لتحقيق أفضل عائد استثمار.",
  },
];

const whatsappLink =
  "https://wa.me/966537311886?text=أرغب%20في%20حجز%20استشارة%20حول%20خدماتك";

export default function ServicesPage() {
  return (
    <div
      className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 font-sans"
      dir="rtl"
    >
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto pb-32">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:grid-cols-2 xl:grid-cols-4 lg:gap-16">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <div className="relative flex flex-col items-center justify-start h-full p-4 gap-4 group md:gap-8 md:py-20 lg:py-24 md:px-8">
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
                  {service.icon}
                </span>
                <div className="z-10 flex flex-col items-center text-center flex-1 text-right">
                  <h3 className="text-lg font-semibold text-zinc-200 group-hover:text-white font-sans leading-snug text-center">
                    {service.label}
                  </h3>
                  <p className="mt-4 text-sm text-zinc-400 group-hover:text-zinc-200 font-sans leading-relaxed text-center">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-sm font-medium text-white bg-zinc-800 border border-zinc-500 rounded hover:bg-zinc-700 transition duration-200 font-sans"
                    >
                      احجز استشارتك الآن
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

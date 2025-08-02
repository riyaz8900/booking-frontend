// components/NewsUpdates.js
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";

export default function NewsUpdates() {
  const articles = [
    {
      image: '/news1.jpg',
      title: 'Surviving through tough times as a first time SaaS...',
      description:
        'Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.',
      tag: 'BUSINESS',
      tagColor: 'bg-[#FFE9DA]',
      date: 'Oct 3',
      readTime: '7 min',
    },
    {
      image: '/news3.png',
      title: 'SaaS customer development and no-code prototypes',
      description:
        'Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.',
      tag: 'MARKETING',
      tagColor: 'bg-[#D8F5FD]',
      date: 'Oct 3',
      readTime: '7 min',
    },
    {
      image: '/news2.jpg',
      title: 'Highnote Emerges from Stealth with $54 Million in ...',
      description:
        'Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.',
      tag: 'ANALYTICS',
      tagColor: 'bg-[#E0F8DE]',
      date: 'Oct 3',
      readTime: '7 min',
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
<h2 className="font-inter font-semibold md:text-[42.7px] text-xl  tracking-tight-16 text-center align-middle text-gray-900 mb-10">
  News & Updates
</h2>
        <div className="grid md:grid-cols-3 gap-4 justify-center">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg border-0 overflow-hidden w-full  mx-auto">
              <div className="h-48 w-full relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-[24px] font-semibold text-gray-900 mb-2 leading-[150%] tracking-[-0.44px]" style={{ fontFamily: 'Inter' }}>
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 text-[18.67px] leading-[32px] tracking-[0px]" style={{
                  fontFamily: 'Inter',
                  fontWeight: 400
                }}>
                  {article.description}
                </p>           
                     <div className="flex items-center justify-between text-xs ">
                  <span
  className={`px-3 py-2 rounded-full font-inter font-bold text-[10px] leading-[100%] tracking-wide-114 uppercase ${article.tagColor}`}
>
  {article.tag}
</span>
                  <span className="font-inter font-normal text-18.67 leading-[100%] tracking-normal text-gray-550">
  {article.date} • {article.readTime} read
</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
        <a
  href="#"
  className="font-inter font-normal md:text-[24px] text-sm leading-[100%] tracking-tight-33 text-[#1778F0] inline-flex items-center gap-3 transition-transform duration-300 hover:scale-105"
>
  View more articles <span><FaLongArrowAltRight size={20}/></span>
</a>
        </div>
      </div>
    </section>
  );
}

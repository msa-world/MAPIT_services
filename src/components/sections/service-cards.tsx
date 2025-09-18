import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const services: Service[] = [
  {
    title: "Automated <br/>Bookkeeping",
    description: "Up-to-date bookkeeping and actionable<br/>reports at the touch of a button.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a3aa022-36e0-487b-8b3a-6b6d8524b7cd-uplinq-com/assets/images/66e9a462b4cc0d430868851f_hm-bento-01.webp?",
    link: "#"
  },
  {
    title: "Tax Compliance",
    description: "100% clean and compliant books mean you<br/>never have to dread tax season.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a3aa022-36e0-487b-8b3a-6b6d8524b7cd-uplinq-com/assets/images/66e9a462b4cc0d430868851d_hm-bento-02.webp?",
    link: "#"
  },
  {
    title: "Tax Strategy",
    description: "Get the best possible outcomes at tax time<br/>with a combination of proprietary AI + human<br/>expertise.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a3aa022-36e0-487b-8b3a-6b6d8524b7cd-uplinq-com/assets/images/66e9a462b4cc0d430868851e_hm-bento-03.webp?",
    link: "#"
  },
  {
    title: "Catch-up Pro",
    description: "Have books that are weeks, months, or years behind? Catch up in one click.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a3aa022-36e0-487b-8b3a-6b6d8524b7cd-uplinq-com/assets/images/66e9a462b4cc0d43086886c2_artwork-02.webp?",
    link: "#"
  }
];

const ServiceCard = ({ service }: { service: Service }) => {
  const { title, description, imageUrl, link } = service;
  
  return (
    <div className="relative bg-card border border-border rounded-xl p-8 group overflow-hidden min-h-[380px]">
      <div className="relative z-10 w-3/5">
        <h3 className="text-white text-[32px] font-medium leading-[1.3] mb-4" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="text-text-secondary text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <Link href={link} className="absolute top-8 right-8 z-20 w-12 h-12 bg-primary rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
        <ArrowRight className="w-6 h-6 text-primary-foreground" />
      </Link>

      <div className="absolute z-0 right-0 bottom-0 w-[410px] h-[238px] transition-transform duration-500 ease-in-out group-hover:scale-105">
        <Image
          src={imageUrl}
          alt={title.replace(/<br\s*\/?>/ig, " ")}
          width={410} // Aspect ratio from 547x320, scaled down proportionally
          height={238}
          className="object-contain object-right-bottom"
        />
      </div>
    </div>
  );
};

const ServiceCardsSection = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-x-8 gap-y-4 mb-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface-dark mb-6">
                           <span className="text-sm text-text-secondary">A full-service solution</span>
                        </div>
                        <h2 className="text-[48px] font-normal leading-[1.2] text-text-primary">
                            Powering every part of your<br/>
                            <strong className="font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">accounting operations.</strong>
                        </h2>
                    </div>
                    <div className="max-w-md shrink-0 lg:pb-2">
                        <p className="text-lg text-text-secondary">
                            Built by entrepreneurs just like you to provide a better <strong className="font-medium text-text-primary">accounting solution for small businesses.</strong>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCardsSection;
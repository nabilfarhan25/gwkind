import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

export default function Component() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our support team to initiate a return.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available for faster delivery.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship internationally to most countries. Shipping costs and delivery times vary by location. International orders may be subject to customs duties.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay for secure online transactions.",
    },
    {
      question: "Can I modify or cancel my order?",
      answer:
        "Orders can be modified or cancelled within 1 hour of placement. After this window, please contact our support team for assistance.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, our customer support team is available Monday through Friday, 9 AM to 6 PM EST. You can reach us via email, phone, or live chat.",
    },
    {
      question: "Are your products covered by warranty?",
      answer:
        "All our products come with a standard 1-year manufacturer warranty. Extended warranty options are available for select items.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating glass orbs for ambient effect */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-r from-pink-500/15 to-red-500/15 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-red-400/10 to-pink-400/10 rounded-full blur-lg"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header with glass effect */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 bg-gradient-to-r from-white via-pink-200 to-red-200 bg-clip-text text-transparent">
              FAQ
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto">
              Find answers to commonly asked questions about our products and
              services.
            </p>
          </div>

          {/* FAQ Accordion with glass cards */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 border-none data-[state=open]:bg-gradient-to-r data-[state=open]:from-red-500/20 data-[state=open]:to-pink-500/20 data-[state=open]:border-red-500/30"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-light hover:text-pink-200 transition-colors py-6 px-6 hover:no-underline data-[state=open]:text-red-300 [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full">
                    <span className="bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent data-[state=open]:from-red-200 data-[state=open]:to-pink-200">
                      {faq.question}
                    </span>
                    <Plus className="h-5 w-5 text-white/70 transition-transform duration-200 data-[state=open]:rotate-45 data-[state=open]:text-red-300" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base md:text-lg font-light leading-relaxed pb-6 px-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact Section with glass effect */}
          <div className="text-center mt-16">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-light mb-4 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                Still have questions?
              </h2>
              <p className="text-gray-300 text-lg font-light mb-8">
                {
                  "Can't find the answer you're looking for? Get in touch with our team."
                }
              </p>
              <button className="backdrop-blur-md bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-white/20 text-white px-8 py-3 text-sm font-medium tracking-wide uppercase hover:from-red-500/30 hover:to-pink-500/30 transition-all duration-300 rounded-lg">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

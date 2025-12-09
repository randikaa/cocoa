import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const faqs = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping takes 5-7 business days within Sri Lanka. Express shipping (2-3 days) is available at checkout. International orders typically take 10-14 business days.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes! We ship to most countries worldwide. Shipping costs and delivery times vary by location and are calculated at checkout.",
      },
      {
        q: "How can I track my order?",
        a: "Once your order ships, you'll receive an email with a tracking number. You can also track your order in your account dashboard or on our Track Order page.",
      },
      {
        q: "Is free shipping available?",
        a: "Yes! We offer free standard shipping on all orders over Rs. 5,000.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer free returns within 30 days of delivery. Items must be unworn, unwashed, and have all original tags attached.",
      },
      {
        q: "How do I start a return?",
        a: "Log into your account, go to your order history, and select 'Start Return' on the item you'd like to return. You'll receive a prepaid shipping label via email.",
      },
      {
        q: "Can I exchange for a different size?",
        a: "Yes! Start a return for your original item and place a new order for the correct size. We'll process your return as soon as we receive it.",
      },
      {
        q: "When will I receive my refund?",
        a: "Refunds are processed within 3-5 business days of receiving your return. It may take an additional 5-10 business days for the refund to appear on your statement.",
      },
    ],
  },
  {
    category: "Products & Sizing",
    questions: [
      {
        q: "How do your sizes run?",
        a: "Our standard tees run true to size. Our oversized collection is designed to be loose and comfortable—we recommend your normal size for that relaxed fit. Check our Size Guide for detailed measurements.",
      },
      {
        q: "What materials do you use?",
        a: "We use premium 100% cotton for most of our products. Our hoodies feature a cotton-polyester blend for extra durability and warmth. All materials are pre-shrunk.",
      },
      {
        q: "Are your designs officially licensed?",
        a: "Our designs are original, fan-inspired creations. We don't use any copyrighted characters or logos—just our own artistic interpretations of the cultures we love.",
      },
      {
        q: "How do I care for my cocoa gear?",
        a: "Machine wash cold, inside out. Tumble dry low or hang dry. Do not iron directly on prints. Following these steps will keep your gear looking fresh for years.",
      },
    ],
  },
  {
    category: "Limited Drops & Restocks",
    questions: [
      {
        q: "How do limited drops work?",
        a: "Limited drops are exclusive releases with a set quantity. Once they sell out, they're gone forever. Subscribe to our newsletter for early access and drop announcements.",
      },
      {
        q: "Will sold-out items be restocked?",
        a: "Regular collection items are restocked regularly. Limited edition and collab items are usually not restocked—that's what makes them special!",
      },
      {
        q: "How can I get notified about new drops?",
        a: "Subscribe to our newsletter for exclusive early access, follow us on Instagram and TikTok, and enable notifications in your account settings.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center py-12 sm:py-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Got questions? We have got answers. Can&apos;t find what you are looking for?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="text-xl font-semibold text-foreground mb-4">{section.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {section.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${section.category}-${index}`}
                      className="border border-border rounded-lg px-4 bg-card"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:no-underline py-4">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-card rounded-xl p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">Our support team is here to help</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

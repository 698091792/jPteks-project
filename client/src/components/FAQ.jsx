import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
export default function FAQ() {
    return (
        <Accordion type="single" collapsible className="  w-full flex flex-col justify-center items-center mx-auto font-serif ">
           <p className='text-blue-900 md:text-3xl font-bold text-lg'>Frequently Asked Questions</p> 
          <AccordionItem value="item-1">
            <AccordionTrigger className=" text-md md:text-xl hover:no-underline  ">What is your process for creating a website or an application?</AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg hover:no-underline text-justify max-w-md">
            We follow a multi-step process that includes a discovery phase to understand your needs, then design, development, testing, and finally deployment and support.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
          <AccordionTrigger className=" text-md md:text-xl hover:no-underline  ">How does the discovery phase work?</AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg hover:no-underline text-justify max-w-md">
            The discovery phase allows us to fully understand your goals and project requirements. We organize a meeting to discuss your expectations, desired features, and to define a project brief.
            </AccordionContent >
          </AccordionItem>
          <AccordionItem value="item-3">
          <AccordionTrigger className=" text-md md:text-xl hover:no-underline  ">How long does it take to develop a website or an application?</AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg hover:no-underline text-justify max-w-md">
            Development time depends on the complexity of the project. Generally, a standard website takes 3 to 5 weeks, while a more complex application can take several months.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
          <AccordionTrigger className=" text-md md:text-xl hover:no-underline  ">How does communication work during the project?</AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg hover:no-underline text-justify max-w-md">
            We maintain regular contact with our clients through weekly updates. You can also ask questions at any time via email or our whatsapp number.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
          <AccordionTrigger className=" text-md md:text-xl hover:no-underline  ">What are the payment terms and the cost of a project?</AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg hover:no-underline text-justify max-w-md">
            Our projects are priced based on their complexity, and we offer our services in packages tailored to different needs. We request a deposit at the start of the project, followed by payments at each key stage. Our packages provide options that range from basic to comprehensive features, so you can choose the level of service that best suits your project and budget.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
          <AccordionTrigger className=" text-md md:text-xl hover:no-underline  ">How can I request a quote or more information?</AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg hover:no-underline text-justify max-w-md">
            You can contact us via our email, contact form or directly on our whatsapp number to discuss your project and receive a personalized quote.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )
}

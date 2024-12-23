import { Wrapper } from "~/components/layout/wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export const Accordions = () => {
  return (
    <Wrapper>
      <Accordion
        type="single"
        collapsible
        className="my-5 w-full space-y-5 rounded-lg bg-[#F8FAFC] px-5"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p className="text-left text-[17px] font-bold text-[#090914] xl:text-[20px]">
              {" "}
              Q. How this theme is different from others in market?
            </p>
          </AccordionTrigger>
          <AccordionContent className="text-[14px] xl:text-[16px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <p className="text-left text-[17px] font-bold text-[#090914] xl:text-[20px]">
              {" "}
              Q. Does this theme supports plugins?
            </p>
          </AccordionTrigger>
          <AccordionContent className="text-[14px] xl:text-[16px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <p className="text-left text-[17px] font-bold text-[#090914] xl:text-[20px]">
              {" "}
              Q. How this theme is different from others in market?
            </p>
          </AccordionTrigger>
          <AccordionContent className="text-[14px] xl:text-[16px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <p className="text-left text-[17px] font-bold text-[#090914] xl:text-[20px]">
              {" "}
              Q. Does this theme supports plugins?
            </p>
          </AccordionTrigger>
          <AccordionContent className="text-[14px] xl:text-[16px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            <p className="text-left text-[17px] font-bold text-[#090914] xl:text-[20px]">
              {" "}
              Q. How this theme is different from others in market?
            </p>
          </AccordionTrigger>
          <AccordionContent className="text-[14px] xl:text-[16px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            <p className="text-left text-[17px] font-bold text-[#090914] xl:text-[20px]">
              {" "}
              Q. Does this theme supports plugins?
            </p>
          </AccordionTrigger>
          <AccordionContent className="text-[14px] xl:text-[16px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Wrapper>
  );
};

import React from "react";
import { Accordion } from "flowbite-react";

const FaqCard = ({ title, desc }) => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="text-lg text-[#000000] font-bold">
          {title}
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-[#808291] text-base font-normal">{desc}</p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default FaqCard;

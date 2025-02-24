import Accordion from "../components/Accordion";
import SvgIcon from "../components/SvgIcon";

import ArrowUp from "../assets/svgs/arrow_up.svg?react";

function ExpendableDetails({ title, children, className }) {
  return (
    <Accordion
      title={title}
      icon={
        <SvgIcon
          svg={<ArrowUp />}
          color="var(--clr-neutral-100)"
          className="open-close-icon"
        />
      }
      titleClassName="flex items-center justify-between pi-4 p-b-extendable-details-content text-neutral-100 font-bold bg-primary rounded-5 font-size-expendable-title"
      contentClassName="p-4"
      className={className}
    >
      {children}
    </Accordion>
  );
}

export default ExpendableDetails;

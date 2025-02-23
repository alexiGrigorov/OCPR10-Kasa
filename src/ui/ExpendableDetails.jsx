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
      titleClassName="d-flex flex-align-center flex-space-between p-inline-4 p-b-extendable-details-content text-neutral-100 text-bold bg-primary rounded-5 font-size-expendable-title"
      contentClassName="p-4"
      className={className}
    >
      {children}
    </Accordion>
  );
}

export default ExpendableDetails;

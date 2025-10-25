import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../../utils/accordion";

import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";

function Value() {
  return (
    <section className="v-wrapper">
      <div className="v-container flexCenter innerWidth">
        {/* left side */}
        <div className="v-left">
          <div className="image-container flexColCenter">
            <img src="./value.png" alt="value" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we gift to You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItem uuid={i} key={i}>
                <AccordionItemState>
                  {({ expanded }) => (
                    <div
                      className={`accordionItem ${expanded ? "expanded" : ""}`}
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton className="accordionButton flexCenter">
                          <div className="flexCenter icon">{item.icon}</div>
                          <span className="primaryText">{item.heading}</span>
                          <div className="flexCenter icon">
                            <MdOutlineArrowDropDown size={20} />
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>

                      <AccordionItemPanel>
                        <p className="secondaryText">{item.detail}</p>
                      </AccordionItemPanel>
                    </div>
                  )}
                </AccordionItemState>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Value;

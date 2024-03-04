import React, { useState, useEffect } from "react";
import "./Value.css";
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

const Value = () => {
  const [accordionState, setAccordionState] = useState([]);

  useEffect(() => {
    const newAccordionState = Array(data.length).fill("collapsed");
    setAccordionState(newAccordionState);
  }, []);

  const handleAccordionToggle = (index) => {
    const newAccordionState = [...accordionState];
    newAccordionState[index] = accordionState[index] === "collapsed" ? "expanded" : "collapsed";
    setAccordionState(newAccordionState);
  };

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/*left side   */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* right side  */}
        <div className="flexColStart v-right">
          <span className="orangeText">Out Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.{" "}
            <br />
            We beleive a good blace to live can make your life better '
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, index) => (
              <AccordionItem
                className={`accordionItem ${accordionState[index]} `}
                key={index}
                uuid={index}
              >
                <AccordionItemHeading>
                  <AccordionItemButton
                    className="flexCenter accordionButton"
                    onClick={() => handleAccordionToggle(index)}
                  >
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded ? (
                          <div className="flexCenter icon expanded">
                            {item.icon}
                          </div>
                        ) : (
                          <div className="flexCenter icon collapsed">
                            {item.icon}
                          </div>
                        )
                      }
                    </AccordionItemState>

                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;

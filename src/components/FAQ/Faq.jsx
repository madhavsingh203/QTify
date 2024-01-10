import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";

const Faq = () => {
  return (
    <div className="text-white">
      <div className="flex items-center justify-center text-3xl font-semibold">
        FAQs
      </div>
      <div className="flex flex-col items-center justify-center mt-2">
        <Accordion
          className="w-96"
          sx={{
            backgroundColor: "black",
            color: "White",
            // borderRadius: "10px",
            border: "1px solid white",
            "& .MuiAccordionSummary-root": {
              borderRadius: "10px",
            },
          }}
        >
          <AccordionSummary>Is Qtify free to use?</AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "white",
              color: "black",
              // borderRadius: "10px",
            }}
          >
            Yes! It is 100% free, and has 0% ads!
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="w-96"
          sx={{
            backgroundColor: "black",
            color: "White",
            // borderRadius: "10px",
            border: "1px solid white",
            "& .MuiAccordionSummary-root": {
              borderRadius: "10px",
            },
          }}
        >
          <AccordionSummary>Can I download and listen to songs offline?</AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "white",
              color: "black",
              // borderRadius: "10px",
            }}
          >
            Sorry, unfortunately we don't provide the service to download any songs.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;


import { useState } from "react";
import { AccordionSummary, AccordionDetails, Grid } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";

//Creating custom accordion component - Material UI
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.22)",
  padding:'8px'
}));

const FAQ = () => {
  //variable to hold the accordion state (open or close), false by default
  const [expanded, setExpanded] = useState<string | false>("");

  //function to keep track of which accordion state changed
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  
  return (
    <div className='w-full flex flex-col items-center my-14'>
      <p className="text-center text-primary text-sm font-bold">Question</p>
      <p className="text-center font-raleway font-bold text-xl">
        Frequently asked questions
      </p>
      <div className="my-10 flex flex-col md:flex-row md:w-[80%] ">
        <div className='md:mr-5'>
          <Accordion
            expanded={expanded === `panel1`}
            onChange={handleChange(`panel1`)}
            square
            disableGutters
            sx={{
              borderWidth: "1px",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowForwardIos />}
              aria-controls={`panel1a-content`}
              id={`panel1a-header`}
            >
              <p className="font-bold text-sm">
                What do you need to become a HelpInc?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion_details">
                Once you complete registration steps including creating your
                Tasker profile, make sure you draw your work area map and set
                schedule availability to show up in Client search results. If
                you don’t get task invitations, consider adjusting your rates,
                your work area, adding availability and additional categories,
                and editing your profile information to make sure it’s clear to
                Clients which services you offer.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === `panel2`}
            onChange={handleChange(`panel2`)}
            square
            disableGutters
            sx={{
              borderWidth: "1px",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowForwardIos />}
              aria-controls={`panel2a-content`}
              id={`panel2a-header`}
            >
              <p className="font-bold text-sm">How do I get a job?</p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion_details">
                Once you complete registration steps including creating your
                Tasker profile, make sure you draw your work area map and set
                schedule availability to show up in Client search results. If
                you don’t get task invitations, consider adjusting your rates,
                your work area, adding availability and additional categories,
                and editing your profile information to make sure it’s clear to
                Clients which services you offer.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === `panel3`}
            onChange={handleChange(`panel3`)}
            square
            disableGutters
            sx={{
              borderWidth: "1px",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowForwardIos />}
              aria-controls={`panel3a-content`}
              id={`panel3a-header`}
            >
              <p className="font-bold text-sm">
                Do I need experience for the task?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion_details">
                Once you complete registration steps including creating your
                Tasker profile, make sure you draw your work area map and set
                schedule availability to show up in Client search results. If
                you don’t get task invitations, consider adjusting your rates,
                your work area, adding availability and additional categories,
                and editing your profile information to make sure it’s clear to
                Clients which services you offer.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <div>
            <Accordion
              expanded={expanded === `panel4`}
              onChange={handleChange(`panel4`)}
              square
              disableGutters
              sx={{
                borderWidth: "1px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowForwardIos />}
                aria-controls={`panel4a-content`}
                id={`panel4a-header`}
              >
                <p className="font-bold text-sm">
                  How long does it take to process my registration?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="accordion_details">
                  Once you complete registration steps including creating your
                  Tasker profile, make sure you draw your work area map and set
                  schedule availability to show up in Client search results. If
                  you don’t get task invitations, consider adjusting your rates,
                  your work area, adding availability and additional categories,
                  and editing your profile information to make sure it’s clear
                  to Clients which services you offer.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === `panel5`}
              onChange={handleChange(`panel5`)}
              square
              disableGutters
              sx={{
                borderWidth: "1px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowForwardIos />}
                aria-controls={`panel5a-content`}
                id={`panel5a-header`}
              >
                <p className="font-bold text-sm">How will I get the money?</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="accordion_details">
                  Once you complete registration steps including creating your
                  Tasker profile, make sure you draw your work area map and set
                  schedule availability to show up in Client search results. If
                  you don’t get task invitations, consider adjusting your rates,
                  your work area, adding availability and additional categories,
                  and editing your profile information to make sure it’s clear
                  to Clients which services you offer.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === `panel6`}
              onChange={handleChange(`panel6`)}
              square
              disableGutters
              sx={{
                borderWidth: "1px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowForwardIos />}
                aria-controls={`panel6a-content`}
                id={`panel6a-header`}
              >
                <p className="font-bold text-sm">
                  What categories of tasks can I perform on TaskRabbit?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="accordion_details">
                  Once you complete registration steps including creating your
                  Tasker profile, make sure you draw your work area map and set
                  schedule availability to show up in Client search results. If
                  you don’t get task invitations, consider adjusting your rates,
                  your work area, adding availability and additional categories,
                  and editing your profile information to make sure it’s clear
                  to Clients which services you offer.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

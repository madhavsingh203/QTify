import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'

const Faq = () => {
  return (
    <div className='text-white'>
        <div className='flex items-center justify-center text-3xl font-semibold'>FAQs</div>
        <div className='flex flex-col items-center justify-center'>
            <Accordion className='w-96' sx={{
                backgroundColor: "black",
                color: "White",
                // borderRadius: "10px",
                border: "1px solid white",
                '& .MuiAccordionSummary-root':{
                    borderRadius: "10px"
                }
            }}
            
            >
                <AccordionSummary>Is Qtify free to use?</AccordionSummary>
                <AccordionDetails sx={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "10px",

                }}>Yes!</AccordionDetails>
                
            </Accordion>
            <Accordion className='w-96'>
                <AccordionSummary>Is Qtify free to use?</AccordionSummary>
                <AccordionDetails>Yes!</AccordionDetails>
                
            </Accordion>
            <Accordion className='w-96'>
                <AccordionSummary>Is Qtify free to use?</AccordionSummary>
                <AccordionDetails>Yes!</AccordionDetails>
                
            </Accordion>
        </div>
    </div>
  )
}

export default Faq
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div className='w-[241px]'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className='space-x-2'>
                <input type="checkbox" />
                <label htmlFor="">Test</label>
            </div>
            <div className='space-x-2'>
                <input type="checkbox" />
                <label htmlFor="">Test</label>
            </div>
            <div className='space-x-2'>
                <input type="checkbox" />
                <label htmlFor="">Test</label>
            </div>
            <div className='space-x-2'>
                <input type="checkbox" />
                <label htmlFor="">Test</label>
            </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

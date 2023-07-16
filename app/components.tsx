"use client";
import { Accordion, AccordionDetails, AccordionSummary, Button, Container, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const Happy = (props:{hello: {message: string}}) => {
	const [count, setCount] = useState(0);

  return (
		<Container maxWidth="xl">
			<div className="p-10">
				<Stack spacing={2} direction="row">
					<Button
						variant="contained"
						onClick={() => setCount(count + 1)}
					>
						{`Count: ${count}`}
					</Button>
				</Stack>
				<div className="p-10">
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>{props.hello.message}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Suspendisse malesuada lacus ex,
								sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header"
						>
							<Typography>Accordion 2</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Suspendisse malesuada lacus ex,
								sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion disabled>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel3a-content"
							id="panel3a-header"
						>
							<Typography>Disabled Accordion</Typography>
						</AccordionSummary>
					</Accordion>
				</div>
			</div>
		</Container>
  );
}
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SectionContainer, SectionHeading } from './sectionPrimitives';
import { useContent } from '../../content';
import { cream } from '../../theme/palette';

const TintedBackground = styled(Box)(({ theme }) => ({
  backgroundColor: cream.tinted,
  ...theme.applyStyles('dark', {
    backgroundColor: 'transparent',
  }),
}));

const FullWidthBox = styled(Box)({
  width: '100%',
});

const AnswerText = styled(Typography)(({ theme }) => ({
  maxWidth: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: '70%',
  },
}));

const TitleHeading = styled(SectionHeading)(({ theme }) => ({
  width: '100%',
  textAlign: 'left',
  [theme.breakpoints.up('md')]: {
    width: '60%',
    textAlign: 'center',
  },
})) as typeof SectionHeading;

export default function FaqSection() {
  const { faq } = useContent();
  const [expanded, setExpanded] = React.useState<number[]>([]);

  const handleChange =
    (index: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded ? [...expanded, index] : expanded.filter((item) => item !== index),
      );
    };

  return (
    <TintedBackground>
      <SectionContainer id="faq">
        <TitleHeading component="h2" variant="h4">
          {faq.title}
        </TitleHeading>
        <FullWidthBox>
          {faq.items.map((item, index) => (
            <Accordion
              key={item.question}
              expanded={expanded.includes(index)}
              onChange={handleChange(index)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`faq-panel-${index}-content`}
                id={`faq-panel-${index}-header`}
              >
                <Typography component="span" variant="subtitle2">
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AnswerText variant="body2" gutterBottom>
                  {item.answer}
                </AnswerText>
              </AccordionDetails>
            </Accordion>
          ))}
        </FullWidthBox>
      </SectionContainer>
    </TintedBackground>
  );
}

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import type { QuizQuestion } from '../../content/types';

const IllustrationFrame = styled(Box)(({ theme }) => ({
  width: 96,
  height: 96,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  boxShadow: (theme.vars || theme).shadows[1],
}));

const OptionButton = styled(Button)(({ theme }) => ({
  justifyContent: 'flex-start',
  textAlign: 'left',
  textTransform: 'none',
  padding: theme.spacing(1.25, 2),
}));

const FunFactCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'flex-start',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  border: `1px solid ${(theme.vars || theme).palette.divider}`,
}));

interface WalkthroughQuizProps {
  question: QuizQuestion;
  questionLabel: string;
  illustration: React.ComponentType<{ size?: number }>;
  nextLabel: string;
  seeResultLabel: string;
  isLast: boolean;
  onAnswered: (correct: boolean) => void;
  onNext: () => void;
}

export default function WalkthroughQuiz({
  question,
  questionLabel,
  illustration: Illustration,
  nextLabel,
  seeResultLabel,
  isLast,
  onAnswered,
  onNext,
}: WalkthroughQuizProps) {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);
    onAnswered(index === question.correctIndex);
  };

  const getOptionColor = (index: number) => {
    if (selectedIndex === null) return 'primary';
    if (index === question.correctIndex) return 'success';
    if (index === selectedIndex) return 'error';
    return 'primary';
  };

  const getOptionVariant = (index: number) => {
    if (selectedIndex === null) return 'outlined';
    if (index === question.correctIndex || index === selectedIndex) return 'contained';
    return 'outlined';
  };

  return (
    <Stack spacing={3} sx={{ width: '100%', alignItems: 'center' }}>
      <IllustrationFrame>
        <Illustration size={72} />
      </IllustrationFrame>
      <Typography variant="overline" color="text.secondary">
        {questionLabel}
      </Typography>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        {question.question}
      </Typography>
      <Stack spacing={1.5} sx={{ width: '100%', maxWidth: 420 }}>
        {question.options.map((option, index) => (
          <OptionButton
            key={option}
            variant={getOptionVariant(index)}
            color={getOptionColor(index)}
            onClick={() => handleSelect(index)}
            endIcon={
              selectedIndex !== null && index === question.correctIndex ? (
                <CheckCircleRoundedIcon />
              ) : selectedIndex === index && index !== question.correctIndex ? (
                <CancelRoundedIcon />
              ) : undefined
            }
          >
            {option}
          </OptionButton>
        ))}
      </Stack>
      {selectedIndex !== null && (
        <Fade in>
          <Box sx={{ width: '100%', maxWidth: 420 }}>
            <Grow in>
              <FunFactCard>
                <Typography variant="body2" color="text.secondary">
                  {question.funFact}
                </Typography>
              </FunFactCard>
            </Grow>
            <Stack sx={{ alignItems: 'center', pt: 2 }}>
              <Button variant="contained" color="primary" onClick={onNext}>
                {isLast ? seeResultLabel : nextLabel}
              </Button>
            </Stack>
          </Box>
        </Fade>
      )}
    </Stack>
  );
}

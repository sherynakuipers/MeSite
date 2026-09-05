import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { motion } from 'framer-motion';
import type { QuizQuestion } from '../../content/types';

const MotionButton = motion.create(Button);

const IllustrationFrame = styled(Box)(({ theme }) => ({
  width: 128,
  height: 128,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  padding: theme.spacing(1),
  backgroundColor: (theme.vars || theme).palette.background.paper,
  boxShadow: (theme.vars || theme).shadows[2],
}));

const IllustrationImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

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

const optionListVariants = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const optionItemVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

interface WalkthroughQuizProps {
  question: QuizQuestion;
  questionLabel: string;
  imageSrc: string;
  nextLabel: string;
  seeResultLabel: string;
  isLast: boolean;
  onAnswered: (correct: boolean) => void;
  onNext: () => void;
}

export default function WalkthroughQuiz({
  question,
  questionLabel,
  imageSrc,
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

  const isWrongSelection = (index: number) =>
    selectedIndex === index && index !== question.correctIndex;

  return (
    <Stack spacing={3} sx={{ width: '100%', alignItems: 'center' }}>
      <motion.div
        initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <IllustrationFrame>
            <IllustrationImage src={imageSrc} alt="" />
          </IllustrationFrame>
        </motion.div>
      </motion.div>
      <Typography variant="overline" color="text.secondary">
        {questionLabel}
      </Typography>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        {question.question}
      </Typography>
      <Stack
        component={motion.div}
        variants={optionListVariants}
        initial="initial"
        animate="animate"
        spacing={1.5}
        sx={{ width: '100%', maxWidth: 420 }}
      >
        {question.options.map((option, index) => (
          <motion.div
            key={option}
            variants={optionItemVariants}
            animate={
              isWrongSelection(index)
                ? { x: [0, -8, 8, -8, 8, 0], opacity: 1, y: 0 }
                : undefined
            }
            transition={isWrongSelection(index) ? { duration: 0.4 } : undefined}
            whileHover={selectedIndex === null ? { scale: 1.02 } : undefined}
            whileTap={selectedIndex === null ? { scale: 0.98 } : undefined}
          >
            <OptionButton
              fullWidth
              variant={getOptionVariant(index)}
              color={getOptionColor(index)}
              onClick={() => handleSelect(index)}
              endIcon={
                selectedIndex !== null && index === question.correctIndex ? (
                  <CheckCircleRoundedIcon />
                ) : isWrongSelection(index) ? (
                  <CancelRoundedIcon />
                ) : undefined
              }
            >
              {option}
            </OptionButton>
          </motion.div>
        ))}
      </Stack>
      {selectedIndex !== null && (
        <Box sx={{ width: '100%', maxWidth: 420 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 240, damping: 20 }}
          >
            <FunFactCard>
              <Typography variant="body2" color="text.secondary">
                {question.funFact}
              </Typography>
            </FunFactCard>
          </motion.div>
          <Stack sx={{ alignItems: 'center', pt: 2 }}>
            <MotionButton
              variant="contained"
              color="primary"
              onClick={onNext}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {isLast ? seeResultLabel : nextLabel}
            </MotionButton>
          </Stack>
        </Box>
      )}
    </Stack>
  );
}

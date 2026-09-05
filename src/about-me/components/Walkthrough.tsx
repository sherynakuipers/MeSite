import * as React from 'react';
import { keyframes, styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import SportsBasketballRoundedIcon from '@mui/icons-material/SportsBasketballRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useContent } from '../../content';
import { socialLinks } from '../../content/socialLinks';
import type { WalkthroughStep, QuizQuestion } from '../../content/types';
import WalkthroughQuiz from './WalkthroughQuiz';
import {
  SalamanderIllustration,
  TadpoleIllustration,
  GeckoIllustration,
  AxolotlIllustration,
  CobraIllustration,
} from './reptileIllustrations';

const quizIllustrations = [
  SalamanderIllustration,
  TadpoleIllustration,
  GeckoIllustration,
  AxolotlIllustration,
  CobraIllustration,
];

const professionalIcons = [
  <BuildRoundedIcon key="build" />,
  <WorkHistoryRoundedIcon key="work-history" />,
  <EmojiObjectsRoundedIcon key="emoji-objects" />,
  <ChecklistRoundedIcon key="checklist" />,
  <RocketLaunchRoundedIcon key="rocket-launch" />,
];

const privateIcons = [
  <SportsBasketballRoundedIcon key="basketball" />,
  <Diversity3RoundedIcon key="diversity" />,
  <PetsRoundedIcon key="pets" />,
];

type FlatStep =
  | { kind: 'story'; phase: 'professional' | 'private'; step: WalkthroughStep; icon: React.ReactNode }
  | { kind: 'hook' }
  | { kind: 'quiz'; question: QuizQuestion; index: number }
  | { kind: 'outro' };

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(28px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-28px); }
  to { opacity: 1; transform: translateX(0); }
`;

const StepPanel = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'direction',
})<{ direction: 'forward' | 'back' }>(({ direction }) => ({
  width: '100%',
  animation: `${direction === 'forward' ? slideInRight : slideInLeft} 320ms ease`,
}));

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(220, 186, 63, 0.35); }
  50% { box-shadow: 0 0 0 10px rgba(220, 186, 63, 0); }
`;

const TriggerButton = styled(Button)(({ theme }) => ({
  borderRadius: 999,
  borderWidth: 2,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(1.25),
  paddingBottom: theme.spacing(1.25),
  color: (theme.vars || theme).palette.secondary.dark,
  borderColor: (theme.vars || theme).palette.secondary.main,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  animation: `${pulse} 2.6s ease-in-out infinite`,
  '&:hover': {
    backgroundColor: (theme.vars || theme).palette.secondary.main,
    color: (theme.vars || theme).palette.secondary.contrastText,
    borderColor: (theme.vars || theme).palette.secondary.main,
    animation: 'none',
  },
  ...theme.applyStyles('dark', {
    color: (theme.vars || theme).palette.secondary.light,
  }),
}));

const TopBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  paddingBottom: theme.spacing(1.5),
}));

const IconCircle = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: (theme.vars || theme).palette.primary.contrastText,
  backgroundColor: (theme.vars || theme).palette.primary.main,
  '& svg': { fontSize: '1.75rem' },
}));

const ContentBox = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: 420,
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

export default function Walkthrough() {
  const { walkthrough } = useContent();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = React.useState(false);
  const [stepIndex, setStepIndex] = React.useState(0);
  const [direction, setDirection] = React.useState<'forward' | 'back'>('forward');
  const [score, setScore] = React.useState(0);

  const flatSteps = React.useMemo<FlatStep[]>(
    () => [
      ...walkthrough.professionalSteps.map((step, i) => ({
        kind: 'story' as const,
        phase: 'professional' as const,
        step,
        icon: professionalIcons[i],
      })),
      { kind: 'hook' as const },
      ...walkthrough.privateSteps.map((step, i) => ({
        kind: 'story' as const,
        phase: 'private' as const,
        step,
        icon: privateIcons[i],
      })),
      ...walkthrough.quizQuestions.map((question, index) => ({
        kind: 'quiz' as const,
        question,
        index,
      })),
      { kind: 'outro' as const },
    ],
    [walkthrough],
  );

  const currentStep = flatSteps[stepIndex];
  const progress = ((stepIndex + 1) / flatSteps.length) * 100;
  const progressColor =
    currentStep.kind === 'story' && currentStep.phase === 'professional'
      ? 'primary'
      : currentStep.kind === 'hook'
        ? 'primary'
        : 'secondary';

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setStepIndex(0);
    setDirection('forward');
    setScore(0);
  };

  const handleAdvance = () => {
    setDirection('forward');
    setStepIndex((i) => Math.min(i + 1, flatSteps.length - 1));
  };

  const handleBack = () => {
    setDirection('back');
    setStepIndex((i) => Math.max(i - 1, 0));
  };

  const handleAnswered = (correct: boolean) => {
    if (correct) setScore((s) => s + 1);
  };

  const handleRestart = () => {
    setDirection('back');
    setStepIndex(0);
    setScore(0);
  };

  const scoreMessage =
    score === walkthrough.quizQuestions.length
      ? walkthrough.quizResultGood
      : score >= 3
        ? walkthrough.quizResultOk
        : walkthrough.quizResultLow;

  const showBottomNav = currentStep.kind === 'story' || currentStep.kind === 'hook';
  const showBack = showBottomNav && stepIndex > 0;

  return (
    <>
      <TriggerButton
        onClick={handleOpen}
        variant="outlined"
        size="large"
        startIcon={<AutoAwesomeRoundedIcon />}
      >
        {walkthrough.triggerLabel}
      </TriggerButton>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        fullWidth
        maxWidth="sm"
      >
        <Box sx={{ px: 3, pt: 2 }}>
          <TopBar>
            <Typography variant="overline" color="text.secondary">
              {currentStep.kind === 'story' && currentStep.phase === 'professional'
                ? walkthrough.professionalEyebrow
                : currentStep.kind === 'hook'
                  ? walkthrough.hookEyebrow
                  : currentStep.kind === 'story' && currentStep.phase === 'private'
                    ? walkthrough.privateEyebrow
                    : currentStep.kind === 'quiz'
                      ? walkthrough.quizEyebrow
                      : walkthrough.outroEyebrow}
            </Typography>
            <Button
              onClick={handleClose}
              size="small"
              color="inherit"
              startIcon={<CloseRoundedIcon />}
            >
              {walkthrough.exitLabel}
            </Button>
          </TopBar>
          <LinearProgress
            variant="determinate"
            value={progress}
            color={progressColor}
            sx={{ borderRadius: 4, height: 6 }}
          />
        </Box>
        <ContentBox>
          <StepPanel key={stepIndex} direction={direction}>
            {currentStep.kind === 'story' && (
              <Stack spacing={2} sx={{ alignItems: 'center', textAlign: 'center' }}>
                <IconCircle>{currentStep.icon}</IconCircle>
                <Typography variant="h5">{currentStep.step.title}</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480 }}>
                  {currentStep.step.body}
                </Typography>
              </Stack>
            )}
            {currentStep.kind === 'hook' && (
              <Stack spacing={2} sx={{ alignItems: 'center', textAlign: 'center' }}>
                <IconCircle>
                  <AutoAwesomeRoundedIcon />
                </IconCircle>
                <Typography variant="h4">{walkthrough.hookTitle}</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480 }}>
                  {walkthrough.hookSubtitle}
                </Typography>
              </Stack>
            )}
            {currentStep.kind === 'quiz' && (
              <WalkthroughQuiz
                question={currentStep.question}
                questionLabel={walkthrough.quizQuestionLabel
                  .replace('{current}', String(currentStep.index + 1))
                  .replace('{total}', String(walkthrough.quizQuestions.length))}
                illustration={quizIllustrations[currentStep.index]}
                nextLabel={walkthrough.quizNextLabel}
                seeResultLabel={walkthrough.quizSeeResultLabel}
                isLast={currentStep.index === walkthrough.quizQuestions.length - 1}
                onAnswered={handleAnswered}
                onNext={handleAdvance}
              />
            )}
            {currentStep.kind === 'outro' && (
              <Stack spacing={2.5} sx={{ alignItems: 'center', textAlign: 'center' }}>
                <Typography variant="h4">{walkthrough.outroTitle}</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480 }}>
                  {scoreMessage}
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 480 }}>
                  {walkthrough.outroSubtitle}
                </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1.5}
                  useFlexGap
                  sx={{ pt: 1 }}
                >
                  <Button
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<LinkedInIcon />}
                  >
                    {walkthrough.outroLinkedinLabel}
                  </Button>
                  <Button variant="outlined" color="primary" size="large" onClick={handleClose}>
                    {walkthrough.outroBackLabel}
                  </Button>
                </Stack>
                <Button size="small" color="inherit" onClick={handleRestart}>
                  {walkthrough.outroRestartLabel}
                </Button>
              </Stack>
            )}
          </StepPanel>
        </ContentBox>
        {showBottomNav && (
          <Box sx={{ px: 3, pb: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Button
              onClick={handleBack}
              startIcon={<ArrowBackRoundedIcon />}
              disabled={!showBack}
              sx={{ visibility: showBack ? 'visible' : 'hidden' }}
            >
              {walkthrough.backLabel}
            </Button>
            <Button
              onClick={handleAdvance}
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardRoundedIcon />}
            >
              {currentStep.kind === 'hook' ? walkthrough.hookCta : walkthrough.continueLabel}
            </Button>
          </Box>
        )}
      </Dialog>
    </>
  );
}

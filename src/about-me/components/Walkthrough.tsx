import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion, AnimatePresence, animate } from 'framer-motion';
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
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useContent } from '../../content';
import { socialLinks } from '../../content/socialLinks';
import type {
  WalkthroughContent,
  WalkthroughStep,
  QuizQuestion,
} from '../../content/types';
import WalkthroughQuiz from './WalkthroughQuiz';
import { AnimatedBackground, ChapterCard, ConfettiBurst } from './WalkthroughEffects';
import type { WalkthroughPhase } from './WalkthroughEffects';

const MotionButton = motion.create(Button);

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

const quizImages = [
  '/quiz/salamander.png',
  '/quiz/tadpole.png',
  '/quiz/gecko.png',
  '/quiz/axolotl.png',
  '/quiz/cobra.png',
];

type FlatStep =
  | {
      kind: 'story';
      phase: 'professional' | 'private';
      title: string;
      body: string;
      icon: React.ReactNode;
      isFirstBeat: boolean;
    }
  | { kind: 'hook' }
  | { kind: 'quizIntro' }
  | { kind: 'quiz'; question: QuizQuestion; index: number }
  | { kind: 'outro' };

function flattenSteps(
  steps: WalkthroughStep[],
  phase: 'professional' | 'private',
  icons: React.ReactNode[],
): FlatStep[] {
  return steps.flatMap((step, i) =>
    step.body.map((beat, beatIndex) => ({
      kind: 'story' as const,
      phase,
      title: step.title,
      body: beat,
      icon: icons[i],
      isFirstBeat: beatIndex === 0,
    })),
  );
}

function getPhaseKey(step: FlatStep): WalkthroughPhase {
  if (step.kind === 'story') return step.phase;
  if (step.kind === 'quizIntro') return 'quiz';
  return step.kind;
}

function getPhaseLabel(step: FlatStep, content: WalkthroughContent): string {
  switch (getPhaseKey(step)) {
    case 'professional':
      return content.professionalEyebrow;
    case 'hook':
      return content.hookEyebrow;
    case 'private':
      return content.privateEyebrow;
    case 'quiz':
      return content.quizEyebrow;
    case 'outro':
      return content.outroEyebrow;
  }
}

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
  '&:hover': {
    backgroundColor: (theme.vars || theme).palette.secondary.main,
    color: (theme.vars || theme).palette.secondary.contrastText,
    borderColor: (theme.vars || theme).palette.secondary.main,
  },
  ...theme.applyStyles('dark', {
    color: (theme.vars || theme).palette.secondary.light,
  }),
}));

const MotionTriggerButton = motion.create(TriggerButton);

const TopBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  paddingBottom: theme.spacing(1.5),
}));

const ProgressTrack = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 6,
  borderRadius: 4,
  overflow: 'hidden',
  backgroundColor: (theme.vars || theme).palette.divider,
}));

const IconCircle = styled(Box)(({ theme }) => ({
  width: 72,
  height: 72,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: (theme.vars || theme).palette.primary.contrastText,
  backgroundColor: (theme.vars || theme).palette.primary.main,
  boxShadow: (theme.vars || theme).shadows[2],
  '& svg': { fontSize: '2.25rem' },
}));

const COUNTDOWN_RING_SIZE = 30;
const COUNTDOWN_RING_STROKE = 3;
const COUNTDOWN_RING_RADIUS = (COUNTDOWN_RING_SIZE - COUNTDOWN_RING_STROKE) / 2;
const COUNTDOWN_RING_CIRCUMFERENCE = 2 * Math.PI * COUNTDOWN_RING_RADIUS;

function CountdownRing({
  seconds,
  color,
  trackColor,
  onComplete,
}: {
  seconds: number;
  color: string;
  trackColor: string;
  onComplete: () => void;
}) {
  return (
    <motion.svg
      width={COUNTDOWN_RING_SIZE}
      height={COUNTDOWN_RING_SIZE}
      viewBox={`0 0 ${COUNTDOWN_RING_SIZE} ${COUNTDOWN_RING_SIZE}`}
      style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <circle
        cx={COUNTDOWN_RING_SIZE / 2}
        cy={COUNTDOWN_RING_SIZE / 2}
        r={COUNTDOWN_RING_RADIUS}
        fill="none"
        stroke={trackColor}
        strokeWidth={COUNTDOWN_RING_STROKE}
      />
      <motion.circle
        cx={COUNTDOWN_RING_SIZE / 2}
        cy={COUNTDOWN_RING_SIZE / 2}
        r={COUNTDOWN_RING_RADIUS}
        fill="none"
        stroke={color}
        strokeWidth={COUNTDOWN_RING_STROKE}
        strokeLinecap="round"
        strokeDasharray={COUNTDOWN_RING_CIRCUMFERENCE}
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: COUNTDOWN_RING_CIRCUMFERENCE }}
        transition={{ duration: seconds, ease: 'linear' }}
        onAnimationComplete={onComplete}
      />
    </motion.svg>
  );
}

const textContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function getAutoAdvanceSeconds(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.min(8, Math.max(4, words * 0.6));
}

function RevealBody({ text }: { text: string }) {
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  return (
    <Typography
      component={motion.div}
      variant="body1"
      color="text.secondary"
      variants={textContainerVariants}
      initial="hidden"
      animate="visible"
      sx={{ maxWidth: 520, fontSize: { xs: '1.05rem', sm: '1.2rem' } }}
    >
      {sentences.map((sentence, i) => (
        <motion.span
          key={i}
          variants={textItemVariants}
          style={{ display: 'inline-block', marginRight: '0.35em' }}
        >
          {sentence}
        </motion.span>
      ))}
    </Typography>
  );
}

interface StepTransitionCustom {
  direction: 'forward' | 'back';
  isTopicChange: boolean;
}

function isTopicBoundary(step: FlatStep): boolean {
  return step.kind !== 'story' || step.isFirstBeat;
}

const stepVariants = {
  enter: ({ direction, isTopicChange }: StepTransitionCustom) =>
    isTopicChange
      ? {
          opacity: 0,
          y: direction === 'forward' ? 28 : -28,
          x: 0,
          scale: 0.96,
        }
      : {
          opacity: 0,
          x: direction === 'forward' ? 60 : -60,
          y: 0,
          scale: 0.98,
        },
  center: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 260, damping: 26 },
  },
  exit: ({ direction, isTopicChange }: StepTransitionCustom) =>
    isTopicChange
      ? {
          opacity: 0,
          y: direction === 'forward' ? -28 : 28,
          x: 0,
          scale: 0.96,
          transition: { duration: 0.3 },
        }
      : {
          opacity: 0,
          x: direction === 'forward' ? -60 : 60,
          y: 0,
          scale: 0.98,
          transition: { duration: 0.2 },
        },
};

export default function Walkthrough() {
  const { walkthrough } = useContent();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [stepIndex, setStepIndex] = React.useState(0);
  const [direction, setDirection] = React.useState<'forward' | 'back'>('forward');
  const [score, setScore] = React.useState(0);
  const [displayScore, setDisplayScore] = React.useState(0);
  const [chapterLabel, setChapterLabel] = React.useState<string | null>(null);
  const lastPhaseLabelRef = React.useRef<string | null>(null);

  const flatSteps = React.useMemo<FlatStep[]>(
    () => [
      ...flattenSteps(walkthrough.professionalSteps, 'professional', professionalIcons),
      { kind: 'hook' as const },
      ...flattenSteps(walkthrough.privateSteps, 'private', privateIcons),
      { kind: 'quizIntro' as const },
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
  const phaseKey = getPhaseKey(currentStep);

  // The bar only "knows about" the professional steps at first, so it fills up
  // and looks complete by the plot twist. Once you're past that point it
  // recalibrates to the full journey, so it visibly stretches out again.
  const professionalStepCount = flatSteps.findIndex(
    (step) => !(step.kind === 'story' && step.phase === 'professional'),
  );
  const progress =
    stepIndex < professionalStepCount
      ? ((stepIndex + 1) / professionalStepCount) * 100
      : ((stepIndex + 1) / flatSteps.length) * 100;
  const progressColorKey: 'primary' | 'secondary' =
    phaseKey === 'professional' || phaseKey === 'hook' ? 'primary' : 'secondary';
  const progressColor =
    progressColorKey === 'primary'
      ? (theme.vars || theme).palette.primary.main
      : (theme.vars || theme).palette.secondary.main;

  React.useEffect(() => {
    if (!open) {
      lastPhaseLabelRef.current = null;
      return;
    }
    const label = getPhaseLabel(currentStep, walkthrough);
    if (label !== lastPhaseLabelRef.current) {
      lastPhaseLabelRef.current = label;
      setChapterLabel(label);
      const timer = setTimeout(() => setChapterLabel(null), 1200);
      return () => clearTimeout(timer);
    }
  }, [stepIndex, open, currentStep, walkthrough]);

  React.useEffect(() => {
    if (currentStep.kind !== 'outro') return undefined;
    const controls = animate(0, score, {
      duration: 1,
      onUpdate: (value) => setDisplayScore(Math.round(value)),
    });
    return () => controls.stop();
  }, [currentStep.kind, score]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setStepIndex(0);
    setDirection('forward');
    setScore(0);
    setDisplayScore(0);
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
    setDisplayScore(0);
  };

  const scoreMessage =
    score === walkthrough.quizQuestions.length
      ? walkthrough.quizResultGood
      : score >= 3
        ? walkthrough.quizResultOk
        : walkthrough.quizResultLow;

  const showBottomNav =
    currentStep.kind === 'story' ||
    currentStep.kind === 'hook' ||
    currentStep.kind === 'quizIntro';
  const showBack = showBottomNav && stepIndex > 0;

  return (
    <>
      <MotionTriggerButton
        onClick={handleOpen}
        variant="outlined"
        size="large"
        startIcon={<AutoAwesomeRoundedIcon />}
        animate={{
          boxShadow: ['0 0 0 0 rgba(220,186,63,0.35)', '0 0 0 10px rgba(220,186,63,0)'],
        }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        {walkthrough.triggerLabel}
      </MotionTriggerButton>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
        slotProps={{
          paper: {
            sx: {
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: 'background.default',
              backgroundImage: 'none',
            },
          },
        }}
      >
        <AnimatedBackground phase={phaseKey} />
        <ChapterCard label={chapterLabel} />
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Box sx={{ px: { xs: 2, sm: 4 }, pt: { xs: 2, sm: 3 } }}>
            <TopBar>
              <Typography variant="overline" color="text.secondary">
                {getPhaseLabel(currentStep, walkthrough)}
              </Typography>
              <MotionButton
                onClick={handleClose}
                size="small"
                color="inherit"
                startIcon={<CloseRoundedIcon />}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {walkthrough.exitLabel}
              </MotionButton>
            </TopBar>
            <ProgressTrack>
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  transformOrigin: 'left',
                  backgroundColor: progressColor,
                }}
                animate={{ scaleX: progress / 100 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              />
            </ProgressTrack>
          </Box>
          <Box
            sx={{
              position: 'relative',
              flex: 1,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              px: { xs: 2, sm: 4 },
              py: 3,
            }}
          >
            <AnimatePresence
              mode="wait"
              custom={{ direction, isTopicChange: isTopicBoundary(currentStep) }}
            >
              <motion.div
                key={stepIndex}
                custom={{ direction, isTopicChange: isTopicBoundary(currentStep) }}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{
                  width: '100%',
                  maxWidth: 560,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {currentStep.kind === 'story' && (
                  <Stack spacing={2.5} sx={{ alignItems: 'center', textAlign: 'center' }}>
                    <motion.div
                      initial={
                        currentStep.isFirstBeat ? { scale: 0, rotate: -20 } : false
                      }
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                    >
                      <IconCircle>{currentStep.icon}</IconCircle>
                    </motion.div>
                    <Typography variant="h4">{currentStep.title}</Typography>
                    <RevealBody text={currentStep.body} />
                  </Stack>
                )}
                {currentStep.kind === 'hook' && (
                  <Stack spacing={2.5} sx={{ alignItems: 'center', textAlign: 'center' }}>
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                    >
                      <IconCircle>
                        <AutoAwesomeRoundedIcon />
                      </IconCircle>
                    </motion.div>
                    <Typography variant="h3">{walkthrough.hookTitle}</Typography>
                    <RevealBody text={walkthrough.hookSubtitle} />
                  </Stack>
                )}
                {currentStep.kind === 'quizIntro' && (
                  <Stack spacing={2.5} sx={{ alignItems: 'center', textAlign: 'center' }}>
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                    >
                      <IconCircle>
                        <QuizRoundedIcon />
                      </IconCircle>
                    </motion.div>
                    <Typography variant="h3">{walkthrough.quizIntroTitle}</Typography>
                    <RevealBody text={walkthrough.quizIntroSubtitle} />
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ maxWidth: 380, fontStyle: 'italic', opacity: 0.8 }}
                    >
                      {walkthrough.quizImageDisclaimer}
                    </Typography>
                  </Stack>
                )}
                {currentStep.kind === 'quiz' && (
                  <WalkthroughQuiz
                    question={currentStep.question}
                    questionLabel={walkthrough.quizQuestionLabel
                      .replace('{current}', String(currentStep.index + 1))
                      .replace('{total}', String(walkthrough.quizQuestions.length))}
                    imageSrc={quizImages[currentStep.index]}
                    nextLabel={walkthrough.quizNextLabel}
                    seeResultLabel={walkthrough.quizSeeResultLabel}
                    isLast={currentStep.index === walkthrough.quizQuestions.length - 1}
                    onAnswered={handleAnswered}
                    onNext={handleAdvance}
                  />
                )}
                {currentStep.kind === 'outro' && (
                  <Stack spacing={2.5} sx={{ alignItems: 'center', textAlign: 'center' }}>
                    <Typography variant="h3">{walkthrough.outroTitle}</Typography>
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 14,
                        delay: 0.15,
                      }}
                    >
                      <Typography
                        variant="h2"
                        color="primary.main"
                        sx={{ fontWeight: 700 }}
                      >
                        {`${displayScore}/${walkthrough.quizQuestions.length}`}
                      </Typography>
                    </motion.div>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ maxWidth: 480 }}
                    >
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
                        sx={{
                          transition: 'transform 0.15s ease',
                          '&:hover': { transform: 'scale(1.04)' },
                          '&:active': { transform: 'scale(0.96)' },
                        }}
                      >
                        {walkthrough.outroLinkedinLabel}
                      </Button>
                      <MotionButton
                        variant="outlined"
                        color="primary"
                        size="large"
                        onClick={handleClose}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        {walkthrough.outroBackLabel}
                      </MotionButton>
                    </Stack>
                    <Button size="small" color="inherit" onClick={handleRestart}>
                      {walkthrough.outroRestartLabel}
                    </Button>
                  </Stack>
                )}
              </motion.div>
            </AnimatePresence>
            <ConfettiBurst
              active={currentStep.kind === 'outro'}
              intensity={score === walkthrough.quizQuestions.length ? 40 : 22}
            />
          </Box>
          {showBottomNav && (
            <Box
              sx={{
                px: { xs: 2, sm: 4 },
                pb: { xs: 2, sm: 3 },
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <MotionButton
                onClick={handleBack}
                startIcon={<ArrowBackRoundedIcon />}
                disabled={!showBack}
                sx={{ visibility: showBack ? 'visible' : 'hidden' }}
                whileHover={showBack ? { scale: 1.04 } : undefined}
                whileTap={showBack ? { scale: 0.96 } : undefined}
              >
                {walkthrough.backLabel}
              </MotionButton>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                {currentStep.kind === 'story' && (
                  <CountdownRing
                    key={stepIndex}
                    seconds={getAutoAdvanceSeconds(currentStep.body)}
                    color={progressColor}
                    trackColor={(theme.vars || theme).palette.divider}
                    onComplete={handleAdvance}
                  />
                )}
                <MotionButton
                  onClick={handleAdvance}
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardRoundedIcon />}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {currentStep.kind === 'hook'
                    ? walkthrough.hookCta
                    : currentStep.kind === 'quizIntro'
                      ? walkthrough.quizStartLabel
                      : walkthrough.continueLabel}
                </MotionButton>
              </Stack>
            </Box>
          )}
        </Box>
      </Dialog>
    </>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { olive, mustard } from '../../theme/palette';

export type WalkthroughPhase = 'professional' | 'hook' | 'private' | 'quiz' | 'outro';

const phaseBlobColors: Record<WalkthroughPhase, [string, string]> = {
  professional: [olive[300], olive[500]],
  hook: [olive[300], mustard[300]],
  private: [mustard[300], olive[400]],
  quiz: [mustard[400], olive[400]],
  outro: [mustard[300], olive[300]],
};

export function AnimatedBackground({ phase }: { phase: WalkthroughPhase }) {
  const reduceMotion = useReducedMotion();
  const [colorA, colorB] = phaseBlobColors[phase];

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          width: 420,
          height: 420,
          borderRadius: '50%',
          filter: 'blur(90px)',
          opacity: 0.35,
          top: '-12%',
          left: '-8%',
        }}
        animate={{
          background: colorA,
          x: reduceMotion ? 0 : [0, 60, 0],
          y: reduceMotion ? 0 : [0, 40, 0],
        }}
        transition={{
          background: { duration: 1.2, ease: 'easeInOut' },
          x: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 16, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: 360,
          height: 360,
          borderRadius: '50%',
          filter: 'blur(90px)',
          opacity: 0.3,
          bottom: '-10%',
          right: '-6%',
        }}
        animate={{
          background: colorB,
          x: reduceMotion ? 0 : [0, -50, 0],
          y: reduceMotion ? 0 : [0, -30, 0],
        }}
        transition={{
          background: { duration: 1.2, ease: 'easeInOut' },
          x: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
    </Box>
  );
}

export function ChapterCard({ label }: { label: string | null }) {
  return (
    <AnimatePresence>
      {label && (
        <Box
          component={motion.div}
          key={label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            backgroundColor: (theme) => (theme.vars || theme).palette.background.default,
          }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.08, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: 'uppercase',
                textAlign: 'center',
                fontSize: 'clamp(1.75rem, 6vw, 3rem)',
                color: 'text.primary',
                px: 2,
              }}
            >
              {label}
            </Typography>
          </motion.div>
        </Box>
      )}
    </AnimatePresence>
  );
}

const confettiColors = [olive[400], olive[500], mustard[400], mustard[300], olive[300]];

export function ConfettiBurst({
  active,
  intensity = 24,
}: {
  active: boolean;
  intensity?: number;
}) {
  const reduceMotion = useReducedMotion();
  const [pieces] = React.useState(() =>
    Array.from({ length: intensity }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2.2 + Math.random() * 1.4,
      rotate: Math.random() * 360 - 180,
      color: confettiColors[i % confettiColors.length],
      width: 6 + Math.random() * 5,
    })),
  );

  if (!active || reduceMotion) return null;

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 15,
      }}
    >
      {pieces.map((piece) => (
        <motion.span
          key={piece.id}
          initial={{ y: -24, opacity: 0, rotate: 0 }}
          animate={{ y: '110vh', opacity: [0, 1, 1, 0], rotate: piece.rotate }}
          transition={{ duration: piece.duration, delay: piece.delay, ease: 'easeIn' }}
          style={{
            position: 'absolute',
            top: 0,
            left: `${piece.left}%`,
            width: piece.width,
            height: piece.width * 1.6,
            borderRadius: 2,
            backgroundColor: piece.color,
          }}
        />
      ))}
    </Box>
  );
}

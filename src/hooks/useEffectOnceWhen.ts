import * as React from 'react';

/**
 * React useEffect() that waits for a condition to be met, then runs only once.
 *
 * You can use options.waitUntil to wait until a condition is true before calling the action once.
 * You can use options.resetWhen to allow a reset on the "once" if a condition becomes true.
 */
export function useEffectOnceWhen(
  condition: boolean | undefined | null,
  effect: React.EffectCallback
) {
  const [hasCompleted, setHasCompleted] = React.useState<boolean>(false);

  // Run any scheduled executions of the callback if we need to.
  React.useEffect(() => {
    // If we've already completed, do nothing.
    if (hasCompleted) {
      return;
    }

    // If we are not ready to return without doing anything until we are ready.
    if (!condition) {
      return;
    }

    // Note that the effect has been completed (we'll actually run it in a moment).
    setHasCompleted(true);

    // Run the actual effect,
    effect();
  }, [
    effect,
    condition,
    hasCompleted,
    setHasCompleted,
  ]); /* eslint-disable-line react-hooks/exhaustive-deps */
}

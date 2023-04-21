/** @noSelfInFile **/

declare interface WowTimer {
  Cancel: () => void;
  IsCancelled: () => boolean;
}

declare namespace C_Timer {
  /**
   * Creates and starts a ticker that calls callback every duration seconds for N iterations.
   * If iterations is not provided, the ticker will loop until cancelled.
   * @param duration - number of seconds between each callback
   * @param callback - function to be called every duration seconds
   * @param iterations - number of times the callback should be called (optional)
   * @return Ticker
   * @see https://www.townlong-yak.com/framexml/live/C_TimerAugment.lua
   */
  function NewTicker(
    duration: number,
    callback: () => void,
    iterations?: number
  ): WowTimer;

  /**
   * Creates and starts a cancellable timer that calls callback after duration seconds.
   * @param duration - number of seconds before the callback is called
   * @param callback - function to be called after duration seconds
   * @return Ticker
   * @see https://www.townlong-yak.com/framexml/live/C_TimerAugment.lua
   */
  function After(duration: number, callback: () => void): WowTimer;
}

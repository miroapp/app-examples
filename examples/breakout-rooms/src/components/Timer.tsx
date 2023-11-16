"use client";

import * as React from "react";
import {
  Button,
  DropdownMenu,
  IconMinus,
  IconPlus,
  IconTimer,
} from "@mirohq/design-system";

// in seconds
const DEFAULT_TIME = 5 * 60;
// 1 minute
const DEFAULT_MIN_TIME = 1 * 60;
// 10 minutes
const DEFAULT_MAX_TIME = 10 * 60;
// 15 seconds
const DEFAULT_STEP = 15;

type Props = {
  defaultTime?: number;
  minTime?: number;
  maxTime?: number;
  step?: number;
  onSet: (time: number) => void;
};

export const Timer: React.FunctionComponent<Props> = ({
  defaultTime = DEFAULT_TIME,
  minTime = DEFAULT_MIN_TIME,
  maxTime = DEFAULT_MAX_TIME,
  step = DEFAULT_STEP,
  onSet,
}) => {
  const [time, setTime] = React.useState<number>(defaultTime);
  const [timeChanged, setTimeChanged] = React.useState<boolean>(false);

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  const handleAdd = () => {
    setTime((time) => (time <= maxTime ? time + step : time));
  };

  const handleDecrease = () => {
    setTime((time) => (time > minTime ? time - step : time));
  };

  const handleSetTime = () => {
    onSet(time);
    setTimeChanged(true);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <button
            className="button button-secondary button-medium"
            type="button"
          >
            <IconTimer />
            {timeChanged ? time : "Set timer"}
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <div className="timer-container">
            <div className="timer-control">
              <Button
                variant="solid-prominent"
                size="small"
                rounded
                disabled={time <= minTime}
                onClick={() => handleDecrease()}
              >
                <IconMinus />
              </Button>

              <div className="timer-display">
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}
              </div>

              <Button
                variant="solid-prominent"
                size="small"
                rounded
                disabled={time >= maxTime}
                onClick={() => handleAdd()}
              >
                <IconPlus />
              </Button>
            </div>
            <button
              className="button button-primary button-small"
              type="button"
              onClick={() => handleSetTime()}
            >
              Set
            </button>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu>
    </>
  );
};

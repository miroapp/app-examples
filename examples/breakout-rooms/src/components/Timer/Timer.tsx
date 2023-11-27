"use client";

import * as React from "react";
import {
  Button,
  DropdownMenu,
  IconMinus,
  IconPlus,
  IconTimer,
} from "@mirohq/design-system";
import { convertTime, formatDisplayTime, formatTime } from "../../utils";

import "./Timer.css";

/**
 * 5 mins
 */
export const DEFAULT_TIME = convertTime(5, "milliseconds", "minutes");
/**
 * 1 min
 */
export const DEFAULT_MIN_TIME = convertTime(1, "milliseconds", "minutes");
/**
 * 10 mins
 */
export const DEFAULT_MAX_TIME = convertTime(10, "milliseconds", "minutes");
/**
 * 15 seconds
 */
export const DEFAULT_STEP = convertTime(15, "milliseconds", "seconds");

type Props = {
  /**
   * Default time in milliseconds
   */
  defaultTime?: number;
  /**
   * Min time in milliseconds
   */
  minTime?: number;
  /**
   * Max time in milliseconds
   */
  maxTime?: number;
  /**
   * Inc/Dec step in milliseconds
   */
  step?: number;
  /**
   * Set chosen time in milliseconds
   */
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
          <Button variant="outline-prominent" rounded>
            <Button.IconSlot>
              <IconTimer />
            </Button.IconSlot>
            <Button.Label>
              {timeChanged ? formatTime(time) : "Set timer"}
            </Button.Label>
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <div className="timer-container">
            <div className="timer-control">
              <Button
                variant="outline-subtle"
                size="small"
                rounded
                disabled={time <= minTime}
                onClick={() => handleDecrease()}
              >
                <IconMinus />
              </Button>

              <div className="timer-display">{formatDisplayTime(time)}</div>

              <Button
                variant="outline-subtle"
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

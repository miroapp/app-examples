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

type Props = {
  defaultTime?: number;
  maxTime?: number;
  onSet: (time: number) => void;
};

export const Timer: React.FunctionComponent<Props> = ({
  defaultTime = DEFAULT_TIME,
  maxTime = Infinity,
  onSet,
}) => {
  const [time, setTime] = React.useState<number>(defaultTime);
  const [timeChanged, setTimeChanged] = React.useState<boolean>(false);

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  const handleAdd = () => {
    setTime((time) => (time <= maxTime ? time + 15 : time));
  };

  const handleDecrease = () => {
    setTime((time) => (time > 0 ? time - 15 : time));
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
          <div className="timer-display">
            <div className="timer-control">
              <Button
                variant="solid-prominent"
                size="small"
                rounded
                onClick={() => handleDecrease()}
              >
                <IconMinus />
              </Button>
              <div>
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}
              </div>

              <Button
                variant="solid-prominent"
                size="small"
                rounded
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

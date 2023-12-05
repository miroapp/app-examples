import { OnlineUserInfo } from "@mirohq/websdk-types";
import { TimeUnit } from "./types";

export function generateUniqueId(): string {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000);
  return `${timestamp}${random}`;
}

export const isUser = (data: unknown): data is OnlineUserInfo =>
  // @ts-expect-error check whether it's a user
  data.id && data.name;

const timeFactors: Record<TimeUnit, number> = {
  milliseconds: 1,
  seconds: 1000,
  minutes: 60 * 1000,
  hours: 60 * 60 * 1000,
  days: 24 * 60 * 60 * 1000,
};

export const convertTime = (
  time: number,
  to: TimeUnit,
  from: TimeUnit = "milliseconds",
): number => {
  const valueInMilliseconds = time * timeFactors[from];
  const convertedValue = valueInMilliseconds / timeFactors[to];

  return convertedValue;
};

export const formatTime = (
  value: number,
  unit: TimeUnit = "milliseconds",
): string => {
  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  let formattedValue = value;
  let formattedUnit = unit;

  const seconds = convertTime(value, "seconds", unit);

  // Convert to the next higher unit
  if (seconds >= 60) {
    formattedValue = seconds / 60;
    formattedUnit = "minutes";
  }
  if (formattedValue >= 60) {
    formattedValue = formattedValue / 60;
    formattedUnit = "hours";
  }
  if (formattedValue >= 24) {
    formattedValue = formattedValue / 24;
    formattedUnit = "days";
  }

  return formatter.format(formattedValue, formattedUnit);
};

export const formatDisplayTime = (
  time: number,
  unit: TimeUnit = "milliseconds",
): string => {
  const timestamp = convertTime(time, "seconds", unit);

  const minutes = Math.round(timestamp / 60);
  const seconds = Math.round(timestamp % 60);

  return [minutes, seconds]
    .map((unit) => unit.toString().padStart(2, "0"))
    .join(":");
};

export const initials = (name: string) =>
  name
    .trim()
    .split(" ")
    .splice(0, 2)
    .map((n) => n[0])
    .join("");

"use client";

import React from "react";
import { Radio } from "@heroui/react";
import { Icon } from "@iconify/react";
import { cn } from "@heroui/react";

interface RatingRadioItemProps {
  value: string;
}

const RatingRadioItem = ({ value }: RatingRadioItemProps) => {
  return (
    <Radio
      value={value}
      classNames={{
        base: "items-center",
        wrapper: "hidden",
        label: "cursor-pointer",
      }}
    >
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            className={cn("text-default-400", {
              "text-warning": i < Number(value),
            })}
            icon="solar:star-bold"
            width={16}
          />
        ))}
      </div>
    </Radio>
  );
};

export default RatingRadioItem;
import { Button, Group, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";
import { BranchType } from "../../interfaces/graphql/graphql";
import { Conditional } from "../../components";

interface BranchSearchItemProps {
    branch: BranchType;
    onSelectBranch: (branch: BranchType) => void;
}

export const BranchSearchItem: React.FC<BranchSearchItemProps> = ({ branch, onSelectBranch }) => {
  const { ref, hovered } = useHover<HTMLButtonElement>();

  return (
    <Group justify="space-between" mb="md">
      <div>
        <Text>
            {branch.name}
        </Text>
        <Text size="sm" c="dimmed">
            <Conditional condition={Boolean(branch.branchLocation)}>
                &nbsp;{branch.branchLocation}
            </Conditional>
        </Text>
      </div>
      <Button
        ref={ref as React.Ref<HTMLButtonElement>}
        variant={hovered ? "outline" : "default"}
        onClick={() => onSelectBranch(branch)}
      >
        Select
      </Button>
    </Group>
  );
};

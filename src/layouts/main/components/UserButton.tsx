import { forwardRef } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { Avatar, Group, Text, UnstyledButton } from "@mantine/core";
import { UserButtonProps } from "../interfaces";
import { Conditional } from "../../../components";
import classes from "../css/index.module.css"

export const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      className={classes.userButton}
    >
      <Group gap="xs">
        <Avatar src={image} radius="xl" size="md" />

        <div style={{ flex: 1 }}>
          <Conditional condition={Boolean(name)}>
            <Text size="sm" fw={500}>
              {name}
            </Text>
          </Conditional>

          <Conditional condition={Boolean(email)}>
            <Text c="dimmed" size="xs">
              {email}
            </Text>
          </Conditional>
        </div>

        {icon || <IconChevronDown size={16} />}
      </Group>
    </UnstyledButton>
  )
);

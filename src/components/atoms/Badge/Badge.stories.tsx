import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
    title: "Atoms/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
        backgrounds: { default: "dark" },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NeonBlue: Story = {
    args: { variant: "neon", children: "System Online" },
};
export const NeonPink: Story = {
    args: { variant: "pink", children: "Error 404" },
};
export const NeonGreen: Story = {
    args: { variant: "green", children: "Access Granted" },
};
export const Outline: Story = {
    args: { variant: "outline", children: "Outline" },
};
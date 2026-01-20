import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta = {
    title: "Atoms/Textarea",
    component: Textarea,
    parameters: {
        layout: "centered",
        backgrounds: { default: "dark" },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { placeholder: "Enter system logs here..." },
};
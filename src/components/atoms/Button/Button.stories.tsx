import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";


const meta = {
    title: "Atoms/Button",
    component: Button,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "dark"
        }
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["neon", "solid", "ghost", "hacker"],
        },
        size: {
            control: { type: "radio" },
            options: ["sm", "md", "lg", "icon"],
        },
    },

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neon: Story = {
    args: {
        variant: "neon",
        children: "System Start"
    },
};

export const SolidPink: Story = {
    args: {
        variant: "solid",
        children: "Buy Now"
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "Cancel"
    },
};

export const HackerMode: Story = {
    args: {
        variant: "hacker",
        children: "Execute_Hack.exe"
    },
}

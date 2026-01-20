import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";


const meta = {
    title: "Atoms/Input",
    component: Input,
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
            options: ["default", "neon", "error"],
        },
        disabled: { control: "boolean" },
    },

} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultNeon: Story = {
    args: {
        placeholder: "Enter System ID",
        variant: "neon",

    },
};

export const WithIcon: Story = {
    args: {
        placeholder: "Search Protocol",
        variant: "neon",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                className="w-4 h-4">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21-4.3-4.3" />

            </svg>
        )
    }
}

export const ErrorState: Story = {
    args: {
        variant: "error",
        placeholder: "Invalid Credentials",
        value: "ACCESS_DENIED"
    },
}
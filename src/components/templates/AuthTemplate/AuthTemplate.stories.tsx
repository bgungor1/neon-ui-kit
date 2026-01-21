import type { Meta, StoryObj } from "@storybook/react";
import { AuthTemplate } from "./AuthTemplate";
import { LoginForm } from "../../organisms/LoginForm/LoginForm";

const meta = {
    title: "Templates/AuthTemplate",
    component: AuthTemplate,
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AuthTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLoginForm: Story = {
    args: {
        children: <LoginForm />,
    },
};
import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./Card";
import { Button } from "../../atoms/Button/Button"; // Buton importuna dikkat
import { Badge } from "../../atoms/Badge/Badge";   // Badge importuna dikkat

const meta = {
    title: "Molecules/Card",
    component: Card,
    parameters: {
        layout: "centered",
        backgrounds: { default: "dark" },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Storybook içinde bileşenleri birleştiriyoruz (Kompozisyon)
export const SystemStatus: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>Mainframe Unit 01</CardTitle>
                    <Badge variant="green">Online</Badge>
                </div>
            </CardHeader>
            <CardContent>
                <p>CPU Temperature: 45°C</p>
                <p>Memory Usage: 12%</p>
                <p className="mt-2 text-xs text-gray-600">Last scan: 2 mins ago</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm">Logs</Button>
                <Button variant="neon" size="sm">Reboot</Button>
            </CardFooter>
        </Card>
    ),
};
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../molecules/Card/Card";
import { Input } from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button/Button";

export const LoginForm = () => {
    return (
        <Card className="w-[400px] border-neon-blue/50 shadow-[0_0_50px_#00f3ff10]">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">SYSTEM LOGIN</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <label className="text-xs text-neon-blue font-mono">USER_ID</label>
                    <Input placeholder="Enter ID..." variant="neon" />
                </div>

                <div className="space-y-2">
                    <label className="text-xs text-neon-blue font-mono">PASSWORD</label>
                    <Input type="password" placeholder="******" variant="neon" />
                </div>
            </CardContent>

            <CardFooter>
                <Button className="w-full" variant="neon" size="lg">
                    AUTHENTICATE
                </Button>
            </CardFooter>
        </Card>
    );
};
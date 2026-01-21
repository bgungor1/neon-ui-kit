import React from "react";

interface AuthTemplateProps {
    children: React.ReactNode;
}

export const AuthTemplate = ({ children }: AuthTemplateProps) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
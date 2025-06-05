import React from "react";
import {
    BotMessageSquare,
    Fingerprint,
    ShieldHalf,
    BatteryCharging,
    PlugZap,
    GlobeLock,
} from "lucide-react";
const FeatureCard = [
    {
        icon: <BotMessageSquare />,
        text: "Drag-and-Drop Interface",
        descirption:
            "Easily design and arrange your VR environments with a user-friendly drag-and-Drop interface.",
    },
    {
        icon: <Fingerprint />,
        text: "Multi-Platform Compatibility",
        descirption:
            "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
    },
    {
        icon:<ShieldHalf/>,
        text:"Built-in Templates",
        descirption:"Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments."
    },
    {
        icon:<BatteryCharging/>,
        text:"Real-Time Preview",
        descirption: "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
    },
    {
        icon:<PlugZap/>,
        text:"Collaboration Tools",
        descirption: "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing."
    },
    {
        icon:<GlobeLock/>,
        text:"Analytics Dashboard",
        descirption:"Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard."
    }
];
export default FeatureCard;

import { FC, useState, useEffect } from "react";

function useDeviceType() {
    const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "laptop">("laptop");

    const updateDeviceType = () => {
        const width = window.innerWidth;
        if (width < 768) {
            setDeviceType("mobile");
        } else if (width >= 768 && width < 1024) {
            setDeviceType("tablet");
        } else {
            setDeviceType("laptop");
        }
    };

    useEffect(() => {
        updateDeviceType();
        window.addEventListener("resize", updateDeviceType);
        return () => window.removeEventListener("resize", updateDeviceType);
    }, []);

    return deviceType;
};

export default useDeviceType;
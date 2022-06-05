import React, { useEffect, useState } from "react";
import { Window, View, Text } from "react-bond";

export function App() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return <Window title="Desktop clock" width={283} height={128} resizable={false}>
        <View style={{ flexGrow: 1, overflow: "hidden", backgroundColor: "#222", justifyContent: "center" }}>
            <Text style={{ color: "#888", fontSize: 64, textAlign: "center" }}>
                {`${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`}
            </Text>
        </View>
    </Window>;
}

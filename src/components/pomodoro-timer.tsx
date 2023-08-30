import React from "react";
import { useInterval } from "../hooks/use-intervals";
import { secondsToMinutes } from "../utils/seconds-to-minutes";

interface Props {
    defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
    const[mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);

    useInterval(() => {
        setMainTime(mainTime - 1);
    }, 1000)

    return <div>Olá mundo {secondsToMinutes(mainTime)}</div>
}
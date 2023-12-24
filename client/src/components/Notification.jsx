import React, { useContext } from "react";
import { Button } from "@material-ui/core";

import { SocketContext } from "../SocketContext";

const Notification = () => {
	const { answerCall, call, callAccepted } = useContext(SocketContext);
	return (
		<>
			{call.isReceivedCall && !callAccepted && (
				<div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px" }}>
					<h1>{call.name} is calling: </h1>
					<Button variant="contained" color="primary" style={{ height: 'fit-content'}} onClick={answerCall}>
						Answer
					</Button>
				</div>
			)}
		</>
	);
};

export default Notification;

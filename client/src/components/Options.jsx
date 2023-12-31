import React, { useContext, useState } from "react";

import {
	Button,
	TextField,
	Grid,
	Typography,
	Container,
	Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CopyToClipBoard from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@material-ui/icons";

import { SocketContext } from "../SocketContext";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
	},
	gridContainer: {
		width: "100%",
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
		},
	},
    gridItem: {
        padding: "0 15px",
    },
	container: {
		width: "575px",
		margin: "35px 0",
		padding: 0,
		[theme.breakpoints.down("xs")]: {
			width: "80%",
		},
	},
	margin: {
		marginTop: 20,
	},
	padding: {
		padding: 20,
	},
	paper: {
		padding: "10px 20px",
		border: "2px solid black",
	},
}));

const Options = ({ children }) => {
	const { me, callAccepted, callEnded, name, setName, leaveCall, callUser } =
		useContext(SocketContext);
	const [idToCall, setIdToCall] = useState("");
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<Paper elevation={10} className={classes.paper}>
				<form className={classes.form} noValidate autoComplete="off">
					<Grid container>
						<Grid item xs={12} md={6} className={classes.gridItem}>
							<Typography gutterBottom variant="h6">
								Account Info
							</Typography>
							<TextField
								label="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								fullWidth
							/>
							<CopyToClipBoard text={me} className={classes.margin}>
								<Button
									variant="contained"
									color="primary"
									fullWidth
									startIcon={<Assignment fontSize="large" />}
								>
									Copy Your ID
								</Button>
							</CopyToClipBoard>
						</Grid>
						<Grid item xs={12} md={6} className={classes.gridItem}>
							<Typography gutterBottom variant="h6">
								Make a call
							</Typography>
							<TextField
								label="ID to call"
								value={idToCall}
								onChange={(e) => setIdToCall(e.target.value)}
								fullWidth
							/>
							{callAccepted && !callEnded ? (
								<Button
									variant="contained"
									fullWidth
									color="secondary"
									startIcon={<PhoneDisabled fontSize="large" />}
									onClick={leaveCall}
									className={classes.margin}
								>
									Hang up
								</Button>
							) : (
								<Button
									variant="contained"
									fullWidth
									color="primary"
									startIcon={<Phone fontSize="large" />}
									onClick={() => callUser(idToCall)}
									className={classes.margin}
								>
									Call
								</Button>
							)}
						</Grid>
					</Grid>
				</form>
				{children}
			</Paper>
		</Container>
	);
};

export default Options;

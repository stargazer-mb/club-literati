import { Divider, Typography } from "@material-ui/core";
import React from "react";

function Registration() {
  return (
    <React.Fragment>
      <Typography>Registrations (Image/Poster)</Typography>
      <Divider />
      <Typography>Time left for early bird registrations (Msg)</Typography>
      <Divider />
      <Typography>Timer DYS:HRS:MIN:SECS</Typography>
      <Divider />
      <Typography>
        (updated with respect to the registration timeline of the event)
      </Typography>
      <Divider />
      <Typography>Buttons -{">"} Registration links</Typography>
    </React.Fragment>
  );
}

export default Registration;

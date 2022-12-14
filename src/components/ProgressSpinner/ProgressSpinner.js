import { CircularProgress, Typography } from "@material-ui/core";

const ProgressSpinner = () => (
  <div className="ProgressSpinner">
    <CircularProgress size={80} />
    <Typography variant="h5">Loading...</Typography>
  </div>
);

export default ProgressSpinner;

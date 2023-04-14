import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Title } from "@material-ui/icons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

export default function BasicModal({
  course,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{course.title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            {course.title}
          </Typography>

          {course.courseID && (
            <Typography variant="body1">
              <strong>Course ID:</strong> {course.courseID}
            </Typography>
          )}

          {course.description && (
            <Typography variant="body1">
              <strong>Description:</strong> {course.description}
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}

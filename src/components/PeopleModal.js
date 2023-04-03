import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
  username,
  name,
  tagline,
  title,
  interestArea,
  office,
  website,
  phone,
  email,
  twitter,
  facebook,
  imagePath,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={imagePath}
            style={{ marginBottom: "1rem", maxWidth: "100%" }}
          />
          <Button onClick={handleClose}>
            <Typography variant="h6" component="h2">
              {name}
            </Typography>
          </Button>

          {tagline && (
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              {tagline}
            </Typography>
          )}

          {title && (
            <Typography variant="body1">
              <strong>Title:</strong> {title}
            </Typography>
          )}

          {interestArea && (
            <Typography variant="body1">
              <strong>Interest area:</strong> {interestArea}
            </Typography>
          )}

          {office && (
            <Typography variant="body1">
              <strong>Office:</strong> {office}
            </Typography>
          )}

          {phone && (
            <Typography variant="body1">
              <strong>Phone:</strong> {phone}
            </Typography>
          )}

          {email && (
            <Typography variant="body1">
              <strong>Email:</strong> {email}
            </Typography>
          )}

          {website && (
            <Typography variant="body1">
              <strong>Website:</strong>{" "}
              <a href={website} target="_blank">
                {website}
              </a>
            </Typography>
          )}

          {twitter && (
            <Typography variant="body1">
              <strong>Twitter:</strong>{" "}
              <a href={`https://twitter.com/${twitter}`} target="_blank">
                {`@${twitter}`}
              </a>
            </Typography>
          )}

          {facebook && (
            <Typography variant="body1">
              <strong>Facebook:</strong>{" "}
              <a href={`https://www.facebook.com/${facebook}`} target="_blank">
                {facebook}
              </a>
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}

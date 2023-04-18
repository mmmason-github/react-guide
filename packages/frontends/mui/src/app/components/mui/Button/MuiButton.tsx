import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from "@mui/material";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import Styles from "./MuiButton.module.scss";

function MuiButton() {
  const [formats, setFormats] = useState<string[]>([]);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
  };

  const [formatsExclusive, setFormatsExclusive] = useState<string[] | null>(
    null
  );
  const handleFormatExclusiveChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormatsExclusive: string[] | null
  ) => {
    setFormatsExclusive(updatedFormatsExclusive);
  };

  return (
    <div className={Styles.root}>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">contained</Button>
          <Button variant="outlined">outlined</Button>
          <Button href="http://google.com" variant="text">
            text
          </Button>
        </Stack>
        <Typography>CONTAINED - VARIANT</Typography>
        <Stack direction="row" spacing={2}>
          <Button disabled color="error" variant="contained">
            Disabled
          </Button>
          <Button color="error" variant="contained">
            error
          </Button>
          <Button color="info" variant="contained">
            info
          </Button>
          <Button color="inherit" variant="contained">
            inherit
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button color="primary" variant="contained">
            primary
          </Button>
          <Button color="secondary" variant="contained">
            secondary
          </Button>
          <Button color="success" variant="contained">
            success
          </Button>
          <Button color="warning" variant="contained">
            warning
          </Button>
        </Stack>
        <Typography>OUTLINED - VARIANT</Typography>
        <Stack direction="row" spacing={2}>
          <Button disabled color="error" variant="outlined">
            Disabled
          </Button>
          <Button color="error" variant="outlined">
            error
          </Button>
          <Button color="info" variant="outlined">
            info
          </Button>
          <Button color="inherit" variant="outlined">
            inherit
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button color="primary" variant="outlined">
            primary
          </Button>
          <Button color="secondary" variant="outlined">
            secondary
          </Button>
          <Button color="success" variant="outlined">
            success
          </Button>
          <Button color="warning" variant="outlined">
            warning
          </Button>
        </Stack>
        <Typography>TEXT - VARIANT</Typography>
        <Stack direction="row" spacing={2}>
          <Button disabled color="error" variant="text">
            Disabled
          </Button>
          <Button color="error" variant="text">
            error
          </Button>
          <Button color="info" variant="text">
            info
          </Button>
          <Button color="inherit" variant="text">
            inherit
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button color="primary" variant="text">
            primary
          </Button>
          <Button color="secondary" variant="text">
            secondary
          </Button>
          <Button color="success" variant="text">
            success
          </Button>
          <Button color="warning" variant="text">
            warning
          </Button>
        </Stack>
        <Typography>SIZE</Typography>
        <Stack direction="row" display="block" spacing={2}>
          <Button color="primary" size="small" variant="outlined">
            small
          </Button>
          <Button color="primary" size="medium" variant="outlined">
            medium
          </Button>
          <Button color="primary" size="large" variant="outlined">
            large
          </Button>
        </Stack>
        <Typography>Icons</Typography>
        <Stack direction="row" display="block" spacing={2}>
          <Button disableElevation endIcon={<SendIcon />} variant="contained" />
          <Button disableRipple endIcon={<SendIcon />} variant="contained" />
          <IconButton aria-label="send" color="success" size="small">
            <SendIcon />
          </IconButton>
        </Stack>
        <Typography>Button Group</Typography>
        <Stack direction="row">
          <ButtonGroup
            aria-label="alignment button group"
            orientation="vertical"
            size="large"
            variant="contained">
            <Button>left</Button>
            <Button>center</Button>
            <Button>right</Button>
          </ButtonGroup>
        </Stack>
        <Typography>Toggle Button</Typography>
        <Stack direction="row">
          <ToggleButtonGroup
            aria-label="text formatting"
            color="success"
            value={formats}
            onChange={handleFormatChange}>
            <ToggleButton aria-label="text bold" value="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton aria-label="text italic" value="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton aria-label="text underline" value="underline">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Typography>Toggle Button - Exclusive</Typography>
        <Stack direction="row">
          <ToggleButtonGroup
            exclusive
            aria-label="text formatting"
            color="success"
            value={formatsExclusive}
            onChange={handleFormatExclusiveChange}>
            <ToggleButton aria-label="text bold" value="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton aria-label="text italic" value="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton aria-label="text underline" value="underline">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </div>
  );
}

export default MuiButton;

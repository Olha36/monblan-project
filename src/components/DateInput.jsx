import React, { useState, useEffect } from "react";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

export default function ClearableProp() {
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [cleared]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <DemoItem>
          <DesktopDatePicker
            sx={{ width: 260 }}
            slotProps={{
              field: {
                clearable: true,
                placeholder: "from",
                onClear: () => setCleared(true),
              },
            }}
          />
        </DemoItem>

        {cleared && (
          <Alert
            sx={{ position: "absolute", bottom: 0, right: 0 }}
            severity="success"
          >
            Field cleared!
          </Alert>
        )}
      </Box>
    </LocalizationProvider>
  );
}

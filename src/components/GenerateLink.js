import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Tooltip } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';

function GenerateLinkScreen() {
  const [copied, setCopied] = useState(false);

  const generateRandomLink = () => {
    // Implement logic to generate a unique link for the current video and user
    // For now, using a placeholder link
    return 'https://example.com/magic-link';
  };

  const handleCopyLink = () => {
    // Get the link text from the generated link box
    const linkText = document.getElementById('generated-link');

    // Copy the text to the clipboard
    if (linkText) {
      linkText.select();
      document.execCommand('copy');
      setCopied(true);

      // Reset copied state after a short delay
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
  };

  const generatedLink = generateRandomLink();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor="primary.main" // Change to your navbar color
    >
      <Box
        width="60%"
        p={4}
        borderRadius={20}
        boxShadow={4}
        bgcolor="background.paper"
        textAlign="center"
      >
        <Typography variant="h5" gutterBottom>
          Share the magic link with others to test screen your videos before you upload
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          borderRadius={10}
          boxShadow={2}
          bgcolor="white"
          p={2}
        >
          <input
            type="text"
            id="generated-link"
            value={generatedLink}
            readOnly
            style={{ flex: 1, border: 'none', outline: 'none', backgroundColor: 'transparent' }}
          />
          <Tooltip title={copied ? 'Copied!' : 'Copy link to clipboard'} arrow>
            <IconButton onClick={handleCopyLink}>
              <FileCopyIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}

export default GenerateLinkScreen;

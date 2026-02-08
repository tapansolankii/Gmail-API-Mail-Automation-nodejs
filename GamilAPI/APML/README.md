# Gmail API Project

This project provides scripts to interact with Gmail for various use cases, such as sending order emails, insurance notifications, and pickup status updates.

## Project Structure

- **index.js**: Main entry point or utility functions for Gmail API integration.
- **insurance.js**: Handles sending insurance-related emails.
- **OrderMail.js**: Sends order confirmation or related emails.
- **pickupstatusMail.js**: Sends pickup status updates via email.
- **package.json**: Project metadata and dependencies.

## Prerequisites

- Node.js (v14 or higher recommended)
- Gmail API credentials (OAuth2)

## Setup

1. Clone the repository or download the code.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your Gmail API credentials as required by your scripts.

## Usage

Each script can be run individually depending on your use case. For example:

```bash
node OrderMail.js
```

Modify the scripts as needed to fit your workflow and provide the necessary input data.

## License

This project is for educational and internal use. Please update the license as appropriate for your needs.

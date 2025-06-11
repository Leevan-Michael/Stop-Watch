# Stopwatch & Clock Application

## Overview
This web-based application combines a high-precision stopwatch and clock. The clock displays the current Indian Standard Time (IST) with millisecond accuracy, while the stopwatch measures elapsed time with start, stop, and reset functionality, also in milliseconds. Built with Flask, Python, and vanilla JavaScript, it offers a sleek, responsive interface for timing tasks and checking the time.

## Features
- **Clock**: Real-time IST display (HH:MM:SS.mmm), updated every 100ms.
- **Stopwatch**: Precise timing with millisecond updates (every 10ms), including start, stop, and reset controls.
- **Responsive Design**: Clean, modern UI with a centered layout, optimized for all devices.
- **Lightweight**: Uses vanilla JavaScript and minimal dependencies for broad browser compatibility.

## Project Structure
- `app.py`: Flask backend serving the app and providing IST time via API.
- `templates/index.html`: HTML frontend for the clock and stopwatch display.
- `static/css/styles.css`: CSS for styling and millisecond-readable formatting.
- `static/js/script.js`: JavaScript handling stopwatch logic and clock updates.
- `README.md`: This documentation file.

## Prerequisites
- Python 3.6 or higher
- Flask (install via `pip install flask`)

## Setup Instructions
1. Create a directory named `stopwatch_clock_project` and copy all project files into it.
2. Install Flask using pip:
   - Open a terminal and run: pip install flask
3. Start the Flask server:
   - Navigate to the project directory and run: python app.py
4. Open a web browser and visit `http://localhost:5000`.

## Usage
- **Clock**: View the current IST time, updated every 100ms with millisecond precision (e.g., 15:20:45.123).
- **Stopwatch**:
  - **Start**: Click to begin timing, updating milliseconds every 10ms.
  - **Stop**: Pause the timer to hold the current duration.
  - **Reset**: Clear the timer to `00:00:00.000`.
- Both displays use the format `HH:MM:SS.mmm` for consistency.

## Technical Details
- **Backend**: Flask serves the app and provides an API (`/time`) returning IST time with milliseconds using `datetime.now` and `pytz` for timezone accuracy.
- **Frontend**:
  - The clock fetches time every 100ms for real-time millisecond updates.
  - The stopwatch runs client-side, updating every 10ms for smooth, precise timing.
  - Styled with CSS for readability and a minimalistic, professional look.
- **Performance**: The 100ms clock update and 10ms stopwatch update intervals balance accuracy and efficiency.

## Tips
- Ensure Flask is running for the clock to fetch accurate time.
- If the stopwatch appears laggy, adjust the update interval in `script.js` (e.g., change 10ms to 50ms).
- For optimal performance, use a modern browser like Chrome, Firefox, or Edge.

## Troubleshooting
- **Clock not updating**: Verify the Flask server is running and accessible at `http://localhost:5000/time`.
- **Dependency errors**: Confirm Flask is installed (`pip show flask`) and Python 3.6+ is used.
- **UI issues**: Clear browser cache or try a different browser.

</div>
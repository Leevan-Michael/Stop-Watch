from flask import Flask, jsonify, render_template
from datetime import datetime
import pytz

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/time')
def get_time():
    ist = pytz.timezone('Asia/Kolkata')
    current_time = datetime.now(ist).strftime('%H:%M:%S.%f')[:-3]  # Include milliseconds, truncate to 3 digits
    return jsonify({'time': current_time})

if __name__ == '__main__':
    app.run(debug=True)
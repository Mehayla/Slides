""" Server for upstatement app"""

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def show_home():
    """ Landing and home page """
    return render_template('main.html')


if __name__ == "__main__":
    app.run(host = "0.0.0.0", debug=True)
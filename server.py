""" Server for upstatement app"""

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def show_home():
    """ Landing and home page """
    return render_template('main.html')
    # return carousel

# @app.route('/api/pictures')
# def get_pictures():
#     return jsonify([
#         {'image':'/static/images/IMG_6632.JPG','caption':'Phoebe Bridgers'},
#         {'image':'/static/images/IMG_6636.JPG', 'caption':'Phoebe Bridgers'},
#         {'image':'/static/images/IMG_6637.JPG', 'caption':'Phoebe Bridgers'}
#         ])


if __name__ == "__main__":
    app.run(host = "0.0.0.0", debug=True)
from flask import Flask,request
import scraper
from flask_cors import CORS

# Flask app
app = Flask("WizLearn")

# CORS
CORS(app)


# Temp api to query scrape results
@app.route("/query")
def gettemp():
    args = request.args.to_dict()


    return scraper.scrape(args["text"])

# Temp root query
@app.route("/")
def root():
    return "Hello world"



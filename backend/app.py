from flask import Flask

app = Flask("WizLearn")

@app.route("/")
def root():
    return "Hello world"



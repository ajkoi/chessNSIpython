from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/club")
def club():
    return render_template("le_club.html")


@app.route("/apprendre")
def apprendre():
    return render_template("termes_echec.html")

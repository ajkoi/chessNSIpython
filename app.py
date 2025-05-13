from flask import Flask, render_template, request

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


@app.route("/sinscrire", methods=["GET", "POST"])
def inscription():
    if request.method == "POST":
        # getting input with name = fname in HTML form
        first_name = request.form.get("fname")
        # getting input with name = lname in HTML form
        last_name = request.form.get("lname")
        return "Your name is " + first_name + last_name
    return render_template("form.html")

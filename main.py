from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_login import (
    LoginManager,
    UserMixin,
    login_user,
    logout_user,
    login_required,
    current_user,
)
from werkzeug.security import generate_password_hash, check_password_hash

# Initialize Flask app
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = "supersecretkey"

# Initialize database and login manager
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"


# User model
class Users(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(250), unique=True, nullable=False)
    password = db.Column(db.String(250), nullable=False)


# Create database
with app.app_context():
    db.create_all()


# Load user for Flask-Login
@login_manager.user_loader
def load_user(user_id):
    return Users.query.get(int(user_id))


# Home route
@app.route("/")
def home():
    return render_template("index.html")


@app.route("/club")
def club():
    return render_template("le_club.html")


@app.route("/learn")
def apprendre():
    return render_template("termes_echec.html")


# Register route
@app.route("/register", methods=["GET", "POST"])
def inscription():
    if request.method == "POST":
        username = request.form.get("username")
        print(username)
        password = request.form.get("password")

        if Users.query.filter_by(username=username).first():
            print(Users.query.filter_by(username=username).first().username)
            return f"{username} mm"  # render_template("sign_up.html", error="Username already taken!")
        print("AMAMMA")

        hashed_password = generate_password_hash(password, method="pbkdf2:sha256")

        new_user = Users(username=username, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        for i in Users.query.all():
            print(i, i.username, i.password)
        return "mamama"  # redirect(url_for("login"))

    return render_template("form.html", message="from inscription")


# Login route
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        user = Users.query.filter_by(username=username).first()
        print(username, password, user)

        if user and check_password_hash(user.password, password):
            login_user(user)
            return "hh"  # redirect(url_for("dashboard"))
        else:
            return "MAMAkk"  # render_template("login.html", error="Invalid username or password")

    return render_template("form2.html", message="from login")


# Protected dashboard route
@app.route("/dashboard")
@login_required
def dashboard():
    return f"{current_user.username} mama"  # render_template("dashboard.html", username=current_user.username)


# Logout route
@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("home"))


if __name__ == "__main__":
    app.run(debug=True)

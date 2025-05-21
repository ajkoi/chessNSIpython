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
    email = db.Column(db.String(250), unique=True, nullable=False)
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
        email = request.form.get("email")
        password = request.form.get("password")

        if Users.query.filter_by(username=username).first():
            print(Users.query.filter_by(username=username).first().username)
            return render_template("form.html", error="Username already taken!")

        hashed_password = generate_password_hash(password, method="pbkdf2:sha256")

        new_user = Users(username=username, email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        return redirect(url_for("login"))

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
            return redirect(url_for("dashboard"))
        else:
            return render_template(
                "form2.html", message="mot de passe ou identifiant incorrect"
            )  # render_template("login.html", error="Invalid username or password")

    return render_template("form2.html", message="")



# Protected dashboard route
@app.route("/profile", methods=["GET", "POST"])
@login_required
def dashboard():
    if request.method == "POST":
        username = request.form.get("username")
        tel = f'{str(request.form.get("tel"))[:2]} {str(request.form.get("tel"))[2:4]} {str(request.form.get("tel"))[4:6]} {str(request.form.get("tel"))[6:8]} {str(request.form.get("tel"))[8:]}'
        cb = f'{str(request.form.get("cb"))[:4]} {str(request.form.get("cb"))[4:8]} {str(request.form.get("cb"))[8:12]} {str(request.form.get("cb"))[12:]}'
        val = f'{int(request.form.get("val"))}•10^50,00 EUR'

        return redirect(url_for("paiement",cb=cb, tel=tel, val=val ))
        
    return render_template("profile.html", message="test")  # render_template("dashboard.html", username=current_user.username)

@app.route("/paiement/<cb>/<val>/<tel>")
@login_required
def paiement(cb, val, tel):
    return render_template("credit_nsi.html", tel=tel, cb=cb, val=val)

# Logout route
@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("home"))



if __name__ == "__main__":
    app.run(debug=True)

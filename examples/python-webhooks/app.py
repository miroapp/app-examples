from flask import Flask, session, request, json, Response
from miro_api import Miro
from miro_api.storage import Storage

from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

app.secret_key = b"very_random_secret"


class SessionStorage(Storage):
    session_key = "miro_state"

    def get(self):
        return session[self.session_key]

    def set(self, state):
        if not state:
            session.pop(self.session_key, None)
            return
        session[self.session_key] = state


miro = Miro(storage=SessionStorage())


def render_boards():
    boards = miro.api.get_all_boards()
    names = "<br/>".join([board.name for board in boards])
    return f"<p>List of boards in the team: {names}</p>"


@app.route("/", methods=["GET", "POST"])
def hello_world():
    if request.method == "GET":
        if miro.is_authorized:
            return render_boards()

        if code := request.args.get("code", ""):
            miro.exchange_code_for_access_token(code)
            return render_boards()

        return f"<a href='{miro.auth_url}'>Login to Miro</a>"
    if request.method == "POST":
        webhook_data = request.json
        formatted_webhook_data = json.dumps(webhook_data, indent=4)
        print(f"webhook event: {formatted_webhook_data}")
        return Response(
            json.dumps(webhook_data), status=200, mimetype="application/json"
        )

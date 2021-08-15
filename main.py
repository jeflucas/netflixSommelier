from logging import debug
from website import create_app
from node_modules import axios

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
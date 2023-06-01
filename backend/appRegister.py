from flask import request, jsonify, Flask
import mysql.connector
from flask_cors import cross_origin

app = Flask(__name__)

@app.router("/register", methods=["GET"])
def pos_register():
    bdRegister=mysql.connector.conect(
        host="localhost",
        user="root",
        password="system21711227",
        database="pactica"
    )
    curser= bdRegister.cursor()
    

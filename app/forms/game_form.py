from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, TextAreaField, IntegerField, SelectField, SubmitField
from wtforms.validators import DataRequired, NumberRange, Length
from flask_wtf.file import FileField, FileAllowed, FileRequired
from ..api.aws_helpers import ALLOWED_EXTENSIONS


class GameForm(FlaskForm):
    game_title = StringField('Game Title', validators=[DataRequired(), Length(max = 255)])
    price = DecimalField("Price", validators=[DataRequired(), NumberRange(min=0)], places=2)
    developer = StringField("Developer", validators=[DataRequired(), Length(max = 255)])
    publisher = StringField("Publisher", validators=[DataRequired(), Length(max = 255)])
    about_game = StringField("About Game", validators=[DataRequired(), Length(max = 400)])
    description = StringField("Description", validators=[Length(max = 3000)]) #description = StringField("Description", validators=[DataRequired(), Length(max = 3000)])
    img = FileField("Game Image", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    img2 = FileField("Game Image", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    img3 = FileField("Game Image", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    img4 = FileField("Game Image", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    img5 = FileField("Game Image", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    system_support = SelectField("System Supported", validators=[DataRequired()], choices=[('PS5', 'PS5'), ('Switch', 'Switch'), ('PC Master Race', 'PC Master Race')])
    submit = SubmitField("Submit")
